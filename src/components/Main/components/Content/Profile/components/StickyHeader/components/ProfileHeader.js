import React from "react";
import { useStore } from "store";
import { DropDownButton, DDItem } from "ui/components";
import { getAvatar } from "utils/imgUri";

function ProfileHeader({ setMainContent }) {
  const { avatar, name } = useStore((state) => state.currentUser.user);
  const logOutUser = useStore((state) => state.logOutUser);

  const logOut = () => {
    logOutUser();
    setMainContent("tabs");
  };

  return (
    <div className="profile-header">
      <img className="avatar" src={getAvatar(avatar)} alt="user-avatar" />
      <span>{name}</span>
      <DropDownButton>
        <DDItem noBorder label="Edit Profile" />
        <DDItem label="Settings" />
        <DDItem label="Logout" action={logOut} />
      </DropDownButton>
    </div>
  );
}

export default ProfileHeader;
