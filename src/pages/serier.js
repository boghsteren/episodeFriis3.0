import * as React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../Layout";
import { Card, Divider, Image, Space } from "antd";
import Title from "antd/lib/typography/Title";

const Serier = ({ data }) => {
  const serier = data.allContentfulSerie.nodes;
  const type = "serie";
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <Divider></Divider>
        <Title
          style={{
            margin: "25px",
            textAlign: "center",
          }}
        >
          Serier
        </Title>
        <div
          className="serie_liste"
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "25px",
            width: "100%",
          }}
        >
          {serier.map((item) => (
            <Link
              style={{ width: "100%", marginBottom: "20px" }}
              key={item.url}
              to={`/${type}/${item.url}`}
            >
              <Card
                hoverable
                actions={item.kategori?.map((item) => (
                  <Link to={`/serier?genre=${item.kategori}`}>
                    {item.kategori}
                  </Link>
                ))}
                className="serie_card"
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
                  description={item.blurb.blurb}
                ></Card.Meta>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query Serier {
    allContentfulSerie(sort: { fields: titel, order: ASC }) {
      nodes {
        cover {
          file {
            url
          }
        }
        titel
        kategori {
          kategori
        }
        url
        blurb {
          blurb
        }
      }
    }
  }
`;

export default Serier;
