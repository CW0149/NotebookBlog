import { Gitbook, UpdatesAndPlan, SiteUpdates } from 'pages'

const menu = [{
	name: 'Gitbook',
	path: '/gitbook',
	component: Gitbook
}, {
	name: 'Updates & Plan',
	path: '/timeline',
	component: UpdatesAndPlan

}, {
	name: '更新日志',
	path: '/updates',
	component: SiteUpdates

}]

export default {
	menu,
	drawer: [{
		category: 'fun',
		items: [{
			title: 'Github Rate',
			path: '/github-rate'
		}, {
			title: 'test',
			path: '/'
		}]
	}, {
		category: 'tools',
		items: []
	}]
}