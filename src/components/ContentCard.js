import { Link } from "gatsby";
import React from "react";

export const ContentCard = ({ item, width }) => {
  const { internal, url, cover, titel, blurb } = item;
  const { type } = internal;
  return (
    <Link
      key={url}
      to={`/${type === "ContentfulPost" ? "post" : "serie"}/${url}`}
    >
      <div style={{ margin: "24px" }}>
        <div
          style={{
            height: type === "ContentfulPost" ? "300px" : "200px",
            backgroundImage: `url(${cover?.file.url})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="title-text" style={{ width: "100%" }}>
          {titel}
        </div>
        <div className="blurb">{blurb?.blurb}</div>
      </div>
    </Link>
  );
};
