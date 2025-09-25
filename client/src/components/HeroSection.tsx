import logoImage from '@assets/theinnovisionary_logo-removebg-preview (1)_1757912910507.png';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-24 relative z-10">
      {/* Logo in top-left corner */}
      <div className="fixed top-4 left-4 z-50">
        <img 
          src={logoImage}
          alt="The Innovisionary World Logo"
          className="w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-lg hover-elevate cursor-pointer"
          style={{ 
            filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.4))'
          }}
          data-testid="img-logo"
          onClick={() => console.log('Logo clicked')}
        />
      </div>
      
      {/* Title */}
      <div className="mb-8">
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
        A New Era of Learning for Ages 13-25
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