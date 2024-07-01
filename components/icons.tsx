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
    className="h-8 w-8"
    fill="currentColor"
    width={size || width}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    id="Capa_1"
    viewBox="0 0 502.707 502.707"
    xmlSpace="preserve"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <g>
          <g>
            <path d="M469.423,202.01h-44.824V68.272c0-25.324-20.773-46.054-46.075-46.054H46.054C20.73,22.218,0,42.947,0,68.272v194.396 c0,25.367,20.73,46.054,46.054,46.054h42.494v133.89c0,20.881,17.062,37.878,37.878,37.878h84.255 c20.837,0,37.9-17.019,37.9-37.878V308.699h30.458v66.999c0,18.292,14.97,33.284,33.327,33.284h157.057 c18.335,0,33.284-14.949,33.284-33.284V235.272C502.707,216.959,487.694,202.01,469.423,202.01z M459.652,220.281 c5.716,0,10.332,4.595,10.332,10.289c0,5.673-4.616,10.289-10.332,10.289c-5.695,0-10.289-4.595-10.289-10.289 C449.363,224.897,453.957,220.281,459.652,220.281z M477.512,380.422H304.277V256.433h173.235V380.422z M430.143,220.302 c5.716,0,10.311,4.595,10.311,10.268c0,5.673-4.595,10.268-10.311,10.268c-5.652,0-10.268-4.595-10.268-10.268 C419.897,224.897,424.513,220.302,430.143,220.302z M368.17,45.708c7.464,0,13.482,6.018,13.482,13.46s-6.018,13.46-13.482,13.46 c-7.42,0-13.439-6.018-13.439-13.46C354.732,51.727,360.771,45.708,368.17,45.708z M329.623,45.73 c7.42,0,13.395,6.018,13.395,13.439s-5.975,13.439-13.395,13.439c-7.463,0-13.439-6.018-13.439-13.439 S322.224,45.73,329.623,45.73z M168.015,236.998c0-5.673,4.595-10.268,10.268-10.268c5.673,0,10.289,4.595,10.289,10.268 c0,5.673-4.616,10.289-10.289,10.289C172.609,247.287,168.015,242.671,168.015,236.998z M197.459,236.998 c0-5.695,4.616-10.289,10.311-10.289s10.289,4.595,10.289,10.289c0,5.673-4.595,10.289-10.289,10.289 C202.075,247.287,197.459,242.671,197.459,236.998z M219.914,447.96H117.28V266.378h102.655L219.914,447.96L219.914,447.96z M248.582,269.182v-24.569c0-20.794-17.062-37.857-37.878-37.857h-84.277c-20.816,0-37.878,17.062-37.878,37.857v24.569H34.88 V95.364h354.775V202.01h-77.31c-18.357,0-33.327,14.949-33.327,33.262v33.909H248.582z" />
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
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
    viewBox="-2.4 -2.4 20.80 20.80"
    className="h-8 w-8"
    fill="currentColor"
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
      <path
        d="M9 6h7v10H9V6zm2 2v6h3V8h-3zM0 14h7v2H0v-2zm0-8h7v2H0V6zm0 4h7v2H0v-2zM0 0h16v4H0V0z"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export const Cloudd: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 512 512"
    className="h-8 w-8"
    fill="currentColor"
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
      <g>
        <g>
          <path d="M416.036,224.219c0.282-3.724,0.426-7.487,0.426-11.283c0-81.713-66.241-147.953-147.954-147.953 c-78.235,0-142.279,60.727-147.588,137.614C54.292,203.3,0,258.012,0,324.799c0,67.22,54.998,122.218,122.218,122.218h277.804 C461.61,447.017,512,396.625,512,335.04v-0.001C512,278.886,470.109,232.05,416.036,224.219z M211.577,335.827l-24.684,24.684 l-58.787-58.787l58.787-58.787l24.684,24.684l-34.102,34.103L211.577,335.827z M255.367,389.453h-35.674l36.938-175.457h35.674 L255.367,389.453z M325.107,360.51l-24.684-24.684l34.102-34.103l-34.102-34.103l24.684-24.684l58.787,58.787L325.107,360.51z" />
        </g>
      </g>
    </g>
  </svg>
);

export const Ecom: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 20 20"
    className="h-8 w-8"
    fill="currentColor"
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
      <rect x={0} fill="none" width={20} height={20} />
      <g>
        <path d="M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6v1zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19 4 18.33 4 17.5 4.67 16 5.5 16zm9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
      </g>
    </g>
  </svg>
);

export const Operations: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    height={size || height}
    viewBox="0 0 507.496 507.496"
    className="h-8 w-8"
    fill="currentColor"
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
      <g>
        <g>
          <g>
            <path d="M254.88,262.344c8.671-12.813,14.798-27.503,17.753-43.228h43.551v-0.022V174.81h-43.551 c-3.02-15.833-9.103-30.458-17.774-43.249l30.695-30.717l-31.342-31.364l-30.738,30.717c-12.77-8.715-27.46-14.798-43.249-17.839 V38.849h-44.285v43.508c-15.79,3.085-30.458,9.124-43.206,17.839L61.994,69.479L30.609,100.8l30.738,30.76 c-8.671,12.791-14.776,27.395-17.796,43.249H0v44.306h43.551c3.063,15.725,9.146,30.415,17.796,43.228l-30.738,30.738 l31.385,31.321l30.695-30.76c12.791,8.671,27.46,14.841,43.249,17.861v43.551h44.328v-43.551 c15.747-3.041,30.458-9.189,43.249-17.817l30.738,30.717l31.342-31.321L254.88,262.344z M158.071,245.26 c-26.661,0-48.319-21.679-48.319-48.362c0-26.705,21.657-48.319,48.319-48.319c26.683,0,48.362,21.614,48.362,48.319 C206.432,223.581,184.754,245.26,158.071,245.26z" />
            <path d="M507.496,365.28v-33.694h-33.09c-2.243-12.015-6.881-23.124-13.525-32.852l23.34-23.34l-23.836-23.836l-23.318,23.34 c-9.728-6.622-20.924-11.238-32.852-13.568v-33.111h-33.694v33.09c-12.015,2.351-23.145,6.946-32.831,13.568l-23.426-23.34 l-23.836,23.814l23.34,23.383c-6.622,9.728-11.238,20.924-13.568,32.874h-33.068v33.694h33.068 c2.308,11.95,6.946,23.167,13.568,32.852l-23.34,23.34l23.836,23.814l23.34-23.383c9.685,6.665,20.88,11.282,32.831,13.611 v33.111h33.694v-33.111c11.993-2.287,23.124-6.946,32.831-13.525l23.34,23.296l23.814-23.814l-23.34-23.34 c6.665-9.685,11.238-20.967,13.525-32.852L507.496,365.28L507.496,365.28z M387.303,385.189 c-20.255,0-36.757-16.48-36.757-36.778c0-20.277,16.502-36.735,36.757-36.735c20.298,0,36.757,16.458,36.757,36.735 C424.06,368.731,407.602,385.189,387.303,385.189z" />
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </g>
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
