"use client";
import { Button, Tabs } from "flowbite-react";
import { Content, Right, Web } from "./icons";
import {
  PiArrowRight,
  PiCheck,
  PiCheckCircle,
  PiCheckCircleFill,
  PiGreaterThan,
} from "react-icons/pi";

export function CTASectionWithTabsAndMobileApp() {
  return (
    <section className="bg-gray-100 antialiased  dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <Tabs
            style="pills"
            theme={{
              tablist: {
                base: "flex text-center gap-x-2 lg:gap-x-6",
                tabitem: {
                  base: "relative  flex items-center justify-center rounded-t-lg p-2 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                  styles: {
                    pills: {
                      active: {
                        on: "rounded-lg bg-primary-400 text-white focus:ring-0 ",
                        off: "rounded-lg bg-gray-200 text-gray-500 focus:ring-0 dark:bg-gray-800 dark:text-gray-400",
                      },
                    },
                  },
                },
              },
            }}
          >
            <Tabs.Item
              active
              title={
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-gray-500 dark:text-gray-400">
                    Web
                  </span>
                  <Web />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Flowbite in iOS: Take control of your finances with us
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our app helps users easily track their expenses and create a
                    budget. With a user-friendly interface, the app allows users
                    to quickly input their income and expenses, and then
                    automatically categorizes them for easy tracking.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Continuous integration and deployment
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Development workflow
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Knowledge management
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    Flow Budget takes the hassle out of budgeting and empowers
                    users to take control of their finances
                  </h3>
                </div>
                <div>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Check out the iOS app features
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-gray-500 dark:text-gray-400">
                    Content
                  </span>
                  <Content />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Flowbite in Android: Take control of your finances with us
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our app helps users easily track their expenses and create a
                    budget. With a user-friendly interface, the app allows users
                    to quickly input their income and expenses, and then
                    automatically categorizes them for easy tracking.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Continuous integration and deployment
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Development workflow
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Knowledge management
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    Flow Budget takes the hassle out of budgeting and empowers
                    users to take control of their finances
                  </h3>
                </div>
                <div>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Check out the Android app features
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-gray-500 dark:text-gray-400">
                    Web
                  </span>
                  <Web />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Flowbite in iOS: Take control of your finances with us
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our app helps users easily track their expenses and create a
                    budget. With a user-friendly interface, the app allows users
                    to quickly input their income and expenses, and then
                    automatically categorizes them for easy tracking.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Continuous integration and deployment
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Development workflow
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Knowledge management
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    Flow Budget takes the hassle out of budgeting and empowers
                    users to take control of their finances
                  </h3>
                </div>
                <div>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Check out the iOS app features
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-gray-500 dark:text-gray-400">
                    Web
                  </span>
                  <Web />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Flowbite in iOS: Take control of your finances with us
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our app helps users easily track their expenses and create a
                    budget. With a user-friendly interface, the app allows users
                    to quickly input their income and expenses, and then
                    automatically categorizes them for easy tracking.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Continuous integration and deployment
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Development workflow
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Knowledge management
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    Flow Budget takes the hassle out of budgeting and empowers
                    users to take control of their finances
                  </h3>
                </div>
                <div>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Check out the iOS app features
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  <span className="absolute -bottom-8 text-base font-medium text-gray-500 dark:text-gray-400">
                    Web
                  </span>
                  <Web />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Flowbite in iOS: Take control of your finances with us
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our app helps users easily track their expenses and create a
                    budget. With a user-friendly interface, the app allows users
                    to quickly input their income and expenses, and then
                    automatically categorizes them for easy tracking.
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Continuous integration and deployment
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Development workflow
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Knowledge management
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    Flow Budget takes the hassle out of budgeting and empowers
                    users to take control of their finances
                  </h3>
                </div>
                <div>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Check out the iOS app features
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
          <div className="hidden lg:block">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 shadow-xl dark:border-gray-800 dark:bg-gray-800">
              <div className="absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute right-[-17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800"></div>
              <div className="h-[572px] w-[272px] overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-800">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                  className="h-[572px] w-[272px] dark:hidden"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                  className="hidden h-[572px] w-[272px] dark:block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div className="hidden lg:block">
            <img
              className="w-full object-cover dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-1.png"
              alt="Feature illustration"
            />
            <img
              className="hidden w-full object-cover dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
              alt="Feature illustration"
            />
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                We invest in the world's potential
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Flowbite Budget
                </span>
                &nbsp;is a mobile app that helps users easily track their
                expenses and create a budget.
              </p>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                With a user-friendly interface, the app allows users to quickly
                input their income and expenses, and then automatically
                categorizes them for easy tracking.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-2.5">
                  <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Templates for everyone
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Development workflow
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Limitless business automation
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Knowledge management
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Button
                color="dark"
                className="[&>span]:items-center [&>span]:px-5 [&>span]:py-2.5"
              >
                Start building
                <svg
                  aria-hidden="true"
                  className="-mr-1 ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
              <Button color="light" outline>
                Get a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
