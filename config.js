const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://nur1027syllabus.netlify.app',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo:
      'https://bloomberg.nursing.utoronto.ca/wp-content/themes/nursing/images/bloomberg_logo.png',
    logoLink: '/',
    title: '',
    githubUrl: 'https://github.com/awconway/nur1027syllabus',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'nur1027',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/index',
      '/schedule', // add trailing slash if enabled above
      '/reading',
      '/online',
      '/assignments',
      '/evaluation',
      '/policies',
    ],
    collapsedNav: [
      '/evaluation', // add trailing slash if enabled above
    ],
    links: [{ text: 'Course webpage', link: 'https://nur1027.netlify.app' }],
    frontline: true,
    ignoreIndex: false,
    title: "<div class='greenCircle'></div> NUR 1027 <div class='greenCircle'></div>",
  },
  siteMetadata: {
    title: 'NUR1027 Syllabus',
    description: '',
    ogImage: null,
    docsLocation: 'https://github.com/awconway/nur1027-syllabus/tree/master/content',
    favicon: 'https://raw.githubusercontent.com/awconway/NUR1027-FALL-2019/master/static/logo.png',
  },
  pwa: {
    enabled: true, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'NUR1027 Syllabus',
      short_name: 'nur1027syllabus',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
