// Import the Carousel component from the "react-responsive-carousel" library
import { Carousel } from "react-responsive-carousel";

// Import the Carousel's CSS styles
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Define a functional component named HeroImage that takes 'image' and 'handleSlideChange' as props
const HeroImage = ({ image, handleSlideChange }) => {
  return (
    <aside>
      {/* Create a figure element with specific styling */}
      <figure className="relative z-10 xl:w-[54.36em] h-max flex items-center justify-between">
        {/* Render the Carousel component with various configuration options */}
        <Carousel
          showArrows={false} // Hide navigation arrows
          showThumbs={false} // Hide thumbnail images
          showIndicators={false} // Hide slide indicators
          showStatus={false} // Hide status information
          onChange={handleSlideChange} // Set a function to handle slide changes
          autoPlay // Enable auto-play
          infiniteLoop // Enable infinite loop
          interval={1000} // Set the interval for auto-play (1000ms = 1 second)
        >
          {/* Map through the 'image' array and render each image */}
          {image.map((img, index) => (
            <img key={index} src={img.src} alt={img.name} />
          ))}
        </Carousel>
      </figure>
    </aside>
  );
};

// Export the HeroImage component as the default export of this module
export default HeroImage;
