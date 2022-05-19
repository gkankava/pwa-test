import React from "react";
import { DataListItem } from "..";

function ListView({ data, action, categoriesList }) {
  const getIconName = (id) => {
    if (categoriesList) {
      let n = categoriesList.filter((i) => i.id === id);
      return n[0]?.name;
    }
  };
  return (
    <div>
      {data.map((i, k) => (
        <DataListItem
          key={k}
          item={i}
          action={action}
          icon={getIconName(i.category_id)}
        />
      ))}
    </div>
  );
}

export default ListView;
