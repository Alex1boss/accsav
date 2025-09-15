export default function AboutSection() {
  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 
          className="text-3xl md:text-4xl font-bold mb-8 text-foreground"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          data-testid="text-about-header"
        >
          Why The Innovisionary World?
        </h3>
        
        <div className="bg-card/30 backdrop-blur-md border border-primary/20 rounded-lg p-8 md:p-12 hover-elevate">
          <p 
            className="text-lg md:text-xl text-foreground leading-relaxed mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-about-description"
          >
            We are reimagining education for the 21st century. A global space where teenagers don't just study — they innovate, collaborate, and build real-world impact.
          </p>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            data-testid="text-about-launch"
          >
            Launching soon, both online and offline.
          </p>
        </div>
      </div>
    </section>
  );
}