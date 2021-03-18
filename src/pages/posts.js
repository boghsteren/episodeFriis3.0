import * as React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../Layout";
import { Card, Divider, Image } from "antd";
import Title from "antd/lib/typography/Title";

const Posts = ({ data }) => {
  const items = data.allContentfulPost.nodes;
  const type = "post";
  return (
    <Layout>
      <main>
        <title>Posts</title>
        <Divider></Divider>
        <Title
          style={{
            margin: "25px",
            textAlign: "center",
          }}
        >
          Posts
        </Title>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "25px",
            justifyContent: "space-between",
          }}
        >
          {items.map((item) => (
            <Link key={item.url} to={`/${type}/${item.url}`}>
              <Card
                hoverable
                style={{ margin: "10px", width: "400px" }}
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
  query Posts {
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

export default Posts;
