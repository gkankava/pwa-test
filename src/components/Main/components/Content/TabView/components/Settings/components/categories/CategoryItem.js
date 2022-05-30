import React from "react";
import { palette } from "ui";
import { Touchable } from "ui/components";

import SMIcon from "ui/sm-icons";

function CategoryItem({ item, active, toogle }) {
  console.log(item);
  return (
    <Touchable
      action={() => {
        toogle(item.id);
      }}
      className="category-item"
    >
      <div
        className="icon-container"
        style={{ borderColor: active ? palette.green : "white" }}
      >
        <SMIcon
          name={item.icon}
          size={25}
          color={active ? palette.green : "white"}
        />
      </div>
      <span style={{ color: active ? palette.green : "white" }}>
        {item.name}
      </span>
      <span
        style={{
          color: active ? palette.green : "white",
          marginLeft: "auto",
          fontSize: 16,
        }}
      >
        {item.locations_count}
      </span>
    </Touchable>
  );
}

export default CategoryItem;
