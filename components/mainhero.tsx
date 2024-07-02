import { Button } from "flowbite-react";
import { PiArrowRight } from "react-icons/pi";

export function BackgroundCoverImageWithCTAsHero() {
  return (
    <section
      className="
   bg-primary-400 bg-[url('/white.svg')]    bg-cover bg-center bg-no-repeat bg-blend-overlay dark:bg-blend-multiply
    
    "
    >
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-white lg:py-16">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold leading-none text-gray-800 dark:text-gray-100 tracking-tight md:text-5xl lg:text-6xl">
            Your web Transformation Starts Here
          </h1>
          <p className="mb-6 text-gray-700 dark:text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
            Step into Third Bracket Solutions, a UK-based modern web
            infrastructure development service born from the collective efforts
            of a group of nomads who conquered platforms like Upwork and Fiverr.
          </p>

          <Button
            theme={{
              color: {
                light:
                  "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-primary-300 enabled:hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
              },
            }}
            size="lg"
            color="light"
            className="[&>span]:items-center"
          >
            Learn More About Us
            <PiArrowRight className="-mr-1 ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="mt-8 grid gap-8 border-t border-opacity-20 dark:border-opacity-20 border-gray-400 dark:border-gray-600 pt-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:pt-12">
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg text-gray-700 dark:text-gray-200 font-bold">
              Our main gigs?
            </h2>
            <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
              Jamstack Development, Web Moodernization, Custom Wordpress and
              many more.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Read more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Custom Web Development
            </h2>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
              Custom Web Development never been affordable like this before.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Read more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Next.js
            </h2>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
              Next.js Development is the future
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Read more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm ">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              2024 plans
            </h2>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
              Investing in the future of London
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Read more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
