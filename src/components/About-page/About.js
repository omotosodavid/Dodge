// Import the AboutImage and AboutText components
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

// Define a functional component named About
const About = () => {
  return (
    // Create a section for the "About" content
    <section
      className="flex xl:flex-row flex-col gap-y-16 items-center justify-between mb-16 xl:w-[75em] p-4 pt-8 mx-auto"
      id="about"
    >
      {/* Render the AboutText component */}
      <AboutText />

      {/* Render the AboutImage component */}
      <AboutImage />
    </section>
  );
};

// Export the About component
export default About;
