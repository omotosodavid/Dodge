// Define a functional component named AboutText
const AboutText = () => {
  return (
    <aside className="sm:w-[35rem]">
      <section>
        <h2 className="text-4xl font-bold mb-6">About us</h2>
        <h3 className="font-semibold text-[1.2rem] mb-7">
          <span className="text-[#ffba00] ">Accusamus</span> is iusto
        </h3>
      </section>
      <section className="text-lg leading-normal font-medium mb-8">
        <p>
          {/* Displaying a paragraph of text */}
          On the other hand we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that cannot foresee the pain and est
          eligendi optio cumque nihili impedit quo minus id quod maxime placet
          facere pessimus.
        </p>
      </section>
      <button className="font-semibold rounded-full border-2 border-black py-4 px-12 hover:text-[#ffba00] hover:border-[#ffba00] duration-500">
        {/* A button with "Know More" text */}
        Know More
      </button>
    </aside>
  );
};

// Export the AboutText component
export default AboutText;
