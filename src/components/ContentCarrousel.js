import { Card, Carousel } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "gatsby";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import React from "react";

export const ContentCarousel = ({ type, titel, items }) => {
  return (
    <React.Fragment>
      <Title style={{ margin: "25px" }} level={3}>
        {titel}
      </Title>
      <Carousel
        arrows
        nextArrow={<RightCircleFilled></RightCircleFilled>}
        prevArrow={<LeftCircleFilled></LeftCircleFilled>}
        slidesToShow={3}
        slidesToScroll={3}
        draggable
        dots={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
          <Link key={item.url} to={`/${type}/${item.url}`}>
            <Card
              style={{ height: "350px", margin: "20px" }}
              hoverable
              title={item.titel}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url(${item.cover?.file.url})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              }
            >
              <Card.Meta></Card.Meta>
              <p>{item.blurb?.blurb}</p>
            </Card>
          </Link>
        ))}
      </Carousel>
    </React.Fragment>
  );
};
