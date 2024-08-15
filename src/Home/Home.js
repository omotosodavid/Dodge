// Import necessary components
import About from "../components/About-page/About";
import Gallery from "../components/Dodge-Gallery/Gallery";
import Dodge from "../components/Dodge-Vechicles/DodgeCars";
import DodgeGif from "../components/Gif-Page/dodgeGif";
import Hero from "../components/Hero-page/Hero";
import TestDrive from "../components/TestDrive page.js/Testdrive";
import Services from "../components/car-services/services";

// Define the Home component
const Home = () => {
  return (
    <main>
      {/* Render the Hero component */}
      <Hero />

      {/* Render the About component */}
      <About />

      {/* Render the Services component */}
      <Services />

      {/* Render the DodgeGif component */}
      <DodgeGif />

      {/* Render the Dodge component */}
      <Dodge />

      {/* Render the Gallery component */}
      <Gallery />

      {/* Render the TestDrive component */}
      <TestDrive />
    </main>
  );
};

// Export the Home component
export default Home;
