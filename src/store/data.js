import React from 'react'
import { booksMap } from 'config/book'

const updatedAritcals = {
	'2018-12-09': {
		book: booksMap.sb,
		list: [{
			title: '2016年文章',
			path: '/2016'
		}, {
			title: '2018年文章',
			path: '/2018'
		}]
	},
	'2018-12-12': {
		book: booksMap.rf,
		list: [{
			title: '简介',
			path: '/'
		}, {
			title: 'Git',
			path: '/tools/git.html'
		}]
	},
	'2018-12-16': {
		book: booksMap.rf,
		path: '/tools',
		list: [{
			title: 'NPM',
			path: '/npm.html'
		}, {
			title: 'Webpack、Babel',
			path: '/webpack.html'
		}, {
			title: '总结',
			path: '/summary.html'
		}]
	}
}

const updatedArr = Object.keys(updatedAritcals).map(key => {
	const item = updatedAritcals[key]
	return {
		date: key,
		title: <a href={`${item.book.url}/${item.path || ''}`} key={key} target="_blank" rel="noopener noreferrer" >{item.book.name}</a>,
		list: item.list.map(arti => arti.title)
	}
})

const updateAndPlanData = [
	{
		title: '计划更新',
		side: 'left',
		pointData: [{
			date: '2018-12-09',
			title: '随笔',
			list: ['迁移之前随笔']
		}, {
			date: '2018-12-12',
			title: 'React Fundamental',
			list: ['npm、webpack、babel', 'React Component', 'Hosting']
		}, {
			date: '2018-12-16',
			title: 'Server、Udacity',
			list: ['certbot通配域名添加https', 'niginx配置', 'ssh免密登录(github一台电脑多账户)', 'Udacity前端笔记']
		}]
	},
	{
		title: '已更新',
		side: 'right',
		pointData: updatedArr
	}
]

const siteUpdatesData = [{
	title: '小站更新日志',
	side: 'alternative',
	pointData: [{
		date: '2018-12-09',
		title: '上线网站',
		list: ['首页', 'gitbook模块', '更新与计划模块', '更新日志模块']
	}, {
		date: '2018-12-10',
		title: '链接公众号',
		list: ['hover小鸡logo出现公众号二维码', '移动端首页公众号二维码', '公众号绑定聊天小程序']
	}, {
		date: '2018-12-12',
		title: '迁移gitbook',
		list: ['迁移gitbook到gitbook.huolong.tk']
	}, {
		date: '2018-12-15',
		title: '首页新更文章列表',
		list: ['首页新增新更文章列表模块']
	}, {
		date: '2018-12-20',
		title: '响应式布局、滑窗',
		list: ['整理文件结构', '增加相应式布局', '点击小鸡logo滑窗']
	}, {
		date: '2018-12-22',
		title: '网站提速、新增功能',
		list: ['优化网站加载速度',  'githubGate支持语言搜索', '滑窗添加思维导图模块（未完成）']
	}]
}]

export { updateAndPlanData, siteUpdatesData, updatedAritcals }