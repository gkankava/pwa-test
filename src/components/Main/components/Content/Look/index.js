import React, { useEffect, useState } from "react";
import { useStore } from "store";

import { CheckListItem } from "ui/components";
import SceneContainer from "../../SceneContainer";

import listView from "assets/icons/listView.png";
import gridView from "assets/icons/gridView.png";
import coverView from "assets/icons/coverView.png";

function Look({ setActiveContent }) {
  const onClose = () => {
    setActiveContent("tabs");
  };
  const mode = useStore((state) => state.look);
  const setViewMode = useStore((state) => state.setViewMode);
  const [selected, select] = useState(mode);

  useEffect(() => {
    if (selected !== mode) {
      setViewMode(selected);
      setActiveContent("tabs");
    }
    // eslint-disable-next-line
  }, [selected]);

  return (
    <SceneContainer onClose={onClose}>
      <h3>Wähle deine Ansicht</h3>
      <div className="look-scene">
        <CheckListItem
          icon={listView}
          label="Listen Ansicht"
          id="list"
          active={selected}
          action={select}
        />
        <CheckListItem
          icon={gridView}
          label="Bild Ansicht"
          id="grid"
          active={selected}
          action={select}
        />
        <CheckListItem
          icon={coverView}
          label="Bild-Text Ansicht"
          id="cover"
          active={selected}
          action={select}
        />
      </div>
    </SceneContainer>
  );
}

export default Look;
