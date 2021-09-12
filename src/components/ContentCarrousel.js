import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Slider from "react-slick";
import { ContentCard } from "./ContentCard";

export const ContentCarousel = ({ type, titel, items }) => {
  const large = useMediaQuery("only screen and (min-width: 425px)");
  return (
    <React.Fragment>
      <div style={{ margin: "28px", marginBottom: "0px" }} className="title">
        {titel}
      </div>
      <div
        style={{
          paddingLeft: large && "40px",
          paddingRight: large && "40px",
        }}
      >
        <Slider
          centerMode={!large}
          arrows={large}
          centerPadding="25px"
          slidesToShow={1}
          slidesToScroll={1}
          draggable
          infinite={false}
          dots={false}
          responsive={[
            {
              breakpoint: 2500,
              settings: {
                slidesToShow: type === "post" ? 3 : 5,
                slidesToScroll: type === "post" ? 3 : 5,
              },
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: type === "post" ? 2 : 4,
                slidesToScroll: type === "post" ? 2 : 4,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: type === "post" ? 1 : 3,
                slidesToScroll: type === "post" ? 1 : 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: type === "post" ? 1 : 2,
                slidesToScroll: type === "post" ? 1 : 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {items.map((item) => (
            <ContentCard key={item.url} item={item}></ContentCard>
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
};
