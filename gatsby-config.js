module.exports = {
  pathPrefix: `/gatsby-test`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    uniCSSVersion: `0.12.5`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-yaml`,
  `gatsby-transformer-json`,
  `gatsby-plugin-sass`,
  ],
}
