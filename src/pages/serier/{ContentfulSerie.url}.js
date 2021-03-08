import { graphql } from "gatsby";
import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Divider,
  Header,
  Image,
  Item,
  Label,
  Segment,
} from "semantic-ui-react";
import { Layout } from "../../Layout";

const SeriesPage = ({ params, data }) => {
  const { contentfulSerie } = data;
  const {
    cover,
    blurb,
    titel,
    beskrivelse,
    udbyder,
    kategori,
  } = contentfulSerie;
  return (
    <React.Fragment>
      <Layout>
        <Item.Group>
          <Item>
            <Item.Image size="huge" src={cover.file.url}></Item.Image>
            <Item.Content style={{ margin: "40px" }}>
              <Item.Header>
                <Header size="huge">
                  {titel}{" "}
                  <Label size="small" color="black">
                    {udbyder}
                  </Label>
                </Header>
              </Item.Header>

              <Item.Meta>{blurb.blurb}</Item.Meta>

              <Item.Description>
                <ReactMarkdown>{beskrivelse.beskrivelse}</ReactMarkdown>
              </Item.Description>
              <Item.Extra>
                {kategori.map((item) => (
                  <Label key={item.kategori}>{item.kategori}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Layout>
    </React.Fragment>
  );
};

export const query = graphql`
  query($id: String) {
    contentfulSerie(id: { eq: $id }) {
      titel
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
