const path = require("path")

module.exports = {
  siteMetadata: {
    title: `habichat | Chat with your neighbours.`,
    description: `Stay in touch with everyone around you, make new friends, enjoy life.`,
    author: `Charles Hay`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/services/redux",
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        cleanupOnClient: true,
        windowKey: "__PRELOADED_STATE__",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        atoms: path.join(__dirname, "src/atoms"),
        components: path.join(__dirname, "src/components"),
        config: path.join(__dirname, "src/config"),
        layouts: path.join(__dirname, "src/layouts"),
        pages: path.join(__dirname, "src/pages"),
        services: path.join(__dirname, "src/services"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `habichat`,
        short_name: `habichat`,
        start_url: `/`,
        background_color: `#EFF3F8`,
        theme_color: `#6039A9`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyC8Kwa-4RTaJO0VTW9aWnO6h8nh3guJP90",
          authDomain: "habichat-86de6.firebaseapp.com",
          databaseURL: "https://habichat-86de6.firebaseio.com",
          projectId: "habichat-86de6",
          storageBucket: "habichat-86de6.appspot.com",
          messagingSenderId: "523407045659",
          appId: "1:523407045659:web:9f6ada73d3f0f9ed16f4be",
          measurementId: "G-Z90V46ZEDM",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
