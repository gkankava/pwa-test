import React from "react";

const UserIcon = ({ color = "#fff", width = 30, height = 30 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30.136 27.412">
      <circle
        cx={6.545}
        cy={6.545}
        transform="translate(8.523)"
        fill={color}
        r={6.545}
      />
      <path
        d="M0 27.413c0-7.31 5.032-13.247 15.067-13.247s15.07 5.937 15.07 13.247"
        fill={color}
      />
    </svg>
  );
};

export default UserIcon;
