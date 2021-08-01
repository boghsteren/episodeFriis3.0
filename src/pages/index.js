import { graphql, Link } from "gatsby";
import * as React from "react";
import { Layout } from "../Layout";
import { Carousel, Col, Row } from "antd";
import { ContentList } from "../components/ContentList";
import Title from "antd/lib/typography/Title";
import "../styles.css";
import { useMediaQuery } from "@react-hook/media-query";
import { ContentCarousel } from "../components/ContentCarrousel";

const IndexPage = ({ data }) => {
  const { allContentfulSerie, allContentfulPost } = data;
  const serier = allContentfulSerie.nodes;
  const posts = allContentfulPost.nodes;

  const first_five = serier.slice(0, 5);
  const first_five_posts = posts.slice(0, 5);
  const matches = useMediaQuery("only screen and (max-width: 480px)");
  return (
    <Layout>
      <main>
        <title>episodeFriis</title>
        <meta name="description" content="En side om serier" />
        <Carousel autoplay>
          {first_five.map((item) => (
            <div key={item.url}>
              <Link to={`/serie/${item.url}`}>
                <div
                  className="front_page_slider"
                  style={{
                    backgroundImage: matches
                      ? `url(${item.cover.file.url}?fit=thumb&w=400&h=700&f=face)`
                      : `url(${item.cover.file.url})`,
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                  }}
                >
                  <Title
                    style={{
                      fontSize: "60px",
                      textAlign: "center",
                      color: "white",
                      textShadow: "2px 3px black",
                    }}
                  >
                    {item.titel}
                  </Title>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
        <ContentCarousel
          items={first_five_posts}
          titel="Nyeste posts"
          type="post"
        ></ContentCarousel>
        <Row>
          <ContentList
            items={first_five}
            titel="Seneste tilføjede serier"
            type="serie"
          ></ContentList>
        </Row>
        <Row>
          <ContentList
            items={first_five}
            titel="Nyeste serier"
            type="serie"
          ></ContentList>
        </Row>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulSerie(sort: { fields: createdAt, order: DESC }) {
      nodes {
        cover {
          file {
            url
          }
        }
        titel
        url
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
