require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteTitle: `NUR1027 Syllabus`,
    defaultTitle: `NUR1027 Syllabus`,
    siteTitleShort: `NUR1027`,
    siteDescription: `Syllabus for NUR1027: Integrated approaches to research appraisal and utilization (Part 1)`,
    siteUrl: `https://nur1027syllabus.netlify.app`,
    siteAuthor: `@aw_conway`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#002a60`,
    basePath: `/`,
    footer: `NUR1027`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require("./src/utils/algolia.js"),
      },
    },
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/awconway/nur1027-syllabus`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nur1027syllabus.netlify.app`,
      },
    },
    "gatsby-plugin-remove-serviceworker",
    `gatsby-plugin-styled-components`,
  ],
};
