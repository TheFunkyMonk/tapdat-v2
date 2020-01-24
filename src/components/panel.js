import PropTypes from "prop-types"
import React from "react"

const Panel = ({ beer, last }) => (
	<div className={"p-4 flex-1 " + (last ? "" : "border-r border-gray-400")}>
		<h1 className="font-primary text-3xl my-4">{beer.beerName}</h1>
		<pre class="font-secondary p-4 bg-gray-200 rounded">{JSON.stringify(beer, null, 4)}</pre>
	</div>
)

Panel.propTypes = {
	beer: PropTypes.object
}

Panel.defaultProps = {
	beer: ``,
}
export default Panel
