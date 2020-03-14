import React from "react";

export const SolidArrow = props => (
  <svg
    width="7"
    height="6"
    viewBox="0 0 5 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    onClick={props.onClick}
  >
    <path
      d="M0.197651 1.20165L1.92432 2.92831C2.18432 3.18831 2.60432 3.18831 2.86432 2.92831L4.59098 1.20165C5.01098 0.781646 4.71098 0.0616455 4.11765 0.0616455H0.664318C0.0709847 0.0616455 -0.222348 0.781646 0.197651 1.20165Z"
      fill="#67757E"
    />
  </svg>
);
