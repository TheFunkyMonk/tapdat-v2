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
						rows.push(<img src={icon} key={icon + i} alt='rating icon' className={type === 'hop' ? 'w-6 2xl:w-8 mr-2' : 'w-55 2xl:w-65 mr-25 2xl:mr-275'} />);
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
		<div className={"panel w-full md:w-1/3 flex flex-col min-h-screen " + (lastItem ? "" : "border-r border-gray-400")}>
			<div className="bg-gray-200 px-8 pt-24 lg:pt-32 xl:pt-48 relative">
				{previewImage !== "" && <img src={previewImage} alt="Preview for tap item" className="absolute top-0 left-0 w-full h-full object-cover z-10" />}
				<div className="bg-white px-4 pt-4 pb-8 rounded text-center relative z-20">
					<div className={"rounded-full text-white antialiased border-4 border-white w-16 h-16 2xl:w-20 2xl:h-20 flex items-center justify-center mx-auto -mt-12 mb-2 bg-" + primaryAccent + ""}>
						<p className="font-primary leading-tight text-4xl pt-px 2xl:text-5xl">{tapNumber}</p>
					</div>
					<h1 className={"font-primary tracking-wide text-4xl 2xl:text-5xl leading-tight text-" + primaryAccent + ""}>{beerName}</h1>
					<h2 className="font-primary tracking-wide text-lg 2xl:text-2xl text-gray-600 leading-tight">{breweryName}</h2>
				</div>
			</div>
			<div className={"text-white antialiased px-8 pt-2 pb-1 text-center bg-" + primaryAccent + ""}>
				<p className="font-primary tracking-wide leading-tight uppercase text-3xl 2xl:text-45xl">{beerStyle}</p>
			</div>
			<div className={"p-8 h-full relative bg-" + secondaryAccent + ""}>
				{/* <p className="relative z-20 font-secondary text-base 2xl:text-xl italic leading-relaxed">{description}</p> */}
				{abv !== "" && <p className="z-10 font-primary text-6xl 2xl:text-7xl tracking-tight text-white absolute bottom-0 left-0 -mb-28 2xl:-mb-36 horizontal-center">{abv}%</p>}
			</div>
			<div className="bg-white px-8 pt-4 pb-16 mt-auto mb-0">

				<div className="flex flex-wrap my-4 items-center">
					<p className="font-primary w-16 mt-1 text-base 2xl:text-xl">Hops</p>
					{renderRating('hop', hoppiness)}
				</div>
				<div className="flex flex-wrap my-4 items-center">
					<p className="font-primary w-16 mt-1 text-base 2xl:text-xl">Malt</p>
					{renderRating('malt', maltiness)}
				</div>
				<div className="flex flex-wrap my-4 items-center">
					<p className="font-primary w-16 mt-1 text-base 2xl:text-xl">Notes</p>
					<p className="font-secondary text-sm 2xl:text-lg">{notes}</p>
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
