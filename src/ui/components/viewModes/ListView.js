import React from "react";
import { DataListItem, BSListItem } from "..";

function ListView({ data, action, bs }) {
  if (bs) {
    return (
      <>
        {data.map((i, k) => (
          <BSListItem
            key={k}
            item={i}
            action={action}
            icon={i.category?.icon}
          />
        ))}
      </>
    );
  }
  return (
    <div>
      {data.map((i, k) => (
        <DataListItem
          key={k}
          item={i}
          action={action}
          icon={i.category?.icon}
        />
      ))}
    </div>
  );
}

export default ListView;
