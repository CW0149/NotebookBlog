import React from 'react'
import G6Editor from '@antv/g6-editor'
import Tooltip from '@material-ui/core/Tooltip'
import data from 'store/map'
import './index.css'

const toolbarItemGroups = [
	[
		{ title: '撤销', command: 'undo', icon: 'iconfont icon-undo' },
		{ title: '重做', command: 'redo', icon: 'iconfont icon-redo' },
	],
	[
		{ title: '放大', command: 'zoomIn', icon: 'iconfont icon-zoom-in-o' },
		{ title: '缩小', command: 'zoomOut', icon: 'iconfont icon-zoom-out-o' },
		{ title: '适应画布', command: 'autoZoom', icon: 'iconfont icon-fit' },
		{ title: '实际尺寸', command: 'resetZoom', icon: 'iconfont icon-actual-size-o' },
	],
	[
		{ title: '插入同级', command: 'append', icon: 'bi-icon icon-insert-sibling' },
		{ title: '插入子级', command: 'appendChild', icon: 'bi-icon icon-insert-child' },
	],
	[
		{ title: '折叠', command: 'collapse', icon: 'bi-icon icon-expand-subtree' },
		{ title: '展开', command: 'expand', icon: 'bi-icon icon-collapse-subtree' },
	]
]

function Dom(props) {
	return (<div className="fullscreen">
		<div id="toolbar">
			{
				toolbarItemGroups.map((group, index) => (<React.Fragment key={index}>
					{
						group.map(item => (
							<Tooltip title={item.title} key={item.title}><i data-command={item.command} className={`command ${item.icon}`}></i></Tooltip>
						))
					}
					<span className="separator"></span>
				</React.Fragment>))
			}
		</div>
		<div id="page"></div>
		<div id="detailpannel">
			<div className="pannel-title">节点信息</div>

		</div>
		<div id="navigator">
			<div className="pannel-title">图导航</div>
			<div id="minimap"></div>
		</div>
	</div>)
}

class Editor extends React.Component {
	componentWillMount() {
		this.editor = new G6Editor()
	}
	componentDidMount() {
		const mind = new G6Editor.Mind({
		  defaultData: data,
		  graph: {
		    container: 'page'
		  },
		  shortcut: {
	      zoomIn: true,   // 开启放大快捷键
	      zoomOut: true, // 开启视口缩小快捷键
	    },
	    layOuts: {

	    }
		})
		const toolbar = new G6Editor.Toolbar({
			container: 'toolbar',

		})
		const detailpannel = new G6Editor.Detailpannel({
		  container: 'detailpannel',
		})
		const minimap = new G6Editor.Minimap({
		  container: 'minimap',
		})

		this.editor.add(mind)
		this.editor.add(toolbar)
		this.editor.add(detailpannel)
		this.editor.add(minimap)

		this.graph = mind.getGraph()
		this.graph.on('node:click', ev => {
			console.log(ev)
		})
	}

	render() {
		return (
			<Dom />
		)
	}
}

export default Editor