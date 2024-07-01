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

export const Right: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

export const Web: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="currentColor"
    width={size || width}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"web_fill"}</title>
      <g
        id="\u9875\u9762-1"
        stroke="none"
        strokeWidth={0}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Development"
          transform="translate(-96.000000, -48.000000)"
          fillRule="nonzero"
        >
          <g id="web_fill" transform="translate(96.000000, 48.000000)">
            <path
              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
              id="MingCute"
              fillRule="nonzero"
            />
            <path
              d="M19,4 C20.1046,4 21,4.89543 21,6 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,6 C3,4.89543 3.89543,4 5,4 L19,4 Z M19,10 L5,10 L5,17 C5,17.51285 5.38604429,17.9355092 5.88337975,17.9932725 L6,18 L18,18 C18.51285,18 18.9355092,17.613973 18.9932725,17.1166239 L19,17 L19,10 Z M6,6 C5.44772,6 5,6.44772 5,7 C5,7.55228 5.44772,8 6,8 C6.55228,8 7,7.55228 7,7 C7,6.44772 6.55228,6 6,6 Z M9,6 C8.44772,6 8,6.44772 8,7 C8,7.55228 8.44772,8 9,8 C9.55228,8 10,7.55228 10,7 C10,6.44772 9.55228,6 9,6 Z M12,6 C11.4477,6 11,6.44772 11,7 C11,7.55228 11.4477,8 12,8 C12.5523,8 13,7.55228 13,7 C13,6.44772 12.5523,6 12,6 Z"
              id="\u5F62\u72B6"
              fill="currentColor"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const Content: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 24 24"
    className="h-8 w-8"
    fill="currentColor"
    stroke="currentColor"
    width={size || width}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
    </g>
  </svg>
);

export const Bar: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 52 52"
    fill="currentColor"
    stroke="currentColor"
    width={size || width}
    {...props}

    // enableBackground="new 0 0 52 52"
    // xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path d="M46.5,14h-41C4.7,14,4,13.3,4,12.5v-3C4,8.7,4.7,8,5.5,8h41C47.3,8,48,8.7,48,9.5v3C48,13.3,47.3,14,46.5,14 z" />
      <path d="M46.5,28.9h-41c-0.8,0-1.5-0.7-1.5-1.5v-3C4,23.7,4.7,23,5.5,23h41c0.8,0,1.5,0.7,1.5,1.5v3 C48,28.2,47.3,28.9,46.5,28.9z" />
      <path d="M46.5,44h-41C4.7,44,4,43.3,4,42.5v-3C4,38.7,4.7,38,5.5,38h41c0.8,0,1.5,0.7,1.5,1.5v3 C48,43.3,47.3,44,46.5,44z" />
    </g>
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
