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
import { SiUpwork } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

import {
  PiArrowBendDoubleUpRightThin,
  PiArrowBendRightUpThin,
  PiArrowElbowRightThin,
  PiArrowFatLineRight,
  PiArrowFatLineRightFill,
  PiArrowRightFill,
  PiArrowUpRightBold,
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
        <Image
          src={logo}
          // width={45}
          // height={41}
          className="mr-2 hidden md:block"
          priority
          alt="Third Bracket"
        />
        <Image
          src={logoSm}
          // width={45}
          // height={41}
          className="mr-2 block md:hidden"
          priority
          alt="Third Bracket"
        />
        {/* <Image
          src={logolight}
          // width={45}
          // height={41}
          className="mr-2 dark:hidden"
          priority
          alt="Third Bracket"
        />
        <Image
          src={logodark}
          // width={45}
          // height={41}
          className="mr-2 hidden dark:block"
          priority
          alt="Third Bracket "
        /> */}

        {/* <LG
          // className="mr-2 fill-gray-900 stroke-gray-900 dark:stroke-gray-100  dark:fill-gray-100  h-6 w-6 sm:w-9 sm:h-9 sm:border  sm:border-gray-200 sm:dark:border-gray-700 rounded-md p-0 sm:p-0.5"
          className="mr-2 h-6 w-6 sm:h-9 sm:w-9   sm:bg-gray-200 sm:dark:bg-gray-800 sm:rounded-md  sm:p-1.5"
        /> */}

        <span className="self-center whitespace-nowrap text-xl  font-semibold dark:text-gray-200 text-gray-800">
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
        <Link href="#" className="hidden md:block">
          <Button
            color="light"
            theme={{
              color: {
                light:
                  "border border-gray-700 bg-gray-800 text-gray-50 focus:ring-2 focus:ring-primary-600 enabled:hover:bg-gray-700 dark:border-gray-300 dark:bg-gray-200 dark:text-gray-950 dark:focus:ring-primary-300 dark:enabled:hover:border-gray-300 dark:enabled:hover:bg-gray-300",
              },
            }}
          >
            Let's Begin
            <PiArrowFatLineRight className="ml-2 self-center w-5 h-5" />
          </Button>
        </Link>
        <Link href="#" className="hidden md:block">
          <Button
            color="light"
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
          list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-base [&_a]:font-medium",
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
              Let's Begin
              <PiArrowFatLineRight className="ml-2 self-center w-4 h-4" />
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
              <PiArrowUpRightBold className="self-center w-2 h-2" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </MegaMenu>
  );
}
