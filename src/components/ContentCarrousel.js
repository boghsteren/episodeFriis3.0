import { Card, Carousel } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "gatsby";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import React from "react";
import Text from "antd/lib/typography/Text";
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
      <Title style={{ margin: "25px", marginBottom: "0px" }} level={3}>
        {titel}
      </Title>
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
                slidesToShow: type === "post" ? 4 : 5,
                slidesToScroll: type === "post" ? 4 : 5,
              },
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: type === "post" ? 3 : 4,
                slidesToScroll: type === "post" ? 3 : 4,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: type === "post" ? 2 : 3,
                slidesToScroll: type === "post" ? 2 : 3,
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
                  height: type === "post" ? "450px" : "320px",
                  margin: large ? "20px" : "5px",
                }}
                title={type === "post" ? `${item.titel}` : false}
                hoverable
                cover={
                  <div
                    style={{
                      width: "100%",
                      height: type === "post" ? "300px" : "200px",
                      backgroundImage: `url(${item.cover?.file.url})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                }
              >
                <Card.Meta
                  title={type === "post" ? null : `${item.titel}`}
                  description={type !== "post" && item.blurb?.blurb}
                ></Card.Meta>
                {type === "post" && <Text>{item.blurb?.blurb}</Text>}
              </Card>
            </Link>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};
