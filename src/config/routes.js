import { Gitbook, UpdatesAndPlan, SiteUpdates, GithubPopular } from 'pages'
import IndexPage from 'pages/IndexPage'

const menu = [{
	name: 'Gitbook',
	path: '/gitbook',
	navHeader: true,
	component: Gitbook
}, {
	name: 'Updates & Plan',
	path: '/timeline',
	navHeader: true,
	component: UpdatesAndPlan

}, {
	name: '更新日志',
	path: '/updates',
	navHeader: true,
	component: SiteUpdates

}]

export default {
	index: [{
		path: '/',
		exact: true,
		navHeader: true,
		component: IndexPage
	}],
	menu,
	drawer: [{
		category: 'fun',
		items: [{
			title: 'Github Rate',
			path: '/github-rate',
			component: GithubPopular
		}, {
			title: 'test',
			path: '/'
		}]
	}, {
		category: 'tools',
		items: []
	}]
}