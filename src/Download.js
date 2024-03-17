import * as React from "react";
const SvgDownload = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M17.81 13.75v3.75h-15v-3.75H.31v3.75c0 1.375 1.125 2.5 2.5 2.5h15c1.375 0 2.5-1.125 2.5-2.5v-3.75zm-1.25-4.375-1.762-1.763-3.238 3.226V0h-2.5v10.838L5.822 7.613 4.06 9.375l6.25 6.25z"
    />
    <path
      fill="currentColor"
      d="M.31 13.75h2.5V20H.31zM17.81 13.75h2.5V20h-2.5z"
    />
  </svg>
);
export default SvgDownload;
