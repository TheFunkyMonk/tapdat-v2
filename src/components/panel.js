import React from "react"

import PanelContent from "./panelContent"


const Panel = ({ tap, last }) => {

	if (typeof tap === 'object') {
		const beer = tap.node;

		const color = beer.accentColor.toLowerCase();
		const accent = {
			primary: color + '-600',
			secondary: color + '-400',
		}

		return (
			<PanelContent
				lastItem={last}
				previewImage={beer.previewImage}
				primaryAccent={accent.primary}
				secondaryAccent={accent.secondary}
				tapNumber={beer.tapNumber}
				beerName={beer.beerName}
				breweryName={beer.breweryName}
				beerStyle={beer.style}
				description={beer.description.description}
				abv={beer.abv}
				hoppiness={beer.hoppiness}
				maltiness={beer.maltiness}
				notes={beer.notes}
			/>
		)

	} else {

		return (
			<PanelContent
				lastItem={last}
				previewImage=""
				primaryAccent="gray-600"
				secondaryAccent="gray-400"
				tapNumber={tap}
				beerName="Nada"
				breweryName="All Gone"
				beerStyle="Empty Tap"
				description="Something's brewing..."
				abv=""
				hoppiness="0"
				maltiness="0"
				notes="Air"
			/>
		)
	}
}

Panel.defaultProps = {
	beer: ``,
}
export default Panel
