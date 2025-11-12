import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl py-32">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline font-extrabold leading-[1.1] mb-8 animate-fade-in opacity-0" 
          style={{ 
            animationDelay: '0.2s',
            letterSpacing: '-0.02em'
          }}
        >
          Framing Stories That Move the World.
        </h1>
        
        <p 
          className="text-lg md:text-xl lg:text-2xl font-subtext font-normal mb-16 text-foreground/70 animate-slide-up opacity-0 max-w-3xl mx-auto leading-relaxed" 
          style={{ animationDelay: '0.4s' }}
        >
          For brands that seek emotion, not just exposure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 animate-scale-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-deep-black text-white hover:bg-deep-black/90 px-10 h-12 rounded-lg group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base font-medium"
            asChild
          >
            <a href="https://calendly.com/business-cadrage" target="_blank" rel="noopener noreferrer">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-deep-black text-deep-black bg-transparent hover:bg-deep-black hover:text-white px-10 h-12 rounded-lg group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-base font-medium"
            asChild
          >
            <a href="https://docsend.com/v/935q6/cadrage" target="_blank" rel="noopener noreferrer">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
