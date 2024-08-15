// Define the CustomerService component
const CustomerService = () => {
  return (
    <section className="text-white">
      {/* Trademarks information */}
      <section className="sm:w-96 mb-5">
        <p>
          Chrysler, Dodge, Jeep, Ram, Wagoneer, Mopar and SRT are registered
          trademarks of FCA US LLC. ALFA ROMEO and FIAT are registered
          trademarks of FCA US LLC Group Marketing S.p.A., used with permission.
        </p>
      </section>

      {/* Customer support contact */}
      <section>
        <p className="font-medium">
          <span className="text-[#ffba00]">Customer support: </span>
          +91 98765 43210
        </p>
      </section>
    </section>
  );
};

// Export the CustomerService component
export default CustomerService;
