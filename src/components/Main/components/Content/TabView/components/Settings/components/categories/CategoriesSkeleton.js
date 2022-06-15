import React from "react";
import ContentLoader from "react-content-loader";

function CategoriesSkeleton(props) {
  return (
    <ContentLoader
      speed={1}
      width={250}
      height={40}
      viewBox="0 0 250 40"
      backgroundColor="#f8fefe"
      foregroundColor="#d4d4d4"
      {...props}
    >
      <circle cx="20" cy="20" r="20" />
      <rect x="54" y="14" rx="2" ry="2" width="250" height="12" />
    </ContentLoader>
  );
}

export default CategoriesSkeleton;
