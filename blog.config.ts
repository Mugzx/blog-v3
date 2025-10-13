import type { FeedEntry } from './app/types/feed'

export { zhCN as dateLocale } from 'date-fns/locale/zh-CN'

const basicConfig = {
	title: 'Mugzx\'s Blog',
	subtitle: '向上革命，向下实践。',
	// 长 description 利好于 SEO
	description: '这里是 Mugzx 的个人博客网站，记录了随笔、技术、分享与哲学等多个领域的内容。博客使用了美观的开源博客主题提供良好的内容浏览体验。“向上革命，向下实践。”是为了不断前进的一句口号。站点在访问体验做了许多加载优化，欢迎大家多多前来访问！',
	author: {
		name: 'Mugzx',
		avatar: 'https://www.mugzx.top/api/avatar.png',
		email: 'me@mugzx.top',
		homepage: 'https://www.mugzx.top',
	},
	copyright: {
		abbr: 'CC BY-NC-SA 4.0',
		name: '署名-非商业性使用-相同方式共享 4.0 国际',
		url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
	},
	favicon: 'https://www.mugzx.top/icon.png',
	language: 'zh-CN',
	timeEstablished: '2025-01-24',
	timezone: 'Asia/Shanghai',
	url: 'https://blog.mugzx.top',
	defaultCategory: '未分类',
}

// 存储 nuxt.config 和 app.config 共用的配置
// 此处为启动时需要的配置，启动后可变配置位于 app/app.config.ts
// @keep-sorted
const blogConfig = {
	...basicConfig,

	article: {
		categories: {
			[basicConfig.defaultCategory]: { icon: 'ph:folder-dotted-bold' },
			分享: { icon: 'ph:mouse-bold', color: '#7df' },
			随笔: { icon: 'ph:shooting-star-bold', color: '#3af' },
			哲学: { icon: 'ph:book-bookmark-bold', color: '#3af' },
			编程: { icon: 'ph:code-bold', color: '#36f' },
		},
		defaultCategoryIcon: 'ph:folder-bold',
		/** 分类排序方式，键为排序字段，值为显示名称 */
		order: {
			date: '创建日期',
			updated: '更新日期',
			// title: '标题',
		},
		/** 使用 pnpm new 新建文章时自动生成自定义链接（permalink/abbrlink） */
		useRandomPremalink: false,
		/** 隐藏基于文件路由（不是自定义链接）的 URL /post 路径前缀 */
		hidePostPrefix: true,
		/** 禁止搜索引擎收录的路径 */
		robotsNotIndex: ['/preview', '/previews/*'],
	},

	/** 博客 Atom 订阅源 */
	feed: {
		/** 订阅源最大文章数量 */
		limit: 50,
		/** 订阅源是否启用XSLT样式 */
		enableStyle: true,
	},

	/** 向 <head> 中添加脚本 */
	scripts: [
		// 自己部署的 Umami 统计服务
		{ 'src': 'https://umami.mugzx.top/script.js', 'data-website-id': '67b04aa0-edac-456d-bbe1-7ddd2bff9008', 'defer': true },
		// Twikoo 评论系统
		{ src: 'https://s4.zstatic.net/ajax/libs/twikoo/1.6.44/twikoo.min.js', defer: true },
	],

	/** 自己部署的 Twikoo 服务 */
	twikoo: {
		envId: 'https://twikoo.mugzx.top',
		preload: 'https://twikoo.mugzx.top',
	},
}

/** 用于生成 OPML 和友链页面配置 */
export const myFeed: FeedEntry = {
	author: blogConfig.author.name,
	title: blogConfig.title,
	desc: blogConfig.subtitle || blogConfig.description,
	link: blogConfig.url,
	feed: new URL('/atom.xml', blogConfig.url).toString(),
	icon: blogConfig.favicon,
	avatar: blogConfig.author.avatar,
	archs: ['Nuxt', 'Vercel'],
	date: blogConfig.timeEstablished,
	comment: '这是我自己。',
}

export default blogConfig
