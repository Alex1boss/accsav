import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import WaitlistForm from '@/components/WaitlistForm';
import AboutSection from '@/components/AboutSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Dark Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            console.log('Theme toggled to:', isDark ? 'dark' : 'light');
          }}
          className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover-elevate text-foreground hover:text-primary transition-colors"
          data-testid="button-theme-toggle"
          aria-label="Toggle theme"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path className="dark:hidden" fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            <path className="hidden dark:block" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
      </div>
      
      {/* Main Content */}
      <main>
        {/* Hero Section with Countdown */}
        <HeroSection />
        
        {/* Waitlist Form */}
        <WaitlistForm />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Social Media Links */}
        <SocialMediaSection />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}