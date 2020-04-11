const path = require('path')
const serviceAccount = require('./src/config/service-account.json')

module.exports = {
  siteMetadata: {
    title: `Habichat`,
    description: `The #1 application for communicating with your neighbours.`,
    author: `Charles Hay`,
    siteUrl: `https://habi.chat`,
    social: {
      twitter: `habichat1`
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
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/category/*`, `/path/to/page`],
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `${site.wp.generalSettings.siteUrl}${node.path}`,
              changefreq: `daily`,
              priority: 0.7
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: serviceAccount.apiKey,
          authDomain: serviceAccount.authDomain,
          databaseURL: serviceAccount.databaseURL,
          projectId: serviceAccount.projectId,
          storageBucket: serviceAccount.storageBucket,
          messagingSenderId: serviceAccount.messagingSenderId,
          appId: serviceAccount.appId,
          measurementId: serviceAccount.measurementId
        }
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/language`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        redirect: false
      }
    },
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
        templates: path.join(__dirname, 'src/templates'),
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
        name: `videos`,
        path: `${__dirname}/src/assets/videos`
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`
      }
    },
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
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/**/styleguide`, `/**/recaptcha`, `**/avatars/**`]
      }
    }
  ]
}
