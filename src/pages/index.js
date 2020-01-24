import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/panel"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<link href="https://fonts.googleapis.com/css?family=Bebas+Neue|Open+Sans&display=swap" rel="stylesheet"></link>
		<div className="w-full flex flex-wrap flex-col md:flex-row">
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
					const edges = data.allContentfulBeer.edges;
					return edges.map((edge, i) => <Panel beer={edge.node} tap={i + 1} last={i === (edges.length - 1)} />);
				}}
			></StaticQuery>
		</div>
	</Layout>
)

export default IndexPage
