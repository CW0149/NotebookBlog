import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
} from 'react-router-dom'

import './index.css'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from 'config/theme'
import Qcode from 'components/Qcode'
import Footer from 'components/Footer'

import Routes from './Routes'

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Router>
					<div id="main"><Routes /></div>
				</Router>
				<Qcode />
				<Footer />
			</MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
