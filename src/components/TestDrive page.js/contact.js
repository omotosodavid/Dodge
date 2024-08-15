// Define the ContactInfo component
const ContactInfo = () => {
  return (
    <aside
      // Apply styling for the contact information section
      className="sm:w-[27rem] xl:border-l xl:border-t-0 border-t xl:pt-20 pt-12 xl:pl-8 pb-8"
      id="contact"
    >
      {/* Display a heading for the contact information */}
      <h3 className="text-white text-2xl font-medium mb-5">
        CONTACT INFORMATION
      </h3>
      <section className="flex flex-col gap-7">
        {/* Create input fields for name, email, and telephone */}
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className="rounded-full p-4 py-3 w-full placeholder:text-white bg-[#2c2c36] text-white text-lg font-medium"
        />
        <input
          type="text"
          name="Email"
          placeholder="Email"
          className="rounded-full p-4 py-3 w-full placeholder:text-white bg-[#2c2c36] text-white text-lg font-medium"
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          className="rounded-full p-4 py-3 w-full placeholder:text-white bg-[#2c2c36] text-white text-lg font-medium"
        />
        <section>
          {/* Create a radio button for privacy policy agreement */}
          <input
            type="radio"
            name="privacy-policy"
            className="accent-[#ffba00]"
          />
          {/* Display text related to the privacy policy */}
          <p className="text-lg text-[#5c5c5c] inline-block pl-2 font-medium">
            I agree with the <span className="text-white">privacy policy</span>
          </p>
          {/* Create a button for submission */}
          <button
            type="submit"
            className="mt-8 border border-[#FFBA00] py-4 px-12 rounded-full text-[#FFBA00] font-semibold"
          >
            Know More
          </button>
        </section>
      </section>
    </aside>
  );
};

// Export the ContactInfo component
export default ContactInfo;
