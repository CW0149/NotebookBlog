import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button  from '@material-ui/core/Button'

import Timeline from 'components/Timeline'
import { gitbookColorsArr } from 'config/theme'
import { updateAndPlanData, siteUpdatesData } from 'store/data'
import books from 'config/book'


const bgColors = gitbookColorsArr
const smallScreen = window.screen.width < 740 || window.clientWidth < 740

const gitbookStyles = theme => ({
	body: {
		padding: '20px 40px',
		display: 'flex',
		maxWidth: '800px',
		margin: '0 auto',
  	flexWrap: 'wrap',
  	justifyContent: 'space-between'

	},
	card: {
    width: smallScreen ? '100%' : '48%',
    marginBottom: '20px'
  },
  cardContent: {
  	display: 'flex',
  	height: 400,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  cardActions: {
  	justifyContent: 'flex-end'
  }
})

const BookCard = ({ classes, children, url, index }) => {
	const colorKeys = Object.keys(bgColors)
	const bgColor = bgColors[colorKeys[index % colorKeys.length]]
	return (
		<Card className={classes.card}>
			<CardContent className={classes.cardContent} style={{background: bgColor}}>{children}</CardContent>
			<CardActions className={classes.cardActions}>
        <Button color="primary">
          <a href={url} target={smallScreen ? '_self' : '_blank'}>前往</a>
        </Button>
      </CardActions>
		</Card>
	)
}

const Gitbook = withStyles(gitbookStyles)(
	({ classes }) => (
		<div className="gb">
			<div className={classes.body}>
				{
					books.map((book, index) => (
						<BookCard key={book.name} url={book.url} classes={classes} index={index}>
							{book.name}
						</BookCard>
					))
				}
			</div>
		</div>
	)
)

const UpdatesAndPlan = (props) => {
	return (
		<Timeline data={updateAndPlanData} smallScreen={smallScreen} />
	)
}

const SiteUpdates = (props) => {
	return (
		<Timeline data={siteUpdatesData} smallScreen={smallScreen} />
	)
}

export { Gitbook, UpdatesAndPlan, SiteUpdates }