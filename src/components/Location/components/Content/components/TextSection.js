import React from "react";
// import { theme } from "ui";
import SocialInfoSection from "./SocialInfoSection";

import HoursAccordion from "./HoursAccordion";
function TextSection({ data }) {
  return (
    <div className="text-section">
      <h1>{data.description_title}</h1>
      <p>{data.description}</p>
      <div style={{ marginBottom: 10 }}>
        <HoursAccordion data={data.business_opening_hours} />
      </div>
      {/* <p className="bold">{data.web_page}</p> */}
      <p className="bold">
        {data.street} {data.street_number}
      </p>
      <p className="bold">
        {data.country}, {data.post_code} {data.city}
      </p>
      <SocialInfoSection
        sCount={data.subscribed_users_count}
        cICount={data.checked_in_users}
      />
    </div>
  );
}

export default TextSection;
