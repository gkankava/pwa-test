import React, { useEffect } from "react";
import { useStore } from "store";

import SceneContainer from "components/Main/components/SceneContainer";
import { AppLoading, BackButton, TextInput } from "ui/components";

import searchIco from "assets/icons/search_ico_2.png";
import { useFormik } from "formik";
import { getThumb } from "utils/imgUri";
import { useNavigate } from "react-router-dom";

function Search({ id, setCurrentScene, setActiveContent }) {
  const navigate = useNavigate();
  const fetchSearch = useStore((state) => state.fetchSearch);
  const resetSearchFetched = useStore((state) => state.resetSearchFetched);

  const fetchSuggestedKeywords = useStore(
    (state) => state.fetchSuggestedKeywords
  );
  const { fetched, data } = useStore((state) => state.keywords);
  const {
    fetching: fetchingSearch,
    fetched: fetchedSearch,
    data: searchData,
  } = useStore((state) => state.searched);

  const onClose = () => {
    setActiveContent("tabs");
  };

  useEffect(() => {
    fetchSuggestedKeywords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formik = useFormik({
    initialValues: {
      query: "",
      keywords: [],
    },
    onSubmit: (values) => {
      fetchSearch(values.query, String(values.keywords));
    },
  });
  if (!fetched || fetchingSearch) return <AppLoading />;
  return fetchedSearch ? (
    <div style={{ padding: "0.5em" }}>
      <BackButton action={() => resetSearchFetched()} />
      {Object.keys(searchData).map((key) => {
        return (
          <div>
            <h4
              style={{
                margin: "1em 0",
                paddingTop: "0.5em",
                borderTop: "2px solid #CCCCCC",
                textDecoration: "underline",
              }}
            >
              {key.toUpperCase()}
            </h4>
            <div
              style={{ display: "flex", overflow: "scroll", gridGap: "0.5em" }}
            >
              {searchData[key].map((item) => (
                <div
                  onClick={() => {
                    if (key === "locations") {
                      navigate(`/location/${item.id}`);
                    } else if (key === "events") {
                      navigate(`/event/${item.id}`);
                    } else if (key === "news") {
                      navigate(`/news/${item.id}`);
                    }
                  }}
                  style={{
                    display: "flex",
                    border: `1px solid #CCCCCC`,
                    position: "relative",
                    flexDirection: "column",
                    backgroundImage: `url(${getThumb(
                      item.gallery.data[0]?.image
                    )}`,
                    minWidth: "40vw",
                    maxWidth: "30vw",
                    height: "200px",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                    justifyContent: "flex-end",
                  }}
                >
                  <div className="titleContainer">
                    <img
                      alt={item.title}
                      className="searchImg"
                      src={getThumb(item.logo)}
                    />
                    <p className="searchTitle">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <SceneContainer onClose={onClose}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 20 }}>
          <form onSubmit={formik.handleSubmit}>
            <TextInput
              id="query"
              name="query"
              placeholder="Suchbegrif eingeben"
              icoRight={searchIco}
              style={{ marginBottom: "10px" }}
              type="text"
              value={formik.values.query}
              onChange={formik.handleChange}
            />
          </form>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gridGap: "0.2em",
          }}
        >
          {data.data.map((item) => (
            <button
              style={{
                backgroundColor: formik.values.keywords?.includes(item.id)
                  ? "#AFCA09"
                  : "#D9D9D9",
                color: formik.values.keywords?.includes(item.id)
                  ? "#FFF"
                  : "#757575",
                border: "none",
                borderRadius: "3em",
                padding: "0.5em",
                fontSize: "0.8em",
              }}
              onClick={() => {
                if (formik.values.keywords.includes(item.id)) {
                  formik.setFieldValue(
                    "keywords",
                    formik.values.keywords.filter((i) => i !== item.id)
                  );
                } else {
                  formik.setFieldValue("keywords", [
                    item.id,
                    ...formik.values.keywords,
                  ]);
                }
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "1em",
          }}
        >
          <button
            style={{
              backgroundColor: "#000",
              color: "#FFF",
              borderWidth: "0",
              padding: "1em",
              width: "100%",
            }}
            onClick={formik.handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </SceneContainer>
  );
}

export default Search;
