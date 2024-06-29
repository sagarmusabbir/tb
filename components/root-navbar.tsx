"use client";
import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { PiMoon, PiRows, PiSun } from "react-icons/pi";
import { FlowbiteLogo } from "./flowbite-logo";

export function RootNavbar() {
  return (
    <header className="sticky top-0 z-50 border border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800">
      <Navbar fluid>
        <NavbarBrand as={Link} href="/">
          {/* <Image
            alt="Flowbite React Logo"
            src="/logo.svg"
            width={36}
            height={36}
            className="mr-3 h-6 sm:h-9"
          /> */}
          <FlowbiteLogo />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Third Bracket
          </span>
        </NavbarBrand>
        <div className="flex gap-2 md:order-2">
          <Link href="#">
            <Button gradientDuoTone="greenToBlue" target="__blank">
              Getting Started
            </Button>
          </Link>
          <DarkThemeToggle
            iconDark={PiMoon}
            iconLight={PiSun}
            className="self-center"
          />
          <NavbarToggle barIcon={PiRows} theme={{ icon: "h-5 w-5 shrink-0" }} />
        </div>
        <NavbarCollapse>
          {/* <NavbarLink as={Link} href="/" active>
            <p>Home</p>
          </NavbarLink> */}
          <NavbarLink
            href="#"
            // target="__blank"
          >
            Quickstart
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#" target="__blank">
            Projects
          </NavbarLink>
          <NavbarLink href="#">Blog</NavbarLink>

          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
