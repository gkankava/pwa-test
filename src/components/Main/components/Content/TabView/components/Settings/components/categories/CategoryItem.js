import React from "react";
import { palette } from "ui";
import { Touchable } from "ui/components";

import SMIcon from "ui/sm-icons";

function CategoryItem({ item, active, toogle }) {
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
          name={item.icon || "icon1"}
          size={25}
          color={active ? palette.green : "white"}
        />
      </div>
      <span style={{ color: active ? palette.green : "white" }}>
        {item.name}
      </span>
    </Touchable>
  );
}

export default CategoryItem;
