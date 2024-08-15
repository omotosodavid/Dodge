// Import the NavBar component from the specified path
import NavBar from "../NavBar/NavBar";

// Import the Herocombo component from the current directory
import Herocombo from "./HeroCombo";

// Define a functional component named Hero
const Hero = () => {
  return (
    // Create a section with an id of "home" and specific styling
    <section
      id="home"
      className="bg-[#1b1b23] overflow-x-hidden w-full xl:h-[100vh] px-4 pt-2 xl:pb-0 pb-10"
    >
      <section className="xl:w-[75em] h-full mx-auto">
        {/* Render the NavBar component */}
        <NavBar />

        {/* Render the Herocombo component */}
        <Herocombo />
      </section>
    </section>
  );
};

// Export the Hero component as the default export of this module
export default Hero;
