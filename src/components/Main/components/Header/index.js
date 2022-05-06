import React from "react";
import Container from "./components/Container";
import Hamburger from "./components/Hamburger";
import Logo from "./components/Logo";

function Header({ activeContent }) {
  if (activeContent === "map" || activeContent === "profile") return null;
  return (
    <Container>
      <Hamburger />
      <Logo />
    </Container>
  );
}

export default Header;
