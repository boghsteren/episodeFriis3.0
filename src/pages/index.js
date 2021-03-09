import { graphql, Link } from "gatsby";
import * as React from "react";
import { Item } from "semantic-ui-react";
import { Layout } from "../Layout";

const IndexPage = ({ data }) => {
  const { allContentfulSerie } = data;
  return (
    <Layout>
      <main>
        <title>episodeFriis</title>
        <meta name="description" content="En side om serier" />{" "}
        <div>Forside</div>
        <Item.Group>
          {allContentfulSerie.nodes.map((item) => (
            <Item as={Link} key={item.url} to={`/serier/${item.url}`}>
              <Item.Image size="small" src={item.cover.file.url}></Item.Image>
              <Item.Content>
                <Item.Header>{item.titel}</Item.Header>
                <Item.Meta>{item.blurb.blurb}</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulSerie {
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
