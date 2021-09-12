import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../Layout";
import { SmallContentList } from "../components/SmallContentList";
import { useMediaQuery } from "@react-hook/media-query";

const Posts = ({ data }) => {
  const items = data.allContentfulPost.nodes;
  const small = useMediaQuery("only screen and (max-width: 768px)");
  return (
    <Layout>
      <main>
        <title>Home Page</title>
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
            margin: small ? "10px" : "25px",
            justifyContent: "center",
          }}
        >
          <SmallContentList
            items={items}
            type="post"
            title="Posts"
            width={small ? "100%" : "600px"}
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
