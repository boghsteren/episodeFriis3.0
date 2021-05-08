import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "gatsby";
import React from "react";

export const SmallContentList = ({ type, items }) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <Link key={item.url} to={`/${type}/${item.url}`}>
          <Card
            hoverable
            className="serie_card"
            style={{
              backgroundColor: type === "post" ? "GhostWhite" : "white",
            }}
            actions={item.kategori?.map((item) => (
              <Link to={`/serier?genre=${item.kategori}`}>{item.kategori}</Link>
            ))}
            cover={
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${item.cover.file.url})`,
                  backgroundSize: "cover",
                }}
              ></div>
            }
          >
            <Card.Meta
              title={item.titel}
              description={
                <div style={{ height: "50px" }}>{item.blurb?.blurb}</div>
              }
            ></Card.Meta>
          </Card>
        </Link>
      ))}
    </React.Fragment>
  );
};
