import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../Layout";
import { Divider } from "antd";
import { SmallContentList } from "../components/SmallContentList";

const Serier = ({ data }) => {
  const serier = data.allContentfulSerie.nodes;
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <Divider></Divider>
        <div
          className="title"
          style={{
            margin: "25px",
            textAlign: "center",
          }}
        >
          Serier
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "25px",
            justifyContent: "center",
          }}
        >
          <SmallContentList
            items={serier}
            type="serie"
            title="Serier"
            width="400px"
          ></SmallContentList>
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
        internal {
          type
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
