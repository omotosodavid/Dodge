// Define the CopyRight component
const CopyRight = () => {
  return (
    <section className="mt-16">
      <hr /> {/* Horizontal line for separation */}
      <section className="flex items-center justify-between flex-wrap gap-5 pt-9">
        {/* Section for copyright text */}
        <section className="text-white text-lg">
          <p>
            <span>All Rights Reserved </span>
            <span className="text-[#616168]">| Copyright 2023</span>
          </p>
        </section>

        {/* Section for the Dodge brand name */}
        <section className="text-white text-2xl font-semibold">
          <h2>Dodge</h2>
        </section>
      </section>
    </section>
  );
};

// Export the CopyRight component
export default CopyRight;
