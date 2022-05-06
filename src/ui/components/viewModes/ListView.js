import React from "react";
import { DataListItem } from "..";

function ListView({ data, action }) {
  return (
    <div>
      {data.map((i, k) => (
        <DataListItem key={k} item={i} action={action} />
      ))}
    </div>
  );
}

export default ListView;
