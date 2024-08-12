"use client";
import { Button, Tabs } from "flowbite-react";
import {
  Cloudd,
  Content,
  Ecom,
  Migration,
  Operations,
  Right,
  Support,
  Web,
} from "./icons";
import {
  PiArrowRight,
  PiCheck,
  PiCheckCircle,
  PiCheckCircleFill,
  PiGreaterThan,
} from "react-icons/pi";
import Link from "next/link";

export function CTASectionWithTabsAndMobileApp() {
  return (
    <section
      className="bg-white antialiased  dark:bg-black bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat
                  bg-blend-luminosity"
    >
      <div
        className="mx-auto max-w-screen-xl px-4 py-14 sm:py-20 lg:py-24"
        id="services"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <Tabs
            style="pills"
            theme={{
              tablist: {
                // base: "flex text-center gap-x-5 gap-y-10  lg:gap-x-8 ",
                base: "flex text-center  gap-x-6 sm:gap-x-8  gap-y-8 ",
                tabitem: {
                  // base: "relative  flex items-center justify-center rounded-t-lg p-2 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
                  base: "relative flex items-center justify-center rounded-t-lg p-2.5     text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-gray-300 ",

                  styles: {
                    pills: {
                      active: {
                        on: "rounded-lg bg-primary-400 text-white focus:ring-0 ",
                        // on: "rounded-lg bg-gray-900 text-gray-900 focus:ring-0 dark:bg-gray-800 dark:text-white",
                        off: "rounded-lg bg-gray-200 text-gray-500 focus:ring-0 dark:bg-gray-800 dark:text-gray-400",
                        // off: "rounded-lg bg-gray-100 text-gray-500 focus:ring-0 dark:bg-gray-800 dark:text-gray-400",
                      },
                    },
                  },
                },
              },
            }}
          >
            <Tabs.Item
              active
              title={
                <>
                  {/* <span className="absolute -bottom-8 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
                    Web
                  </span> */}
                  <span className="absolute  -bottom-8 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    Web
                  </span>
                  <Web className="h-6 w-6  sm:h-7 sm:w-7  " />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white ">
                    Crafting Web Application That Drive Success
                  </h2>
                  <p className="mt-4 text-base  text-gray-500  lg:text-lg">
                    We specialize in creating custom web applications tailored
                    to your business needs. With years of experience and a
                    proven track record, we deliver exceptional solutions that
                    combine innovation with affordability. Our team of skilled
                    developers is committed to turning your ideas into reality.
                    Our Expertise:
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Next.js Development
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        E-commerce Development
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Custom Application Development
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Cloud-Based Web Application Development
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Web Infrastructure Development
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        WordPress
                      </span>
                    </li>
                  </ul>
                  <p className="mt-6 text-base lg:text-lg  text-gray-500 ">
                    We understand the challenges businesses face in today's
                    digital landscape. That's why we offer cost-effective
                    solutions without compromising quality. Our focus on
                    delivering exceptional results has earned us a reputation as
                    top-rated freelancers in the industry. Let's work together
                    to build a web application that drives your business
                    forward.
                  </p>
                </div>
                <div>
                  <a
                    href="https://github.com/sagarmusabbir?tab=repositories"
                    target="_blank"
                    title="Open Source Contributions - Third Bracket Solutions"
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Get Started Today
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  {/* <span className="absolute -bottom-8 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
                    Migration
                  </span> */}

                  <span className="absolute  -bottom-8 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    Migration
                  </span>

                  <Migration className=" h-6 w-6  sm:h-7 sm:w-7" />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Modernize and Upgrade Your Web Application
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 lg:text-lg">
                    Is your website slow, outdated, or struggling to keep up
                    with your business growth? It's time for a digital
                    transformation. We specialize in modernizing and migrating
                    existing web applications to deliver exceptional
                    performance, security, and scalability. Key Services:
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Legacy System Migration
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        CMS Migration
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Website Performance Optimization
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Revamp WordPress
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Cloud Migration
                      </span>
                    </li>
                  </ul>
                  <p className="mt-6 text-base lg:text-lg  text-gray-500">
                    We offer a free consultation to assess your current system
                    and provide tailored solutions. Our expertise in cloud
                    computing, DevOps, and IT consulting allows us to engineer
                    robust infrastructures that support your business goals. We
                    prioritize scalability, ensuring your website can grow with
                    you. Ready to unlock your website's full potential?
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.musabbirsagar.com/articles"
                    title="Blog - Thried Bracket"
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Book Free Consultation
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  {/* <span className="absolute -bottom-8 text-sm md:text-base font-medium text-gray-500 dark:text-gray-400">
                    Operations
                  </span> */}
                  <span className="absolute  -bottom-8 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    Operations
                  </span>

                  <Operations className="h-6 w-6  sm:h-7 sm:w-7" />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Robust Operations for Optimal Performance and Security
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    We offer comprehensive operations and management services to
                    ensure your web application runs smoothly and efficiently.
                    Our team of experts handles everything from server setup to
                    security management, allowing you to focus on your core
                    business. Our Services:
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        DevOps Operations
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Cloud Computing Operation
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Virtual Server Management
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Virtual Server Management
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Content Delivery Network
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Security Management
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-base sm:text-xl font-normal text-gray-500 dark:text-gray-400">
                    We provide on demand services to meet your specific needs,
                    whether you require ongoing maintenance, cloud migration, or
                    security enhancements. Our goal is to optimize your
                    infrastructure for maximum performance and reliability. Let
                    us handle the technical complexities so you can focus on
                    growing your business.
                  </h3>
                </div>
                <div>
                  <a
                    href="https://www.musabbirsagar.com/tag/Third%20Bracket"
                    target="_blank"
                    title="Case Studies - Third Bracket"
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Contact Us
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  <span className="absolute  -bottom-8 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    Content
                  </span>
                  <Content className="h-6 w-6  sm:h-7 sm:w-7" />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Content That Connects: Expert Writing to Elevate Your Brand
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our skilled writers craft compelling content that resonates
                    with your audience. From SEO-optimized articles to
                    persuasive copy, we deliver high-quality content that drives
                    results. Our Services:
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        SEO Content Writing
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Blog and Articles
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Copyrighting
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Social Media Content
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Academic Writing
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    We provide 100% original content, meticulously researched
                    and expertly written. Our commitment to excellence ensures
                    your message is delivered effectively.
                  </h3>
                </div>
                <div>
                  <a
                    href="https://www.musabbirsagar.com/tag/Third%20Bracket"
                    target="_blank"
                    title="Ecommerce - Thirdbracket"
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Let's Create Content That Matters
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item
              title={
                <>
                  <span className="absolute  -bottom-8 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    Support
                  </span>
                  <Support className="h-6 w-6  sm:h-7 sm:w-7" />
                </>
              }
            >
              <div className="mt-8 space-y-4 sm:space-y-6 lg:space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                    Strategic Guidance and Support: Partnering for Digital
                    Success
                  </h2>
                  <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                    Our expert consultants offer strategic guidance and support
                    to help you navigate the complex world of web development.
                    With a deep understanding of industry trends and best
                    practices, we empower you to make informed decisions. Our
                    Services:
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
                  <ul className="space-y-4">
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Strategic Consulting
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Technical Consultation
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Support Services
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Specialized Consultation
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <div>
                        <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                      </div>
                      <span className="text-base font-medium text-gray-900 dark:text-white">
                        Emerging Trends
                      </span>
                    </li>
                  </ul>
                  <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                    We provide step by step advice to address your specific
                    challenges and opportunities. Our goal is to be your trusted
                    partner in achieving digital excellence.
                  </h3>
                </div>
                <div>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Let's Collaborate
                    <Right className="ml-1.5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </Tabs.Item>
          </Tabs>
          <div className="hidden lg:block">
            <div className="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 shadow-xl dark:border-gray-800 dark:bg-gray-800">
              <div className="absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-2xl bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[72px] h-[32px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[124px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute left-[-17px] top-[178px] h-[46px] w-[3px] rounded-l-lg bg-gray-800"></div>
              <div className="absolute right-[-17px] top-[142px] h-[64px] w-[3px] rounded-r-lg bg-gray-800"></div>
              <div className="h-[572px] w-[272px] overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-800">
                <img
                  src="/web.png"
                  className="h-[572px] w-[272px] dark:hidden"
                  alt=""
                />
                <img
                  src="/web.png"
                  className="hidden h-[572px] w-[272px] dark:block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-16 ">
          <div className="hidden lg:block">
            <img
              className="w-full object-cover dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-1.png"
              alt="Feature illustration"
            />
            <img
              className="hidden w-full object-cover dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
              alt="Feature illustration"
            />
          </div>
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                Affordable Custom Web Development Just Got Real!
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                Founders of&nbsp;
                <span className="font-semibold text-gray-900 dark:text-white">
                  Third Barcket
                </span>
                &nbsp; have journeyed from the $5/hour hustle to commanding
                rates of $200-250/hour, experiencing all the highs and lows that
                a business owner faces while developing their web application
              </p>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                While navigating the pricing page for "custom web development"
                and enduring the financial roller coaster of the early stages of
                a startup, they found Third Bracket—a 'custom' web development
                solution that anybody can afford. Lets see why you need us.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-4 dark:border-gray-800 sm:pt-6 lg:pt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-2.5">
                  <div>
                    <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    User Centred Development
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div>
                    <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Direct Support
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div>
                    <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Development Workflow
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div>
                    <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Limitless business automation
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div>
                    <PiCheckCircleFill className="h-5 w-5 shrink-0 fill-primary-700 dark:fill-primary-300" />
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Knowledge management
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://wa.me/881765692886" target="_blank">
                <Button
                  color="dark"
                  className="[&>span]:items-center [&>span]:px-5 [&>span]:py-2.5"
                >
                  Lets Talk
                  <svg
                    aria-hidden="true"
                    className="-mr-1 ml-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
              <Link
                href="https://www.musabbirsagar.com/projects"
                target="_blank"
              >
                <Button color="light" outline>
                  Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
