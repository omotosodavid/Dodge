// Define the VehicleSelect component
const VehicleSelect = () => {
  // Define an array of vehicle names
  const vehicles = ["Challenger", "Charger", "Viper", "Durango"];
  return (
    <aside className="w-80 xl:pt-20 py-12 xl:pb-8">
      {/* Display a heading for vehicle selection */}
      <h3 className="text-2xl font-medium text-white mb-5">
        Select the Vehicle
      </h3>
      <section className="flex items-start justify-center flex-col gap-7">
        {/* Loop through the vehicles array */}
        {vehicles.map((vehicle, index) => (
          <section key={index} className=" text-lg font-medium cursor-pointer">
            {/* Create a radio button for each vehicle */}
            <input
              type="radio"
              name="cars"
              id={vehicle}
              className=" scale-110 accent-[#ffba00] border-[#ffba00]"
            />
            {/* Create a label for the radio button */}
            <label
              className="pl-2 hover:text-[#ffba00] text-xl inline-block text-white"
              htmlFor={vehicle}
            >
              {vehicle}
            </label>
          </section>
        ))}
      </section>
    </aside>
  );
};

// Export the VehicleSelect component
export default VehicleSelect;
