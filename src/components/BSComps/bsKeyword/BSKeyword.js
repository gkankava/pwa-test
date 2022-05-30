import React from "react";

import { useNavigate } from "react-router-dom";
import { useStore } from "store";

import { IOTrigger, ListView } from "ui/components";
import BSContentLoading from "../components/BSContentLoading";
import BSScrollView from "../components/BSScrollView";

function BSKeyword({ refer }) {
  const { data, fetching, canFetchNext, fetchingNext } = useStore(
    (state) => state.dataByKewords
  );
  const fetchDataByKewordNext = useStore(
    (state) => state.fetchDataByKewordNext
  );

  let navigate = useNavigate();
  const action = (item) => {
    navigate(`/${refer}/${item.id}`);
  };

  if (fetching) return <BSContentLoading />;

  return (
    <BSScrollView>
      <ListView data={data.data} action={action} bs />
      <IOTrigger
        canFetchNext={canFetchNext}
        fetchingNext={fetchingNext}
        fetchNext={fetchDataByKewordNext}
      />
    </BSScrollView>
  );
}

export default BSKeyword;
