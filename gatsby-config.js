module.exports = {
  siteMetadata: {
    title: `Howard Dean Watts`,
    description: `Howard Dean Watts is a software developer based in Manhattan. Currently on the founding team of Chronograph Private Equity.
      He specializes in web applications and have built apps with React, .NET, Rails, Perl, and ColdFusion in professional environments.`,
    author: `@hdwatts`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hdwatts-icon-2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
