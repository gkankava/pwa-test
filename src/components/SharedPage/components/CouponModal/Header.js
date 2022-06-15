import React from "react";
import { BackButton } from "ui/components";

function Header({ closeModal, title }) {
  return (
    <div
      style={{
        height: 75,
        display: "flex",
        flexDirection: "row",
        zIndex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <BackButton action={closeModal} />
      <span style={{ fontSize: 18, fontWeight: 300 }}>{title}</span>
      <div style={{ width: 24 }} />
    </div>
  );
}

export default Header;
