import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Panel from "../components/panel"

const IndexPage = ({data}) => {

	const taps = [1, 2, 3];
	const edges = data.allContentfulBeer.edges;
	edges.forEach(edge => {
		if (edge.node.tapNumber) taps[edge.node.tapNumber - 1] = edge;
	});

	return (
		<Layout>
			<SEO title="Home" />
			<div className="w-full flex flex-wrap flex-col md:flex-row">
				{ taps.map((tap, i) => <Panel key={tap.node !== undefined ? (tap.node.beerName + tap.node.tapNumber) : tap} tap={tap} last={i === (taps.length - 1)} />) }
			</div>
		</Layout>
	)
}

export const query = graphql`
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
`

export default IndexPage
