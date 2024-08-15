const MediaIcon = () => {
  return (
    // Create a section with a flex layout, vertical alignment, and text styling
    <section className="flex flex-col items-start gap-5 text-white text-2xl">
      {/*Render Facebook icons */}
      <i className="fa-brands fa-facebook-f"></i>
      {/* Render Twitter icons */}
      <i className="bi bi-twitter"></i>
      {/* Render Instagram icons */}
      <i className="bi bi-instagram"></i>
    </section>
  );
};

// Export the MediaIcon component as the default export of this module
export default MediaIcon;
