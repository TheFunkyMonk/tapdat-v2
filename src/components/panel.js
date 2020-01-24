import PropTypes from "prop-types"
import React from "react"

const Panel = ({ beer, last }) => {

	const color = beer.accentColor.toLowerCase();
	const accent = {
		primary: color + '-600',
		secondary: color + '-400',
	}

	return (
		<div className={"w-full md:w-1/3 min-h-screen " + (last ? "" : "border-r border-gray-400")}>
			<div className="bg-gray-200 px-4 pt-24 lg:pt-32 xl:pt-48 relative">
				<img src={beer.previewImage} alt="Preview for tap item" class="absolute top-0 left-0 w-full h-full object-cover z-10" />
				<div className="bg-white px-4 pt-4 pb-8 rounded text-center relative z-20">
					<div className={"rounded-full text-white antialiased border-4 border-white w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-2 bg-" + accent.primary + ""}>
						<p className="font-primary leading-tight text-4xl pt-px">{beer.tapNumber}</p>
					</div>
					<h1 className={"font-primary tracking-wide text-4xl leading-tight text-" + accent.primary + ""}>{beer.beerName}</h1>
					<h2 className="font-primary tracking-wide text-lg text-gray-600 leading-tight">{beer.breweryName}</h2>
				</div>
			</div>
			<div className={"text-white antialiased px-4 pt-2 pb-1 text-center bg-" + accent.primary + ""}>
				<p className="font-primary tracking-wide leading-tight uppercase text-3xl">{beer.style}</p>
			</div>
			<div className="bg-white px-4 py-4">
				<pre className={"font-secondary text-sm p-4 rounded overflow-scroll bg-" + accent.secondary + ""}>{JSON.stringify(beer, null, 4)}</pre>
			</div>
		</div>
	)
}

Panel.propTypes = {
	beer: PropTypes.object,
}

Panel.defaultProps = {
	beer: ``,
}
export default Panel
