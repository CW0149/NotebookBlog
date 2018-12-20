import React from 'react'
import PropTypes from 'prop-types'
import api from 'utils/api'

const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']


function SelectLanguage(props) {
	return (
		<ul className="languages">
			{
				languages.map(function(lang) {
					return (
						<li
							style={lang === props.selectedLanguage ? { color: 'red' } : null}
							key={lang}
							onClick={props.onSelect.bind(null, lang)}
						>{lang}</li>
					)
				}, this)
			}
		</ul>
	)
}

function RepoGrid(props) {
	return (
		<ul className="popular-list">
			{props.repos.map((repo, index) => (
				<li key={repo.name} className="popular-item">
					<div className="popular-rank">#{index + 1}</div>
					<ul className="space-list-items">
						<li>
							<img
								className="avatar"
								src={repo.owner.avatar_url}
								alt={`Avatar for ${repo.owner.login}`}
							/>
						</li>
						<li><a href={repo.html_url}>{repo.name}</a></li>
						<li>@{repo.owner.login}</li>
						<li>@{repo.stargazers_count} stars</li>
					</ul>
				</li>
			))}
		</ul>
	)
}

class GithubPopular extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedLanguage: 'All',
			repos: null
		}

		this.updateLanguage = this.updateLanguage.bind(this)
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage)
	}

	updateLanguage(lang) {
		this.setState({
			selectedLanguage: lang,
			repos: null
		})

		api.fetchPopularRepos(lang)
			.then(repos => {
				this.setState({
					repos
				})
			})
	}

	render() {
		const { selectedLanguage, repos } = this.state
		return (
			<div>
				<SelectLanguage selectedLanguage={selectedLanguage} onSelect={this.updateLanguage} />
				{repos
					? <RepoGrid repos={repos} />
					: <p>LOADING</p>
				}
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
