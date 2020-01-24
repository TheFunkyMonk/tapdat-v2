import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/panel"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
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
									previewImage
								}
							}
						}
					}
				`}
				render={data => {
					const edges = data.allContentfulBeer.edges;
					const taps = [];
					edges.forEach(edge => {
						if (edge.node.tapNumber) taps.push(edge);
					});
					taps.sort((a, b) => {
						return a.node.tapNumber - b.node.tapNumber;
					});
					return taps.map((tap, i) => <Panel beer={tap.node} last={i === (taps.length - 1)} />);
				}}
			></StaticQuery>
		</div>
	</Layout>
)

export default IndexPage
