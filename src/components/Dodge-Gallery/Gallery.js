// Import necessary components
import GalleryImage from "./galleryimages";
import GalleryLinks from "./navlinks";

// Define the Gallery component
const Gallery = () => {
  return (
    <section className="xl:w-[75em] mx-auto px-4 py-14">
      {/* Render GalleryLinks component */}
      <GalleryLinks />

      {/* Render GalleryImage component */}
      <GalleryImage />
    </section>
  );
};

// Export the Gallery component
export default Gallery;
