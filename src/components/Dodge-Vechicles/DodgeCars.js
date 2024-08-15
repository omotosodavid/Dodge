// Import React hooks and components
import { useState } from "react";
import VehicleImg from "./Dodge-Vehicle-Img";
import ScrollAnimation from "./scroll";

// Define the Dodge component
const Dodge = () => {
  // Define state variables for controlling car slides and background color change
  const [carSlide, setCarSlide] = useState(0);
  const [whiteScroll, setWhiteScroll] = useState(0);

  // Define animation styles for vehicle slides
  const animationStyle = "scale:1.3;translate:0 -40px";
  const normalStyle = "scale:1.1;translate:0";

  // Function to handle next slide button click
  const handleNextSlide = (e, prevButton, challenger, hornet) => {
    prevButton.disabled = false;
    setWhiteScroll((prevScroll) => prevScroll + 1);
    // Check the current slide position and update accordingly
    if (carSlide === 0) {
      setCarSlide((prevNum) => prevNum - 410);
      challenger.style = `${animationStyle} `;
    } else if (carSlide === -410) {
      setCarSlide((prevNum) => prevNum - 410);
      challenger.style = `${normalStyle}`;
      hornet.style = `${animationStyle}`;
      e.target.parentElement.disabled = true;
    }
  };

  // Function to handle previous slide button click
  const handlePrevSlide = (e, nextButton, challenger, hornet) => {
    nextButton.disabled = false;

    // Check the current slide position and update accordingly
    if (carSlide === -820) {
      setCarSlide((prevNum) => prevNum + 410);
      setWhiteScroll((prevScroll) => prevScroll - 1);
      hornet.style = `${normalStyle}`;
      challenger.style = `${animationStyle}`;
    } else if (carSlide === -410) {
      challenger.style = `${normalStyle}`;
      setCarSlide((prevNum) => prevNum + 410);
      setWhiteScroll((prevScroll) => prevScroll - 1);
      e.target.parentElement.disabled = true;
    }
  };

  // Define the translation style for car slides
  const translate = {
    transform: `translateX(${carSlide}px)`,
  };

  return (
    <section
      className="bg-[#1b1b23] xl:h-[100vh] sm:pt-8 pt-12 pb-6 sm:px-4 px-0 relative overflow-hidden"
      id="vehicles"
    >
      <section className="xl:w-[75em] mx-auto h-full relative">
        {/* Render the VehicleImg component with event handlers */}
        <VehicleImg
          nextFunc={handleNextSlide}
          prevFunc={handlePrevSlide}
          scroll={translate}
        />
        {/* Render the ScrollAnimation component for background color change */}
        <ScrollAnimation bgChange={whiteScroll} />
        {/* Render the Dodge title */}
        <h1 className="text-[#26262d] text-9xl font-bold absolute -bottom-4 -right-8">
          Dodge
        </h1>
      </section>
    </section>
  );
};

// Export the Dodge component
export default Dodge;
