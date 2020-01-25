import PropTypes from "prop-types"
import React from "react"

import hopOn from "../images/hop-on.svg"
import hopOff from "../images/hop-off.svg"
import maltOn from "../images/malt-on.svg"
import maltOff from "../images/malt-off.svg"

const renderRating = (type, rank) => {
	const onIcon = type === 'hop' ? hopOn : maltOn;
	const offIcon = type === 'hop' ? hopOff : maltOff;

	return (
		<>
			{function () {
				let rows = [];
				const addIcons = (amt, icon) => {
					for (let i = 0; i < amt; i++) {
						rows.push(<img src={icon} alt='rating icon' class={type === 'hop' ? 'w-6 mr-2' : 'w-55 mr-25'} />);
					}
				};
				addIcons(rank, onIcon);
				addIcons(5 - rank, offIcon);
				return rows;
			}()}
		</>
	)
}

const Panel = ({ tap, last }) => {

	if (typeof tap === 'object') {
		const beer = tap.node;

		const color = beer.accentColor.toLowerCase();
		const accent = {
			primary: color + '-600',
			secondary: color + '-400',
		}

		return (
			<div className={"w-full md:w-1/3 flex flex-col min-h-screen " + (last ? "" : "border-r border-gray-400")}>
				<div className="bg-gray-200 px-8 pt-24 lg:pt-32 xl:pt-48 relative">
					<img src={beer.previewImage} alt="Preview for tap item" class="absolute top-0 left-0 w-full h-full object-cover z-10" />
					<div className="bg-white px-4 pt-4 pb-8 rounded text-center relative z-20">
						<div className={"rounded-full text-white antialiased border-4 border-white w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-2 bg-" + accent.primary + ""}>
							<p className="font-primary leading-tight text-4xl pt-px">{beer.tapNumber}</p>
						</div>
						<h1 className={"font-primary tracking-wide text-4xl leading-tight text-" + accent.primary + ""}>{beer.beerName}</h1>
						<h2 className="font-primary tracking-wide text-lg text-gray-600 leading-tight">{beer.breweryName}</h2>
					</div>
				</div>
				<div className={"text-white antialiased px-8 pt-2 pb-1 text-center bg-" + accent.primary + ""}>
					<p className="font-primary tracking-wide leading-tight uppercase text-3xl">{beer.style}</p>
				</div>
				<div className={"p-8 h-full relative bg-" + accent.secondary + ""}>
					<p className="font-secondary text-base italic leading-relaxed">{beer.description.description}</p>
					<p className="font-primary text-6xl text-white absolute bottom-0 left-0 -mb-24 horizontal-center">{beer.abv}%</p>
				</div>
				<div className="bg-white px-8 py-4 mt-auto mb-0">

					<div class="flex flex-wrap my-4 items-center">
						<p class="font-primary w-16 mt-1">Hops</p>
						{renderRating('hop', beer.hoppiness)}
					</div>
					<div class="flex flex-wrap my-4 items-center">
						<p class="font-primary w-16 mt-1">Malt</p>
						{renderRating('malt', beer.maltiness)}
					</div>
					<div class="flex flex-wrap my-4 items-center">
						<p class="font-primary w-16 mt-1">Notes</p>
						<p class="font-secondary text-sm">{beer.notes}</p>
					</div>

				</div>
			</div>
		)

	} else {

		return (
			<div className={"w-full md:w-1/3 flex flex-col min-h-screen " + (last ? "" : "border-r border-gray-400")}>
				<div className="bg-gray-200 px-8 pt-24 lg:pt-32 xl:pt-48 relative">
					<div className="bg-white px-4 pt-4 pb-8 rounded text-center relative z-20">
						<div className="rounded-full text-white antialiased border-4 border-white w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-2 bg-gray-600">
							<p className="font-primary leading-tight text-4xl pt-px">{tap}</p>
						</div>
						<h1 className="font-primary tracking-wide text-4xl leading-tight text-gray-600">Nada</h1>
						<h2 className="font-primary tracking-wide text-lg text-gray-400 leading-tight">All Gone</h2>
					</div>
				</div>
				<div className="text-white antialiased px-8 pt-2 pb-1 text-center bg-gray-600">
					<p className="font-primary tracking-wide leading-tight uppercase text-3xl">Empty Tap</p>
				</div>
				<div className={"p-8 h-full bg-gray-400"}>
					<p className="font-secondary text-sm">Something's brewing...</p>
				</div>
				<div className="bg-white px-8 py-4 mt-auto mb-0">

					<div class="flex flex-wrap my-4 items-center">
						<p class="font-primary w-16 mt-1">Hops</p>
						{renderRating('hop', 0)}
					</div>
					<div class="flex flex-wrap my-4 items-center">
						<p class="font-primary w-16 mt-1">Malt</p>
						{renderRating('malt', 0)}
					</div>
					<div class="flex flex-wrap my-4 items-center">
						<p class="font-primary w-16 mt-1">Notes</p>
						<p class="font-secondary text-sm">Air</p>
					</div>
				</div>
			</div>
		)
	}
}

Panel.propTypes = {
	beer: PropTypes.object,
}

Panel.defaultProps = {
	beer: ``,
}
export default Panel
