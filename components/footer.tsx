"use client";
import {
  Button,
  Dropdown,
  Footer,
  FooterBrand,
  FooterIcon,
} from "flowbite-react";
import { Span } from "next/dist/trace";
import Link from "next/link";
import type { FC } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";

const NewsletterSignUpFooterSection: FC = function () {
  return (
    <Footer className="rounded-none  dark:bg-gray-900 bg-gray-100">
      <div className="mx-auto  max-w-screen-lg px-4 py-8  lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-xl items-center justify-between rounded-lg bg-gray-50 p-6 dark:bg-gray-700 sm:flex lg:mb-16 lg:my-10">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Sign up to our newsletter
          </p>
          <form action="#" className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0">
            <div className="relative w-full">
              <label
                htmlFor="email-subscribe"
                className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                id="email-subscribe"
                className="block w-full rounded-l-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 focus:border-slate-500 focus:ring-slate-500 dark:border-slate-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-slate-500 dark:focus:ring-slate-500"
                placeholder="Your email"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-r-lg border border-gray-700 bg-gray-800 px-5 py-3 text-center text-sm text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-700 dark:border-gray-300 dark:text-gray-900
              "
            >
              Subscribe
            </button>
          </form>
        </div>

        <div
          className="gap-8 my-10  mx-auto lg:my-16 space-y-12 grid sm:grid-cols-2  md:grid-cols-5 sm:space-y-0 "
          id="contact"
        >
          <address className="not-italic">
            <p className=" mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Bangladesh
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Nowab Manjil, Town Hall Road, Habiganj 3300, BD
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                {/* <MdPhone className="mr-2" /> */}
                +880 1765 692886
              </li>
              <li className="flex items-center">
                {/* <MdEmail className="mr-2" /> */}
                hi@thirdbracket.co.uk
              </li>
            </ul>
          </address>
          <address className="not-italic">
            <p className=" mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              United Kingdom
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              340 Dickenson Road, M130NG, Manchester, UK
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                {/* <MdPhone className="mr-2" /> */}
                +44 7425 694261
              </li>
              <li className="flex items-center ">
                {/* <MdEmail className="mr-2" /> */}
                hi@thirdbracket.co.uk
              </li>
            </ul>
          </address>

          <div>
            <Footer.Title title="Company" className="text-gray-800" />
            <Footer.LinkGroup
              className="text-base text-gray-600 dark:text-gray-400"
              col
            >
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Our Team</Footer.Link>
              <Footer.Link href="#">Testimonials</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Resources" className="text-gray-800" />
            <Footer.LinkGroup
              className="text-base text-gray-600 dark:text-gray-400"
              col
            >
              <Footer.Link href="https://nomadgang.com">Nomad Gang</Footer.Link>
              <Footer.Link href="https://ukliteraturereview.co.uk/">
                Literature Review Service
              </Footer.Link>
              <Footer.Link href="https://verifypropertiesltd.com/about">
                Verify Properties Limited
              </Footer.Link>
              <Footer.Link href="https://productsofbangladesh.com">
                Products of Bangladesh
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" className="text-gray-800" />
            <Footer.LinkGroup
              className="text-base text-gray-600 dark:text-gray-400"
              col
            >
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms and Conditions</Footer.Link>
              <Footer.Link href="#">Copyright</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <Footer.Divider />
        <div className="flex flex-col items-center justify-between  self-center lg:flex-row space-y-2 ">
          {/* Logo */}
          <div>
            <Footer.Brand
              href="/"
              src="/logo.svg"
              alt="thirdbracket logo"
              name="Third Bracket Solution"
              theme={{
                img: "h-8 mr-3",
              }}
            />
          </div>

          <Footer.Copyright
            by="Thirdbracket™. All Rights Reserved."
            href="https://nomadgang.com"
            year={2024}
            // className="lg:mb-0"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default NewsletterSignUpFooterSection;
