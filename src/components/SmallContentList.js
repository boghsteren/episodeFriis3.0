import React from "react";
import { ContentCard } from "./ContentCard";

export const SmallContentList = ({ items, width }) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <div key={item.url} style={{ width: width ?? "500px" }}>
          <ContentCard item={item}></ContentCard>
        </div>
      ))}
    </React.Fragment>
  );
};
