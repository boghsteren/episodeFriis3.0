import { Breadcrumb, Card, Col, Row, Tooltip, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { graphql, Link } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../Layout";
import { BookOutlined, PlaySquareOutlined } from "@ant-design/icons";
import { useMediaQuery } from "@react-hook/media-query";

const PostPage = ({ data }) => {
  const { contentfulPost } = data;
  const { cover, blurb, url, titel, tekstOverListe, liste } = contentfulPost;
  const small = useMediaQuery("only screen and (max-width: 425px)");
  const medium = useMediaQuery("only screen and (max-width: 1024px)");

  return (
    <React.Fragment>
      <title>{titel} | episodeFriis</title>
      <meta property="og:title" content={titel} />
      <meta
        name="description"
        content={`${blurb} Læs omtalen af ${titel} på episodefriis.dk.`}
      />
      <meta
        property="og:url"
        content={`http://www.episodefriis.dk/serie/${url}`}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={`${blurb} Læs mere hos episodeFriis.`}
      />
      <meta property="og:image" content={`http:${cover?.file.url}`} />
      <Layout>
        <div>
          <Row>
            <Col span={24}>
              <div
                style={{
                  height: "100vh",
                  backgroundImage: small
                    ? `url(${cover.file.url}?fit=thumb&w=1200&h=1200&f=face)`
                    : medium
                    ? `url(${cover.file.url}?fit=thumb&w=600&h=1200&f=face)`
                    : `url(${cover.file.url})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </Col>

            <Col
              span={24}
              style={{ padding: "25px", backgroundColor: "#d9d9d9" }}
            >
              <Card
                style={{ marginTop: "-250px" }}
                title={
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link to="/">EpisodeFriis</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link to="/posts">Posts</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titel}</Breadcrumb.Item>
                  </Breadcrumb>
                }
              >
                <Title>{titel}</Title>
                <Typography.Paragraph strong>
                  {blurb.blurb}
                </Typography.Paragraph>
                <Typography.Paragraph>
                  <ReactMarkdown>{tekstOverListe.tekstOverListe}</ReactMarkdown>
                </Typography.Paragraph>
              </Card>
            </Col>
          </Row>
          {liste && (
            <Row>
              <Col
                className="serie_liste"
                style={{
                  margin: "25px",
                }}
              >
                <Title>Relateret indhold</Title>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {liste.map((item) => (
                    <Link
                      key={item.url}
                      to={`/${
                        item.internal.type === "ContentfulPost"
                          ? "post"
                          : "serie"
                      }/${item.url}`}
                    >
                      <Card
                        hoverable
                        style={{ margin: "10px", width: "400px" }}
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
                          avatar={
                            item.internal.type === "ContentfulPost" ? (
                              <Tooltip title="Post" mouseEnterDelay={0.03}>
                                <BookOutlined></BookOutlined>
                              </Tooltip>
                            ) : (
                              <Tooltip title="Serie" mouseEnterDelay={0.03}>
                                <PlaySquareOutlined />
                              </Tooltip>
                            )
                          }
                          description={
                            <div style={{ height: "65px" }}>
                              {item.blurb?.blurb}
                            </div>
                          }
                        ></Card.Meta>
                      </Card>
                    </Link>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulPost(id: { eq: $id }) {
      titel
      url
      blurb {
        blurb
      }
      cover {
        file {
          url
        }
      }
      tekstOverListe {
        tekstOverListe
      }
      liste {
        ... on ContentfulPost {
          id
          titel
          url
          internal {
            type
          }
          cover {
            file {
              url
            }
          }
          blurb {
            blurb
          }
        }
        ... on ContentfulSerie {
          id
          titel
          url
          internal {
            type
          }
          cover {
            file {
              url
            }
            sys {
              type
            }
          }
          blurb {
            blurb
          }
        }
      }
    }
  }
`;

export default PostPage;
