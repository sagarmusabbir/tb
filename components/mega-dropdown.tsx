import {
  Button,
  DarkThemeToggle,
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
export function MegaMenuHeader() {
  return (
    <MegaMenu>
      <NavbarBrand href="/">
        <img
          alt="Third Bracket"
          src="/logo-black.svg"
          className="mr-3 h-6 sm:h-9"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Third Bracket
        </span>
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/">About</NavbarLink>
        <NavbarLink href="/">Blog</NavbarLink>
        <MegaMenuDropdownToggle>
          Services
          <HiChevronDown className="ml-2" />
        </MegaMenuDropdownToggle>
        <DarkThemeToggle />
      </NavbarCollapse>
      <MegaMenuDropdown>
        <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 text-sm shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
          <ul className="space-y-4 sm:mb-4 md:mb-0">
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Online Stores
              </a>
            </li>
            <li>
              <a
                href="./"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Segmentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Marketing CRM
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Our Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                License
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
              >
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Our brands
            </h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              At Third Bracket Solutions, we are offering tailored web
              development that anybody can afford. Your web development journey
              just got a whole lot cooler.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Ready to rock?
              <span className="sr-only">Explore our brands</span>
              <HiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}
