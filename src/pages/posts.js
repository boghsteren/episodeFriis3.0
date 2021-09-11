import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../Layout";
import { Divider } from "antd";
import { SmallContentList } from "../components/SmallContentList";

const Posts = ({ data }) => {
  const items = data.allContentfulPost.nodes;
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
          Posts
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
            items={items}
            type="post"
            title="Posts"
            width="550px"
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
        internal {
          type
        }
        blurb {
          blurb
        }
      }
    }
  }
`;

export default Posts;
