// Define the Details component
const Deatils = () => {
  // Define arrays for different sections
  const vehicles = ["Challenger", "Charger", "Viper", "Durango"];
  const researchs = [
    "Specifications",
    "Get a Brochure",
    "Sign up for updates",
    "Corporate Enquires",
  ];
  const locate = ["Shop Online", "Find a Dealer"];

  return (
    <section className="flex items-start justify-between flex-wrap gap-y-16 gap-5 text-white sm:w-[35rem]">
      {/* Vehicles section */}
      <section>
        <h2 className="text-2xl font-semibold uppercase mb-6">Vehicles</h2>
        <ul className="flex flex-col gap-6">
          {vehicles.map((vehicle, index) => (
            <li
              className="text-lg leading-none font-medium duration-500 hover:text-[#ffba00] cursor-pointer"
              key={index}
            >
              {vehicle}
            </li>
          ))}
        </ul>
      </section>

      {/* Research section */}
      <section>
        <h2 className="text-2xl font-semibold uppercase mb-6">Research</h2>
        <ul className="flex flex-col gap-6">
          {researchs.map((research, index) => (
            <li
              className="text-lg leading-none font-medium duration-500 hover:text-[#ffba00] cursor-pointer"
              key={index}
            >
              {research}
            </li>
          ))}
        </ul>
      </section>

      {/* Locate section */}
      <section>
        <h2 className="text-2xl font-semibold uppercase mb-6">Locate</h2>
        <ul className="flex flex-col gap-6">
          {locate.map((location, index) => (
            <li
              className="text-lg leading-none font-medium duration-500 hover:text-[#ffba00] cursor-pointer"
              key={index}
            >
              {location}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

// Export the Details component
export default Deatils;
