import { LinkItem } from "./lib/types";

import {
  PiArrowDown,
  PiArrowUpRight,
  PiArrowUUpRight,
  PiArticle,
  PiArticleBold,
  PiBracketsAngle,
  PiBracketsAngleFill,
  PiBuildingOffice,
  PiCodeBlock,
  PiColumns,
  PiCube,
  PiHouseBold,
  PiPersonSimpleWalkBold,
  PiSquare,
  PiTerminal,
  PiTerminalWindowBold,
} from "react-icons/pi";

export const links: LinkItem[] = [
  { id: 0, name: "About", to: "/#about", icon: PiArrowDown },
  {
    id: 1,
    name: "Services",
    to: "/#services",
    icon: PiArrowDown,
  },
  { id: 2, name: "Portfolio", to: "/#portfolio", icon: PiArrowUpRight },
  { id: 3, name: "Insights", to: "/#services", icon: PiArrowUpRight },
  { id: 4, name: "Contact", to: "/#contact", icon: PiArrowDown },

  // { id: 3, name: "Search", to: "/search" },
];

export const siteData = {
  title: "Third Bracket",
  author: "Third Bracket",
  headerTitle: "Third Bracket",
  profileUrl: "/logo.svg",
  headerDescription: "Your web Transformation Starts Here",
  footerText: "© All rights reserved",
  language: "en-us",
  locale: "en-US",
  websiteUrl: "thirdbracket.co.uk",
};

// export const footerNavigation: FooterNavItem[] = [
//   {
//     name: "GitHub",
//     href: "https://github.com/sagarmusabbir",
//     icon: GithubIcon,
//   },
//   // {
//   //   name: "Twitter",
//   //   href: "/",
//   //   icon: Twitter,
//   // },
//   // {
//   //   name: "Slack",
//   //   href: "https://join.slack.com/t/analytics-roundtable/shared_invite/zt-1m5vonbd3-4~ZRqbz_sO4iWrn691DhwA",
//   //   icon: Slack,
//   // },
//   {
//     name: "Linkedin",
//     href: "https://www.linkedin.com/in/musabbirsagar/",
//     icon: LinkedInIcon,
//   },
// ];

export const postsPerPage = 5;

export const email = "sagarmusabbir@gmail.com";
