import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { IOTrigger, ListView, GridView, CoverView } from "ui/components";

function News() {
  let navigate = useNavigate();
  const action = (id) => {
    navigate(`/news/${id}`);
  };

  const look = useStore((state) => state.look);
  const { data, canFetchNext, fetchingNext } = useStore((state) => state.news);
  const fetchNewsNext = useStore((state) => state.fetchNewsNext);

  const categoriesList = useStore((state) => state.categories.news.data.data);
  const categories = useStore((state) => state.filters.news.categories);

  const [filteredData, setFilteredData] = useState(data.data);
  const fetchNews = useStore((state) => state.fetchNews);
  const userLocation = useStore((state) => state.userLocation);
  const filters = useStore((state) => state.filters);
  const search = useStore((state) => state.filters.news.search);

  useEffect(() => {
    const params = {
      longitude: userLocation?.longitude || 8.514803,
      latitude: userLocation?.latitude || 48.5275439,
      radius: filters?.radius || 5,
      orderBy: filters?.orderBy || "updated_at",
      searchQuery: search,
    };
    fetchNews(params);
    // eslint-disable-next-line
  }, [search]);
  useEffect(() => {
    if (categories.length > 0) {
      let newArr = filteredData.filter((i) =>
        categories.includes(i.category_id)
      );
      setFilteredData(newArr);
    }
    // eslint-disable-next-line
  }, [categories]);
  if (!data.data) return null;

  return (
    <>
      {look === "list" ? (
        <ListView
          data={filteredData}
          action={action}
          categoriesList={categoriesList}
        />
      ) : look === "grid" ? (
        <GridView data={filteredData} action={action} />
      ) : (
        <CoverView data={filteredData} action={action} />
      )}
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={fetchNewsNext}
      />
    </>
  );
}

export default News;
