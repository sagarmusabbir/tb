import {
  Button,
  DarkThemeToggle,
  Dropdown,
  DropdownItem,
  MegaMenu,
  MegaMenuDropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  theme,
} from "flowbite-react";

import { GiHoodedFigure } from "react-icons/gi";
import NavLink from "./navlinks";
import { links } from "@/site";
import Link from "next/link";
import { SiUpwork, SiWhatsapp } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

import {
  PiArrowBendDoubleUpRightThin,
  PiArrowBendRightUpThin,
  PiArrowBendUpRight,
  PiArrowElbowRightThin,
  PiArrowFatLineRight,
  PiArrowFatLineRightFill,
  PiArrowRightFill,
  PiArrowUpRightBold,
  PiArrowUpRightFill,
  PiArrowUpRightLight,
  PiDownload,
  PiDownloadBold,
  PiDownloadFill,
  PiMoonBold,
  PiRowsBold,
  PiSunBold,
} from "react-icons/pi";
import { DefaultDrawer } from "./drawer";

import Image from "next/image";
import { Bar, Moon, Sun } from "./icons";

import logo from "@/public/logo.svg";

import logoSm from "@/public/logo-sm.svg";

export function HeaderNavigation() {
  return (
    <MegaMenu className="dark:bg-gray-900  sticky bg-gray-100 top-0 z-50 max-w-screen-xl px-4">
      <NavbarBrand href="/">
        <svg
          className="h-6 sm:h-9 mr-2 "
          viewBox="0 0 52.652 52.504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            d="M4.688 17.772h43.561v30.403H4.688z"
            className="stroke-gray-800 dark:stroke-gray-200 dark:hover:stroke-gray-300 hover:stroke-gray-600"
            style={{
              fill: "none",
              fillOpacity: 0,
              //stroke: "currentColor",
              strokeWidth: 9.07021,
              strokeLinecap: "square",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 1,
              paintOrder: "stroke fill markers",
            }}
            transform="translate(-.132 -.206)"
          />
          <path
            d="M19.97-52.63h12.997v39.972H19.97z"
            className="fill-gray-100 dark:fill-primary-500"
            style={{
              mixBlendMode: "normal",
              //fill: "#5C697D",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.160874,
              strokeOpacity: 0,
              paintOrder: "stroke fill markers",
            }}
            transform="matrix(1 0 0 -1 -.132 -.206)"
          />
          <path
            className="fill-primary-200 dark:fill-gray-600"
            d="M.298.224h12.974v52.447H.298z"
            style={{
              //fill: "#5C697D",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.184208,
              strokeLinecap: "square",
              strokeLinejoin: "miter",
              strokeDasharray: "none",
              strokeOpacity: 0,
              paintOrder: "stroke fill markers",
            }}
            transform="matrix(0 1 1 0 -.132 -.206)"
          />
        </svg>
        {/* <Image
          src={logo}
          // width={45}
          // height={41}
          className="mr-2 hidden md:block"
          priority
          alt="Third Bracket"
        /> */}

        {/* <Image
          src={logoSm}
          // width={45}
          // height={41}
          className="mr-2 block md:hidden"
          priority
          alt="Third Bracket"
        /> */}

        <span className="self-center whitespace-nowrap text-lg md:text-xl  font-semibold dark:text-gray-200 text-gray-800">
          Third Bracket
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle
          iconLight={Moon}
          iconDark={Sun}
          theme={{
            root: {
              icon: "w-5 h-5 shrink-0  stroke-gray-900 dark:stroke-gray-100  ",
            },
          }}
        />
        <Link
          href="https://wa.me/881765692886"
          target="_blank"
          className="hidden md:block"
        >
          <Button
            color="light"
            size="sm"
            theme={{
              color: {
                light:
                  "border border-gray-700 bg-gray-800 text-gray-50 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-200 dark:text-gray-950 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-300",
              },
            }}
          >
            Let's Chat
            <SiWhatsapp className="ml-2 self-center w-4 h-4" />
            <PiArrowUpRightBold className="w-2 h-2 self-center fill-primary-400 dark:fill-primary-700" />
          </Button>
        </Link>
        <Link
          href="https://www.upwork.com/workwith/smamusabbirs"
          target="_blank"
          className="hidden md:block"
        >
          <Button
            color="light"
            size="sm"
            theme={{
              color: {
                light:
                  "border border-gray-800 bg-transparent text-gray-800 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-50  dark:border-gray-200  dark:text-gray-200 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-950",
              },
            }}
          >
            Collaborate on
            <SiUpwork className="ml-2 self-center w-5 h-5" />
            <PiArrowUpRightBold className="self-center w-2 h-2 fill-primary-400" />
          </Button>
        </Link>

        <NavbarToggle
          barIcon={Bar}
          theme={{
            icon: "w-6 h-6 shrink-0 stroke-gray-900 dark:stroke-gray-100 ",
          }}
        />
      </div>
      <NavbarCollapse
        theme={{
          // base: "bg-gray-100 border-b border-gray-300 dark:bg-gray-900 w-full md:block md:w-auto",
          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm [&_a]:font-medium",
        }}
        className="items-center"
      >
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="#">
            <Button
              size="sm"
              color="light"
              theme={{
                color: {
                  light:
                    "border border-gray-700 bg-gray-800 text-gray-50 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-200 dark:text-gray-950 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-300",
                },
              }}
              className="w-full mb-2"
            >
              Let's Chat
              <SiWhatsapp className="ml-2 self-center w-4 h-4" />
              <PiArrowUpRightBold className="w-2 h-2 self-center fill-primary-400 dark:fill-primary-700" />
            </Button>
          </Link>
          <Link href="#">
            <Button
              color="light"
              size="sm"
              theme={{
                color: {
                  light:
                    "border border-gray-800 bg-transparent text-gray-800 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-50  dark:border-gray-200  dark:text-gray-200 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-950",
                },
              }}
              className="w-full"
            >
              Collaborate on
              <SiUpwork className=" self-center w-4 h-4 ml-2" />
              <PiArrowUpRightBold className="self-center w-2 h-2 fill-primary-700 dark:fill-primary-400" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </MegaMenu>
  );
}
