const gitbookHost = 'https://gitbook.ryanhuang.cn'
const books = [
	{
		id: 'sb',
		name: '随笔',
		url: `${gitbookHost}/Thoughts/_book`
	},
	{
		id: 'st',
		name: `便利贴`,
		url: `${gitbookHost}/Snippet/_book`
	},
	{
		id: 'tn',
		name: `技术笔记`,
		url: `${gitbookHost}/TechNote/_book`
	},
	{
		id: 'rf',
		name: `React Fundamentals`,
		url: `${gitbookHost}/ReactFundamentals/_book`
	},
	{
		id: 'lce',
		name: `LeetCode (Easy)`,
		url: `${gitbookHost}/LeetCodeEasy/_book`
	},
	{
		id: 'lcm',
		name: `LeetCode（Medium）`,
		url: `${gitbookHost}/LeetCodeMedium/_book`
	},
	{
		id: 'lch',
		name: `LeetCode（Hard）`,
		url: `${gitbookHost}/LeetCodeHard/_book`
	},
	{
		id: 'ss',
		name: `Server Side`,
		url: `${gitbookHost}/ServerSide/_book`
	},
	{
		id: 'dc',
		name: 'Docs',
		url: `${gitbookHost}/Docs/_book`
	},
	// {
	// 	id: 'mj',
	// 	name: 'Modern JavaScript',
	// 	url: `${gitbookHost}/ModernJS/_book`
	// },
	// {
	// 	id: 'aj',
	// 	name: 'Advanced JavaScript',
	// 	url: `${gitbookHost}/AdvancedJS/_book`
	// },
	// {
	// 	id: 'rx',
	// 	name: 'Redux',
	// 	url: `${gitbookHost}/Redux/_book`
	// },
	// {
	// 	id: 'rr',
	// 	name: 'React Router V4',
	// 	url: `${gitbookHost}/ReactRouterV4/_book`
	// },
	// {
	// 	id: 'rn',
	// 	name: 'React Native',
	// 	url: `${gitbookHost}/ReactNative/_book`
	// }
]

const booksMap = books.reduce((result, nextBook) => (result[nextBook.id] = nextBook) && result, {})

export default books

export { gitbookHost, booksMap }