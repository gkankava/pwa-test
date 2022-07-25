import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStore } from "store";
import { AppLoading, DataCoverItem, IOTrigger } from "ui/components";
import Header from "./components/Header";

function Offers() {
  const { id } = useParams();
  let navigate = useNavigate();

  const fetchOffers = useStore((state) => state.fetchOffers);
  const { data, fetching, fetched, canFetchNext, fetchingNext, nextPageUrl } =
    useStore((state) => state.offers);
  const fetchOffersNext = useStore((state) => state.fetchOffersNext);
  const resetSlice = useStore((state) => state.resetSlice);
  const fetchLocation = useStore((state) => state.fetchLocation);
  const {
    location,
    fetching: fetchingLocation,
    fetched: locationFetched,
  } = useStore((state) => state.locationItems);

  useEffect(() => {
    resetSlice();
    fetchLocation(id);
    fetchOffers(id, "events");
    // eslint-disable-next-line
  }, []);

  if (fetching || fetchingLocation || !fetched || !locationFetched)
    return <AppLoading size="fs" />;

  return (
    <div className="offers-page">
      <Header location={location} />
      {data?.map((i, k) => (
        <DataCoverItem
          key={k.toString()}
          item={i}
          action={() => {
            navigate(`/event/${i.id}`);
          }}
        />
      ))}
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={
          nextPageUrl ? fetchOffersNext : () => fetchOffers(id, "news")
        }
      />
    </div>
  );
}

export default Offers;
