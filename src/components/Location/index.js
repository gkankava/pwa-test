import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "store";

import { AppLoading, BSModal } from "ui/components";
import Container from "./components/Container";
import StaticHeader from "./components/StaticHeader";
import GallerySwiper from "./components/GallerySwiper";
import StickyHeader from "./components/StickyHeader";
import Content from "./components/Content";

import { BSMap, BSKeyword } from "components/BSComps";
import { Helmet } from "react-helmet";
import { getOriginal } from "utils/imgUri";

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
      setBs(false);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [id]);

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

  const [bs, setBs] = useState(false);

  const toogleBs = (active, id, title) => {
    if (!bs) {
      setBs({ active, id, title });
    } else if (bs.id !== id) {
      setBs(false);
      setTimeout(() => {
        setBs({ active, id, title });
      }, 300);
    }
  };

  const BSContent = () => {
    switch (bs.id) {
      case "map":
        return <BSMap locations={[location]} />;
      case "key":
        return <BSKeyword refer="location" />;
      default:
        return null;
    }
  };

  if (fetching || !fetched) return <AppLoading size="fs" />;

  return (
    <Container>
      <Helmet>
        <meta property="og:title" content={location.title} />
        <meta property="og:description" content={location.subtitle} />
        <meta property="og:image" content={getOriginal(location.logo)} />
      </Helmet>
      <StaticHeader
        data={location}
        toogleBs={toogleBs}
        subscribed={location.user_subscribed_location}
        subscribe={subscribe}
        unSubscribe={unSubscribe}
      />
      <GallerySwiper data={location.gallery} />
      <StickyHeader data={location} offsetY={offsetY} />
      <Content
        data={location}
        toogleBs={toogleBs}
        subscribed={location.user_subscribed_location}
        subscribe={subscribe}
        unSubscribe={unSubscribe}
      />
      {bs && (
        <BSModal state={bs.active} setState={setBs} headerTitle={bs.title}>
          <BSContent />
        </BSModal>
      )}
    </Container>
  );
}

export default Location;
