import { IconSvgProps } from "@/types";

const LG: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    // width={1080}
    // height={1080}
    height={size || height}
    width={size || width}
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"Third bracket"}</title>
    <path
      className="stroke-gray-800 dark:stroke-gray-200 fill-none "
      //stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="7%"
      d="M14 3h-4v18h4"
      // style={{
      //   fill: "none",
      // }}
      transform="matrix(1.18767 0 0 1.18767 -10.69 -2.237)"
    />
    <path
      className="stroke-gray-800 dark:stroke-gray-200 fill-none "
      //stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="7%"
      d="M14 3h-4v18h4"
      // style={{
      //   fill: "none",
      // }}
      transform="matrix(-1.18767 0 0 1.18767 34.69 -2.237)"
    />
    <g
      className="  fill-primary-500 dark:fill-primary-400"
      // style={{
      //   fill: "#000",
      // }}
      transform="translate(4.704 4.99) scale(.02531)"
    >
      <path d="M449.941 289.311c-7.776.561-19.092.575-27.773-1.759-1.456-.392-1.392-.9.11-1.035 42.289-3.855 79.637-19.556 99.267-40.649 5.588-6.01 9.994-12.601 13.124-19.657 1.42-3.198 2.305-6.582 3.458-9.878 1.239-3.54 1.472-5.389 1.261-6.3-.34-1.469-2.555.89-2.992 2.332-.572 1.894-1.147 3.782-1.935 5.606-1.649 3.813-3.791 7.442-6.159 10.973-.839 1.251-2.157 1.196-2.935-.095-3.32-5.514-6.846-10.952-8.097-16.337-.343-1.469-.677-1.493-.747.012-.446 9.55 5.413 20.82.539 29.067-5.013 8.473-17.277 14.737-28.44 19.676-22.49 9.954-52.029 12.965-77.62 20.062-27.411 7.604-44.657 21.038-54.235 37.87-.746 1.311-1.416 1.182-1.612-.314a63.544 63.544 0 0 0-.468-3.018c-3.329-18.51-9.921-37.439-9.407-55.582.487-17.096 7.88-33.25 23.162-45.358 3.613-2.849 7.613-5.465 11.899-7.889 2.638-1.5 11.562-5.771 13.023-6.136 37.231-9.21 68.682-29.474 83.756-52.833 4.299-6.668 7.476-13.767 9.461-21.163.9-3.351 1.301-6.824 1.952-10.236.658-3.442.692-5.297.453-6.236-.373-1.459-2.23 1.034-2.457 2.524-.294 1.949-.588 3.893-1.083 5.802-1.028 3.975-2.519 7.828-4.217 11.613-.618 1.377-1.839 1.472-2.714.245-3.577-5.015-7.32-9.93-9.052-15.08-.48-1.429-.783-1.417-.67.089.7 9.529 7.236 19.966 3.831 28.764-3.504 9.042-13.739 16.806-23.143 23.121-18.948 12.721-44.991 19.453-67.039 29.731-42.105 19.636-53.247 53.553-47.503 89.927.235 1.49-.542 1.983-1.84 1.212a46.292 46.292 0 0 0-1.787-1.007c-1.331-.71-3.28-2.114-4.36-3.167-5.092-4.963-11.117-9.648-18.188-13.99-20.734-12.721-45.842-22.369-63.223-37.164-8.623-7.341-17.91-16.221-20.361-25.603-2.384-9.125 5.297-18.755 7.078-28.14.281-1.481-.016-1.533-.655-.165-2.308 4.917-6.582 9.379-10.71 13.954-1.01 1.12-2.212.884-2.668-.551-1.258-3.957-2.298-7.953-2.867-12.017-.272-1.952-.346-3.917-.417-5.888-.055-1.505-1.615-4.195-2.154-2.788-.346.909-.521 2.751-.26 6.249.257 3.467.263 6.961.774 10.392 1.132 7.576 3.479 14.988 6.992 22.102 12.32 24.921 41.261 48.629 77.204 62.017 1.413.526 1.35 1.086-.159 1.129-7.959.229-17.555-2.265-24.144-4.529-1.426-.49-1.814.04-.759 1.117 4.642 4.734 12.139 9.042 21.576 9.489 3.118.162 5.891-.765 8.721-1.649 4.287-1.34 4.554.229 7.005 2.02 3.983 2.895 7.662 5.949 10.927 9.189 13.804 13.768 19.312 30.658 17.853 47.697a62.287 62.287 0 0 1-.184 1.82c-.113 1.006-.631 2.977-1.215 4.365-1.524 3.615-3.492 7.084-5.609 10.506-.793 1.281-2.521 1.717-3.819.943-2.2-1.314-4.296-2.688-6.165-4.189-1.176-.945-1.304-.836-.374.348a568.081 568.081 0 0 0 5.073 6.375c.949 1.172 1.06 3.145.248 4.418-4.718 7.43-9.002 14.984-9.669 23.666a64.284 64.284 0 0 0-.19 5.506c.01 1.508-.608 1.707-1.532.514-8.22-10.576-21.598-17.553-29.496-28.418-1.649-2.266-3.026-4.691-4.202-7.229-.633-1.367-.909-2.879-.694-3.338.214-.459.192-.541-.074-.199s-.93-.508-1.42-1.938c-1.107-3.24-1.967-6.605-2.665-10.039-.737-3.613-2.142-7.424-.536-11.812 1.362-3.727 4.394-7.518 6.463-11.252 4.073-7.398 7.592-14.732 10.97-22.062.631-1.369.48-1.447-.452-.266-4.942 6.252-12.684 11.334-18.045 17.375-1 1.129-1.891.893-2.121-.598-5.59-36.398-26.521-65.318-72.604-71.221-24.128-3.087-50.986-1.579-72.904-7.935-10.875-3.155-22.99-7.439-29.076-14.988-5.918-7.344-2.871-19.275-5.098-28.565-.352-1.466-.643-1.39-.667.116-.085 5.431-2.154 11.251-4.036 17.121-.462 1.435-1.655 1.713-2.662.591-2.77-3.091-5.358-6.31-7.549-9.78-1.052-1.667-1.921-3.43-2.797-5.199-.667-1.353-3.194-3.164-3.109-1.659.055.97.655 2.724 2.326 5.805 1.659 3.054 3.097 6.239 4.973 9.159 4.14 6.444 9.324 12.24 15.45 17.283 21.466 17.666 57.589 27.405 95.858 24.859 1.505-.101 1.677.438.321 1.096-7.164 3.476-16.938 5.144-23.875 5.78-1.502.138-1.637.78-.232 1.331 6.175 2.411 14.783 3.265 23.571-.205 2.91-1.132 5.055-3.115 7.277-5.083 3.36-2.98 4.247-1.659 7.215-1.035 4.819 1.004 9.428 2.28 13.736 3.896 18.241 6.888 30.196 20.028 35.857 36.166 6.01 17.128 5.483 37.163 7.944 55.812a71.95 71.95 0 0 0 4.443 17.166c.554 1.402.129 3.318-.991 4.33-1.686 1.527-3.299 3.082-4.743 4.707-1 1.125-1.891.893-2.121-.598-5.59-36.398-26.521-65.318-72.602-71.221-24.128-3.088-50.985-1.578-72.904-7.935-10.875-3.155-22.99-7.439-29.076-14.988-5.918-7.344-2.87-19.275-5.098-28.565-.352-1.466-.643-1.389-.667.116-.085 5.432-2.154 11.252-4.036 17.121-.462 1.435-1.655 1.713-2.662.59-2.769-3.091-5.358-6.31-7.549-9.78-1.053-1.667-1.922-3.43-2.797-5.199-.667-1.353-3.195-3.164-3.109-1.659.055.97.655 2.724 2.325 5.805 1.659 3.054 3.097 6.239 4.973 9.159 4.14 6.444 9.324 12.237 15.45 17.283 21.466 17.667 57.589 27.405 95.857 24.86 1.505-.102 11.304 1.258 14.272 1.881 4.819 1.004 9.428 2.281 13.736 3.896 18.24 6.889 30.193 20.027 35.857 36.166 6.01 17.127 5.483 37.164 7.944 55.809 2.503 19.029 11.723 33.305 23.788 46.842 1.004 1.127.765 1.426-.603.787-5.976-2.791-13.605-4.545-22.372-3.191-1.49.229-1.457.445.049.523 14.826.742 22.39 11.977 29.584 19.77 1.671 1.807 3.363 3.6 5.242 5.254 2.947 2.598 2.185 9.088 2.613 13.098.465 4.373.848 8.779 1.224 13.188 1.043 38.594-3.51 64.049-5.196 72.002-.312 1.475.569 2.322 2.038 1.977 5.68-1.342 8.008-.811 14.795.689 7.751 1.713 64.588 2.809 62.005 0-2.583-2.809-14.826-84.279-13.874-86.83 3.681-9.844 4.758-20.318 4.22-31.02-.076-1.506.545-3.719 1.487-4.893 4.538-5.646 10.468-10.672 19.93-12.504 1.48-.287 1.472-.486-.037-.475-7.999.064-14.733 2.047-20.165 4.789-1.347.68-2.484.713-2.595-.018-.11-.732.446-2.354 1.232-3.639 8.422-13.783 13.838-28.051 12.653-45.15-.594-8.605-1.925-17.393-2.922-26.111-.172-1.5.646-3.492 1.802-4.459a481.419 481.419 0 0 0 7.17-6.123c1.139-.988 1.037-1.123-.303-.428-1.711.887-3.541 1.643-5.438 2.328-1.417.516-1.536.246-.175-.4a29.736 29.736 0 0 1 2.143-.914c1.41-.537 1.373-.754-.117-.516a40.287 40.287 0 0 0-3.332.686c-1.463.367-2.714-.465-2.797-1.973-.346-6.312-.251-12.527.72-18.541 2.723-16.885 12.928-31.867 31.304-41.729 4.342-2.316 9.082-4.35 14.112-6.15 3.097-1.115 3.779-2.568 8.069-.188 2.833 1.57 5.591 3.17 8.996 3.801 10.386 1.967 19.633-.371 25.836-3.834 1.341-.727 1.13-1.311-.375-1.201zm-187.425 98.021c1.361-3.727 4.394-7.52 6.462-11.252.441-.799.869-1.598 1.292-2.393.704-1.328 1.857-1.334 2.628-.041 3.819 6.385 8.461 12.32 13.626 18.119 1.003 1.127.762 1.426-.603.789a38.57 38.57 0 0 0-21.285-3.301c-1.497.189-2.625-.105-2.47-.756.093-.386.206-.77.35-1.165zm39.165 63.066c-8.21-10.631-21.652-17.617-29.575-28.516-4.804-6.596-7.375-14.49-9.051-22.74-.429-2.09-1.062-4.244-1.215-6.539-.101-1.506 1.3-2.744 2.803-2.615 14.131 1.205 21.527 12.059 28.55 19.666 1.671 1.805 3.363 3.598 5.242 5.254 2.943 2.598 2.185 9.088 2.613 13.098.771 7.252 1.334 14.586 1.985 21.885.129 1.505-.431 1.701-1.352.507zm45.423-84.591c.101-.24.208-.18.202.133-.003.312-.119.502-.218.434-.095-.071-.085-.325.016-.567zm2.138 26.908c-.055 6.719-.792 13.305-3.023 19.408-.517 1.418-1.291 1.338-1.615-.135a422.202 422.202 0 0 1-1.139-5.332c-.808-3.947-3.507-9.9-1.493-13.271 1.288-2.148 2.354-4.371 3.394-6.602.404-.869.805-1.766 1.209-2.68.605-1.381 1.738-1.445 2.173 0 .896 2.975.522 5.879.494 8.612z" />
      <circle cx={316.993} cy={148.098} r={19.863} />
      <circle cx={271.093} cy={157.278} r={19.862} />
      <circle cx={173.213} cy={168.832} r={19.863} />
      <circle cx={191.573} cy={211.672} r={19.862} />
      <circle cx={226.295} cy={143.235} r={19.862} />
      <circle cx={373.092} cy={139.331} r={19.863} />
      <circle cx={331.617} cy={101.953} r={19.863} />
      <circle cx={391.765} cy={229.637} r={19.863} />
      <circle cx={371.901} cy={267.774} r={19.863} />
      <circle cx={176.545} cy={122.528} r={19.862} />
      <circle cx={119.424} cy={158.474} r={19.862} />
      <circle cx={139.287} cy={204.316} r={19.863} />
      <circle cx={126.566} cy={109.991} r={19.863} />
      <circle cx={379.212} cy={88.927} r={19.863} />
      <circle cx={450.614} cy={207.052} r={19.863} />
      <circle cx={432.254} cy={249.892} r={19.862} />
      <circle cx={495.492} cy={171.892} r={19.863} />
      <circle cx={491.839} cy={223.995} r={19.863} />
      <circle cx={78.689} cy={310.776} r={19.862} />
      <circle cx={38.968} cy={275.96} r={19.863} />
      <circle cx={311.127} cy={324.143} r={19.863} />
      <circle cx={530.174} cy={135.552} r={19.862} />
      <circle cx={539.458} cy={184.132} r={19.862} />
      <circle cx={408.566} cy={330.636} r={19.862} />
      <circle cx={365.222} cy={39.725} r={19.863} />
      <circle cx={459.736} cy={321.083} r={19.862} />
      <circle cx={506.175} cy={290.697} r={19.862} />
      <circle cx={545.899} cy={258.677} r={19.863} />
      <circle cx={101.389} cy={66.836} r={19.862} />
      <circle cx={219.327} cy={42.356} r={19.863} />
      <circle cx={284.891} cy={19.862} r={19.862} />
      <circle cx={357.6} cy={182.042} r={19.863} />
      <circle cx={211.622} cy={278.154} r={19.862} />
      <circle cx={105.948} cy={258.677} r={19.863} />
      <circle cx={149.486} cy={272.814} r={19.862} />
      <circle cx={189.21} cy={342.876} r={19.862} />
      <circle cx={133.488} cy={338.944} r={19.862} />
      <circle cx={50.485} cy={219.292} r={19.863} />
      <circle cx={76.468} cy={163.092} r={19.863} />
      <circle cx={30.623} cy={174.42} r={19.863} />
      <circle cx={79.528} cy={115.796} r={19.862} />
      <circle cx={219.327} cy={90.129} r={19.863} />
      <circle cx={319.377} cy={58.382} r={19.863} />
      <circle cx={425.369} cy={103.721} r={19.863} />
      <circle cx={422.31} cy={149.622} r={19.862} />
      <circle cx={469.513} cy={78.244} r={19.863} />
      <circle cx={519.599} cy={90.129} r={19.863} />
      <circle cx={417.747} cy={53.464} r={19.863} />
      <circle cx={259.052} cy={207.376} r={19.862} />
      <circle cx={219.327} cy={384.538} r={19.862} />
      <circle cx={265.031} cy={62.216} r={19.863} />
      <circle cx={274.211} cy={108.116} r={19.862} />
      <circle cx={169.348} cy={77.516} r={19.863} />
      <circle cx={146.426} cy={33.605} r={19.863} />
      <circle cx={311.127} cy={243.291} r={19.863} />
      <circle cx={308.067} cy={197.391} r={19.863} />
    </g>
  </svg>
);

export default LG;
