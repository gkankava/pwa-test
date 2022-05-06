import React, { useEffect, useState } from "react";
import { Outlet, useMatch } from "react-router-dom";

import Container from "./components/Container";
import AuthLanding from "./components/AuthLanding";

function Auth() {
  const [mounted, setMounted] = useState(false);
  const renderMain = useMatch("/auth");
  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line
  }, []);
  return (
    <Container mounted={mounted}>
      {renderMain && <AuthLanding />}
      <Outlet />
    </Container>
  );
}

export default Auth;
