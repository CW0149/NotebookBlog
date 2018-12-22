const request = (url) => {
	return fetch(url).then(res => res.json())
}

module.exports = {
	fetchPopularRepos: (language) => {
		const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
		return request(encodedURI)
			.then(data => {
				return data.items
			})
	},
	fetchProLanguages: () => {
		return request('https://api.github.com/languages')
	}
}