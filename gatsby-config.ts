import type { GatsbyConfig } from "gatsby";
import { env } from "./src/env";

require("dotenv").config({
  path: ".env",
})

const config: GatsbyConfig = {
  pathPrefix: "resume",
  // siteMetadata: {
  //   title: `Resume`,
  //   siteUrl: `https://www.yourdomain.tld`
  // },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-plugin-google-gtag",
    //   options: {
    //     trackingId: env.GOOGLE_ID
    //   }
    // },
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