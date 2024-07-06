import { IconSvgProps } from "@/types";
import * as React from "react";
export const SvgComponent: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={467.691}
    height={482.167}
    viewBox="0 0 20.096 20.718"
    {...props}
  >
    <g
      style={{
        fill: "#000",
      }}
    >
      <path d="m10.356 16.772 4.794-2.397.48-7.191-5.274 1.437Zm-5.752-2.397 4.794 2.397V8.621L4.124 7.184Zm5.274-9.589L4.124 6.224 9.878 7.66l5.754-1.437Z" />
    </g>
    <g
      style={{
        fill: "none",
      }}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.07156}
        d="M5.179 1.038H1.036v18.644h4.143"
      />
    </g>
    <g
      style={{
        fill: "none",
      }}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.07156}
        d="M14.917 1.036h4.143V19.68h-4.143"
      />
    </g>
  </svg>
);
