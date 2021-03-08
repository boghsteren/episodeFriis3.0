import React, { useState } from "react";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";
import { Image, Search } from "semantic-ui-react";

export const SearchBar = () => {
  const [term, updateTerm] = useState();
  const { allContentfulSerie } = useStaticQuery(graphql`
    query seriesQuery {
      allContentfulSerie {
        nodes {
          titel
          id
          cover {
            file {
              url
            }
          }
          url
        }
      }
    }
  `);
  const { nodes } = allContentfulSerie;
  const results = nodes.filter((serie) =>
    serie.titel?.toLowerCase().includes(term?.toLowerCase())
  );
  return (
    <div>
      <Search
        fluid
        type="text"
        size={"small"}
        value={term}
        onSearchChange={(e, data) => {
          updateTerm(data.value);
        }}
        onResultSelect={(e, { result }) => navigate(`/serier/${result.url}`)}
        results={results?.map((item) => {
          return {
            title: item.titel,
            cover: item.cover.file.url,
            id: item.id,
            key: item.id,
            url: item.url,
          };
        })}
        resultRenderer={({ title, cover, id, url }) => [
          <div key={id}>
            {cover && <Image src={`https:${cover}`} size="small" />}
            {title}
          </div>,
        ]}
      ></Search>
    </div>
  );
};
