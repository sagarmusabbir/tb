"use client";
import {
  DarkThemeToggle,
  Dropdown,
  Label,
  MegaMenu,
  Navbar,
  TextInput,
} from "flowbite-react";
import Image from "next/image";
import NavLink from "./navlinks";

export function MegaHeader() {
  return (
    <header>
      <Navbar className="dark:bg-gray-800">
        <Navbar.Brand href="/">
          <Image
            src="/logo-black.svg"
            width={36}
            height={36}
            className="mr-2 "
            alt="Third Bracket"
            priority
          />
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            Third Bracket
          </span>
        </Navbar.Brand>
        <div className="flex items-center">
          <DarkThemeToggle />

          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
            </svg>
          </a>
        </div>
      </Navbar>
      <MegaMenu className="border-y border-gray-200 p-0 dark:border-gray-600 dark:bg-gray-800 sm:p-0">
        <div className="w-full px-4 dark:bg-gray-700">
          <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-center justify-between py-3 sm:px-6 md:grid-cols-2 md:px-4 xl:px-0">
            <Navbar.Collapse>
              <Navbar.Link className="text-gray-800 dark:text-white md:hover:text-primary-700">
                <MegaMenu.DropdownToggle>
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MegaMenu.DropdownToggle>
              </Navbar.Link>
              <NavLink />
            </Navbar.Collapse>

            <div className="flex items-center gap-5 md:hidden">
              <a className="text-gray-600 dark:text-white ">
                <MegaMenu.DropdownToggle className="dark:!text-white">
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MegaMenu.DropdownToggle>
              </a>
              <a
                href="#"
                className="text-sm hover:underline focus:underline dark:text-white"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
        <MegaMenu.Dropdown>
          <div className="mx-auto grid border-t px-0 py-4 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white md:grid-cols-2 md:px-2 lg:grid-cols-4 lg:px-4 xl:px-20">
            <ul className="col-span-2 md:col-span-1">
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Online Stores</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Segmentation</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Marketing CRM</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="col-span-2 md:col-span-1">
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Audience Management</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Creative Tools</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Marketing Automation</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="hidden lg:block">
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Dynamic Content</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Integrations</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <svg
                    className="mr-2 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div>
                    <div className="font-semibold">Careers</div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Connect with third-party tools that you're already using.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="col-span-2 p-4 lg:col-span-1">
              <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Our brands
              </h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                At JBS Foods, we pride ourselves on a portfolio of brands that
                cater to a variety of preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400"
              >
                Explore our brands{" "}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </MegaMenu.Dropdown>
      </MegaMenu>
    </header>
  );
}
