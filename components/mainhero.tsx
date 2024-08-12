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
      className="bg-white dark:bg-black
    bg-[url('/hero.svg')]    bg-cover bg-center bg-no-repeat bg-blend-luminosity
    
    "
    >
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8  sm:py-16 text-white lg:py-24">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold  text-gray-800 dark:text-gray-100  sm:text-5xl  lg:text-6xl">
            Tailored Web Solution, Accessible to All
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg lg:mb-8 lg:text-xl">
            Step into Third Bracket Solutions, a UK-based modern web
            infrastructure development service born from the collective efforts
            of a group of nomads who conquered platforms like Upwork and Fiverr.
          </p>

          <a href="#about">
            <Button
              theme={{
                color: {
                  light:
                    "border border-gray-700 bg-gray-800 text-gray-50 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-100 dark:text-gray-950 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-300",
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
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg text-gray-700 dark:text-gray-200 font-bold">
              Affordable Excellence
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              High-quality web solutions without the premium price tag.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Tailored Solutions
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              Custom-built platforms to meet your unique business needs.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Rapid Delivery
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              Fast-track your digital projects with our efficient processes.
            </p>
            <a
              href="#services"
              className="inline-flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 hover:underline"
            >
              Learn more
              <PiArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="hover:bg-gray-200/10 dark:hover:bg-gray-500/10 p-4 rounded-md backdrop-blur-sm ">
            <h2 className="mb-1 text-lg font-bold text-gray-700 dark:text-gray-200">
              Comprehensive Support
            </h2>
            <p className="mb-1 text-sm text-gray-500 ">
              Ongoing assistance for your continued success.
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
