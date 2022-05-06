import React from "react";

const LookIcon = ({ color = "#fff", width = 30, height = 30 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 43.271 28.846">
      <path
        d="M21.64 6.008a8.382 8.382 0 0 0-2.347.377 4.173 4.173 0 0 1-5.688 5.689 8.392 8.392 0 1 0 10.389-5.739 8.772 8.772 0 0 0-2.354-.327Zm21.371 7.319A24.1 24.1 0 0 0 21.64 0 24.1 24.1 0 0 0 .263 13.327a2.413 2.413 0 0 0 0 2.191A24.1 24.1 0 0 0 21.64 28.846a24.1 24.1 0 0 0 21.371-13.327 2.44 2.44 0 0 0 0-2.192ZM21.64 25.244A20.442 20.442 0 0 1 3.764 14.427 20.443 20.443 0 0 1 21.64 3.605a20.449 20.449 0 0 1 17.871 10.822A20.442 20.442 0 0 1 21.64 25.244Z"
        fill={color}
      />
    </svg>
  );
};

export default LookIcon;
