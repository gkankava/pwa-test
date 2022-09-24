import React from "react";
import { BackButton } from "ui/components";
import { getOriginal } from "utils/imgUri";

function Header({ info }) {
  return (
    <div className="header">
      <BackButton styleType="light" />
      {info?.data?.company?.logo && (
        <img
          className="avatar"
          src={getOriginal(info?.data?.company?.logo)}
          alt="company-logo"
        />
      )}
      {info?.data?.company?.name && <h2>{info?.data?.company?.name}</h2>}
    </div>
  );
}

export default Header;
