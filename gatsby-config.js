module.exports = {
  siteMetadata: {
    title: `ヤー・スペーステック`,
    description: `現次元界から多次元宇宙まで、あらゆるルートを開き安全第一をモットーに整備します。`,
    author: `ヤー アトム`,
    siteUrl: `https://yah-space.work`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://yah-space.work`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://yah-space.work',
        sitemap: 'https://yah-space.work/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]                
      }                                                      
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `informations`,
        path: `${__dirname}/src/contents/informations`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
