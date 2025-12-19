// 友链检测 CLI 需要使用显式导入和相对路径
import type { FeedGroup } from '../app/types/feed'
import { getFavicon, getGhAvatar, getGhIcon, getQqAvatar, QqAvatarSize } from './utils/img'

export default [
	// #region 相谈甚多
	{
		name: '相谈甚多',
		// desc: '',
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
				archs: ['Astro', 'Vercel'],
				date: '2025-01-24',
				comment: '交流各种技术，互相分享好东西，经常鼓励我的选择。',
			},
			{
				author: '枫落丰源',
				desc: '和你的日常，就是奇迹',
				link: 'https://blog.feng1026.top',
				feed: 'https://blog.feng1026.top/rss.xml',
				icon: 'https://unavatar.webp.se/duckduckgo/www.feng1026.top?width=32',
				avatar: getGhAvatar('Qiufengluoyes'),
				archs: ['Astro', 'Vercel'],
				date: '2025-01-24',
				comment: '启蒙了我的博客搭建，目前正在记录生活随笔。',
			},
		],
	},
	// #endregion
	// #region 朋友
	{
		name: '朋友们',
		// desc: '',
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
				title: 'Steven的博客',
				desc: '没有既定的终点，只有无限的探索',
				link: 'https://blog.stevenw.cc',
				feed: 'https://blog.stevenw.cc/rss.xml',
				icon: getGhIcon('Steven-WZH'),
				avatar: getGhAvatar('Steven-WZH'),
				archs: ['Halo', 'Cloudflare'],
				date: '2025-02-07',
				comment: 'MC爱好者，分享折腾经历。',

			},
			{
				author: 'xzadudu179',
				sitenick: '基地',
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
				author: 'Aone',
				title: 'AoneのBlog',
				desc: 'Aone的Blog，可能有有用的东西？',
				link: 'https://blog.adproqwq.top',
				feed: 'https://blog.adproqwq.top/atom.xml',
				icon: getFavicon('blog.adproqwq.top'),
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
				archs: ['Hexo', 'Cloudflare'],
				date: '2025-08-28',
				comment: '记录生活实况，折腾博客主题。',
			},
			{
				author: '皓然',
				sitenick: '小站',
				title: '皓然小站',
				desc: '分享生活和技术的点滴',
				link: 'https://blog.horonlee.com',
				feed: 'https://blog.horonlee.com/atom.xml',
				icon: 'https://bu.dusays.com/2023/02/05/63dfc7f2ced91.png',
				avatar: getGhAvatar('horonlee'),
				archs: ['Vue', 'EdgeOne'],
				date: '2025-11-14',
				comment: 'Go语言学习中…（感觉是一位说话很有趣的佬🫠）',
			},
			{
				author: 'Oyiso',
				title: 'Oyiso\'s Blog',
				desc: 'The shortest answer is doing',
				link: 'https://oyiso.cn',
				feed: 'https://oyiso.cn/feed',
				icon: getFavicon('oyiso.cn'),
				avatar: getGhAvatar('kannafay'),
				archs: ['WordPress', '服务器'],
				date: '2025-12-04',
				comment: '博客主题有特色，正在学习Go语言。',
			},
		],
	},
	/* ========从此处新增友链======== */
	// #endregion
	// #region 参考
	{
		name: '参考',
		// desc: '',
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
	// #endregion
] satisfies FeedGroup[]
