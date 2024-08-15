// Import necessary libraries and components
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Define the MobileDodgecarousel component
const MobileDodgecarousel = ({ vehicles }) => {
  return (
    <section className="w-full h-full sm:grid place-content-center xl:hidden relative z-20">
      {/* Create a responsive carousel */}
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={2000}
        showArrows={false}
        infiniteLoop
      >
        {vehicles.map((vehicle, index) => (
          <section
            key={index}
            className="flex flex-col items-center justify-center relative w-full pb-10"
          >
            <figure>
              {/* Display the vehicle image */}
              <img src={vehicle.src} alt={vehicle.name} className="mb-3 w-64" />
              <figcaption className="text-white text-2xl font-semibold">
                {vehicle.name}
              </figcaption>
            </figure>
            <section className="mb-6 mt-3 text-center w-48">
              <span className="text-gray-400 font-semibold text-[1.05em] mt-6 mb-4">
                Now starting at
              </span>
              <p className="text-[#ffba00] text-lg font-semibold mt-2">
                {vehicle.price}
              </p>
            </section>
            <button
              type="submit"
              className="border border-[#FFBA00] py-4 px-10 rounded-full text-[#FFBA00] font-semibold"
            >
              Know More
            </button>
          </section>
        ))}
      </Carousel>
    </section>
  );
};

// Export the MobileDodgecarousel component
export default MobileDodgecarousel;
