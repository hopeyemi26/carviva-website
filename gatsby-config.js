module.exports = {
  siteMetadata: {
    title: "Carviva",
    author: "Dayo Akinkuowo",
    imageUrl: "https://i.imgur.com/Vz81GEl.png",
    description: "A Project to bootstrap your next Gatsby + Bulma site.",
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
    twitter: "https://twitter.com/mycarviva",
    facebook: `https://facebook.com/mycarviva`,
    instagram: `https://instagram.com/mycarviva`,
    linkedIn: `https://www.linkedin.com/company/mycarviva`,
    siteUrl: `https://www.mycarviva.com`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // precachePages: [`/about-us/`, `/projects/*`],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "tomato",
        showSpinner: true
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CarViva",
        short_name: "carviva",
        start_url: "/",
        background_color: "#21c292",
        theme_color: "#21c292",
        display: "standalone",
        // icon: "src/images/gatsby-icon.png",
        orientation: "portrait"
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-XXXXXXXX-X",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
