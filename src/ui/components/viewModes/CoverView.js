import React from "react";
import { DataCoverItem } from "..";

function CoverView({ data, action }) {
  return (
    <>
      {data.map((i, k) => (
        <DataCoverItem key={k} item={i} action={action} />
      ))}
    </>
  );
}

export default CoverView;
