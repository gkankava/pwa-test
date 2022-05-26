import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "store";

import { AppLoading } from "ui/components";
import SharedPage from "components/SharedPage";

function News() {
  const { id } = useParams();
  const currentLocation = useStore((state) => state.userLocation);
  const { fetching, fetched, newsItem } = useStore((state) => state.newsItems);
  const fetchNewsItem = useStore((state) => state.fetchNewsItem);

  useEffect(() => {
    fetchNewsItem(id, currentLocation);
    // eslint-disable-next-line
  }, [id]);

  const setPrivateModalVisible = useStore(
    (state) => state.setPrivateModalVisible
  );
  const isAuthenticated = useStore(
    (state) => state.currentUser.isAuthenticated
  );
  const likeNews = useStore((state) => state.likeNews);
  const unLikeNews = useStore((state) => state.unLikeNews);

  const toogleLike = () => {
    if (isAuthenticated) {
      if (!newsItem.user_favorite_news) {
        likeNews(newsItem.id);
      } else {
        unLikeNews(newsItem.id);
      }
    } else {
      setPrivateModalVisible({ visible: true });
    }
  };

  if (fetching || !fetched) return <AppLoading size="fs" />;
  return (
    <SharedPage
      data={newsItem}
      refer={"news"}
      liked={newsItem.user_favorite_news}
      toogleLike={toogleLike}
    />
  );
}

export default News;
