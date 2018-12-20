import React from 'react'
import Proptypes from 'prop-types'
import {
	Link,
} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton  from '@material-ui/core/IconButton'

import routes from 'config/routes'
import siteConfig from 'config/site'

const { menu } = routes


const topbarStyle = theme => ({
	root: {
		padding: '0 60px'
	},
	grow: {
    flexGrow: 1,
  },
	sectionDesktop: {
    display: 'flex',
    width: 300,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuItem: {
  	cursor: 'pointer'
  }
})

const TopBar = withStyles(topbarStyle)(
	({ classes, toggleDrawer }) => {
		return (
			<AppBar color="primary" className={classes.root}>
				<Toolbar>
					<Typography variant="h6" color="inherit">
					  <Link to="/">{siteConfig.name}</Link>
					</Typography>
					<div className={classes.grow} />
					<nav className={classes.sectionDesktop}>
						  {
						  	menu.map(item => <Link key={item.name} className={classes.menuItem} to={item.path}>{item.name}</Link>)
						  }
					</nav>
					<div className="topbar-logo">
						<div className="topbar-logo_wrapper">
							<img
								src={siteConfig.logo.url}
								style={{width: '100%'}}
								alt={siteConfig.logo.alt}
								onClick={() => toggleDrawer(true)}
							/>
						</div>
					</div>
				</Toolbar>
			</AppBar>
		)
	}
)

TopBar.propTypes = {
	classes: Proptypes.object,
	toggleDrawer: Proptypes.func.isRequired,
}

class TopBarMobile extends React.Component {
	state = {
		anchorEl: null
	}

	handleMenu = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	}
	handleClose = () => {
	  this.setState({ anchorEl: null })
	}


	render() {
		const { classes } = this.props
		const { anchorEl } = this.state
		const open = Boolean(anchorEl)

		return (
			<AppBar color="primary" className={classes.root}>
				<Toolbar>
					<IconButton
					  aria-label="Menu"
					  onClick={this.handleMenu}
					>
					  <MenuIcon />
					</IconButton>
					<Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
					>
						  {
						  	menu.map(item => <Link key={item.name} className={classes.menuItem} to={item.path}><MenuItem onClick={this.handleClose}>{item.name}</MenuItem></Link>)
						  }
					</Menu>
					<div className={classes.grow}></div>
					<div style={{width: '40px', height: '40px', background: '#fff', overflow: 'hidden', padding: '2px', boxSizing: 'border-box', borderRadius: '50%'}}>
						<Link to="/"><img src="/favicon.ico" style={{width: '100%'}} alt="logo" /></Link>
					</div>
				</Toolbar>
			</AppBar>
		)
	}
}

const topbarMobileStyle = {
	grow: {
    flexGrow: 1,
  },
  menuItem: {
  	display: 'block'
  }
}

const StyledTopbarMobile = withStyles(topbarMobileStyle)(TopBarMobile)

export { TopBar, StyledTopbarMobile }