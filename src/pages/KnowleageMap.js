import React, { Component } from 'react'
import ToolDrawerController from 'components/ToolDrawerController'

import { G6Editor } from 'components/GraphEditor'

class KnowleageMap extends Component {
	render() {
		return (<>
			<G6Editor />
			<ToolDrawerController style={{top: '10px'}} />
		</>)
	}
}

export default KnowleageMap
