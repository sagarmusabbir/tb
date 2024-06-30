"use client";
import { IconSvgProps } from "@/types";
import {
  PiMoon,
  PiMoonBold,
  PiRows,
  PiRowsBold,
  PiRowsLight,
  PiSun,
  PiSunBold,
} from "react-icons/pi";

export default function MenuBar() {
  return (
    <PiRows className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200" />
  );
}

export const Infrastructure: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    aria-hidden="true"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path d="M46.25 46.251H29.404c-.999 0-1.875.875-1.875 1.875V62.5h-5.654c-1 0-1.875.875-1.875 1.875v13.75c0 1 .875 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875h-5.642v-8.749h30.035V62.5h-5.613c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H72.49V48.126c0-1-.874-1.875-1.875-1.875H53.75V37.5h5.61c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H40.61c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h5.64v8.751z"></path>
  </svg>
);

export const Cloud: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    viewBox="0 0 32 32"
    height={size || height}
    width={size || width}
    {...props}
  >
    <path d="M0 20q0 2.208 1.088 4.032T4 26.944 8 28h18.016q2.464 0 4.224-1.76T32 22.016V20q0-2.464-1.76-4.224t-4.224-1.76h-.16q-.096 0-.16.032.32-1.152.32-2.048 0-3.296-2.368-5.632T18.016 4q-2.88 0-5.056 1.824t-2.784 4.544Q9.024 10.016 8 10.016q-3.296 0-5.664 2.336T0 18.016V20z"></path>
  </svg>
);

export function MoonIcon() {
  return (
    <PiMoon className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200" />
  );
}

export function SunIcon() {
  return (
    <PiSun className="w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200" />
  );
}

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // fill="#717D79"
    // stroke="#717D79"
    aria-hidden="true"
    fill="#0B9069"
    stroke="#0B9069"
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="transparent">
      <rect width="20" height="20" x="2" y="2" rx="2"></rect>
      <path d="M16 18h-2a1 1 0 010-2h2V8h-2a1 1 0 010-2h2a2 2 0 012 2v8a2 2 0 01-2 2zm-5-1a1 1 0 00-1-1H8V8h2a1 1 0 000-2H8a2 2 0 00-2 2v8a2 2 0 002 2h2a1 1 0 001-1z"></path>
    </g>
  </svg>
);

export function Loga() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      fill="#0B9069"
      stroke="#0B9069"
      className="icon flat-color"
      data-name="Flat Color"
      viewBox="0 0 24 24"
    >
      <g fill="#EDFCF5">
        <rect width="20" height="20" x="2" y="2" rx="2"></rect>
        <path d="M16 18h-2a1 1 0 010-2h2V8h-2a1 1 0 010-2h2a2 2 0 012 2v8a2 2 0 01-2 2zm-5-1a1 1 0 00-1-1H8V8h2a1 1 0 000-2H8a2 2 0 00-2 2v8a2 2 0 002 2h2a1 1 0 001-1z"></path>
      </g>
    </svg>
  );
}
