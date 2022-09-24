import React from "react";
import { Touchable } from "ui/components";
import { getOriginal } from "utils/imgUri";

function ListItem({ item, handlePress }) {
  const { name, date, latest_message, created_at, company } = item;
  return (
    <Touchable className="chats-list-item" action={handlePress}>
      <img src={getOriginal(company?.logo)} alt="" />
      <div className="content-container">
        <h2>{company?.name}</h2>
        <h3>{latest_message?.message}</h3>
      </div>
      <div className="meta-container">
        <h3>
          {latest_message?.created_at ? latest_message?.created_at : created_at}
        </h3>
        {latest_message?.seen === false &&
          latest_message?.sender_dashboard_user_id && (
            <div className="unseen-indicator" />
          )}
      </div>
    </Touchable>
  );
}

export default ListItem;
