import { graphql, Link } from "gatsby";
import * as React from "react";
import { Layout } from "../Layout";
import { Row } from "antd";
import Title from "antd/lib/typography/Title";
import "../styles.css";
import { useMediaQuery } from "@react-hook/media-query";
import { ContentCarousel } from "../components/ContentCarrousel";
import { getImage, GatsbyImage, withArtDirection } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const { allContentfulSerie, allContentfulPost, highlightContentful } = data;
  const serier = allContentfulSerie.nodes;
  const posts = allContentfulPost.nodes;
  const hightlight = highlightContentful.nodes[1];
  const topImage = withArtDirection(getImage(hightlight.cover), []);

  const first_five = serier.slice(0, 5);
  const first_five_posts = posts.slice(0, 5);
  const matches = useMediaQuery("only screen and (max-width: 480px)");
  return (
    <Layout>
      <main>
        <title>episodeFriis</title>
        <meta name="description" content="En side om serier" />
        <div style={{ position: "relative" }}>
          <Link
            to={`/${
              hightlight.internal.type === "ContentfulPost" ? "post" : "serie"
            }/${hightlight.url}`}
          >
            <GatsbyImage image={topImage} alt={hightlight.blurb} />
            <div
              style={{
                top: 0,
                position: "absolute",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Title
                style={{
                  fontSize: matches ? "20px" : "60px",
                  padding: "15px",
                  textAlign: "center",
                  color: "white",
                  textShadow: "2px 3px black",
                }}
              >
                {hightlight.titel}
              </Title>
            </div>
          </Link>
        </div>

        <ContentCarousel
          items={first_five_posts}
          titel="Nyeste posts"
          type="post"
        ></ContentCarousel>
        <ContentCarousel
          items={first_five}
          titel="Senest tilføjede serier"
          type="serie"
        ></ContentCarousel>
        <Row></Row>
        <Row></Row>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    highlightContentful: allContentfulPost(
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        cover {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        titel
        url
        internal {
          type
        }
        blurb {
          blurb
        }
      }
    }
    allContentfulSerie(sort: { fields: createdAt, order: DESC }) {
      nodes {
        cover {
          file {
            url
          }
        }
        titel
        url
        internal {
          type
        }
        blurb {
          blurb
        }
      }
    }
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        cover {
          file {
            url
          }
        }
        titel
        url
        internal {
          type
        }
        blurb {
          blurb
        }
        tekstOverListe {
          tekstOverListe
        }
      }
    }
  }
`;

export default IndexPage;
