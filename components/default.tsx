import {
  Button,
  DarkThemeToggle,
  MegaMenu,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
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
import { Bar, Logo, SvgComponent } from "./icons";
import { LogoIcon } from "./logo";

export function HeaderNavigation() {
  return (
    <MegaMenu className="dark:bg-gray-800 sticky top-0 z-50">
      <NavbarBrand href="/">
        {/* <Image
          src="./logolight.svg"
          width={36}
          height={36}
          className="mr-2 fill-gray-800 dark:fill-gray-200"
          priority
          alt="Third Bracket"
        /> */}

        <LogoIcon className="mr-2 fill-primary-400  dark:fill-primary-600 p-1 h-6 w-6 sm:h-9 sm:w-9 bg-gray-800 dark:bg-gray-200  rounded-md  " />

        <span className="self-center whitespace-nowrap text-lg  font-semibold dark:text-gray-100 text-gray-900">
          Third Bracket
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle />
        <Link href="#" className="hidden md:block">
          <Button size="sm" color="light">
            Portfolio
            <PiDownloadBold className="ml-2 self-center w-4 h-4" />
          </Button>
        </Link>
        <Link href="#" className="hidden md:block">
          <Button color="dark" size="sm">
            Hire on
            <SiUpwork className="ml-2 self-center w-4 h-4" />
            <PiArrowUpRightBold className="self-center w-2 h-2" />
          </Button>
        </Link>

        <NavbarToggle barIcon={Bar} />
      </div>
      <NavbarCollapse className=" items-center">
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="#">
            <Button size="sm" color="light" className="w-full mb-2">
              Download Portfolio
              <PiDownloadBold className="ml-2 self-center w-4 h-4" />
            </Button>
          </Link>
          <Link href="#">
            <Button color="dark" size="sm" className="w-full">
              Hire on
              <SiUpwork className=" self-center w-4 h-4 ml-2" />
              <PiArrowUpRightBold className="self-center w-2 h-2" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </MegaMenu>
  );
}
