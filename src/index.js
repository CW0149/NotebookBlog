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
import Qcode from 'components/Qcode'
import withHeader from 'components/withHeader'
import * as routes from 'config/routes'
import Footer from 'components/Footer'


class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Router><div id="main">
					<Switch>
						{
							routes.allRoutes.map(({ exact, navHeader, path, component }, index) => (
								<Route
									path={path}
									key={index}
									render={() => {
										const C = navHeader ? withHeader(component) : component
										return C ? <C /> : null
									}}
									exact={exact}
								/>
							))
						}
					</Switch>
				</div></Router>
				<Qcode />
				<Footer />
			</MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
