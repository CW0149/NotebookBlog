import React from 'react'
import Timeline from 'components/Timeline'
import { updateAndPlanData } from 'store/data'


const UpdatesAndPlan = (props) => {
	return (
		<Timeline data={updateAndPlanData} />
	)
}


export default UpdatesAndPlan