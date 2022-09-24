import React from "react";
import { useStore } from "store";

import { Button, CloseButton } from "ui/components";
import Slider from "./components/Slider";
import Filters from "./components/Filters";

function SettingsSharedTab() {
  const setCurrentScene = useStore((state) => state.setCurrentScene);

  const onClose = () => {
    setCurrentScene("tabView");
  };

  const radius = useStore((state) => state.filters.radius);
  const setRadius = useStore((state) => state.setRadius);

  return (
    <div className="settings-shared-tab">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CloseButton action={onClose} />
        <Button action={onClose} label="OK" />
      </div>

      <Slider value={radius} setValue={setRadius} />
      <Filters />
    </div>
  );
}

export default SettingsSharedTab;
