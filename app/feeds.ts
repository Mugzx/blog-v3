import type { FeedGroup } from '~/types/feed'
import { getFavicon, getGhAvatar, getGhIcon, getQqAvatar, QqAvatarSize } from './utils/img'

export default [
	// #region 相谈甚多
	{
		name: '相谈甚多',
		desc: '',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'LineXic',
				title: 'LineXic\'s website',
				desc: '难离难舍，想抱紧些。',
				link: 'https://www.linexic.top',
				feed: 'https://www.linexic.top/rss.xml',
				icon: getFavicon('www.linexic.top'),
				avatar: getQqAvatar('2793151375', QqAvatarSize.Size100),
				archs: ['Astro', 'Netlify'],
				date: '2025-01-24',
				comment: '交流各种技术，互相分享好东西，经常鼓励我的选择。',
			},
			{
				author: '枫落丰源',
				desc: '和你的日常，就是奇迹',
				link: 'https://blog.feng1026.top',
				feed: 'https://blog.feng1026.top/rss.xml',
				icon: 'https://blog.feng1026.top/favicon/favicon.png',
				avatar: getGhAvatar('Qiufengluoyes'),
				archs: ['Astro', 'Vercel'],
				date: '2025-01-24',
				comment: '启蒙了我的博客搭建，目前正在记录生活随笔。',
			},
		],
	},
	// #region 站友
	{
		name: '站友',
		// desc: '哔——啵——电波通讯中，欢迎常来串台～',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'MeowcoQAQ',
				title: 'MeowcoQAQ\'s Blog',
				link: 'https://blog.mcneko.com',
				feed: 'https://blog.mcneko.com/feed',
				icon: 'https://wsrv.nl/?url=github.com/Termux.png?size=32&output=webp',
				avatar: getGhAvatar('nkqa'),
				archs: ['WordPress', 'Cloudflare'],
				date: '2025-01-24',
				comment: 'MCNeko论坛的坛主，分享内容与琐事。',
			},
			{
				author: 'Steven',
				title: 'Steven\'s Blog',
				desc: '没有既定的终点，只有无限的探索',
				link: 'https://blog.stevenw.cc',
				feed: 'https://blog.stevenw.cc/rss.xml',
				icon: getGhIcon('Steven-WZH'),
				avatar: getGhAvatar('Steven-WZH'),
				archs: ['Halo', 'Cloudflare'],
				date: '2025-02-07',
				// comment: '分享折腾经历，目前文章停更。',

			},
			{
				author: 'xzadudu179',
				sitenick: '太空基地',
				title: 'XME-Home',
				desc: 'xzadudu179的太空基地',
				link: 'https://www.xzadudu179.top',
				icon: getFavicon('www.xzadudu179.top'),
				avatar: getGhAvatar('xzadudu179'),
				archs: ['Vue', 'Vercel'],
				date: '2025-04-19',
				comment: '太空与科幻主题风格，全栈爱好者。',
			},
			{
				author: 'damesck',
				sitenick: '小屋',
				title: 'damesck的小屋',
				desc: '致不完美的明天_',
				link: 'https://damesck.net',
				icon: getFavicon('damesck.net'),
				avatar: getGhAvatar('damesck233'),
				archs: ['React', 'Cloudflare'],
				date: '2025-05-09',
				comment: '这是怕坛大妈，KLPBBS的草级版主。',
			},
			{
				author: 'Adpro',
				title: 'AdproのBlog',
				desc: 'Adpro的Blog，可能有有用的东西？',
				link: 'https://blog.adproqwq.top',
				feed: 'https://blog.adproqwq.top/atom.xml',
				icon: 'https://weavatar.com/avatar/4a26406a570f6a31ca7ab85ee47b74bc471e92aeb67cd346ad7e9d9423091617?s=32',
				avatar: getGhAvatar('adproqwq'),
				archs: ['Vue', 'Vercel'],
				date: '2025-07-25',
				comment: '业余前端开发，维护着各类好东西。',
			},
			{
				author: 'Meteorite',
				sitenick: '小流星',
				title: '柠檬星',
				desc: '天空就是一杯橘子味的柠檬汽水',
				link: 'https://blog.lemonstar.me',
				icon: 'https://unavatar.webp.se/duckduckgo/blog.lemonstar.me?width=32',
				avatar: getGhAvatar('yangle-q'),
				archs: ['Hexo', 'Vercel'],
				date: '2025-08-28',
				comment: '记录生活实况，折腾博客主题。',
			},
		],
	},
	/* ========从此处新增友链======== */
	// #region 参考
	{
		name: '参考',
		// desc: '感谢热爱分享的每个人。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '纸鹿',
				sitenick: '摸鱼处',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				feed: 'https://blog.zhilu.site/atom.xml',
				link: 'https://blog.zhilu.site',
				icon: getFavicon('blog.zhilu.site'),
				avatar: getGhAvatar('L33Z22L11'),
				archs: ['Nuxt', 'Vercel'],
				date: '2025-03-23',
				comment: '技术以及文笔参考（博客主题原作者）',
			},
			{
				author: '月空人',
				desc: '偶尔写些博客，发发牢骚',
				feed: 'https://www.whbbit.cn/atom.xml',
				link: 'https://www.whbbit.cn',
				icon: getFavicon('www.whbbit.cn'),
				avatar: getGhAvatar('Whbbit1999'),
				archs: ['Nuxt', '服务器'],
				date: '2025-09-13',
				comment: '技术参考',
			},
		],
	},
] satisfies FeedGroup[]
