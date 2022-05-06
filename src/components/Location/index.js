import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "store";

import { AppLoading, BSModal } from "ui/components";
import Container from "./components/Container";
import StaticHeader from "./components/StaticHeader";
import GallerySwiper from "./components/GallerySwiper";
import StickyHeader from "./components/StickyHeader";
import Content from "./components/Content";

function Location() {
  const { id } = useParams();

  const fetchLocation = useStore((state) => state.fetchLocation);
  const { fetching, fetched, location } = useStore(
    (state) => state.locationItems
  );

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setOffsetY(position);
  };

  useEffect(() => {
    fetchLocation(id);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  const [bs, setBs] = useState(false);

  const { isAuthenticated } = useStore((state) => state.currentUser);

  const setPrivateModalVisible = useStore(
    (state) => state.setPrivateModalVisible
  );

  const subscribeToLocation = useStore((state) => state.subscribeToLocation);
  const unSubscribeToLocation = useStore(
    (state) => state.unSubscribeToLocation
  );

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

  if (fetching || !fetched) return <AppLoading size="fs" />;

  return (
    <Container>
      <StaticHeader
        data={location}
        setBs={setBs}
        subscribed={location.user_subscribed_location}
        subscribe={subscribe}
        unSubscribe={unSubscribe}
      />
      <GallerySwiper data={location.gallery} />
      <StickyHeader data={location} offsetY={offsetY} />
      <Content
        data={location}
        setBs={setBs}
        subscribed={location.user_subscribed_location}
        subscribe={subscribe}
        unSubscribe={unSubscribe}
      />
      {bs && (
        <BSModal state={bs} setState={setBs} headerTitle="Navigate"></BSModal>
      )}
    </Container>
  );
}

export default Location;
