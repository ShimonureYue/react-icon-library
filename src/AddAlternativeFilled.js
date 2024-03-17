import * as React from "react";
const SvgAddAlternativeFilled = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.31 12c0 5.52 4.48 10 10 10s10-4.48 10-10-4.48-10-10-10-10 4.48-10 10m11-5v4h4v2h-4v4h-2v-4h-4v-2h4V7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAddAlternativeFilled;
