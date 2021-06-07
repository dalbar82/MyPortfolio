/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `poppins:300,400,500,600,700`       
          ], display: 'swap'       
      }
  }
  ],
  siteMetadata: {
    title: "Crawford Creative Services",
    description: "Creativity start here",
    
  }
}
