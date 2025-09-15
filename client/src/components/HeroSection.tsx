export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
      {/* Logo/Title */}
      <div className="mb-8">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          data-testid="text-logo"
        >
          The Innovisionary World
        </h1>
      </div>

      {/* Main Tagline */}
      <h2 
        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        data-testid="text-tagline"
      >
        A New Era of Learning for Ages 13–20
      </h2>

      {/* Subheading */}
      <p 
        className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl text-muted-foreground leading-relaxed"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        data-testid="text-subheading"
      >
        Not a school. Not a university. A movement. Unlock your potential, master real-world skills, and build the future with us.
      </p>

      {/* Coming Soon */}
      <div className="mb-16">
        <div 
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 animate-pulse"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
            color: '#a855f7'
          }}
          data-testid="text-coming-soon"
        >
          COMING SOON
        </div>
      </div>
    </div>
  );
}