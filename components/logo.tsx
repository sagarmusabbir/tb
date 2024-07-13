import { IconSvgProps } from "@/types";

export const LogoIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    height={size || height}
    width={size || width}
    viewBox="20 20 1000 1000"
    {...props}
  >
    <path
      d="M48 48v160h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16zm168-16h-40a8 8 0 0 0 0 16h32v160h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8z"
      className="fill-gray-800 dark:fill-gray-200"
      // style={{
      //   fill: "#000",
      // }}
      transform="matrix(5.1667 0 0 5.1667 -141.338 -141.338)"
    />
    <path
      // fill="#000"
      className="fill-gray-800 dark:fill-gray-200"
      d="M8 5h2v2H8ZM6 7h2v2H6ZM4 9h2v2H4Zm-2 2h2v2H2Zm2 2h2v2H4Zm2 2h2v2H6Zm2 2h2v2H8Zm8-12h-2v2h2zm2 2h-2v2h2zm2 2h-2v2h2zm2 2h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2zm-2 2h-2v2h2z"
      // style={{
      //   fill: "none",
      // }}
      transform="translate(94.416 94.416) scale(35.46536)"
    />
  </svg>
);
