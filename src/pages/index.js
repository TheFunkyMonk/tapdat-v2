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
									description {
										description
									}
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
					const taps = [1, 2, 3];
					const edges = data.allContentfulBeer.edges;
					edges.forEach(edge => {
						if (edge.node.tapNumber) taps[edge.node.tapNumber - 1] = edge;
					});
					return taps.map((tap, i) => <Panel tap={tap} last={i === (taps.length - 1)} />);
				}}
			></StaticQuery>
		</div>
	</Layout>
)

export default IndexPage
