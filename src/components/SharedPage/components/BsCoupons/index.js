import React, { useEffect } from "react";
import { useStore } from "store";

import { AppLoading, IOTrigger } from "ui/components";
import Container from "./Container";
import ListItem from "./ListItem";

function BsCoupons({ id, openModal }) {
  const { data, fetching, fetched, canFetchNext, fetchingNext } = useStore(
    (state) => state.coupons
  );
  const fetchCouponsByNews = useStore((state) => state.fetchCouponsByNews);
  const fetchCouponsNext = useStore((state) => state.fetchCouponsNext);
  const resetCoupons = useStore((state) => state.resetCoupons);

  useEffect(() => {
    fetchCouponsByNews(id);
    return () => resetCoupons();
  }, []);
  if (fetching || !fetched)
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        <AppLoading size={"50%"} />
      </div>
    );

  return (
    <Container>
      {data.data.map((i, k) => (
        <ListItem key={k} item={i} action={openModal} />
      ))}
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={fetchCouponsNext}
      />
    </Container>
  );
}

export default BsCoupons;
