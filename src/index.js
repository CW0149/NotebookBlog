import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom'
import './index.css'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme, { colors } from './config/theme'
import { TopBar, StyledTopbarMobile } from './components/TopBar'
import ArticalList from './components/ArticalList'
import ToolDrawer from './components/ToolDrawer'
import Qcode from './components/Qcode'
import routes from './config/routes'

import Typography from '@material-ui/core/Typography'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const { menu } = routes
const smallScreen = window.screen.width < 740 || window.clientWidth < 740

const Panel = ({ title, date, children, defaultExpanded }) => {
	return (
		<ExpansionPanel defaultExpanded={defaultExpanded}>
		  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
		    <Typography>{title}</Typography>
		    <Typography style={{marginLeft: '10px', color: colors.grey[600], fontSize: '13px', lineHeight: '28px'}}>{date}</Typography>
		  </ExpansionPanelSummary>
		  <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
		</ExpansionPanel>
	)
}


class App extends React.Component {
	state = {
		drawerOpen: false
	}

	toggleDrawer = (open) => {
		this.setState({ drawerOpen: open })
	}

	render() {
		const { state } = this
		return (
			<MuiThemeProvider theme={theme}>
				<Router><div>
					{
						smallScreen
							? <StyledTopbarMobile />
							: <TopBar toggleDrawer={this.toggleDrawer} />
					}
					<Switch>
						<Route path="/" exact render={() => <div className={`app-body${smallScreen ? '-mobile' : ''}`} style={{textAlign: 'left' }}>
								<Panel title="小站简介" date="2018-12-09" defaultExpanded={true}>
							  	<div>
							    	<p>这是我的个人笔记小站，主要是前端React笔记。目前没什么内容，因此，我称它-面向未来的站点。</p>
							    	<p>按照预期，我将经常更新这里的文章，可以点击<Link to="/gitbook" style={{color: colors.green['400']}}>这里</Link>查看。</p>
								    <ol>目前小站主要分为三个模块:
								    	<li>1、gitbook笔记。包含React笔记、玩Linux笔记、思考随笔</li>
								    	<li>2、笔记更新及更新计划</li>
								    	<li>3、小站功能更新日志</li>
								    </ol>
							    </div>
								</Panel>
								<Panel title="小站规划" date="2018-12-09" >
									<p>
									  昨天，我给自己建了这个笔记网站作为以后的笔记储存地。对于这个网站的笔记我有几步规划：<br />
									  首先，将之前写的文章整理挪到站点。以前写过些技术文章，但我相信自己能写出更好的，便将它们都丢弃吧。<br />
									  因此，挪过来文章的主要是之前的一些思考，当然，那些思考是建立在那之前经验的基础上；<br />
									  其次，我将开始规律性的产出，主要是React学习产出。<br />
									  这半年，我的文档阅读能力、学习能力都有了一定的提升，在定位解决问题上面也比较有底气并得到了认可。<br />
									  我想，自己这样算是踏入了程序的世界，而且，我有预感，在技术上我将进步的更快，因此，我需要记录笔记帮助我成长。<br />
									  与此同时，我将利用所学知识继续完善我的网站，之前注册了两个域名huolong.tk、ryanhuang.tk，目前只有notebook.huolong.tk有内容，<br />
									  我将会把这些域名利用起来，向里面填充有趣的东西；<br />
									  最后，我将整理今年的经验写成文章，今年是我收获比较大的一年，整理这些经验需要时间，就像重构代码，不过值得期待。<br />
									</p>
								</Panel>
								<Panel title="新更文章" date="2018-12-15" defaultExpanded={true}>
									<ArticalList smallScreen={smallScreen} />
								</Panel>
								{
									smallScreen && (
										<footer>
											<img src="/images/qrcode.jpg" alt="qrcode" className="footer-qcode" />
										</footer>)
								}
							</div>}>
						</Route>
						{
							menu.map(({ path, component }) => <Route path={path} key={path} component={component} />)
						}
					</Switch>
					<ToolDrawer open={state.drawerOpen} toggleDrawer={this.toggleDrawer} />
				</div></Router>
				{ !smallScreen && <Qcode /> }
			</MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
