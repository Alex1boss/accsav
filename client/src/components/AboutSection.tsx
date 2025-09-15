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
        
        <div className="bg-card/30 backdrop-blur-md border border-primary/20 rounded-lg p-8 md:p-12 hover-elevate relative overflow-hidden"
          style={{ 
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.1)' 
          }}
        >
          {/* Geometric background elements inspired by logo */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-primary via-chart-1 to-chart-2 transform rotate-45 rounded-lg"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
            <div className="w-full h-full bg-gradient-to-tr from-chart-2 via-chart-3 to-primary transform -rotate-12 rounded-full"></div>
          </div>
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