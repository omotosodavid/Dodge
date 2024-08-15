// Define a functional component named NavLinks
const NavLinks = () => {
  // An array of objects representing navigation links
  const navlinks = [
    { name: "Home", link: "home" },
    { name: "About us", link: "about" },
    { name: "Vehicles", link: "vehicles" },
    { name: "Services", link: "services" },
    { name: "Test-drive", link: "testDrive" },
    { name: "Contact", link: "contact" },
  ];

  return (
    // Create a navigation menu
    <nav className="rleative z-20 h-full">
      {/* Hamburger menu icon for mobile devices */}
      <i
        className="bi bi-list-nested text-white text-3xl cursor-pointer duration-500 md:hidden block"
        onClick={(e) => {
          // Toggle the visibility of the navigation menu on mobile
          const parent = e.target.parentElement;
          const sibiling = parent.children[1];
          if (sibiling.classList.contains("hidden")) {
            sibiling.classList.remove("hidden");
            e.target.classList.remove("bi-list-nested");
            e.target.classList.add("bi-x-circle");
            sibiling.classList.add("flex");
          } else {
            sibiling.classList.add("hidden");
            e.target.classList.remove("bi-x-circle");
            e.target.classList.add("bi-list-nested");
            sibiling.classList.remove("flex");
          }
        }}
      ></i>
      {/* List of navigation links */}
      <ul className="text-white md:flex md:flex-row flex-col hidden item-center justify-between text-lg font-semibold md:w-[35rem] md:relative md:top-0 md:bg-transparent absolute top-14 left-0 w-full duration-500 bg-[#12121b]">
        {/* Map through the navigation links */}
        {navlinks.map((navlink, index) => (
          <li
            className="hover:text-[#ffba00] duration-500 cursor-pointer md:border-0 border-b-2 border-b-gray-500 py-5 px-4 md:p-0 last-of-type:border-b-0"
            key={index}
          >
            {/* Create a link for each navigation item */}
            <a href={`#${navlink.link}`}>{navlink.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Export the NavLinks component as the default export
export default NavLinks;
