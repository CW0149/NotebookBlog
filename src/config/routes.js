import React from 'react'
import lazyLoad from '../utils/lazyLoad'
import IndexPage from '../pages/nav/IndexPage'
import Gitbook from '../pages/nav/Gitbook'
import UpdatesAndPlan from 'pages/nav/UpdatesAndPlan'
import SiteUpdates from 'pages/nav/SiteUpdates'

const index = {
	title: 'Home',
	path: '/',
	exact: true,
	navHeader: true,
	component: IndexPage
}

const menu = [{
	name: 'Gitbook',
	title: 'Gitbook',
	path: '/gitbook',
	navHeader: true,
	component: Gitbook
}, {
	name: 'Updates & Plan',
	title: 'Updates & Plan',
	path: '/timeline',
	navHeader: true,
	component: UpdatesAndPlan
}, {
	name: '更新日志',
	title: '更新日志',
	path: '/updates',
	navHeader: true,
	component: SiteUpdates
}]

const drawer = [
	{
		category: 'nav',
		items: [{
			title: 'Home',
			path: '/',
			navHeader: true,
			exact: true,
			component: IndexPage
		}]
	},
	{
		category: 'fun',
		items: [{
			title: 'Github Rate',
			path: '/github-rate',
			component: lazyLoad(() => import('pages/GithubPopular'))
		}, {
			title: 'Knowleage Map',
			path: '/knowleage-map',
			component: lazyLoad(() => import('pages/KnowleageMap'))
		}]
	},
	{
		category: 'tools',
		items: []
	}
]

let allRoutes = [
	index,
	...menu,
	...drawer.reduce((result, next) => result.concat(next.items), []),
	{
		name: '404',
		title: 'Not Found',
		component: () => <div style={{ textAlign: 'center', fontSize: '40px', marginTop: '100px' }}>
				Ooops, not found!
				<a href="/" style={{fontSize: '20px', color: 'green', marginLeft: '20px'}}>Home</a>
		</div>
	}
]
const allRoutesMap = allRoutes.reduce((result, next) => {
	result[next.path] = next
	return result
}, {})
const filteredRoutes = Object.keys(allRoutesMap).map(key => allRoutesMap[key])


export { index, menu, drawer,  filteredRoutes as allRoutes }
