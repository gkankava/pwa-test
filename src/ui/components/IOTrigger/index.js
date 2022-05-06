import React from "react";

import NothingToShow from "./components/NothingToShow";
import LoadMore from "./components/LoadMore";
import Loading from "./components/Loading";

function IOTrigger({ canFetchNext, fetchingNext, fetchNext }) {
  if (!canFetchNext) return <NothingToShow />;
  if (fetchingNext) return <Loading />;
  return <LoadMore fetchingNext={fetchingNext} fetchNext={fetchNext} />;
}

export default IOTrigger;
