import React from 'react'
import PropTypes from 'prop-types'
import api from 'utils/api'
import './drawerPages.css'
import ToolDrawerController from 'components/ToolDrawerController'
import Select from 'components/Select'

const languages = ['All', 'JavaScript', 'CSS', 'Python', 'Ruby']


function SelectLanguage({ selectMore, selectedLanguage, onSelect, open }) {
	return (
		<ul className="github-popular-languages">
			{
				languages.map(lang => {
					return (
						<li
							style={lang === selectedLanguage ? { color: 'red' } : null}
							key={lang}
							onClick={onSelect.bind(null, lang)}
						>{lang}</li>
					)
				})
			}
			<MoreLan toogleOpen={selectMore} open={open} onSelect={onSelect} />
		</ul>
	)
}



class MoreLan extends React.PureComponent {
	state = {
		languages: []
	}

	componentDidMount() {
		try {
			const languagesStr = localStorage.getItem('proLanguages')
			if (!languagesStr) {
				this.fetchData()
			} else {
				this.setState({ languages: JSON.parse(languagesStr) })
			}
		} catch (err) {
			this.fetchData()
		}
	}


	fetchData = () => {
		api.fetchProLanguages().then(data => {
			const options = data.map(item => ({ value: item.name, label: item.name }))
			localStorage.setItem('proLanguages', JSON.stringify(options))
			this.setState({ languages: options })
		})
	}

	render() {
		const { state, props } = this
		return (
			<li className="github-popular-more">
				{
					props.open
						?
							<div className="github-popular-select"><Select suggestions={state.languages} onSelect={props.onSelect}  /></div>
						:
							<span onClick={props.toogleOpen.bind(null, true)}>More</span>
				}
			</li>
		)
	}
}

function RepoGrid(props) {
	return (
		<ul className="github-popular-list">
			{props.repos.map((repo, index) => (
				<li key={repo.name} className="github-popular-item">
					<div className="github-popular-rank">#{index + 1}</div>
					<ul className="github-list-items">
						<li>
							<img
								className="github-avatar"
								src={repo.owner.avatar_url}
								alt={`Avatar for ${repo.owner.login}`}
							/>
						</li>
						<li><a href={repo.html_url} target="_black">{repo.name}</a></li>
						<li>@{repo.owner.login}</li>
						<li>@{repo.stargazers_count} stars</li>
					</ul>
				</li>
			))}
		</ul>
	)
}

class GithubPopular extends React.Component {
	state = {
		selectedLanguage: 'All',
		repos: null,
		selectArea: false,
		moreOpen: false
	}

	cache = {}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage)
	}

	updateLanguage = (lang) => {
		this.setState({
			selectedLanguage: lang,
			repos: this.cache[lang] || null,
			moreOpen: languages.indexOf(lang) === -1
		})
		if (!this.cache[lang]) {
			api.fetchPopularRepos(lang)
				.then(repos => {
					this.setState({
						repos,

					})
					this.cache[lang] = repos
				})
		}
	}

	toogleOpen = (open) => {
		this.setState(({ selectedLanguage }) => {
			return {
				moreOpen: open,
				selectedLanguage: open ? '' : selectedLanguage
			}
		})
	}

	render() {
		const { selectedLanguage, repos, selectArea, moreOpen } = this.state
		return (
			<div className="github-popular">
				<SelectLanguage selectedLanguage={selectedLanguage} onSelect={this.updateLanguage} selectMore={this.toogleOpen} open={moreOpen} />
				{repos
					? <RepoGrid repos={repos} />
					: <p>LOADING</p>
				}
				<ToolDrawerController />
			</div>
		)
	}
}


SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}


export default GithubPopular
