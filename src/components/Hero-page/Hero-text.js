// Import the MediaIcon component from the specified path
import MediaIcon from "./mediaIcon";

// Define a functional component named HeroText that takes 'text' and 'active' as props
const HeroText = ({ text, active }) => {
  // Define a function 'Text' that takes 'slideIndex' as an argument
  const Text = (slideIndex) => {
    // Check the value of 'slideIndex' and return the corresponding name from the 'text' array
    if (slideIndex === 0) {
      return text[0].name;
    } else if (slideIndex === 1) {
      return text[1].name;
    } else if (slideIndex === 2) {
      return text[2].name;
    } else if (slideIndex === 3) {
      return text[3].name;
    } else if (slideIndex === 4) {
      return text[4].name;
    }
  };

  // Render the following JSX
  return (
    <aside className="text-white w-80 relative -mb-6 z-10">
      <section className="absolute -z-10 -top-20">
        {/* Render an h1 element with specific styling and the result of the 'Text' function */}
        <h1 className="md:block hidden text-[#3d3d47] font-semibold text-9xl -mb-4 pl-1">
          {Text(active)}
        </h1>
      </section>
      <section className="mb-5">
        {/* Render an h2 element with specific styling and the result of the 'Text' function */}
        <h2 className="md:text-6xl text-5xl font-semibold">{Text(active)}</h2>
      </section>
      <section className="mb-6 text-lg font-normal">
        <p>Expand the actual teaching of the great explorer of the truth</p>
      </section>
      <button
        type="submit"
        className="mb-5 border border-[#FFBA00] py-4 px-12 rounded-full text-[#FFBA00] font-semibold"
      >
        Know More
      </button>
      {/* Render the MediaIcon component */}
      <MediaIcon />
    </aside>
  );
};

// Export the HeroText component as the default export of this module
export default HeroText;
