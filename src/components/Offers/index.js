import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useStore } from "store";
import { AppLoading, DataCoverItem, IOTrigger } from "ui/components";
import Header from "./components/Header";

function Offers() {
  const { id } = useParams();
  let navigate = useNavigate();

  const fetchOffers = useStore((state) => state.fetchOffers);
  const { data, fetching, fetched, canFetchNext, fetchingNext } = useStore(
    (state) => state.offers
  );
  const fetchOffersNext = useStore((state) => state.fetchOffersNext);

  const fetchLocation = useStore((state) => state.fetchLocation);
  const {
    location,
    fetching: fetchingLocation,
    fetched: locationFetched,
  } = useStore((state) => state.locationItems);

  useEffect(() => {
    fetchLocation(id);
    fetchOffers(id);
    // eslint-disable-next-line
  }, []);

  if (fetching || fetchingLocation || !fetched || !locationFetched)
    return <AppLoading size="fs" />;

  return (
    <div className="offers-page">
      <Header location={location} />
      {data.data?.map((i) => (
        <DataCoverItem
          key={i.id}
          item={i}
          action={() => {
            navigate(`/event/${i.id}`);
          }}
        />
      ))}
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={fetchOffersNext}
      />
    </div>
  );
}

export default Offers;
