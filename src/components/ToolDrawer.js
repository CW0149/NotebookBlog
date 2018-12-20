import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import SvgIcon from '@material-ui/core/SvgIcon'
import routes from 'config/routes'
import { colors } from 'config/theme'
import siteConfig from 'config/site'

const { red, orange, yellow, green, blue, lime, purple } = colors
const colorsArr = [red, orange, yellow, green, blue, lime, purple]
const colorPicker = ['600']
const bgColors = []
colorsArr.forEach(color => bgColors.push(color[colorPicker]))

const pagesList = routes.drawer

const styles = {
  list: {
    width: 250,
  },
  ListItemText: {
    fontSize: 18

  },
  fullList: {
    width: 'auto',
  },
  iconHome: {
     color: colors.green[400],
     fontSize: 26,
     marginRight: 10

    // '&:hover': {
    //   color: colors.red[800],
    // },
  }
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


class ToolDrawer extends Component {
	render() {
		const { props } = this
		const { classes } = props
		return (
			<Drawer anchor="right" open={props.open} onClose={() => props.toggleDrawer(false)}>
        <div className={classes.list}>
          {
            pagesList.map(cate => (
              <React.Fragment key={cate.category}>
                <List key={cate.category}>
                  {
                    cate.items.map((item, index) => {
                      return (<Link to={item.path} key={item.title} style={{width: '100%'}}>
                        <ListItem button>
                          <HomeIcon className={classes.iconHome} style={{color: bgColors[index]}} />
                          <span className={classes.ListItemText}>{item.title}</span>
                        </ListItem>
                      </Link>)
                    })
                  }
                </List>
                { cate.items.length ? <Divider /> : null }
              </React.Fragment>
            ))
          }
        </div>
        <div className="qcode-wrapper">
          <img
            src={siteConfig.qCode.url}
            alt={siteConfig.qCode.alt}
            className="qcode"
            title={siteConfig.qCode.title}
          />
        </div>
      </Drawer>
		)
	}
}

ToolDrawer.defaultProps = {
	classes: {},
	open: false,
	toggleDrawer: () => {}
}

ToolDrawer.propTypes = {
	classes: PropTypes.object,
	open: PropTypes.bool.isRequired,
	toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(ToolDrawer)
