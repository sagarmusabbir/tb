import Image from "next/image";
import { DefaultCustomerLogos } from "./default";
import cover from "@/public/about.png";

export function LogoCTALinksImageFeatureListContentSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950" id="about">
      <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:py-16  lg:py-24 my-2 md:my-0">
        {/* <div className="text-center">
          <img
            alt="Flowbite logo"
            src="https://flowbite.s3.amazonaws.com/brand/logo-light/type/flowbite-logo.svg"
            className="mx-auto w-auto object-contain dark:hidden"
          />
          <img
            alt="Flowbite logo"
            src="https://flowbite.s3.amazonaws.com/brand/logo-dark/type/flowbite-logo.svg"
            className="mx-auto hidden w-auto object-contain dark:block"
          />
         
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-5 sm:flex-row sm:gap-8">
            <a
              href="#"
              className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
            >
              Visit the website
              <svg
                aria-hidden="true"
                className="ml-1.5 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
            >
              Let's work together
              <svg
                aria-hidden="true"
                className="ml-1.5 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div> */}
        <div className="mx-auto mb-6 lg:mb-0">
          <h2 className="text-center text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-gray-100 md:text-4xl mb-4">
            About Third Bracket
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400 text-lg lg:text-xl lg:mb-12  max-w-screen-md mx-auto">
            Our main vision is to empower businesses of all sizes with
            innovative, cost-effective web solutions that drive growth and
            success.
          </p>
          <Image
            alt="img"
            width={1024}
            height={460}
            src="/about.webp"
            className=" w-full rounded-lg  backdrop-blur-lg drop-shadow-lg bg-stone-50/90 dark:bg-zinc-900/70"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">
                The Journey
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                We started as freelancers, building digital dreams one line of
                code at a time. For over eight years, we've crafted websites for
                amazing clients on platforms like Upwork and Fiverr. Along the
                way, we met, clicked, and built a strong friendship. We noticed
                a big problem: new businesses often struggled to afford a
                top-notch website. Their dreams were getting held back by high
                costs. We’ve seen firsthand the power of a great website to grow
                a business. So, we decided to create Third Bracket Solutions.
                Our goal is simple: to give every business, no matter the size,
                the chance to have a stunning, effective website. The core of
                Third Bracket lies within:
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Innovation
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Client Focus
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Expertise
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Efficiency
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <GreenCheckIconSVG />
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Integrity
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-200">
                The Edge
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                We're your partners in digital transformation. Our blend of
                expertise and affordability is unmatched. Imagine getting a
                world-class website without breaking the bank. That's us. We've
                got the skills refined in top marketplaces and the drive to
                deliver exceptional results. From concept to completion, we've
                got you covered. Our team is passionate about turning your
                digital vision into reality. Experience the Third Bracket
                difference.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                The Network
              </h3>
              <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                Third Bracket Solutions is more than a web development company.
                Our ecosystem includes property management, product sourcing,
                and content writing. Nomad Gang, our in-house design arm,
                provides top-notch templates and UI/UX, enhancing our web
                development capabilities. This interconnected structure ensures
                comprehensive solutions for our clients.
              </p>
            </div>
          </div>
        </div>
        <DefaultCustomerLogos />
      </div>
    </section>
  );
}

const GreenCheckIconSVG = () => (
  <svg
    className="h-5 w-5 text-green-500"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
