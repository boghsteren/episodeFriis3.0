import { graphql, Link } from "gatsby";
import * as React from "react";
import { Layout } from "../Layout";
import { Row } from "antd";
import "../styles.css";
import { ContentCarousel } from "../components/ContentCarrousel";
import { useMediaQuery } from "@react-hook/media-query";

const IndexPage = ({ data }) => {
  const { allContentfulSerie, allContentfulPost, highlightContentful } = data;
  const is_small_screen = useMediaQuery("only screen and (max-width: 800px)");
  const serier = allContentfulSerie.nodes;
  const posts = allContentfulPost.nodes;
  const hero = highlightContentful.nodes[2];
  const topImage = hero.cover.file.url;
  const first_five = serier.slice(0, 5);
  const first_five_posts = posts.slice(0, 5);
  return (
    <Layout>
      <main>
        <title>episodeFriis</title>
        <meta name="description" content="En side om serier" />
        <div style={{ position: "relative" }}>
          <Link
            to={`/${
              hero.internal.type === "ContentfulPost" ? "post" : "serie"
            }/${hero.url}`}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  height: "80vh",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundImage: is_small_screen
                    ? `url(${topImage}?w=600&h=400&fit=fill&f=face)`
                    : `url(${topImage}?fit=fill&f=face)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="title hero-title">{hero.titel}</div>
              </div>
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
      limit: 3
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        cover {
          file {
            url
          }
        }
        mobile: cover {
          gatsbyImageData(aspectRatio: 0.5, layout: FULL_WIDTH, quality: 100)
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
