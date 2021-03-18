import { graphql, Link } from "gatsby";
import * as React from "react";
import { Layout } from "../Layout";
import { Carousel, Col, Row } from "antd";
import { ContentList } from "../components/ContentList";
import Title from "antd/lib/typography/Title";
import "../styles.css";

const IndexPage = ({ data }) => {
  const { allContentfulSerie, allContentfulPost } = data;
  const serier = allContentfulSerie.nodes;
  const posts = allContentfulPost.nodes;

  const first_five = serier.slice(0, 5);
  const first_five_posts = posts.slice(0, 5);

  return (
    <Layout>
      <main>
        <title>episodeFriis</title>
        <meta name="description" content="En side om serier" />
        <Carousel autoplay>
          {first_five.map((item) => (
            <div>
              <Link to={`/serie/${item.url}`}>
                <div
                  className="front_page_slider"
                  style={{
                    backgroundImage: `url(${item.cover.file.url})`,
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
        <Row>
          <Col md={8} span={24}>
            <ContentList
              items={first_five_posts}
              titel="Nyeste posts"
              type="post"
            ></ContentList>
          </Col>
          <Col md={8} span={24}>
            <ContentList
              items={first_five}
              titel="Nyeste serier"
              type="serie"
            ></ContentList>
          </Col>
          <Col md={8} span={0}>
            <ContentList
              items={first_five}
              titel="Nyeste serier"
              type="serie"
            ></ContentList>
          </Col>
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
      }
    }
  }
`;

export default IndexPage;
