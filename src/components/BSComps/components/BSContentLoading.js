import React from "react";
import { AppLoading } from "ui/components";

function BSContentLoading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppLoading size={window.innerHeight / 2 - 50} />
    </div>
  );
}

export default BSContentLoading;
