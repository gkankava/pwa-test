import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "store";

import { AppLoading } from "ui/components";
import SharedPage from "components/SharedPage";

function Event() {
  const { id } = useParams();
  const currentLocation = useStore((state) => state.userLocation);
  const { fetching, fetched, event } = useStore((state) => state.eventItems);

  const fetchEvent = useStore((state) => state.fetchEvent);

  useEffect(() => {
    fetchEvent(id, currentLocation);
    // eslint-disable-next-line
  }, []);

  const setPrivateModalVisible = useStore(
    (state) => state.setPrivateModalVisible
  );
  const isAuthenticated = useStore(
    (state) => state.currentUser.isAuthenticated
  );
  const likeEvent = useStore((state) => state.likeEvent);
  const unLikeEvent = useStore((state) => state.unLikeEvent);

  const toogleLike = () => {
    if (isAuthenticated) {
      if (!event.user_favorite_events) {
        likeEvent(event.id);
      } else {
        unLikeEvent(event.id);
      }
    } else {
      setPrivateModalVisible({ visible: true });
    }
  };

  if (fetching || !fetched) return <AppLoading size="fs" />;
  return (
    <SharedPage
      data={event}
      refer={"events"}
      liked={event.user_favorite_events}
      toogleLike={toogleLike}
    />
  );
}

export default Event;
