import React, { Component } from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import { updatedAritcals } from '../store/data'

import { withStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import StarIcon from '@material-ui/icons/Star'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { colors } from '../config/theme'

const styles = theme => ({
  root: {
  	display: 'flex',
  	flexWrap: 'wrap',
  	width: '100%',
  	justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
  	marginBottom: '10px',
  },
  listTitleMobile: {
  	width: 'calc(100vw - 170px)',
  	overflowX: 'auto'
  },
  item: {
  	padding: 0,
  	cursor: 'pointer',
  	userSelect: 'none',
  	color: '#333',
  	height: '24px',
  	lineHeight: '24px',
  	whiteSpace: 'nowrap',
  	overflowX: 'auto',
  	overflowY: 'hidden'
  },
  itemLink: {
  	paddingTop: '10px',
  	paddingBottom: '0'
  },
  date: {
  	paddingLeft: '10px',
  	fontSize: '14px',
  	display: 'inline-block'
  },
  arrow: {
  	height: 'inherit',
  	color: '#666'
  },
  artLink: {
  	lineHeight: 1,
  	color: colors.green[400],
  	paddingLeft: '12px'
  }
})


class ArticalItem extends Component {
	state = {
		open: true
	}

	handleClick = () => {
		this.setState(({ open }) => ({ open: !open }))
	}

	render() {
		const { item, date, classes, smallScreen } = this.props;

		return (<div className={classes.list}>
			<ListItem onClick={this.handleClick} className={classes.item}>
			  <ListItemIcon>
			    <StarIcon style={{color: colors.lightBlue['400']}} />
			  </ListItemIcon>
			  <p className={smallScreen ? classes.listTitleMobile : null}>
			  	<a
			  		href={`${item.book.url}/${item.path || ''}`}
			  		target="_blank"
			  		style={{color: colors.lightBlue[800]}}
			  		onClick={(e) => {e.stopPropagation()}}
			  		rel="noopener noreferrer" >{item.book.name}</a>
			  	<span className={classes.date}> ({smallScreen ? moment(date).format('MM/DD') : date})</span>
			  </p>
			  <span className={classes.arrow}>{this.state.open ? <ExpandLess /> : <ExpandMore />}</span>
			</ListItem>
			<Collapse in={this.state.open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{
						item.list.map(artical => (
							<ListItem key={artical.title} className={classes.itemLink}>
								<a
									href={`${item.book.url}${item.path || ''}${artical.path || ''}`}
									target="_blank"
									className={classes.artLink}
									rel="noopener noreferrer"
								>{artical.title}</a>
							</ListItem>
						))
					}
				</List>
			</Collapse>
		</div>)
	}
}

function ArticalList(props) {
	const { classes, smallScreen } = props;

	return (
		<List className={classes.root}>
			{
				Object.keys(updatedAritcals).map(date => {
					const item = updatedAritcals[date]
					return <ArticalItem item={item} date={date} key={date} classes={classes} smallScreen={smallScreen} />
				})
			}
    </List>
	)
}

ArticalList.defaultProps = {

}

ArticalList.propTypes = {
	smallScreen: propTypes.bool
}

export default withStyles(styles)(ArticalList)
