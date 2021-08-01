import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "gatsby";
import React from "react";

export const ContentList = ({ type, titel, items }) => {
  return (
    <React.Fragment>
      <Title style={{ margin: "25px" }} level={3}>
        {titel}
      </Title>
      {items.map((item) => (
        <Link key={item.url} to={`/${type}/${item.url}`}>
          <Card
            hoverable
            style={{ margin: "25px" }}
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
            <Card.Meta
              title={item.titel}
              description={
                <div style={{ height: "65px" }}>{item.blurb?.blurb}</div>
              }
            ></Card.Meta>
          </Card>
        </Link>
      ))}
    </React.Fragment>
  );
};
