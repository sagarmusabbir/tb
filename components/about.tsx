import Image from "next/image";
import { DefaultCustomerLogos } from "./brands";
import cover from "@/public/about.png";

export function LogoCTALinksImageFeatureListContentSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900" id="about">
      <div className=" mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        {/* <div className="mx-auto mb-6 lg:mb-0"> */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl  mx-auto w-auto">
            About Third Bracket
          </h2>
          {/* <p className="mb-8 text-gray-600 dark:text-gray-400 text-lg lg:text-xl lg:mb-12  max-w-screen-md mx-auto"> */}

          <p className=" text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl    max-w-screen-md mt-4 sm:mt-5 mx-auto">
            We started as freelancers, building digital dreams one line of code
            at a time. For over eight years, we've crafted websites for amazing
            clients on platforms like Upwork and Fiverr.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-5xl lg:mt-16 ">
          <Image
            alt="img"
            width={1024}
            height={460}
            src="/about.webp"
            className=" w-full rounded-lg   shadow-sm-light shadow-primary-500/50  "
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">
                The Journey
              </h3>
              <p className="mt-2 text-base font-normal sm:text-xl   text-gray-500 dark:text-gray-400  ">
                Along the way, we met, clicked, and built a strong friendship.
                We noticed a big problem: new businesses often struggled to
                afford a top-notch website. Their dreams were getting held back
                by high costs. We’ve seen firsthand the power of a great website
                to grow a business. So, we decided to create Third Bracket
                Solutions. Our goal is simple: to give every business, no matter
                the size, the chance to have a stunning, effective website. The
                core of Third Bracket lies within:
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
              <p className="mt-2 text-base font-normal sm:text-xl   text-gray-500 dark:text-gray-400 ">
                Imagine getting a world-class website without the premium price
                tag! That's us. We've got the skills refined in top marketplaces
                and the drive to deliver exceptional results. From concept to
                completion, Third Bracket got you covered.Experience the Third
                Bracket difference.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                The Network
              </h3>
              <p className="mt-2 text-base font-normal sm:text-xl   text-gray-500 dark:text-gray-400">
                Third Bracket Solutions is more than a web development company.
                Our ecosystem includes property management, product sourcing,
                and content writing. We have in-house design arm, provides
                top-notch templates and UI/UX, enhancing our web development
                capabilities. This interconnected structure ensures
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
