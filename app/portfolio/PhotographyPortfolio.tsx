import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Portrait",
  "Landscape",
  "Architecture",
  "Culture",
  "Commercial",
  "Aerial",
  "Fashion",
];

const images = {
  Portrait: [
    {
      src: "/assets/images/potrait/potrait-1.jpg",
      alt: "Portrait 1",
      text: "Elegant portrait in natural light",
    },
    {
      src: "/assets/images/potrait/potrait-2.jpg",
      alt: "Portrait 2",
      text: "Candid moment captured in the city",
    },

    {
      src: "/assets/images/potrait/potrait-4.jpg",
      alt: "Portrait 4",
      text: "Expressive close-up in studio lighting",
    },
    {
      src: "/assets/images/potrait/potrait-5.jpg",
      alt: "Portrait 1",
      text: "Elegant portrait in natural light",
    },
    {
      src: "/assets/images/potrait/potrait-6.jpg",
      alt: "Portrait 2",
      text: "Candid moment captured in the city",
    },
    {
      src: "/assets/images/potrait/potrait-7.jpg",
      alt: "Portrait 3",
      text: "Another elegant portrait in natural light",
    },
  ],
  Landscape: [
    {
      src: "/assets/images/landscape/landscape-1.jpg",
      alt: "Sunrise landscape",
      text: "Breathtaking sunrise over misty hills",
    },
    {
      src: "/assets/images/landscape/landscape-3.jpg",
      alt: "Another landscape",
      text: "Stunning natural scenery",
    },
    {
      src: "/assets/images/landscape/landscape-4.jpg",
      alt: "Coastal landscape",
      text: "Dramatic cliffs meeting the ocean",
    },
    {
      src: "/assets/images/landscape/landscape-5.jpg",
      alt: "Mountain lake",
      text: "Serene mountain lake surrounded by trees",
    },
    {
      src: "/assets/images/landscape/landscape-2.jpg",
      alt: "Sunset over mountains",
      text: "Golden hour illuminating mountain peaks",
    },
    {
      src: "/assets/images/landscape/landscape-6.jpg",
      alt: "Desert landscape",
      text: "Vibrant colors of the desert landscape",
    },
    {
      src: "/assets/images/landscape/landscape-7.jpg",
      alt: "Waterfall",
      text: "Majestic waterfall in a lush forest",
    },
    {
      src: "/assets/images/landscape/landscape-8.jpg",
      alt: "Cityscape",
      text: "Panoramic view of the city skyline",
    },
    {
      src: "/assets/images/landscape/landscape-9.jpg",
      alt: "Rural landscape",
      text: "Peaceful rural landscape with rolling hills",
    },
    {
      src: "/assets/images/landscape/landscape-10.jpg",
      alt: "Seaside town",
      text: "Charming seaside town with colorful buildings",
    },
    {
      src: "/assets/images/landscape/landscape-11.jpg",
      alt: "National park",
      text: "Breathtaking scenery of a national park",
    },
    {
      src: "/assets/images/landscape/landscape-12.jpg",
      alt: "Winter wonderland",
      text: "Snow-covered trees in a winter wonderland",
    },
  ],
  Architecture: [
    {
      src: "/assets/images/architecture/architecture-1.jpg",
      alt: "Modern building",
      text: "Sleek lines of contemporary architecture",
    },
    {
      src: "/assets/images/architecture/architecture-2.jpg",
      alt: "Historic architecture",
      text: "Timeless beauty of classical design",
    },
    {
      src: "/assets/images/architecture/architecture-3.jpg",
      alt: "Futuristic design",
      text: "Innovative structures pushing the boundaries of architecture",
    },
    {
      src: "/assets/images/architecture/architecture-4.jpg",
      alt: "Sustainable architecture",
      text: "Eco-friendly buildings blending into their surroundings",
    },
    {
      src: "/assets/images/architecture/architecture-5.jpg",
      alt: "Urban landscape",
      text: "Vibrant cityscapes shaped by modern architecture",
    },
    {
      src: "/assets/images/architecture/architecture-6.jpg",
      alt: "Rural architecture",
      text: "Charming rural buildings blending into nature",
    },
  ],
  Culture: [
    {
      src: "/assets/images/culture/culture-1.jpg",
      alt: "Cultural event",
      text: "Vibrant festival celebrating local traditions",
    },
    {
      src: "/assets/images/culture/culture-2.jpg",
      alt: "Traditional costume",
      text: "Intricate details of heritage attire",
    },
    {
      src: "/assets/images/culture/culture-3.jpg",
      alt: "Street food market",
      text: "Savoring local flavors at a bustling street market",
    },
    {
      src: "/assets/images/culture/culture-4.jpg",
      alt: "Traditional dance",
      text: "Energetic performance of a traditional folk dance",
    },
    {
      src: "/assets/images/culture/culture-5.jpg",
      alt: "Cultural landmark",
      text: "Historic monument symbolizing cultural heritage",
    },
    {
      src: "/assets/images/culture/culture-6.jpg",
      alt: "Folk music",
      text: "Traditional instruments echoing folk melodies",
    },
    {
      src: "/assets/images/culture/culture-7.jpg",
      alt: "Artisan at work",
      text: "Skilled artisan crafting traditional handicrafts",
    },
    {
      src: "/assets/images/culture/culture-8.jpg",
      alt: "Traditional architecture",
      text: "Intricate carvings on ancient cultural structures",
    },
  ],
  Commercial: [
    {
      src: "/assets/images/commercial/commercial-11.jpg",
      alt: "Business success",
      text: "Celebrating achievements and milestones",
    },
    {
      src: "/assets/images/commercial/commercial-12.jpg",
      alt: "Business success",
      text: "Celebrating achievements and milestones",
    },
    {
      src: "/assets/images/commercial/commercial-1.jpg",
      alt: "Product shot",
      text: "Stylish product photography for marketing",
    },
    {
      src: "/assets/images/commercial/commercial-2.jpg",
      alt: "Corporate event",
      text: "Professional capture of business gathering",
    },
    {
      src: "/assets/images/commercial/commercial-3.jpg",
      alt: "Office space",
      text: "Modern and efficient workspace",
    },
    {
      src: "/assets/images/commercial/commercial-4.jpg",
      alt: "Business team",
      text: "Diverse and dynamic team at work",
    },
    {
      src: "/assets/images/commercial/commercial-5.jpg",
      alt: "Business meeting",
      text: "Productive discussion in a meeting",
    },
    {
      src: "/assets/images/commercial/commercial-6.jpg",
      alt: "Business presentation",
      text: "Engaging presentation in a conference",
    },
    {
      src: "/assets/images/commercial/commercial-7.jpg",
      alt: "Business travel",
      text: "Exploring new opportunities on a business trip",
    },
    {
      src: "/assets/images/commercial/commercial-8.jpg",
      alt: "Business strategy",
      text: "Planning for future success",
    },
    {
      src: "/assets/images/commercial/commercial-9.jpg",
      alt: "Business partnership",
      text: "Building strong partnerships for growth",
    },
    {
      src: "/assets/images/commercial/commercial-10.jpg",
      alt: "Business success",
      text: "Celebrating achievements and milestones",
    },
  ],
  Aerial: [
    {
      src: "/assets/images/aerial/aerial-1.jpg",
      alt: "City aerial view",
      text: "Bird's eye view of urban landscape",
    },
    {
      src: "/assets/images/aerial/aerial-2.jpg",
      alt: "Natural landscape from above",
      text: "Stunning patterns of nature from the sky",
    },
    {
      src: "/assets/images/aerial/aerial-3.jpg",
      alt: "Coastal aerial view",
      text: "Breathtaking coastline from the air",
    },
    {
      src: "/assets/images/aerial/aerial-4.jpg",
      alt: "Mountain aerial view",
      text: "Majestic mountain ranges from above",
    },
    {
      src: "/assets/images/aerial/aerial-5.jpg",
      alt: "Agricultural aerial view",
      text: "Patterns of agriculture from the sky",
    },
    {
      src: "/assets/images/aerial/aerial-6.jpg",
      alt: "Desert aerial view",
      text: "Surreal desert landscapes from the air",
    },
  ],
  Fashion: [
    {
      src: "/assets/images/fashion/fashion-7.jpg",
      alt: "Fashion model 6",
      text: "Sustainable fashion in a natural environment",
    },
    {
      src: "/assets/images/fashion/fashion-8.jpg",
      alt: "Fashion model 6",
      text: "Sustainable fashion in a natural environment",
    },
    {
      src: "/assets/images/fashion/fashion-1.jpg",
      alt: "Fashion model 1",
      text: "High-end fashion shoot in urban setting",
    },
    {
      src: "/assets/images/fashion/fashion-2.jpg",
      alt: "Fashion model 2",
      text: "Avant-garde style on the runway",
    },
    {
      src: "/assets/images/fashion/fashion-3.jpg",
      alt: "Fashion model 3",
      text: "Vintage-inspired fashion in a rustic setting",
    },
    {
      src: "/assets/images/fashion/fashion-4.jpg",
      alt: "Fashion model 4",
      text: "Streetwear fashion in a modern cityscape",
    },
    {
      src: "/assets/images/fashion/fashion-5.jpg",
      alt: "Fashion model 5",
      text: "Glamorous evening wear on the red carpet",
    },
    {
      src: "/assets/images/fashion/fashion-6.jpg",
      alt: "Fashion model 6",
      text: "Sustainable fashion in a natural environment",
    },
  ],
};

