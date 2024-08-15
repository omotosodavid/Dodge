// Define a functional component named ServiceText
const ServiceText = () => {
  // An array of objects, each containing service information
  const texts = [
    {
      title: "Engine upgrades",
      body: "Elevate your vehicles' performance, with Dodge's engine upgrades.",
      icon: "bi bi-chevron-double-up",
    },
    {
      title: "Free Support",
      body: "Dodge aims to provide a comprehensive support ecosystem to enhance the ownership experience.",
      icon: "bi bi-tools",
    },
    {
      title: "Security inspections",
      body: "Dodge is committed to ensuring the safety of their occupants.",
      icon: "bi bi-shield-check",
    },
    {
      title: "Brake checkup",
      body: "well-engineered brake systems that prioritize safety and reliability.",
      icon: "bi bi-ev-front",
    },
  ];

  return (
    <>
      {texts.map((text, index) => (
        // Mapping through the array of service information and rendering each section
        <section
          key={index}
          className="flex flex-col gap-12 sm:items-start items-center justify-center sm:w-[17rem]"
        >
          <section className="w-max hover:scale-105 duration-500">
            {/* Displaying an icon based on the provided icon class */}
            <i
              className={`${text.icon} text-6xl shadow-lg shadow-black/50 w-max block px-8 py-6 rounded-full h-[1.96em] `}
            />
          </section>
          <section>
            <h3 className="text-lg sm:text-left text-center font-bold mb-3">
              {/* Displaying the service title */}
              {text.title}
            </h3>
            <p className="text-lg leading-relaxed font-normal">
              {/* Displaying the service description */}
              {text.body}
            </p>
          </section>
        </section>
      ))}
    </>
  );
};

// Export the ServiceText component
export default ServiceText;
