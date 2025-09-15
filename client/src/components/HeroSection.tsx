import logoImage from '@assets/theinnovisionary logo_1757912355012.jpg';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
      {/* Logo/Title */}
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-6">
          <img 
            src={logoImage}
            alt="The Innovisionary World Logo"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain filter drop-shadow-lg"
            style={{ 
              filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.3))'
            }}
            data-testid="img-logo"
          />
        </div>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-br from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent"
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
            textShadow: '0 0 25px rgba(245, 158, 11, 0.6)',
            color: '#f59e0b',
            background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          data-testid="text-coming-soon"
        >
          COMING SOON
        </div>
      </div>
    </div>
  );
}