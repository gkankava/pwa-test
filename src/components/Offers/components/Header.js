import React from "react";

import { BackButton, DDItem, DropDownButton, Touchable } from "ui/components";

import { getOriginal } from "utils/imgUri";
import { useStore } from "store";

import likeIco from "assets/icons/heart.png";
import likeIcoActive from "assets/icons/heart_active.png";

function Header({ location }) {
  console.log(location);
  const { logo, title, sub_title } = location;
  const isAuthenticated = useStore(
    (state) => state.currentUser.isAuthenticated
  );

  const setPrivateModalVisible = useStore(
    (state) => state.setPrivateModalVisible
  );
  const subscribeToLocation = useStore((state) => state.subscribeToLocation);
  const unSubscribeToLocation = useStore(
    (state) => state.unSubscribeToLocation
  );

  const subscribed = location.user_subscribed_location;

  const subscribe = () => {
    if (!isAuthenticated) {
      setPrivateModalVisible({ visible: true });
    } else {
      subscribeToLocation(location.id);
    }
  };
  const unSubscribe = () => {
    if (!isAuthenticated) {
      setPrivateModalVisible({ visible: true });
    } else {
      unSubscribeToLocation(location.id);
    }
  };
  return (
    <div className="header">
      <BackButton styleType="light" />
      <img src={getOriginal(logo)} alt="location-logo" className="logo" />
      <div className="text-container">
        <div className="title">{title}</div>
        <div className="sub-title">{sub_title}</div>
      </div>
      <Touchable
        className="like-ico"
        action={subscribed ? unSubscribe : subscribe}
      >
        <img src={subscribed ? likeIcoActive : likeIco} alt="sub-ico" />
      </Touchable>
      <DropDownButton top={75}>
        <DDItem
          noBorder
          icon={subscribed ? likeIcoActive : likeIco}
          label={subscribed ? "unSubscribe" : "subscribe"}
          action={subscribed ? unSubscribe : subscribe}
        />
      </DropDownButton>
    </div>
  );
}

export default Header;