type Category = keyof typeof images;

const NavItem = ({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) => (
  <div
    className={`px-2 sm:px-4 py-2 cursor-pointer relative md:text-black ${
      active ? "text-black" : "text-gray-500"
    }  font-futuraLight text-sm sm:text-xl flex-shrink-0`}
    onClick={onClick}
  >
    {text}
    {active && (
      <div className="absolute bottom-[-10px] left-0 w-full h-[3.5px] bg-black transition-all duration-500 ease-in-out"></div>
    )}
  </div>
);

const PhotographyPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Landscape");
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lightboxImages = images[activeCategory].map((img) => ({
    src: img.src,
  }));

  return (
    <div className="w-full p-0 sm:p-4">
      <nav
        ref={navRef}
        className={`flex ${
          isMobile ? "overflow-x-scroll overflow-y-hidden" : "justify-between"
        } mb-8 relative`}
      >
        <div className="absolute bottom-[-10px] left-0 w-full h-[3.5px] bg-slate-200 rounded-full"></div>
        {categories.map((category) => (
          <NavItem
            key={category}
            text={category}
            active={activeCategory === category}
            onClick={() => {
              // Adding animation on category change
              setActiveCategory(category as Category);
            }}
          />
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 sm:mt-20"
        >
          {images[activeCategory].map((img, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <div
                className="w-full h-[40vh] sm:h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: `url('${img.src}')` }}
                onClick={() => setIndex(idx)}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex justify-center items-center">
                  <span className="text-white text-5xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-thin">
                    +
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full text-white p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <p className="font-futuraLight text-xs sm:text-sm">{img.text}</p> */}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Lightbox
        slides={lightboxImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default PhotographyPortfolio;
