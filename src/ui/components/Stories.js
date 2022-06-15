import React, { useEffect, useState } from "react";
import Stories from "react-insta-stories";
import { useNavigate } from "react-router-dom";
import { getOriginal } from "utils/imgUri";
import AppLoading from "./AppLoading";
import CloseButton from "./buttons/CloseButton";

export default function CustomStories({
  gallery,
  selectedGallery,
  setSelectedGallery,
}) {
  const navigate = useNavigate();
  const [gal, setGal] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setGal([...gallery[selectedGallery].gallery.data]);
    }, 100);

    return () => {
      setGal([]);
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [selectedGallery]);
  if (!gal.length) return <AppLoading />;
  return (
    <div
      style={{
        backgroundColor: "#111111",
        paddingTop: "0.5em",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "0.5em",
          top: "0.5em",
          display: "flex",
          justifyContent: "flex-end",
          padding: "0.5em",
        }}
      >
        <CloseButton action={() => navigate(-1)} />
      </div>
      <div style={{ margin: "0 0.5em", gridGap: "0.2em", display: "flex" }}>
        {gallery.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedGallery(index);
            }}
            style={{
              borderRadius: "100%",
              width: "5em",
              height: "5em",
              p: "0",
              m: "0",
              border:
                index === selectedGallery
                  ? "2px solid #73B13F"
                  : "2px solid #000",
              outline: "none",
              boxShadow: "none",
              transition: "300ms all ease",
              position: "relative",
            }}
          >
            <p
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                display: "flex",
                fontSize: "0.8em",
                backgroundColor: item.event_id ? "#0E65AE" : "#AFCA09",
                borderRadius: "2%",
                padding: "0.3em",
                color: "#FFF",
                fontFamily: "Segoe UI Bold",
                position: "absolute",
              }}
            >
              {item.event_id ? "EVENT" : "NEWS"}
            </p>
            <img
              alt="logo"
              src={getOriginal(item.gallery.data[0].image)}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "100%",
              }}
            />
          </button>
        ))}
      </div>
      <Stories
        loop={false}
        stories={gal.map((item) => ({
          url: getOriginal(item.image),
          type: "image",
        }))}
        width={"100%"}
        height="100%"
        onAllStoriesEnd={() => navigate(-1)}
      />
    </div>
  );
}
