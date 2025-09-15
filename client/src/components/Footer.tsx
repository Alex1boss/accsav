export default function Footer() {
  return (
    <footer className="py-8 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <p 
          className="text-sm text-muted-foreground"
          style={{ fontFamily: 'Inter, sans-serif' }}
          data-testid="text-footer-copyright"
        >
          © 2025 The Innovisionary World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}