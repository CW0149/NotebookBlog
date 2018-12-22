import React from 'react';
import { TopBar, StyledTopbarMobile } from 'components/TopBar'
import ToolDrawer from 'components/ToolDrawer'
import { menu } from 'config/routes'

function withHeader(Component) {
	return class extends React.Component {
		state = {
			drawerOpen: false
		}

		toggleDrawer = (open) => {
			this.setState({ drawerOpen: open })
		}
		render() {
			return (
				<div>
					<StyledTopbarMobile menu={menu} />
					<TopBar toggleDrawer={this.toggleDrawer} menu={menu} />
					<div style={{paddingTop: '64px'}}><Component/></div>
					<ToolDrawer open={this.state.drawerOpen} toggleDrawer={this.toggleDrawer} />
				</div>
			)
		}
	}
}

export default withHeader
