import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../Layout";
import { Divider } from "antd";
import Title from "antd/lib/typography/Title";
import { SmallContentList } from "../components/SmallContentList";

const Posts = ({ data }) => {
  const items = data.allContentfulPost.nodes;
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
            justifyContent: "center",
          }}
        >
          <SmallContentList
            items={items}
            type="post"
            title="Posts"
          ></SmallContentList>
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
