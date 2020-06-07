const path = require('path')
const serviceAccount = require('./src/config/service-account.json')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://habi.chat',
    title: `Habichat`,
    description: `The #1 application for communicating with your neighbours.`,
    author: `Charles Hay`,
    social: {
      twitter: `habi_chat`
    }
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        path: `${__dirname}/gatsby-routes.js`
      }
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-1410569287706137`
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: true,
          messaging: false,
          functions: false,
          performance: true,
          analytics: true
        },
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
      resolve: 'gatsby-plugin-root-import',
      options: {
        api: path.join(__dirname, 'src/api'),
        config: path.join(__dirname, 'src/config'),
        services: path.join(__dirname, 'src/services'),
        ui: path.join(__dirname, 'src/ui')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/ui/markdown`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`]
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
        exclude: [`**/avatars`, `**/dashboard`, `/app/community`, `/app/post`, `**/styleguide`]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://habi.chat',
        sitemap: 'https://habi.chat/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: [`*/app/community`, `*/app/post`, `*/avatars`, `*/dashboard`, `*/recaptcha`, `*/styleguide`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-163462660-1',
        head: true,
        cookieDomain: 'habi.chat'
      }
    }
  ]
}
