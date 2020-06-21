/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'トライデントコンピュータ専門学校 Webデザイン学科授業資料',
    titleTemplate: "%s · The Real Hero",
    description: '講師の河口用の2020年度［前期］Webデザイン学科授業資料',
    author: '河口英生'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Webデザイン学科授業資料`,
        short_name: `WebDesign`,
        start_url: `/`,
        icon: `src/images/webicon.png`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/graphics`,
        name: `graphics`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/javascript`,
        name: `javascript`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/jobhunting`,
        name: `jobhunting`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/application`,
        name: `application`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/webdesign`,
        name: `webdesign`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/vector`,
        name: `vector`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/industry`,
        name: `industry`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `remark-image-attributes`,
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: [`display`, `position`, `border`]
            }
          },
          {
            resolve: 'gatsby-remark-prismjs-title',
            options: {
              className: 'your-custom-class-name'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1300,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "nofollow noopener noreferrer",
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                title3: {
                  classes: "title is-5",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-catch-links`
  ],
}
