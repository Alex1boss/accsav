import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both name and email fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Mock API call - store in localStorage for demo
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      const existingEmails = JSON.parse(localStorage.getItem('waitlist') || '[]');
      if (!existingEmails.some((entry: FormData) => entry.email === formData.email)) {
        existingEmails.push({ ...formData, joinedAt: new Date().toISOString() });
        localStorage.setItem('waitlist', JSON.stringify(existingEmails));
      }
      
      toast({
        title: "Welcome to the Movement! 🚀",
        description: "You're now on the waitlist. We'll notify you when we launch!",
        variant: "default"
      });
      
      setFormData({ name: '', email: '' });
      console.log('Waitlist signup successful:', formData);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mb-16">
      <div className="text-center mb-8">
        <p 
          className="text-lg text-muted-foreground mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="text-waitlist-intro"
        >
          Be among the first Innovisionaries. Join the waitlist today.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-waitlist">
        <Input
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary text-foreground placeholder-muted-foreground"
          data-testid="input-name"
        />
        
        <Input
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="bg-card/50 backdrop-blur-sm border-primary/20 focus:border-primary text-foreground placeholder-muted-foreground"
          data-testid="input-email"
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary via-chart-1 to-chart-2 hover:from-primary/90 hover:via-chart-1/90 hover:to-chart-2/90 text-white font-semibold py-3 text-lg transition-all duration-300"
          style={{ 
            boxShadow: isSubmitting ? 'none' : '0 0 20px rgba(245, 158, 11, 0.4)',
            fontFamily: 'Montserrat, sans-serif'
          }}
          data-testid="button-notify-me"
        >
          {isSubmitting ? 'Joining...' : 'Notify Me'}
        </Button>
      </form>
    </div>
  );
}