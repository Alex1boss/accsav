import express, { type Request, Response, NextFunction } from "express";
import serverless from "serverless-http";
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "../../shared/schema";
import { insertWaitlistSchema } from "../../shared/schema";
import { fromZodError } from "zod-validation-error";

// Configure Neon for serverless
neonConfig.webSocketConstructor = ws;
neonConfig.pipelineConnect = false;

// Use Netlify environment variable
const databaseUrl = process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "NETLIFY_DATABASE_URL or DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

const pool = new Pool({ connectionString: databaseUrl });
const db = drizzle({ client: pool, schema });

// Storage interface for Netlify function
const netlifyStorage = {
  async createWaitlistEntry(data: { name: string; email: string }) {
    const [entry] = await db.insert(schema.waitlist).values(data).returning();
    return entry;
  },
  
  async getWaitlistByEmail(email: string) {
    const [entry] = await db.select().from(schema.waitlist).where(eq(schema.waitlist.email, email));
    return entry;
  },
  
  async getWaitlistCount() {
    const [result] = await db.select({ count: count() }).from(schema.waitlist);
    return result.count;
  },
  
  async getAllWaitlistEntries() {
    return await db.select().from(schema.waitlist).orderBy(desc(schema.waitlist.joinedAt));
  }
};

import { eq, count, desc } from 'drizzle-orm';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Log middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
    if (capturedJsonResponse) {
      logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
    }

    if (logLine.length > 80) {
      logLine = logLine.slice(0, 79) + "…";
    }

    console.log(logLine);
  });

  next();
});

// Waitlist endpoints
app.post("/api/waitlist", async (req, res) => {
  try {
    const validatedData = insertWaitlistSchema.parse(req.body);
    
    // Check if email already exists
    const existingEntry = await netlifyStorage.getWaitlistByEmail(validatedData.email);
    if (existingEntry) {
      return res.status(409).json({ 
        message: "This email is already on the waitlist!" 
      });
    }
    
    try {
      const newEntry = await netlifyStorage.createWaitlistEntry(validatedData);
      res.status(201).json({ 
        message: "Successfully joined the waitlist!",
        data: { id: newEntry.id, name: newEntry.name, email: newEntry.email }
      });
    } catch (dbError: any) {
      // Handle unique constraint violation (email already exists)
      if (dbError.code === '23505' || dbError.message?.includes('unique constraint')) {
        return res.status(409).json({ 
          message: "This email is already on the waitlist!" 
        });
      }
      throw dbError;
    }
  } catch (error: any) {
    if (error.name === "ZodError") {
      const validationError = fromZodError(error);
      return res.status(400).json({ 
        message: validationError.message 
      });
    }
    
    console.error("Waitlist signup error:", error);
    res.status(500).json({ 
      message: "An error occurred while joining the waitlist" 
    });
  }
});

app.get("/api/waitlist/count", async (req, res) => {
  try {
    const count = await netlifyStorage.getWaitlistCount();
    res.json({ count });
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    res.status(500).json({ 
      message: "An error occurred while getting the waitlist count" 
    });
  }
});

app.get("/api/waitlist", async (req, res) => {
  try {
    const entries = await netlifyStorage.getAllWaitlistEntries();
    res.json({ entries, count: entries.length });
  } catch (error) {
    console.error("Error getting waitlist entries:", error);
    res.status(500).json({ 
      message: "An error occurred while getting the waitlist entries" 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: 'netlify' 
  });
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Export the serverless function
export const handler = serverless(app);