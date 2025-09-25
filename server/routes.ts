import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Waitlist endpoints
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "This email is already on the waitlist!" 
        });
      }
      
      try {
        const newEntry = await storage.createWaitlistEntry(validatedData);
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
      const count = await storage.getWaitlistCount();
      res.json({ count });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      res.status(500).json({ 
        message: "An error occurred while getting the waitlist count" 
      });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
