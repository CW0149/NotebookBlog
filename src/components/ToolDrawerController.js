import React from 'react';
import ToolDrawer from 'components/ToolDrawer'

class ToolDrawerController extends React.Component {
	state = {
		drawerOpen: false
	}
	toggleDrawer = (open) => {
		this.setState({ drawerOpen: open })
	}

	render() {
		return (
			<div style={this.props.style} className="toggleDrawer-button-wrapper">
				<div className="toggleDrawer-button" onClick={this.toggleDrawer.bind(null, true)}></div>
				<ToolDrawer open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
			</div>
		)
	}
}


export default ToolDrawerController
