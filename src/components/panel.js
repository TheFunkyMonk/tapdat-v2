import PropTypes from "prop-types"
import React from "react"

const Panel = ({ beer, tap, last }) => (
	<div className={"flex-1 min-h-screen " + (last ? "" : "border-r border-gray-400")}>
		<div className="bg-gray-200 px-4 pt-24">
			<div className="bg-white px-4 pt-4 pb-8 rounded text-center">
				<div className="rounded-full bg-gray-800 text-white antialiased border-4 border-white w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-2">
					<p className="font-primary leading-tight text-4xl pt-px">{tap}</p>
				</div>
				<h1 className="font-primary tracking-wide text-4xl leading-tight">{beer.beerName}</h1>
				<h2 className="font-primary tracking-wide text-lg text-gray-600 leading-tight">{beer.breweryName}</h2>
			</div>
		</div>
		<div className="bg-gray-800 text-white antialiased px-4 pt-2 pb-1 text-center">
			<p className="font-primary tracking-wide leading-tight uppercase text-3xl">{beer.style}</p>
		</div>
		<div className="bg-white px-4 py-4">
			<pre className="font-secondary p-4 bg-gray-200 rounded">{JSON.stringify(beer, null, 4)}</pre>
		</div>
	</div>
)

Panel.propTypes = {
	beer: PropTypes.object
}

Panel.defaultProps = {
	beer: ``,
}
export default Panel
