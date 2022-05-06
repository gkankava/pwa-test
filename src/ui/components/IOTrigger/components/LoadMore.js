import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function LoadMore({ fetchNext }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      fetchNext();
    }
    // eslint-disable-next-line
  }, [inView]);
  return (
    <div ref={ref}>
      <h2>{`inside viewport ${inView}.`}</h2>
    </div>
  );
}

export default LoadMore;
