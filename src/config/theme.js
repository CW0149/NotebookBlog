import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import deepPurple from '@material-ui/core/colors/deepPurple'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import cyan from '@material-ui/core/colors/cyan'
import teal from '@material-ui/core/colors/teal'
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'
import lime from '@material-ui/core/colors/lime'
import yellow from '@material-ui/core/colors/yellow'
import amber from '@material-ui/core/colors/amber'
import orange from '@material-ui/core/colors/orange'
import deepOrange from '@material-ui/core/colors/deepOrange'
import brown from '@material-ui/core/colors/brown'
import grey from '@material-ui/core/colors/grey'
import blueGrey from '@material-ui/core/colors/blueGrey'

// gitbook显示颜色顺序
const colorPicker = ['50']
const colors = { green, lightGreen, lime, yellow, amber, orange,
  deepOrange, brown, grey, blueGrey, red, pink, purple, deepPurple,
  indigo, blue, lightBlue,cyan, teal }
const gitbookColorsArr = Object.keys(colors).map(key => colors[key][colorPicker])

export default createMuiTheme({
    palette: {
      primary: {
          main: '#D4E157',
          light: '#f1f5ca',
          contrastText: '#111'
      },
      secondary: {
          main: '#c5e1a5',
      },
      error: {
      	main:'#001214'
      }
    },
    type: 'light', // dark light
    typography: {
      useNextVariants: true,
    	htmlFontSize: 10,
    	fontSize: 12,
    	fontFamily: [
	      '-apple-system',
	      'BlinkMacSystemFont',
	      '"Segoe UI"',
	      'Roboto',
	      '"Helvetica Neue"',
	      'Arial',
	      'sans-serif',
	      '"Apple Color Emoji"',
	      '"Segoe UI Emoji"',
	      '"Segoe UI Symbol"',
	    ].join(','),
    },
    overrides: {
      MuiButton: { // Name of the component ⚛️ / style sheet
        root: { // Name of the rule
          fontSize: '14px',
          minHeight: 0,
          padding: '4px 0'
        },
      },
    },
    props: {
      // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        // disableRipple: true, // No more ripple, on the whole application
      },
    },

})

export { colors, gitbookColorsArr }