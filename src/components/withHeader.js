import React from 'react';
import propTypes from 'prop-types'
import { TopBar, StyledTopbarMobile } from 'components/TopBar'
import routes from 'config/routes'

const { menu } = routes

function withHeader(Component, { toggleDrawer }) {
	return class extends React.Component {
		render() {
			const { props } = this
			return (
				<div>
					<StyledTopbarMobile menu={menu} />
					<TopBar toggleDrawer={toggleDrawer} menu={menu} />
					<Component />
				</div>
			)
		}
	}
}

export default withHeader
