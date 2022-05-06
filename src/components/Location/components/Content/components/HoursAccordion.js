import React, { useRef } from "react";

import chevronDown from "assets/icons/chevron-down.png";
import { palette } from "ui";

function HoursAccordion({ data }) {
  const ref = useRef();
  const imgRef = useRef();
  const { is_open, will_close_at, will_re_open_at } = data.details;

  return (
    <div className="accordion">
      <div className="accordion-box">
        <div
          className="touch-btn"
          onClick={() => {
            if (ref.current.classList.contains("accordion-active")) {
              ref.current.classList.remove("accordion-active");
              imgRef.current.classList.remove("active-true");
            } else {
              ref.current.classList.add("accordion-active");
              imgRef.current.classList.add("active-true");
            }
          }}
        >
          <span style={{ color: is_open ? palette.green : "red" }}>
            {is_open ? "Offen" : "Geschlossen"}
          </span>
          <span className="sm">
            {is_open ? will_close_at : will_re_open_at}
          </span>
          <span className="sm"> Mehr sehen</span>
          <img ref={imgRef} src={chevronDown} alt="checvron-ico" />
        </div>
        <div ref={ref} className="accordion-content">
          <table>
            <tbody>
              {data.data.map((i, k) => (
                <tr key={k}>
                  <td>
                    <div>{weekDays[i.day_id - 1]}</div>
                  </td>
                  <td className="hours">
                    {i.hours.map((item, key) => (
                      <div key={key}>
                        {item.open_at + " - " + item.close_at}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HoursAccordion;

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
