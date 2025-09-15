import { useState, useEffect } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 30 days from now for demo
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl text-muted-foreground leading-relaxed"
        style={{ fontFamily: 'Poppins, sans-serif' }}
        data-testid="text-subheading"
      >
        Not a school. Not a university. A movement. Unlock your potential, master real-world skills, and build the future with us.
      </p>

      {/* Coming Soon */}
      <div className="mb-12">
        <div 
          className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 animate-pulse"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
            color: '#22d3ee'
          }}
          data-testid="text-coming-soon"
        >
          COMING SOON
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-4 mb-12" data-testid="countdown-timer">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 md:p-6 min-w-[80px] hover-elevate"
            style={{ boxShadow: '0 0 15px rgba(34, 211, 238, 0.1)' }}
          >
            <div 
              className="text-2xl md:text-4xl font-bold text-primary mb-1"
              style={{ fontFamily: 'Inter, monospace' }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              {String(item.value).padStart(2, '0')}
            </div>
            <div 
              className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}