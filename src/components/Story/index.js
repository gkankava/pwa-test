import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomStories from "ui/components/Stories";

export default function Story() {
  const { state } = useLocation();
  const [selectedGallery, setSelectedGallery] = useState(0);
  useEffect(() => {
    setSelectedGallery(0);
  }, []);
  return (
    <CustomStories
      setSelectedGallery={setSelectedGallery}
      selectedGallery={selectedGallery}
      gallery={state.pinnedGalleries}
    />
  );
}
