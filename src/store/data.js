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
	},
	'2018-12-23': {
		book: booksMap.rf,
		path: '/practice',
		list: [{
			title: '如何优化网站速度',
			path: '/speedup.html'
		}, {
			title: '常用的React包',
			path: '/dependencies.html'
		}]
	},
	'2019-02-01': {
		book: booksMap.lce,
		path: '/',
		list: [{
			title: 'LeetCode全部(249道)简单题',
			path: '/'
		}]
	},
	'2019-03-01': {
		book: booksMap.tn,
		path: '/',
		list: [{
			title: '正则表达式',
			path: '/tech/regexp.html'
		}, {
			title: 'URL编码',
			path: '/tech/urlEncode.html'
		}, {
			title: '作用域',
			path: '/tech/scope.html'
		}, {
			title: 'this和对象原型',
			path: '/tech/this-and-object-prototypes.html'
		}, {
			title: '类型和语法',
			path: '/tech/Types-and-Grammar.html'
		}, {
			title: '链接收藏',
			path: '/links/'
		}]
	},
	'2019-03-08': {
		book: booksMap.tn,
		path: '/',
		list: [{
			title: 'JS 难点',
			path: '/frontend/difficulty.html'
		}, {
			title: '正则与模版引擎',
			path: '/frontend/regexp-and-template-engine.html'
		}, {
			title: '跨域与前端安全',
			path: '/frontend/cross-origin-and-safe.html'
		}, {
			title: '自动化集成测试',
			path: '/frontend/test.html'
		}, {
			title: '申请SSL通配符证书',
			path: '/practice/ssl.html'
		}, {
			title: '2019-02-04 书摘',
			path: '/articles/2019-02-04.html'
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

const allArticals = Object.keys(updatedAritcals).reduce((result, date) => {
	const { book, list, path } = updatedAritcals[date]
	const handledList = list.map(item => ({ ...item, path: `${path || ''}${item.path}` }));
	result[book.id] = result[book.id] || { book, list: [] }
	result[book.id].list = result[book.id].list.concat(handledList)
	return result;
}, {})

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
		}, {
			date: '2019-1-15',
			title: 'LeetCode Easy',
			list: ['LeetCode 243 道简单题']
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
	}, {
		date: '2018-12-29',
		title: '全部文章列表',
		list: ['首页添加全部文章列表']
	}]
}]

export { updateAndPlanData, siteUpdatesData, updatedAritcals, allArticals, updatedArr }
