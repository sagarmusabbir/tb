import { Button } from "flowbite-react";
import Link from "next/link";
import {
  PiArrowDownBold,
  PiArrowFatLineRightFill,
  PiArrowRight,
  PiArrowRightBold,
  PiArrowRightDuotone,
  PiArrowRightFill,
} from "react-icons/pi";

export function BackgroundCoverImageWithCTAsHero() {
  return (
    <section
      className="bg-white
    dark:bg-black  
    
    "
    >
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8  sm:py-16 text-white lg:py-24">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold  text-gray-800 dark:text-gray-50  sm:text-5xl  lg:text-6xl">
            Tailored Web Solution, Accessible to All
          </h1>
          <p className="mb-6  lg:mb-8 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
            Step into Third Bracket Solutions, a UK-based modern web
            infrastructure development service born from the collective efforts
            of a group of nomads who conquered platforms like Upwork and Fiverr.
          </p>

          <a href="#about">
            <Button
              theme={{
                color: {
                  light:
                    "border border-gray-700 bg-gray-800 text-gray-50 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-50 dark:text-gray-950 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-200",
                },
                size: {
                  md: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3",
                },
              }}
              size="md"
              color="light"
              className="[&>span]:items-center"
            >
              Learn More About Us
              <PiArrowRightBold className="-mr-1 ml-2 h-4 w-4 " />
            </Button>
          </a>
        </div>
        <div className="mt-8 grid gap-8 border-t border-opacity-20 dark:border-opacity-20 border-gray-400 dark:border-gray-600 pt-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:pt-12">
          <div className="hover:bg-gray-300/10 dark:hover:bg-gray-700/10 p-4 rounded-lg backdrop-blur-sm">
            <h2 className="mb-1 text-lg text-gray-700 dark:text-gray-200 font-bold">
              Affordable Excellence
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              Experience third bracket excellence without breaking the bank.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-300/10 dark:hover:bg-gray-700/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Tailored Solutions
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              Break everything or start from where you finished!
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-300/10 dark:hover:bg-gray-700/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Rapid Delivery
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              We deliver with swift turnaround times to meet your timeline.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-300/10 dark:hover:bg-gray-700/10 p-4 rounded-md backdrop-blur-sm ">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Comprehensive Support
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              Third Bracket provides ongoing assistance for every step of your
              journey.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
