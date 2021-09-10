import { Card, Carousel } from "antd";
import { Link } from "gatsby";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

const PrevArrow = ({ className, style, onClick }) => (
  <LeftOutlined
    className={className}
    style={{
      ...style,
      display: "block",
      color: "grey",
      fontSize: "40px",
    }}
    onClick={onClick}
  ></LeftOutlined>
);

const NextArrow = ({ className, style, onClick }) => (
  <RightOutlined
    className={className}
    style={{
      ...style,
      display: "block",
      color: "grey",
      fontSize: "40px",
      right: "-5px",
    }}
    onClick={onClick}
  ></RightOutlined>
);

export const ContentCarousel = ({ type, titel, items }) => {
  const large = useMediaQuery("only screen and (min-width: 425px)");
  return (
    <React.Fragment>
      <div style={{ margin: "25px", marginBottom: "0px" }} className="title">
        {titel}
      </div>
      <div
        style={{
          paddingLeft: large && "40px",
          paddingRight: large && "40px",
        }}
      >
        <Carousel
          arrows={large}
          centerMode={!large}
          prevArrow={<PrevArrow large={large} />}
          nextArrow={<NextArrow large={large} />}
          slidesToShow={type === "post" ? 4 : 5}
          slidesToScroll={type === "post" ? 4 : 5}
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
            <Link
              key={item.url}
              to={`/${
                item.internal.type === "ContentfulPost" ? "post" : "serie"
              }/${item.url}`}
            >
              <Card
                style={{
                  margin: large ? "20px" : "5px",
                  backgroundColor: "#111111",
                  border: "none",
                }}
                hoverable
                cover={
                  <div
                    style={{
                      width: "100%",
                      height: type === "post" ? "400px" : "200px",
                      backgroundImage: `url(${item.cover?.file.url})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                }
              >
                <div className="title-text">{item.titel}</div>
                <div className="blurb">{item.blurb?.blurb}</div>
              </Card>
            </Link>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};
