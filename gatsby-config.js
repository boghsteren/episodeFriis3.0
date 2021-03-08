module.exports = {
  siteMetadata: {
    title: "EpisodeFriis 3.0",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "8e095bdab2dd05e7f1c97e5349204e8495910b330a98e3bfc4df9806790351f6",
        spaceId: "qqmq4jsguzi3",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
