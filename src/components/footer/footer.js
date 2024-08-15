// Import necessary components
import MediaIcon from "../Hero-page/mediaIcon";
import Deatils from "./FooterDeatils";
import CopyRight from "./copyright";
import CustomerService from "./customerService";

// Define the Footer component
const Footer = () => {
  return (
    <section className="relative">
      {/* Background shape */}
      <section className="h-52 lg:w-[50rem] bg-[#3c3b52] w-full lg:blur-[140px] blur-[84px] absolute lg:top-10 top-80 lg:left-20 left-0"></section>

      {/* Footer content */}
      <section className="flex justify-between items-start mt-16 relative flex-wrap gap-x-7 gap-y-20">
        {/* Social media icons */}
        <MediaIcon />

        {/* Footer details */}
        <Deatils />

        {/* Customer service information */}
        <CustomerService />
      </section>

      {/* Copyright section */}
      <CopyRight />
    </section>
  );
};

// Export the Footer component
export default Footer;
