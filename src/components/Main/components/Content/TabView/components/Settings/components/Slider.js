import React from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { palette } from "ui";

function CustomSlider({ value, setValue }) {
  return (
    <div className="slider">
      <h4>Umkreis {value}km</h4>
      <Slider
        min={0.5}
        max={5}
        step={0.5}
        trackStyle={{ backgroundColor: "black", height: "2px" }}
        railStyle={{ backgroundColor: "#608FDC", height: "2px" }}
        handleStyle={{
          opacity: 1,
          border: 0,
          backgroundColor: palette.green,
          width: 26,
          height: 26,
          bottom: -6,
        }}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default CustomSlider;
