// Import images for the gallery
import exterior from "../../assets/GalleryImages/exterior.png";
import capability from "../../assets/GalleryImages/capability.png";
import interior from "../../assets/GalleryImages/interior.png";

// Define the GalleryImage component
const GalleryImage = () => {
  // Create an array of image objects with source and description
  const images = [
    { src: exterior, desc: "Exterior" },
    { src: interior, desc: "Interior" },
    { src: capability, desc: "Capability" },
  ];

  return (
    <section className="flex xl:flex-row flex-col items-center mt-6">
      {/* Map over the images and render them */}
      {images.map((image, index) => (
        <figure
          key={index}
          className="overflow-hidden xl:h-72 h-80 sm:h-64 sm:w-96 w-full xl:w-full"
        >
          <img
            className="hover:scale-125 cursor-pointer duration-500 w-full h-full"
            src={image.src}
            alt={image.desc}
          />
          <figcaption className="text-2xl relative font-normal -top-10 text-white left-4">
            {image.desc}
          </figcaption>
        </figure>
      ))}
    </section>
  );
};

// Export the GalleryImage component
export default GalleryImage;
