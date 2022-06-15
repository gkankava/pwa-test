import Container from "components/Auth/components/Container";
import ProfileHeader from "components/Main/components/Content/Profile/components/StickyHeader/components/ProfileHeader";
import React, { useEffect, useState } from "react";
import HeaderContainer from "./HeaderContainer";

function EditProfile() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line
  }, []);
  return (
    <Container mounted={mounted}>
      <HeaderContainer>
        <ProfileHeader type="back" />
      </HeaderContainer>
    </Container>
  );
}

export default EditProfile;
