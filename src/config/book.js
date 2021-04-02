const gitbookHost = 'https://gitbook.ryanhuang.cn'
const books = [
	{
		id: 'sb',
		name: '随笔',
		url: `${gitbookHost}/Thoughts`
	},
	{
		id: 'st',
		name: `便利贴`,
		url: `${gitbookHost}/Snippet`
	},
	{
		id: 'tn',
		name: `技术笔记`,
		url: `${gitbookHost}/TechNote`
	},
	{
		id: 'rf',
		name: `React Fundamentals`,
		url: `${gitbookHost}/ReactFundamentals`
	},
	{
		id: 'lce',
		name: `LeetCode (Easy)`,
		url: `${gitbookHost}/LeetCodeEasy`
	},
	{
		id: 'lcm',
		name: `LeetCode（Medium）`,
		url: `${gitbookHost}/LeetCodeMedium`
	},
	{
		id: 'lch',
		name: `LeetCode（Hard）`,
		url: `${gitbookHost}/LeetCodeHard`
	},
	{
		id: 'ss',
		name: `Server Side`,
		url: `${gitbookHost}/ServerSide`
	},
	{
		id: 'dc',
		name: 'Docs',
		url: `${gitbookHost}/Docs`
	},
	// {
	// 	id: 'mj',
	// 	name: 'Modern JavaScript',
	// 	url: `${gitbookHost}/ModernJS`
	// },
	// {
	// 	id: 'aj',
	// 	name: 'Advanced JavaScript',
	// 	url: `${gitbookHost}/AdvancedJS`
	// },
	// {
	// 	id: 'rx',
	// 	name: 'Redux',
	// 	url: `${gitbookHost}/Redux`
	// },
	// {
	// 	id: 'rr',
	// 	name: 'React Router V4',
	// 	url: `${gitbookHost}/ReactRouterV4`
	// },
	// {
	// 	id: 'rn',
	// 	name: 'React Native',
	// 	url: `${gitbookHost}/ReactNative`
	// }
]

const booksMap = books.reduce((result, nextBook) => (result[nextBook.id] = nextBook) && result, {})

export default books

export { gitbookHost, booksMap }