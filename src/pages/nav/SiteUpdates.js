import React from 'react'
import Timeline from 'components/Timeline'
import { siteUpdatesData } from 'store/data'

const SiteUpdates = (props) => {
	return (
		<Timeline data={siteUpdatesData} />
	)
}

export default SiteUpdates