import React from 'react'
import PropTypes from 'prop-types'
import api from 'utils/api'
import './drawerPages.css'
import ToolDrawerController from 'components/ToolDrawerController'
import Select from 'components/Select'
import SearchIcon from '@material-ui/icons/Search'

const languages = ['All', 'JavaScript', 'CSS', 'Python', 'Ruby']


function SelectLanguage({ selectMore, selectedLanguage, onSelect, open }) {
	return (
		<ul className="github-popular-languages">
			{
				languages.map(lang => {
					return (
						<li
							style={lang === selectedLanguage ? { color: '#e0353d' } : null}
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
							<SearchIcon onClick={props.toogleOpen.bind(null, true)} fontSize="small" color="inherit" />
				}
			</li>
		)
	}
}

function RepoGrid(props) {
	return (
		props.repos.length ?
			(<ul className="github-popular-list">
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
			</ul>)
		:
			<div style={{fontSize: '40px', textAlign: 'center', marginTop: '100px'}}>No Result</div>
	)
}

class GithubPopular extends React.Component {
	state = {
		selectedLanguage: 'All',
		repos: null,
		moreOpen: false
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage)
	}

	updateLanguage = (lang) => {
		const storedRepos = sessionStorage.getItem(lang) || null
		this.setState({
			selectedLanguage: lang,
			repos: storedRepos && JSON.parse(storedRepos),
			moreOpen: languages.indexOf(lang) === -1
		})
		if (!storedRepos) {
			api.fetchPopularRepos(lang)
				.then(repos => {
					this.setState({
						repos,

					})
					sessionStorage.setItem(lang, JSON.stringify(repos))
				})
		}
	}

	toogleOpen = (open) => {
		this.setState(({ selectedLanguage }) => {
			return {
				moreOpen: open
			}
		})
	}

	render() {
		const { selectedLanguage, repos, moreOpen } = this.state
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
