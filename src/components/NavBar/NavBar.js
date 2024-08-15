// Import the required components from their respective files
import { NavIcons, Title } from "./NavIcons";
import NavLinks from "./Navlinks";

// Define a functional component named NavBar
const NavBar = () => {
  return (
    // Create a header element with a flex layout, aligning items and justifying content between them
    <header className="flex items-center justify-between">
      {/* Render the Title component */}
      <Title />

      {/* Render the NavLinks component */}
      <NavLinks />

      {/* Render the NavIcons component */}
      <NavIcons />
    </header>
  );
};

// Export the NavBar component as the default export of this module
export default NavBar;
