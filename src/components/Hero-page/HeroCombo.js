// Import the HeroImage and HeroText components from their respective files
import HeroImage from "./Hero-image";
import HeroText from "./Hero-text";

// Import vehicle images
import challenger from "../../assets/Hero-images/challenger.png";
import charger from "../../assets/Hero-images/charger.png";
import journey from "../../assets/Hero-images/journey.png";
import durango from "../../assets/Hero-images/durango.png";
import dart from "../../assets/Hero-images/dart.png";

// Import the 'useState' hook from React
import { useState } from "react";

// Define a functional component named Herocombo
const Herocombo = () => {
  // Define an array of vehicle objects with 'name' and 'src' properties
  const HeroVehicles = [
    { name: "CHALLENGER", src: challenger },
    { name: "CHARGER", src: charger },
    { name: "JOURNEY", src: journey },
    { name: "DURANGO", src: durango },
    { name: "DART", src: dart },
  ];

  // Use the 'useState' hook to manage the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  // Define a function to handle slide changes
  const handleChange = (index) => {
    setActiveSlide(index);
  };

  // Render the Herocombo component
  return (
    <section className="flex flex-wrap gap-y-28 justify-between relative items-center sm:mt-36 xl:mt-0 mt-36 h-[94%]">
      {/* Create a background div with specific styling */}
      <div className="bg-[#595872] h-96 w-full xl:w-[45rem] blur-[140px] absolute xl:left-96 bottom-20"></div>

      {/* Render the HeroText component with 'text' and 'active' props */}
      <HeroText text={HeroVehicles} active={activeSlide} />

      {/* Render the HeroImage component with 'image' and 'handleSlideChange' props */}
      <HeroImage image={HeroVehicles} handleSlideChange={handleChange} />
    </section>
  );
};

// Export the Herocombo component as the default export of this module
export default Herocombo;
