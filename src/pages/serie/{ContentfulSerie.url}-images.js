import { Card, Image } from "antd";
import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../../Layout";
import Meta from "antd/lib/card/Meta";

const SeriesPage = ({ data }) => {
  const { contentfulSerie } = data;
  const { cover } = contentfulSerie;
  const foci = [
    "center",
    "face",
    "faces",
    "top",
    "left",
    "right",
    "bottom",
    "top_right",
    "top_left",
    "bottom_right",
    "bottom_left",
  ];
  return (
    <React.Fragment>
      <Layout>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "25px",
            justifyContent: "center",
          }}
        >
          {foci.map((foci) => (
            <Card
              key={foci}
              style={{ width: 240, margin: "20px" }}
              cover={
                <img
                  alt={foci}
                  src={`${cover.file.url}?fit=thumb&w=1200&h=1200&f=${foci}`}
                ></img>
              }
            >
              <Meta title={foci}></Meta>
            </Card>
          ))}
          {foci.map((foci) => (
            <div key={`${foci}_slider`} style={{ margin: 20 }}>
              <Image
                width={500}
                src={`${cover.file.url}?fit=thumb&w=1792&h=600&f=${foci}`}
              ></Image>
            </div>
          ))}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulSerie(id: { eq: $id }) {
      titel
      url
      udbyder
      blurb {
        blurb
      }
      cover {
        file {
          url
        }
      }
      beskrivelse {
        beskrivelse
      }
      kategori {
        kategori
      }
    }
  }
`;

export default SeriesPage;
