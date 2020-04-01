const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Charles Hay | Modern Web Development`,
    description: `Learn React, React-Native and Node best practices and modern design.`,
    author: `Charles Hay`,
    siteUrl: `https://charleshay.com/`,
    social: {
      twitter: `haytherecharlie`
    }
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     path: `${__dirname}/src/language`,
    //     languages: [`en`, `fr`],
    //     defaultLanguage: `en`,
    //     redirect: true
    //   }
    // },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src/assets'),
        atoms: path.join(__dirname, 'src/atoms'),
        components: path.join(__dirname, 'src/components'),
        config: path.join(__dirname, 'src/config'),
        layouts: path.join(__dirname, 'src/layouts'),
        pages: path.join(__dirname, 'src/pages'),
        services: path.join(__dirname, 'src/services'),
        utils: path.join(__dirname, 'src/utils')
      }
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: `${__dirname}/src/services/redux`,
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/assets/images/favicon.png`
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          }
        ]
      }
    }
  ]
}
