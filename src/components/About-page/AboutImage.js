// Import the charger image from the assets folder
import charger from "../../assets/About-image/charger.png";

// Define a functional component named AboutImage
const AboutImage = () => {
  // Render the AboutImage component with a comment
  return (
    <aside>
      <figure>
        {/* Display the charger image with alt text */}
        <img src={charger} alt="dodge charger" />
      </figure>
    </aside>
  );
};

// Export the AboutImage component
export default AboutImage;
