import { useMediaQuery } from "@react-hook/media-query";
import { Link } from "gatsby";
import React from "react";

export const ContentCard = ({ item }) => {
  const { internal, url, cover, titel, blurb } = item;
  const { type } = internal;
  const large = useMediaQuery("only screen and (min-width: 425px)");
  return (
    <Link to={`/${type === "ContentfulPost" ? "post" : "serie"}/${url}`}>
      <div style={{ margin: large ? "24px" : "5px" }}>
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
