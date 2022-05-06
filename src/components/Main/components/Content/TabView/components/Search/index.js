import React, { useEffect, useState } from "react";
import { useStore } from "store";

import SceneContainer from "components/Main/components/SceneContainer";
import { TextInput } from "ui/components";

import searchIco from "assets/icons/search_ico_2.png";

function Search({ id, activeTab }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    setQuery("");
  }, [activeTab]);
  const setCurrentScene = useStore((state) => state.setCurrentScene);
  const onClose = () => {
    setCurrentScene("tabView");
  };
  return (
    <SceneContainer onClose={onClose}>
      <div style={{ marginTop: 20 }}>
        <TextInput
          id="query"
          name="query"
          placeholder="Suchbegrif eingeben"
          icoRight={searchIco}
          style={{ marginBottom: "10px" }}
          inputMode="email"
          type="email"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </SceneContainer>
  );
}

export default Search;
