// Define a functional component named Title
export const Title = () => {
  return (
    // Create a section element with a heading displaying the text "Dodge"
    <section>
      <h2 className="text-white text-3xl">Dodge</h2>
    </section>
  );
};

// Define a functional component named NavIcons
export const NavIcons = () => {
  return (
    // Create a section element with icons for telephone and search
    <section className="text-white text-lg flex items-center gap-7">
      {/* Render an icon for the telephone */}
      <i
        className="bi bi-telephone hover:text-[#ffbb0a] duration-300 cursor-pointer"
        title="telephone"
      ></i>

      {/* Render an icon for search */}
      <i
        className="bi bi-search hover:text-[#ffbb0a] duration-300 cursor-pointer"
        title="search"
      ></i>
    </section>
  );
};
