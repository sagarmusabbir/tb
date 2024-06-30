import {
  Button,
  DarkThemeToggle,
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
import MenuBar, { Logo, MoonIcon, SunIcon } from "./icons";
import Image from "next/image";

export function HeaderNavigation() {
  return (
    <Navbar className="bg-gray-100 dark:bg-gray-800">
      <NavbarBrand href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          className="mr-2 h-6 sm:h-9"
          width={36}
          height={36}
          alt="Flowbite React Logo"
        />

        {/* <Logo className="self-center h-6 w-6 sm:h-12 sm:w-12" /> */}

        <span className="self-center whitespace-nowrap text-lg  font-semibold dark:text-gray-200 text-gray-800">
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

        <NavbarToggle barIcon={MenuBar} />
      </div>
      <NavbarCollapse className="h-screen sm:h-auto items-center">
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="#">
            <Button size="sm" color="light" className="w-full mb-2">
              Download CV
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
    </Navbar>
  );
}
