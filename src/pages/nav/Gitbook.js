import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button  from '@material-ui/core/Button'

import { colorsArr } from 'config/theme'
import books from 'config/book'

const colorPicker = ['50']
const bgColors = []
colorsArr.forEach(color => colorPicker.forEach(key => bgColors.push(color[key])))
const isMobile = window.screen.width < 740 || window.clientWidth < 740

const gitbookStyles = theme => ({
  cardActions: {
  	justifyContent: 'flex-end'
  }
})

const BookCard = ({ classes, children, url, index }) => {
	const colorKeys = Object.keys(bgColors)
	const bgColor = bgColors[colorKeys[index % colorKeys.length]]
	return (
		<Card className="gitbook-card">
			<CardContent className="gitbook-card-content" style={{background: bgColor}}>{children}</CardContent>
			<CardActions className={classes.cardActions}>
        <Button color="primary">
          <a href={url} target={isMobile ? '_self' : '_blank'}>前往</a>
        </Button>
      </CardActions>
		</Card>
	)
}

const Gitbook = withStyles(gitbookStyles)(
	({ classes }) => (
		<div className="gb">
			<div className="gb-body">
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

export default Gitbook
