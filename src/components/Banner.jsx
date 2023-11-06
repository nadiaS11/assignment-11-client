import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ children }) => {
  const location = useLocation();
  return (
    <div className="relative ]">
      {children}

      <div className="relative  bg-opacity-70 bg-gray-900 h-[80vh]">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-52">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            {location.pathname === "/" ? (
              <>
                <h2 className="my-6   text-3xl font-bold tracking-wider text-white sm:text-4xl sm:leading-none">
                  Discover Culinary Delights,
                  <br className="hidden md:block" />
                  The Classics{" "}
                  <span className="relative inline-block"> At Naamkeen</span>
                </h2>
                <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
                  Experience a world of flavors, where every dish tells a story.
                  Order, savor, and indulge in a symphony of tastes with
                  Namkeen. Your food adventure begins here.
                </p>

                <Link
                  aria-label="Scroll down"
                  className="flex mt-10 items-center justify-evenly w-28 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M2.293,1.293,7.586,6,2.293,10.293A1,1,0,0,0,3.707,11.707l6-6a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414Z" />
                  </svg>
                  <span>Explore</span>
                </Link>
              </>
            ) : (
              ""
            )}
            {location.pathname === "/menu" ? (
              <>
                <form className="flex flex-col gap-5 md:gap-2 items-center w-full mt-20 md:flex-row md:px-16">
                  <input
                    placeholder="Search foods..."
                    type="text"
                    className="flex-grow w-full h-12 px-4   text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded-lg appearance-none   "
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
};

export default Banner;
