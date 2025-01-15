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
          theme={{
            active: {
              off: " shadow-sm md:shadow-none shadow-gray-100/40 dark:shadow-gray-800/40  text-gray-700 hover:text-black   dark:text-gray-300  dark:hover:text-white  md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
            },
          }}
          as={Link}
          key={link.id}
          href={link.to}
          className="flex items-center justify-between   "
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
