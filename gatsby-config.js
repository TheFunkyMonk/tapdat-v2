require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: `tapdat`,
		description: `Digital taplist app powered by Gatsby and Contentful`,
		author: `@gatsbyjs`,
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
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `tapdat`,
				short_name: `tapdat`,
				start_url: `/`,
				background_color: `#39B54A`,
				theme_color: `#39B54A`,
				display: `minimal-ui`,
				icon: `src/images/hop-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `kw951z6exi22`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				// printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				tailwind: true, // Enable tailwindcss support
				whitelistPatterns: [
					/^bg-/,
					/^text-/
				], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
