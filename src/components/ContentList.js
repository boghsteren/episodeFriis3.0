import { useMediaQuery } from "@react-hook/media-query";
import { Card, Row } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "gatsby";
import React from "react";

export const ContentList = ({ type, titel, items }) => {
  return (
    <React.Fragment>
      <Title style={{ margin: "25px" }} level={3}>
        {titel}
      </Title>
      <Row justify="space-around">
        {items.map((item) => (
          <Link key={item.url} to={`/${type}/${item.url}`}>
            <Card
              hoverable
              title={item.titel}
              style={{
                margin: "25px",
                width: "400px",
                height: "350px",
              }}
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
      </Row>{" "}
    </React.Fragment>
  );
};
