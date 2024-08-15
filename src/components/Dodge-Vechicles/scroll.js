// Import necessary libraries and components
import { useEffect, useRef } from "react";

// Define the ScrollAnimation component
const ScrollAnimation = ({ bgChange }) => {
  // Create refs for DOM elements
  let firstScroll = useRef();
  let secondscroll = useRef();
  let thirdScroll = useRef();

  // Define CSS classes for background colors
  const white = "bg-white";
  const gray = "bg-gray-400";

  // Function to assign CSS classes based on bgChange prop
  const assignedClass = () => {
    if (bgChange === 0) {
      firstScroll.current.classList.add(`${white}`);
      secondscroll.current.classList.add(`${gray}`);
      thirdScroll.current.classList.add(`${gray}`);
      secondscroll.current.classList.remove(`${white}`);
    } else if (bgChange === 1) {
      firstScroll.current.classList.remove(`${white}`);
      firstScroll.current.classList.add(`${gray}`);
      secondscroll.current.classList.remove(`${gray}`);
      secondscroll.current.classList.add(`${white}`);
      thirdScroll.current.classList.add(`${gray}`);
      thirdScroll.current.classList.remove(`${white}`);
    } else if (bgChange === 2) {
      secondscroll.current.classList.remove(`${white}`);
      secondscroll.current.classList.add(`${gray}`);
      thirdScroll.current.classList.remove(`${gray}`);
      thirdScroll.current.classList.add(`${white}`);
    }
  };

  // Call assignedClass function when bgChange prop changes
  useEffect(() => {
    assignedClass();
  }, [bgChange, assignedClass]);

  return (
    <section className="xl:flex hidden gap-5 items-center justify-center mt-5 pb-4 absolute bottom-2 left-[50%]">
      {/* Display three animated circles with changing background colors */}
      <div
        className="bg-white h-3 w-3 rounded-full relative before:absolute before:border before:w-5 scale-105 before:border-gray-400 before:top-[0.37em] before:left-3 duration-500"
        ref={firstScroll}
      ></div>
      <div
        className="bg-gray-400 h-3 w-3 rounded-full relative before:absolute before:border before:w-5 before:border-gray-400 before:top-[0.37em] before:left-3 duration-500"
        ref={secondscroll}
      ></div>
      <div
        className="bg-gray-400 h-3 w-3 rounded-full 3 duration-500"
        ref={thirdScroll}
      ></div>
    </section>
  );
};

// Export the ScrollAnimation component
export default ScrollAnimation;
