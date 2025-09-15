import ParticleBackground from '../ParticleBackground';

export default function ParticleBackgroundExample() {
  return (
    <div className="h-screen w-full relative bg-background">
      <ParticleBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-foreground text-xl">Particle Background Example</div>
      </div>
    </div>
  );
}