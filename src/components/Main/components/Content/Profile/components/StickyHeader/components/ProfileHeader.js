import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import { DropDownButton, DDItem, BackButton, Touchable } from "ui/components";
import { getAvatar } from "utils/imgUri";

import chatIcon from "assets/icons/chat/createChatIcon@3x.png";
function ProfileHeader({ setMainContent, type = "dropdown" }) {
  const { avatar, name } = useStore((state) => state.currentUser.user);
  const logOutUser = useStore((state) => state.logOutUser);
  const navigate = useNavigate();

  const logOut = () => {
    logOutUser();

    setMainContent("tabs");
  };

  const handleChat = () => {
    navigate("chats");
  };

  return (
    <div className="profile-header">
      {type === "back" && <BackButton styleType="light" />}
      <img className="avatar" src={getAvatar(avatar)} alt="user-avatar" />
      <span>{name}</span>
      <Touchable className="chat-ico" action={handleChat}>
        <img className="chat-icon" src={chatIcon} alt="new-chat" />
      </Touchable>
      {type === "dropdown" && (
        <DropDownButton>
          <DDItem
            noBorder
            label="Edit Profile"
            action={() => navigate("edit")}
          />
          <DDItem label="Settings" />
          <DDItem label="Logout" action={logOut} />
        </DropDownButton>
      )}
    </div>
  );
}

export default ProfileHeader;
