import React from "react";
import { useNavigate } from "react-router-dom";

import { useStore } from "store";

import BottomTabBtn from "./components/BottomTabBtn";
import Container from "./components/Container";

import SettingsIcon from "./svg/SettingsIcon";
import SearchIcon from "./svg/SearchIcon";
import MapIcon from "./svg/MapIcon";
import LookIcon from "./svg/LookIcon";
import UserIcon from "./svg/UserIcon";

import { palette } from "ui";

function BottomBar({ activeContent, setActiveContent }) {
  const navigate = useNavigate();
  const { currentScene, setCurrentScene } = useStore((state) => state);
  const { isAuthenticated } = useStore((state) => state.currentUser);
  const resetSearchFetched = useStore((state) => state.resetSearchFetched);

  const toogleMap = () => {
    setCurrentScene("tabView");
    setActiveContent((prev) => {
      if (prev === "map") {
        return "tabs";
      } else return "map";
    });
  };
  const toogleLook = () => {
    setCurrentScene("tabView");
    setActiveContent((prev) => {
      if (prev === "look") {
        return "tabs";
      } else return "look";
    });
  };
  const toogleProfile = () => {
    if (isAuthenticated) {
      setCurrentScene("tabView");
      setActiveContent((prev) => {
        if (prev === "profile") {
          return "tabs";
        } else return "profile";
      });
    } else {
      navigate("auth");
    }
  };
  const toogleSettings = () => {
    setActiveContent("tabs");
    if (currentScene === "settings") {
      setCurrentScene("tabView");
    } else {
      setCurrentScene("settings");
    }
  };
  const toogleSearch = () => {
    setCurrentScene("tabView");
    resetSearchFetched();
    setActiveContent((prev) => {
      if (prev === "search") {
        return "tabs";
      } else return "search";
    });
  };

  return (
    <Container>
      <BottomTabBtn action={toogleSettings}>
        <SettingsIcon
          color={currentScene === "settings" ? palette.green : palette.blueDark}
        />
      </BottomTabBtn>
      <BottomTabBtn action={toogleSearch}>
        <SearchIcon
          color={activeContent === "search" ? palette.green : palette.blueDark}
        />
      </BottomTabBtn>
      <BottomTabBtn action={toogleMap}>
        <MapIcon
          color={activeContent === "map" ? palette.green : palette.blueDark}
        />
      </BottomTabBtn>
      <BottomTabBtn action={toogleLook}>
        <LookIcon
          color={activeContent === "look" ? palette.green : palette.blueDark}
        />
      </BottomTabBtn>
      <BottomTabBtn action={toogleProfile}>
        <UserIcon
          color={activeContent === "profile" ? palette.green : palette.blueDark}
        />
      </BottomTabBtn>
    </Container>
  );
}

export default BottomBar;
