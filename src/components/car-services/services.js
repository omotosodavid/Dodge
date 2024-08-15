// Import the ServiceText component
import ServiceText from "./serviceText";

// Define a functional component named Services
const Services = () => {
  return (
    <section
      className="flex items-start gap-y-20 justify-between xl:w-[75em] px-4 flex-wrap mx-auto pt-16 pb-12"
      id="services"
    >
      {/* Render the ServiceText component */}
      <ServiceText />
    </section>
  );
};

// Export the Services component
export default Services;
