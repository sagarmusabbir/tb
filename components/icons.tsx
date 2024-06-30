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
