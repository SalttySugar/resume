import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "resume",
  siteMetadata: {
    title: `resume`,
    siteUrl: 'https://salttysugar.github.io/resume'
  },

  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-4DSSMGNTDJ"]
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ]
};

export default config;
