import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

const style = {
	main: {
		textAlign: 'center',
		height: 'calc(100vh - 64px)',
		overflow: 'auto'
	},
	line: {
		position: 'relative',
		display: 'inline-block',
		background: '#E6EE9C',
		width: 2,
		borderRadius: '2px',
		height: '90%',
		marginLeft: -1,
		marginTop: 50,
		minHeight: 500,
	},
}

const styles = theme => ({
  lightTooltip: {
    background: theme.palette.primary.light,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 12,
  }
})

class Timeline extends Component {
	state = {
		lineHeight: 0
	}
	componentDidMount() {
		this.setState({ lineHeight: document.querySelector('.cp-timeline-line').clientHeight })
	}
	render() {
		const { data, classes, smallScreen } = this.props
		const { lineHeight } = this.state

		return (
			<div style={style.main} className="cp-timeline">
				<div style={style.line} className="cp-timeline-line">
					{
						data.map((item, index) => (
							<ul key={index}>
								<span className={`cp-timeline-sectit_${item.side}`}>{item.title}</span>
								{
									(item.pointData || []).map((point, index) => (
										<Tooltip
											key={index}
											classes={{ tooltip: classes.lightTooltip }}
											title={
												point.list.length
													?
														<ul>{point.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
													: ''
											}
										>
											<li
												style={{top: `${moment.duration(moment(point.date) - moment('2018-12-01')).asDays() / 90 * lineHeight}px`}}
												key={point.title}
												className={`cp-timeline-li_${item.side === 'left' || (item.side === 'alternative' && (index % 2)) ? 'l' : 'r'}`}
											>{point.title}
												{
													smallScreen
														?
															<span className="timeline-date_mobile">{moment(point.date).format('MM/DD')}</span>
														: `(${point.date})`
												}
											</li>
										</Tooltip>
									))
								}
							</ul>
						))
					}
				</div>
			</div>
		)
	}
}

Timeline.defaultProps = {
	classes: {},
	data: [],
	smallScreen: false
}

Timeline.propTypes = {
	classes: PropTypes.object,
	data: PropTypes.array.isRequired,
	smallScreen: PropTypes.bool
}

export default withStyles(styles)(Timeline)
