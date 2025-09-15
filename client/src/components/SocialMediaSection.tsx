import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: '#', 
    color: 'hover:text-blue-400' 
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    url: '#', 
    color: 'hover:text-sky-400' 
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: '#', 
    color: 'hover:text-pink-400' 
  },
  { 
    name: 'YouTube', 
    icon: Youtube, 
    url: '#', 
    color: 'hover:text-red-400' 
  },
];

export default function SocialMediaSection() {
  const handleSocialClick = (platform: string) => {
    console.log(`Clicked ${platform} social link`);
    // TODO: Replace with actual social media URLs
  };

  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <h4 
          className="text-xl md:text-2xl font-semibold mb-8 text-foreground"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          data-testid="text-social-header"
        >
          Follow our journey. Be part of the first wave.
        </h4>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick(social.name)}
                className={`w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover-elevate transition-all duration-300 ${social.color}`}
                style={{ 
                  boxShadow: '0 0 10px rgba(245, 158, 11, 0.2)'
                }}
                data-testid={`button-social-${social.name.toLowerCase()}`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}