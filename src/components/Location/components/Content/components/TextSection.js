import React from "react";
import { theme } from "ui";

import HoursAccordion from "./HoursAccordion";
function TextSection({ data }) {
  return (
    <div className="text-section">
      <h1>{data.description_title}</h1>
      <p>{data.description}</p>
      <div>
        <HoursAccordion data={data.business_opening_hours} />
      </div>
      <p className="bold">{data.web_page}</p>
      <p className="bold">
        {data.street} {data.street_number}
      </p>
      <p className="bold">
        {data.country}, {data.post_code} {data.city}
      </p>
    </div>
  );
}

export default TextSection;
