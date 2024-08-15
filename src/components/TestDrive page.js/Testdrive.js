// Import necessary components
import Footer from "../footer/footer";
import Heading from "./TestdriveHeading";
import ContactInfo from "./contact";
import VehicleSelect from "./selectVehicle";

// Define the TestDrive component
const TestDrive = () => {
  return (
    <section
      className="bg-[#1f1f29] py-8 px-4 overflow-x-hidden"
      id="testDrive"
    >
      <section className="xl:w-[75em] mx-auto">
        {/* Render the heading for the Test Drive section */}
        <Heading />
        <section className="flex xl:flex-row flex-col bg-[#23232d] sm:px-16 px-8 border border-gray-400 rounded-lg xl:items-start justify-center sm:w-max mx-auto">
          {/* Render the VehicleSelect component for vehicle selection */}
          <VehicleSelect />
          {/* Render the ContactInfo component for contact information */}
          <ContactInfo />
        </section>
        {/* Render the Footer component at the bottom of the Test Drive section */}
        <Footer />
      </section>
    </section>
  );
};

// Export the TestDrive component
export default TestDrive;
