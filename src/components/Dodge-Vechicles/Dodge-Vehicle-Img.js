// Import vehicle images
import charger from "../../assets/vehicles-images/charger.png";
import sedan from "../../assets/vehicles-images/charger sedan.png";
import challenger from "../../assets/vehicles-images/challenger.png";
import hornet from "../../assets/vehicles-images/hornet.png";
import dakota from "../../assets/vehicles-images/dakota.png";
// Import  Mobilecarousel component
import MobileDodgecarousel from "./MobileDodgeCarousel";

// Import React hooks and components
import { useEffect, useRef } from "react";

// Define the VehicleImg component
const VehicleImg = ({ nextFunc, prevFunc, scroll }) => {
  // Define an array of vehicle data
  const vehicles = [
    {
      name: "2023 Charger",
      src: charger,
      price: "£34,230",
    },
    {
      name: "2023 Charger Sedan",
      src: sedan,
      price: "£32,645",
    },
    {
      name: "2023 Challenger SXT",
      src: challenger,
      price: "£32,695",
    },
    {
      name: "2023 Hornet",
      src: hornet,
      price: "£31,590",
    },
    {
      name: "2023 Dakota",
      src: dakota,
      price: "£36,820",
    },
  ];

  // Create a ref for the vehicle container
  const vehicleContainer = useRef();
  let Challenger;
  let Hornet;
  let slideButton = useRef();
  let next;
  let prev;

  // Use useEffect to initialize DOM elements once the component is mounted
  useEffect(() => {
    const vehicleTag = vehicleContainer.current;
    Challenger = vehicleTag.children[2].children[0].children[0];
    Hornet = vehicleTag.children[3].children[0].children[0];
    prev = slideButton.current.children[1];
    next = slideButton.current.children[0];
  });

  return (
    <section className="relative h-full">
      {/* Background overlay */}
      <section className="bg-[#595872] w-full h-64 blur-[140px] absolute bottom-56"></section>
      <section className="overflow-hidden h-[97%] ">
        <section
          style={scroll}
          className="w-[128.5em] h-full xl:flex hidden flex-row justify-between items-center relative duration-500"
          ref={vehicleContainer}
        >
          {vehicles.map((vehicle, index) => (
            <section
              key={index}
              className="flex flex-col items-start justify-center relative w-96 h-[25rem]"
            >
              <figure>
                <img
                  src={vehicle.src}
                  alt={vehicle.name}
                  className="w-80 duration-500"
                />
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
        </section>
        {/* Mobile carousel component */}
        <MobileDodgecarousel vehicles={vehicles} />
      </section>
      {/* Slider buttons for desktop */}
      <section className="text-white text-2xl relative xl:block hidden">
        <section
          className="flex flex-col gap-2 absolute -top-72 right-0"
          ref={slideButton}
        >
          {/* Button to navigate to the next slide */}
          <button
            className="disabled:text-gray-500"
            onClick={(e) => nextFunc(e, prev, Challenger, Hornet)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          {/* Button to navigate to the previous slide */}
          <button
            className="disabled:text-gray-500"
            onClick={(e) => prevFunc(e, next, Challenger, Hornet)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
        </section>
      </section>
    </section>
  );
};

// Export the VehicleImg component
export default VehicleImg;
