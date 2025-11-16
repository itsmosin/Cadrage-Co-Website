import rafflesLogo from "@/assets/raffles-logo.png";
import hyattLogo from "@/assets/hyatt-logo.png";
import fourSeasonsLogo from "@/assets/four-seasons-logo.png";
import redBullLogo from "@/assets/red-bull-logo.png";
import fairmontLogo from "@/assets/fairmont-logo.png";
import beautifulDestinationsLogo from "@/assets/beautiful-destinations-logo.png";
import sayajiLogo from "@/assets/sayaji-logo.png";

const BrandsCarousel = () => {
  const brands = [
    { name: "Hyatt", logo: hyattLogo },
    { name: "Red Bull", logo: redBullLogo },
    { name: "Fairmont", logo: fairmontLogo },
    { name: "Beautiful Destinations", logo: beautifulDestinationsLogo },
    { name: "Raffles", logo: rafflesLogo },
    { name: "Four Seasons", logo: fourSeasonsLogo },
    { name: "Sayaji", logo: sayajiLogo },
  ];

  return (
    <div className="mt-48 md:mt-60 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
      <p className="text-center text-xs md:text-sm font-medium text-gray-700 mb-3 md:mb-2 tracking-widest uppercase font-poppins">
        BRANDS WE'VE WORKED WITH
      </p>
      
      {/* Logos in single horizontal line, centered */}
      <div className="w-full overflow-x-auto scrollbar-hide px-3 flex justify-center">
        <div className="flex flex-nowrap items-center gap-9 py-2" style={{ width: 'max-content' }}>
          {brands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 px-2 transition-transform duration-300 hover:scale-110">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-16 md:h-20 w-auto object-contain max-w-[165px] drop-shadow-lg rounded-lg bg-white"
                style={{ filter: 'grayscale(0%)', opacity: 1 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsCarousel;