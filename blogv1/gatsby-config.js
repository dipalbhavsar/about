module.exports = {
  siteMetadata: {
    title: `Dipal Bhavsar`,
    name: `Dipal Bhavsar`,
    author: `Dipal`,
    siteUrl: `https://www.dipalbhavsar.com`,
    description: `This site is developed using React, GatsBy, Bootstrap 4.5. Hosted in GitHub page. this site is intense to self learning and exploring different technologies.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/dipalbhavsar`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/dipal_bhavsar`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blogs`,
        name: `blogs`,
      },
    },  
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-167858384-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#182952`,
        theme_color: `#a2466c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, 
    {
      resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://dipalbhavsar.us10.list-manage.com/subscribe/post?u=f756252497326df0842cc8176&amp;id=b520c27181', // string; add your MC list endpoint here; see instructions below
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
    },   
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
