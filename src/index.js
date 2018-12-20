import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import './index.css'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from 'config/theme'
import ToolDrawer from 'components/ToolDrawer'
import Qcode from 'components/Qcode'
import routes from 'config/routes'
import withHeader from 'components/withHeader'

const allRoutes = [...Object.keys(routes).reduce((result, nextKey) => result.concat(routes[nextKey]), [])]


class App extends React.Component {
	state = {
		drawerOpen: false
	}

	toggleDrawer = (open) => {
		this.setState({ drawerOpen: open })
	}

	render() {
		const { state } = this
		return (
			<MuiThemeProvider theme={theme}>
				<Router><div>
					<Switch>
						{
							allRoutes.map(({ exact, navHeader, path, component }, index) => (
								<Route
									path={path}
									key={index}
									render={() => {
										const C = navHeader ? withHeader(component, { toggleDrawer: this.toggleDrawer }) : component
										return <C />
									}}
									exact={exact}
								/>
							))
						}
					</Switch>
					<ToolDrawer open={state.drawerOpen} toggleDrawer={this.toggleDrawer} />
				</div></Router>
				<Qcode />
			</MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
