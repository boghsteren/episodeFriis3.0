import { Card, Image } from "antd";
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
        <Link to={`/${type}/${item.url}`}>
          <Card
            hoverable
            style={{ margin: "25px" }}
            cover={<Image preview={false} src={item.cover.file.url}></Image>}
          >
            <Card.Meta
              title={item.titel}
              description={item.blurb.blurb}
            ></Card.Meta>
          </Card>
        </Link>
      ))}
    </React.Fragment>
  );
};
