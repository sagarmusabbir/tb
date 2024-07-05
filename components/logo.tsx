import { IconSvgProps } from "@/types";

export const LogoIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="none"
    // strokeWidth={current}
    strokeWidth="10%"

    height={size || height}
    width={size || width}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M48 48v160h32a8 8 0 010 16H40a8 8 0 01-8-8V40a8 8 0 018-8h40a8 8 0 010 16zm168-16h-40a8 8 0 000 16h32v160h-32a8 8 0 000 16h40a8 8 0 008-8V40a8 8 0 00-8-8z"></path>
  </svg>
);
