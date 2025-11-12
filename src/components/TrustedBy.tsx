import rafflesLogo from "@/assets/raffles-logo.jpeg";
import hyattLogo from "@/assets/hyatt-logo.png";
import fourSeasonsLogo from "@/assets/four-seasons-logo.png";
import redBullLogo from "@/assets/red-bull-logo.png";
import fairmontLogo from "@/assets/fairmont-logo.webp";
import beautifulDestinationsLogo from "@/assets/beautiful-destinations-logo.png";
import sayajiLogo from "@/assets/sayaji-logo.jpg";

const TrustedBy = () => {
  const clients = [
    { name: "Four Seasons", logo: fourSeasonsLogo },
    { name: "Raffles", logo: rafflesLogo },
    { name: "Hyatt", logo: hyattLogo },
    { name: "Red Bull", logo: redBullLogo },
    { name: "Fairmont", logo: fairmontLogo },
    { name: "Beautiful Destinations", logo: beautifulDestinationsLogo },
    { name: "Sayaji", logo: sayajiLogo },
  ];

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Divider Line */}
        <div className="w-full h-px bg-border mb-12" />
        
        <h2 className="text-center text-xs md:text-sm font-medium text-muted-foreground mb-14 tracking-[0.2em] uppercase">
          Brands We've Worked With
        </h2>
        
        {/* Logo Grid - Desktop: Scrolling, Mobile: 2x3 Grid */}
        <div className="hidden md:block relative">
          <div className="logo-scroll-container">
            <div className="logo-scroll-track">
              {/* First set of logos */}
              {clients.map((client, index) => (
                <div 
                  key={`first-${index}`}
                  className="logo-item"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-14 lg:h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div 
                  key={`second-${index}`}
                  className="logo-item"
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-14 lg:h-16 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Grid */}
        <div className="grid grid-cols-2 gap-8 md:hidden max-w-md mx-auto">
          {clients.slice(0, 6).map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
