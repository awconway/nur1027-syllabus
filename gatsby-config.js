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
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/awconway/nur1027syllabus`,
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
    'gatsby-plugin-remove-serviceworker',

  ],
};
