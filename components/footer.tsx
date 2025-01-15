"use client";
import { Footer } from "flowbite-react";
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
import Contact from "../app/contact";
import Newsletter from "./contact";
// import Co from "./Co";

import SubscribeForm from "./form";
import { NewsletterSection } from "./Newsletter";

const NewsletterSignUpFooterSection: FC = function () {
  return (
    <Footer className="rounded-none  dark:bg-gray-900 bg-gray-100">
      <div className="mx-auto  max-w-screen-lg px-4 py-8  lg:py-16">
        {/* <Newsletter /> */}
        <NewsletterSection />

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
              {/* <Footer.Link href="https://nomadgang.com">Nomad Gang</Footer.Link> */}
              {/* <Footer.Link href="https://ukliteraturereview.co.uk/">
                Literature Review Service
              </Footer.Link> */}
              <Footer.Link href="https://verifypropertiesltd.com/about">
                Verify Properties Limited
              </Footer.Link>
              <Footer.Link href="https://www.npmjs.com/package/@thirdbracket/bracketui">
                Bracket UI
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
              name=""
              theme={{
                img: "h-5 mr-3",
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
            <Footer.Icon
              href="https://www.facebook.com/thirdbracket.co.uk"
              target="_blank"
              icon={BsFacebook}
              className="hover:text-gray-900"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="hover:text-gray-900"
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
              className="hover:text-gray-900"
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
              className="hover:text-gray-900"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="hover:text-gray-900"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default NewsletterSignUpFooterSection;
