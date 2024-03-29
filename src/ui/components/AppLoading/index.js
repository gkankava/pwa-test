import React from "react";

// eslint-disable-next-line
export default ({ size = "fs" }) => (
  <svg
    width={size === "fs" ? "100%" : size}
    height={size === "fs" ? window.innerHeight : size}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className="lds-ripple"
  >
    <circle cx="50" cy="50" r="0" fill="none" stroke="#a9da3a" strokeWidth="1">
      <animate
        attributeName="r"
        calcMode="spline"
        values="0;40"
        keyTimes="0;1"
        dur="1"
        keySplines="0 0.2 0.8 1"
        begin="-0.5s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        values="1;0"
        keyTimes="0;1"
        dur="1"
        keySplines="0.2 0 0.8 1"
        begin="-0.5s"
        repeatCount="indefinite"
      />
    </circle>

    <circle cx="50" cy="50" r="0" fill="none" stroke="#3a7ce0" strokeWidth="1">
      <animate
        attributeName="r"
        calcMode="spline"
        values="0;40"
        keyTimes="0;1"
        dur="1"
        keySplines="0 0.2 0.8 1"
        begin="0s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        calcMode="spline"
        values="1;0"
        keyTimes="0;1"
        dur="1"
        keySplines="0.2 0 0.8 1"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);
