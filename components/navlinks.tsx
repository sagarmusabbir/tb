import { links } from "@/site";
import { ListGroup, NavbarLink, theme } from "flowbite-react";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const NavLink: FC = function () {
  return (
    <>
      {links.map((link) => (
        <NavbarLink
          as={Link}
          key={link.id}
          href={link.to}
          className="flex items-center justify-between text-gray-800 dark:text-gray-200 md:hover:text-black dark:md:hover:text-white "
        >
          {link.name}
          <link.icon className="ml-2 self-center" />
          {/* <PiArrowUpRight className="ml-2 self-center" /> */}
        </NavbarLink>
      ))}
    </>
  );
};
export default NavLink;
