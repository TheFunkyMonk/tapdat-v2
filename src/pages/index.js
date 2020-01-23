import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/panel"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<StaticQuery
			query={graphql`
				{
					allContentfulBeer {
						edges {
							node {
								breweryName
								beerName
								style
								abv
								accentColor
								hoppiness
								maltiness
								notes
								tapNumber
							}
						}
					}
				}
			`}
			render={data => {
				return data.allContentfulBeer.edges.map((edge, i) => <Panel beer={edge.node} />);
			}}
		></StaticQuery>
	</Layout>
)

export default IndexPage
