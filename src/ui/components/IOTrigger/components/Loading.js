import React from "react";
import AppLoading from "ui/components/AppLoading";

function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}>
      <AppLoading size={50} />
    </div>
  );
}

export default Loading;
