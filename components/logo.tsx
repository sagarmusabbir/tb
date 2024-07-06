import { IconSvgProps } from "@/types";

export const LogoIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    stroke="currentColor"
    // strokeWidth={current}
    strokeWidth="2%"
    height={size || height}
    width={size || width}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M48 48v160h32a8 8 0 010 16H40a8 8 0 01-8-8V40a8 8 0 018-8h40a8 8 0 010 16zm168-16h-40a8 8 0 000 16h32v160h-32a8 8 0 000 16h40a8 8 0 008-8V40a8 8 0 00-8-8z">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path d="M275.2,512L480,409.6l20.5-307.2l-225.3,61.4V512z M29.5,409.6L234.3,512V163.8L9,102.4L29.5,409.6z M254.8,0L9,61.4 l245.8,61.4l245.8-61.4L254.8,0z" />
      </g>
    </path>
  </svg>
);
