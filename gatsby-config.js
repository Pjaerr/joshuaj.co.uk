module.exports = {
  siteMetadata: {
    title: 'Josh Jackson Portfolio Website',
  },
  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },


    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/projects/`,
      },
    },
  ]
}
