import React from "react";
import { DataGridItem } from "..";

function GridView({ data, action }) {
  return (
    <div className="grid-view">
      {data.map((i, k) => (
        <DataGridItem key={k} item={i} action={action} />
      ))}
    </div>
  );
}

export default GridView;
