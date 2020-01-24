import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div class="p-4 text-center">
			<h1 class="text-5xl font-primary tracking-wide text-4xl">Not found</h1>
			<p><a class="font-bold font-secondary underline text-blue-600 hover:no-underline" href="/">Just go home.</a></p>
		</div>
	</Layout>
)

export default NotFoundPage
