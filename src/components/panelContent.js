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

const Panel = ({
	lastItem,
	previewImage,
	primaryAccent,
	secondaryAccent,
	tapNumber,
	beerName,
	breweryName,
	beerStyle,
	description,
	abv,
	hoppiness,
	maltiness,
	notes,
}) => {

	return (
		<div className={"w-full md:w-1/3 flex flex-col min-h-screen " + (lastItem ? "" : "border-r border-gray-400")}>
			<div className="bg-gray-200 px-8 pt-24 lg:pt-32 xl:pt-48 relative">
				{previewImage !== "" && <img src={previewImage} alt="Preview for tap item" className="absolute top-0 left-0 w-full h-full object-cover z-10" />}
				<div className="bg-white px-4 pt-4 pb-8 rounded text-center relative z-20">
					<div className={"rounded-full text-white antialiased border-4 border-white w-16 h-16 flex items-center justify-center mx-auto -mt-12 mb-2 bg-" + primaryAccent + ""}>
						<p className="font-primary leading-tight text-4xl pt-px">{tapNumber}</p>
					</div>
					<h1 className={"font-primary tracking-wide text-4xl leading-tight text-" + primaryAccent + ""}>{beerName}</h1>
					<h2 className="font-primary tracking-wide text-lg text-gray-600 leading-tight">{breweryName}</h2>
				</div>
			</div>
			<div className={"text-white antialiased px-8 pt-2 pb-1 text-center bg-" + primaryAccent + ""}>
				<p className="font-primary tracking-wide leading-tight uppercase text-3xl">{beerStyle}</p>
			</div>
			<div className={"p-8 h-full relative bg-" + secondaryAccent + ""}>
				<p className="font-secondary text-base italic leading-relaxed">{description}</p>
				{abv !== "" && <p className="font-primary text-6xl tracking-tight text-white absolute bottom-0 left-0 -mb-28 horizontal-center">{abv}%</p>}
			</div>
			<div className="bg-white px-8 py-4 mt-auto mb-0">

				<div className="flex flex-wrap my-4 items-center">
					<p className="font-primary w-16 mt-1">Hops</p>
					{renderRating('hop', hoppiness)}
				</div>
				<div className="flex flex-wrap my-4 items-center">
					<p className="font-primary w-16 mt-1">Malt</p>
					{renderRating('malt', maltiness)}
				</div>
				<div className="flex flex-wrap my-4 items-center">
					<p className="font-primary w-16 mt-1">Notes</p>
					<p className="font-secondary text-sm">{notes}</p>
				</div>

			</div>
		</div>
	)
}

Panel.defaultProps = {
	lastItem: ``,
	previewImage: ``,
	primaryAccent: ``,
	secondaryAccent: ``,
	tapNumber: ``,
	beerName: ``,
	breweryName: ``,
	style: ``,
	description: ``,
	abv: ``,
	hoppiness: ``,
	maltiness: ``,
	notes: ``,
}
export default Panel
