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

import Image from "next/image";
import { Bar, Moon, Sun } from "./icons";

import logo from "@/public/logo.svg";

import logoSm from "@/public/logo-sm.svg";

export function HeaderNavigation() {
  return (
    <MegaMenu className="   sticky  top-0 z-50 max-w-screen-xl px-4 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 dark:bg-opacity-20 shadow-sm">
      <NavbarBrand href="/">
        <Image
          src={logo}
          alt="Third Bracket"
          width={40}
          height={40}
          className="h-6 w-auto dark:invert opacity-80 hover:opacity-100 ease-in-out duration-300 transition-opacity"
        />

        {/* <Image
          src={logoSm}
          // width={45}
          // height={41}
          className=" block md:hidden"
          priority
          alt="Third Bracket"
        /> */}

        {/* <span className="self-center whitespace-nowrap text-lg sm:text-xl lg:text-2xl  font-semibold dark:text-gray-200 dark:hover:text-gray-100 text-gray-700 hover:text-gray-800">
          Third Bracket
        </span> */}
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle
          iconLight={Moon}
          iconDark={Sun}
          theme={{
            root: {
              base: "p-2   rounded-lg ",
              icon: "h-5 w-5 shrink-0  stroke-gray-900 dark:stroke-gray-100   ",
            },
          }}
        />
        <Link
          href="https://wa.me/8801765692886"
          target="_blank"
          className="hidden md:block"
        >
          <Button
            color="light"
            size="sm"
            theme={{
              color: {
                light:
                  "border border-gray-700 bg-gray-800 text-gray-50 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-100 dark:text-gray-950 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-300",
              },
            }}
          >
            Let's Chat
            <SiWhatsapp className="ml-2 self-center w-4 h-4" />
            {/* <PiArrowUpRightBold className="w-2 h-2 self-center fill-primary-400 dark:fill-primary-700" /> */}
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
            base: "p-2 enabled:focus:ring-gray-300 dark:enabled:focus:ring-gray-700   focus:ring-2 rounded-lg md:hidden",
            icon: "w-5 h-5 shrink-0 stroke-gray-900 dark:stroke-gray-100 ",
          }}
        />
      </div>
      <NavbarCollapse
        theme={{
          // base: "bg-gray-100 border-b border-gray-300 dark:bg-gray-900 w-full md:block md:w-auto",

          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm font-medium",
        }}
        className="items-center "
      >
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="https://wa.me/8801765692886" target="_blank">
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
              {/* <PiArrowUpRightBold className="w-2 h-2 self-center fill-primary-400 dark:fill-primary-700" /> */}
            </Button>
          </Link>
          <Link
            href="https://www.upwork.com/workwith/smamusabbirs"
            target="_blank"
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
