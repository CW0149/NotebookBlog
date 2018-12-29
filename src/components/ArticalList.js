import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

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
  	justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  root_row: {
  		width: '100%',
  	  backgroundColor: theme.palette.background.paper,
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
  item_row: {
  	padding: 0,
  	cursor: 'pointer',
  	userSelect: 'none',
  	color: '#333',
  	lineHeight: '24px',
  	whiteSpace: 'nowrap',
  	overflowX: 'auto',
  	overflowY: 'hidden',
  	paddingBottom: 4,
  	borderBottom: '1px dashed #eee'
  },
  itemLink: {
  	paddingTop: '10px',
  	paddingBottom: '0'
  },
  itemLink_row: {
  	flex: 1,
  	whiteSpace: 'nowrap',
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
  },
  articalWrapper: {
  	display: 'flex',
  	flexWrap: 'wrap',
  	justifyContent: 'flex-start',
  	marginBottom: '40px',
  	marginTop: '10px'
  },
  title: {
  	flex: 1,
  	margin: 0
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
		const { item, date, classes, type } = this.props;

		return (<div className="artical-list">
			<ListItem onClick={this.handleClick} className={type === 'row' ? classes.item_row : classes.item}>
			  <ListItemIcon>
			    <StarIcon style={{color: colors.lightBlue['400']}} />
			  </ListItemIcon>
			  <p className={type === 'row' ? classes.title : "artical-list-item_title"}>
			  	<a
			  		href={`${item.book.url}/${item.path || ''}`}
			  		target="_blank"
			  		style={{color: colors.lightBlue[800]}}
			  		onClick={(e) => {e.stopPropagation()}}
			  		rel="noopener noreferrer" >{item.book.name}</a>
			  	{
			  		type !== 'row' && (
			  			<span>
			  				<span className="date-type-full">&nbsp;({date})</span>
			  				<span className="date-type-short">&nbsp;({moment(date).format('MM/DD')})</span>
			  			</span>
			  		)
			  	}
			  </p>
			  <span className={classes.arrow}>{this.state.open ? <ExpandLess /> : <ExpandMore />}</span>
			</ListItem>
			<Collapse in={this.state.open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding className={type==='row' ? classes.articalWrapper : undefined}>
					{
						item.list.map(artical => (
							<ListItem key={artical.title} className={type === 'row' ? classes.itemLink_row : classes.itemLink}>
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
	const { classes, articals, type } = props;

	return (
		<List className={type === 'row' ? classes.root_row : classes.root}>
			{
				Object.keys(articals).reverse().map(date => {
					const item = articals[date]
					return <ArticalItem item={item} date={date} key={date} classes={classes} type={type} />
				})
			}
    </List>
	)
}

ArticalList.defaultProps = {

}

ArticalList.propTypes = {
	classes: PropTypes.object,
	articals: PropTypes.object,
	type: PropTypes.string
}

export default withStyles(styles)(ArticalList)
