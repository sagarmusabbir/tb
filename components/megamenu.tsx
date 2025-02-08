"use client";

import {
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";
import Image from "next/image";
import Link from "next/link";
import { FaServer } from "react-icons/fa";

import { GiServerRack } from "react-icons/gi";
import { GrResources } from "react-icons/gr";
import {
  MdArrowOutward,
  MdBusiness,
  MdDesignServices,
  MdDeveloperBoard,
  MdDeveloperMode,
} from "react-icons/md";
import { PiStack } from "react-icons/pi";
import { SiWordpress } from "react-icons/si";
import { TbUniverse } from "react-icons/tb";

const MegaHeader = () => {
  return (
    <Navbar>
      <Navbrand
        logo={
          <Image
            src="tblogo.svg"
            alt="Brand Logo"
            width={344}
            height={92}
            className="h-5 sm:h-7 w-auto dark:invert"
          />
        }
      >
        <span className="text-[8px] sm:text-xs font-thin tracking-tighter leading-none text-gray-950 dark:text-white">
          .CO.UK
        </span>
      </Navbrand>

      {/* Desktop Navigation */}
      <NavItem>
        <Megamenu label="Solutions">
          <div>
            <div className="grid grid-cols-6 gap-6">
              {/* Solutions Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <MdDeveloperMode />
                    <span>Solutions</span>
                  </h3>

                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Development
                      </h4>
                      <div>
                        <Navlink href="/static-apps" isDropdownItem>
                          Static Web Apps
                        </Navlink>
                        <Navlink href="/dynamic-apps" isDropdownItem>
                          Dynamic Web Apps
                        </Navlink>

                        <Navlink href="/headless" isDropdownItem>
                          Headless Solutions
                        </Navlink>
                        <Navlink href="/ecommerce" isDropdownItem>
                          Ecommerce Development
                        </Navlink>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Infrastructure
                      </h4>
                      {/* Infrastructure links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        Self-Host Headless
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Custom CMS & APIs
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Serverless Setup
                      </Navlink>

                      <Navlink href="/ecommerce" isDropdownItem>
                        Optimized Wordpress
                      </Navlink>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        DevOps
                      </h4>
                      {/* DevOps links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        Scalable Serverless
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Automation
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Edge Computing
                      </Navlink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm flex items-center gap-4 text-gray-700 dark:text-gray-300  ">
                    <MdDesignServices />
                    <span>Services</span>
                  </h3>

                  {/* Similar structure for WordPress, Full Stack, Front-End sections */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Wordpress
                      </h4>
                      <div>
                        <Navlink href="/static-apps" isDropdownItem>
                          Wordpress Theme Development
                        </Navlink>
                        <Navlink href="/dynamic-apps" isDropdownItem>
                          Bug Fixes
                        </Navlink>

                        <Navlink href="/headless" isDropdownItem>
                          Mainttenance
                        </Navlink>
                        <Navlink href="/ecommerce" isDropdownItem>
                          Customization
                        </Navlink>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Full Stack
                      </h4>
                      {/* Infrastructure links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        React/Next.js Development
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        API & Backend Development
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Performance Optimization
                      </Navlink>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Fornt-end
                      </h4>
                      {/* DevOps links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        UI/UX Design
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Business Design
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Social Media Design
                      </Navlink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm flex items-center gap-4 text-gray-700 dark:text-gray-300 ">
                    <MdBusiness />
                    <span>Business</span>
                  </h3>

                  {/* SEO & Content Strategy, Content, Social Media sections */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        SEO & Strategy
                      </h4>
                      <div>
                        <Navlink href="/static-apps" isDropdownItem>
                          On-Page SEO
                        </Navlink>
                        <Navlink href="/dynamic-apps" isDropdownItem>
                          Keyword Research
                        </Navlink>

                        <Navlink href="/headless" isDropdownItem>
                          Business Strategy
                        </Navlink>
                        <Navlink href="/ecommerce" isDropdownItem>
                          Content Strategy
                        </Navlink>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Content
                      </h4>
                      {/* Infrastructure links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        Website Content
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Blog Content
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Seo Content
                      </Navlink>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Social Media
                      </h4>
                      {/* DevOps links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        Social Media Management
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Social Media Marketing
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Paid Advertising & PPC
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Social Media Campaign
                      </Navlink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Column */}
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-sm flex items-center gap-4 text-gray-800 dark:text-gray-300">
                    <GrResources />
                    <span>Resources</span>
                  </h3>

                  {/* Templates, Themes, Packages & Library sections */}
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Templates
                      </h4>
                      <div>
                        <Navlink href="/static-apps" isDropdownItem>
                          Elementor Templates
                        </Navlink>
                        <Navlink href="/dynamic-apps" isDropdownItem>
                          Tailwind Css Templates
                        </Navlink>

                        <Navlink href="/headless" isDropdownItem>
                          Html5 Templates
                        </Navlink>
                        <Navlink href="/ecommerce" isDropdownItem>
                          Icons
                        </Navlink>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Themes
                      </h4>
                      {/* Infrastructure links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        Wordpress Themes
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Next.js Themes
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Taileind Css Themes
                      </Navlink>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase text-gray-800/50 dark:text-gray-200/50 py-1.5 font-semibold">
                        Package & Libraries
                      </h4>
                      {/* DevOps links */}
                      <Navlink href="/static-apps" isDropdownItem>
                        Bracketui Components
                      </Navlink>
                      <Navlink href="/dynamic-apps" isDropdownItem>
                        Bracketui Package
                      </Navlink>
                      <Navlink href="/notion-cms" isDropdownItem>
                        Bracketui Nextjs Block
                      </Navlink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partner Networks - Spans 2 columns */}
              <div className="col-span-2 space-y-4 rounded-lg p-4 bg-gray-100 dark:bg-gray-800/50">
                <div className="relative h-40 w-full    overflow-hidden">
                  <Image
                    src="/tb.svg"
                    alt="Partner Networks"
                    fill
                    className="object-contain dark:invert p-8"
                  />
                </div>

                <div>
                  <h3 className="  mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <TbUniverse />

                    <span>Third Bracket Universe</span>
                  </h3>
                  <div className=" space-y-4">
                    <Link
                      href="#"
                      className=" text-gray-950 dark:text-gray-50 mb-4 opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200 flex items-center gap-2 text-sm font-anta"
                    >
                      <Image
                        src="/path.svg"
                        alt="Partner Networks"
                        width={120}
                        height={24}
                        className="w-auto h-4 dark:invert"
                      />
                      UI
                      <span>
                        <MdArrowOutward className="size-3" />
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className=" text-gray-950 dark:text-gray-50 mb-4 opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200 flex items-center gap-2  text-sm "
                    >
                      Verify Properties Limited
                      <span>
                        <MdArrowOutward className="size-3" />
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-950 dark:text-gray-50 mb-4 opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200 flex items-center gap-2 text-sm "
                    >
                      Habiganj Properties
                      <span>
                        <MdArrowOutward className="size-3" />
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-950 dark:text-gray-50 mb-4 opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200 flex items-center gap-2 text-sm "
                    >
                      NB Beauty Studio
                      <span>
                        <MdArrowOutward className="size-3" />
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-950 dark:text-gray-50 mb-4 opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-200 flex items-center gap-2 text-sm "
                    >
                      Nicky Limited
                      <span>
                        <MdArrowOutward className="size-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Megamenu>

        <Navlink href="/pricing">Pricing</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/contact">Contact</Navlink>
      </NavItem>

      {/* Mobile Navigation */}
      <MobileNav>
        <Megamenu label="Solutions">
          <div className="space-y-4">
            {/* Infrastructure Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50  ">
                <GiServerRack />
                <span>Development</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Static Web Apps
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Dynamic Web Apps
                </Navlink>

                <Navlink href="/headless" isDropdownItem>
                  Headless Solutions
                </Navlink>
                <Navlink href="/ecommerce" isDropdownItem>
                  Ecommerce Development
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <FaServer />
                <span>Infrastructure</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Self-Host Headless
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Custom CMS & APIs
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Serverless Setup
                </Navlink>

                <Navlink href="/ecommerce" isDropdownItem>
                  Optimized Wordpress
                </Navlink>
              </div>
            </div>

            {/* DevOps Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <MdDeveloperBoard />
                <span>DevOps</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Scalable Serverless
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Automation
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Edge Computing
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>

        <Megamenu label="Services">
          <div className="space-y-4">
            {/* Wordpress Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50  ">
                <SiWordpress />
                <span>Wordpress</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Wordpress Theme Development
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Bug Fixes
                </Navlink>

                <Navlink href="/headless" isDropdownItem>
                  Mainttenance
                </Navlink>
                <Navlink href="/ecommerce" isDropdownItem>
                  Customization
                </Navlink>
              </div>
            </div>

            {/* Full Stack Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <PiStack />
                <span>Full Stack</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  React/Next.js Development
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  API & Backend Development
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Performance Optimization
                </Navlink>
              </div>
            </div>

            {/* DevOps Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <MdDesignServices />
                <span>Fornt-end</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  UI/UX Design
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Business Design
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Social Media Design
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>
        <Megamenu label="Business">
          <div className="space-y-4">
            {/* Infrastructure Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50  ">
                <MdBusiness />
                <span> SEO & Strategy</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Static Web Apps
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Dynamic Web Apps
                </Navlink>

                <Navlink href="/headless" isDropdownItem>
                  Headless Solutions
                </Navlink>
                <Navlink href="/ecommerce" isDropdownItem>
                  Ecommerce Development
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <FaServer />
                <span>Infrastructure</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Self-Host Headless
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Custom CMS & APIs
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Serverless Setup
                </Navlink>

                <Navlink href="/ecommerce" isDropdownItem>
                  Optimized Wordpress
                </Navlink>
              </div>
            </div>

            {/* DevOps Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <MdDeveloperBoard />
                <span>DevOps</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Scalable Serverless
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Automation
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Edge Computing
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>
        <Megamenu label="Resources">
          <div className="space-y-4">
            {/* Infrastructure Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50  ">
                <GiServerRack />
                <span>Development</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Static Web Apps
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Dynamic Web Apps
                </Navlink>

                <Navlink href="/headless" isDropdownItem>
                  Headless Solutions
                </Navlink>
                <Navlink href="/ecommerce" isDropdownItem>
                  Ecommerce Development
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <FaServer />
                <span>Infrastructure</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Self-Host Headless
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Custom CMS & APIs
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Serverless Setup
                </Navlink>

                <Navlink href="/ecommerce" isDropdownItem>
                  Optimized Wordpress
                </Navlink>
              </div>
            </div>

            {/* DevOps Section */}
            <div>
              <h3 className="mb-1.5  text-sm flex items-center gap-2.5   text-gray-800/50 dark:text-gray-200/50 ">
                <MdDeveloperBoard />
                <span>DevOps</span>
              </h3>
              <div className=" overflow-hidden  border-l border-gray-200 dark:border-gray-800 border-dotted ml-1.5 px-4">
                <Navlink href="/static-apps" isDropdownItem>
                  Scalable Serverless
                </Navlink>
                <Navlink href="/dynamic-apps" isDropdownItem>
                  Automation
                </Navlink>
                <Navlink href="/notion-cms" isDropdownItem>
                  Edge Computing
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>

        <Navlink href="/pricing">Pricing</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/contact">Contact</Navlink>
      </MobileNav>
    </Navbar>
  );
};

export default MegaHeader;
