import PropTypes from "prop-types"
import React from "react"

const Panel = ({ beer }) => (
	<div className="panel">
		<p>{beer.beerName} - {beer.breweryName}</p>
		<pre>{JSON.stringify(beer, null, 4)}</pre>
	</div>
)

Panel.propTypes = {
	beer: PropTypes.object
}

Panel.defaultProps = {
	beer: ``,
}
export default Panel
