import { setTokenHeader } from "api";
import { useState, useEffect } from "react";
import { useStore } from "store";

export const PreCacheData = () => {
  const filters = useStore((state) => state.filters);

  const userLocation = useStore((state) => state.userLocation);

  const fetchLocations = useStore((state) => state.fetchLocations);
  const fetchFavouriteLocations = useStore(
    (state) => state.fetchFavouriteLocations
  );
  const fetchFavouriteEvents = useStore((state) => state.fetchFavouriteEvents);
  const fetchFavouriteNews = useStore((state) => state.fetchFavouriteNews);

  const resetLocationsFetched = useStore(
    (state) => state.resetLocationsFetched
  );
  const fetchCategories = useStore((state) => state.fetchCategories);
  const { fetched: locationsFetched } = useStore((state) => state.locations);
  const fetchEvents = useStore((state) => state.fetchEvents);
  const resetEventsFetched = useStore((state) => state.resetEventsFetched);

  const { fetched: eventsFetched } = useStore((state) => state.events);
  const fetchUserData = useStore((state) => state.fetchUserData);

  const fetchNews = useStore((state) => state.fetchNews);
  const resetNewsFetched = useStore((state) => state.resetNewsFetched);

  const { fetched: newsFetched } = useStore((state) => state.news);

  const [isReady, setIsready] = useState(false);
  const { isAuthenticated } = useStore((state) => state.currentUser);

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setTokenHeader(localStorage.getItem("jwtToken"));
      fetchUserData();
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  useEffect(() => {
    const params = {
      longitude: userLocation?.longitude || 8.514803,
      latitude: userLocation?.latitude || 48.5275439,
      radius: filters?.radius || 5,
      orderBy: filters?.orderBy || "updated_at",
    };
    fetchLocations(params);

    fetchEvents(params);
    fetchNews(params);
    fetchCategories({
      longitude: userLocation?.longitude || 8.514803,
      latitude: userLocation?.latitude || 48.5275439,
      radius: filters?.radius || 5,
    });
    if (isAuthenticated) {
      fetchFavouriteLocations(params);
      fetchFavouriteEvents();
      fetchFavouriteNews();
    }
    // eslint-disable-next-line
  }, [filters.radius, isAuthenticated]);

  useEffect(() => {
    if (locationsFetched && eventsFetched && newsFetched) {
      setIsready(true);
    }
    // eslint-disable-next-line
  }, [locationsFetched, eventsFetched, newsFetched]);

  useEffect(() => {
    resetLocationsFetched();
    resetEventsFetched();
    resetNewsFetched();
    // eslint-disable-next-line
  }, [isReady]);

  return [isReady];
};
