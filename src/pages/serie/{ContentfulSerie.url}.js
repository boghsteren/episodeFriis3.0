import { Breadcrumb, Card, Col, Row, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from "../../Layout";
import { useMediaQuery } from "@react-hook/media-query";

const SeriesPage = ({ data }) => {
  const { contentfulSerie } = data;
  const {
    cover,
    blurb,
    url,
    titel,
    beskrivelse,
    udbyder,
    kategori,
  } = contentfulSerie;
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
            <Col md={10} xl={14} xxl={16} span={24}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: small ? "100vw" : "70vh",
                  backgroundImage: small
                    ? `url(${cover.file.url}?fit=thumb&w=1200&h=1200&f=face)`
                    : medium
                    ? `url(${cover.file.url}?fit=thumb&w=600&h=1200&f=face)`
                    : `url(${cover.file.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </Col>

            <Col
              md={14}
              xl={10}
              xxl={8}
              span={24}
              style={{ padding: "25px", backgroundColor: "#d9d9d9" }}
            >
              <Card
                extra={<Link to={`/serier?udbyder=${udbyder}`}>{udbyder}</Link>}
                title={
                  <Breadcrumb>
                    <Breadcrumb.Item>
                      <Link to="/">EpisodeFriis</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      <Link to="/serier">Serier</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{titel}</Breadcrumb.Item>
                  </Breadcrumb>
                }
                actions={kategori?.map((item) => (
                  <Link to={`/serier?genre=${item.kategori}`}>
                    {item.kategori}
                  </Link>
                ))}
              >
                <Title>{titel}</Title>
                <Typography.Paragraph strong>
                  {blurb.blurb}
                </Typography.Paragraph>
                <Typography.Paragraph></Typography.Paragraph>
              </Card>
            </Col>
          </Row>
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
