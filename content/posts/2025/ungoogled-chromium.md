---
title: Ungoogled Chromium 简单体验及配置
description: 介绍 Ungoogled Chromium 的优势，分享安装方法及常用实验功能设置，替代原版 Google Chrome，提升隐私与使用体验。
date: 2025-10-24 00:11:45
updated: 2025-11-02 16:16:28
categories: [分享]
tags: [Chrome]
references:
  - title: 📋 ungoogled chromium 安装配置 - 布铃酱的点心铺
    link: https://blyrin.cn/notes/ungoogled-chromium
---

## 换一个

Google 的 Chrome 浏览器总是会在用户数据的路径中生成AI模型相关文件，占用了我很多磁盘空间。

:copy{prompt="Chrome" code="%LOCALAPPDATA%\Google\Chrome\User Data\OptGuideOnDeviceModel"}

而这个东西无法通过 `chrome://flags` 实验特性管理将其关闭。当然，你也可以通过修改文件夹权限，注册表等操作来限制这个东西的生成，但我始终觉得不如换个浏览器来的好。

## 来安装吧

我推荐 Windows 系统使用 `scoop install ungoogled-chromium`{lang="sh"} 安装 Ungoogled Chromium，这在更新时比较方便。

::quote
也可自行探索另外的安装方式。
::

其余系统的安装流程详见 [Downloads](https://github.com/ungoogled-software/ungoogled-chromium#downloads) 的说明内容。

### Widevine DRM

观看受版权保护的视频需要安装 Widevine DRM 组件。不过目前从 `dl.google.com` 安装组件的方式已经失效，Linux 有社区维护的组件，而其他系统仅推荐从文件路径中手动提取。

## 功能配置

这是我开启一些实验功能，可以参考一下。

| 实验功能（原生自带） | 选项 |
| - | - |
| chrome://flags/#enable-parallel-downloading | Enabled |
| chrome://flags/#enable-tab-audio-muting | Enabled |
| chrome://flags/#side-by-side | Enabled - hide mini toolbar on active view |

开启多线程下载， :tip[控制单个标签页静音]{tip="参考 Microsoft Edge 和 Firefox 的标签页"} 和左右分屏。

### 增强功能

Ungoogled Chromium 不依赖于 Google 的网络服务。它在继承使用体验的同时，也增加了一些自己的新功能，详见 [Feature Overview](https://github.com/ungoogled-software/ungoogled-chromium#feature-overview) 的说明内容。

| 实验功能（ungoogled-chromium flag） | 选项 |
| - | - |
| chrome://flags/#extension-mime-request-handling | Always prompt for install |
| chrome://flags/#show-avatar-button | Incognito and Guest |
| chrome://flags/#scroll-tabs | Always |
| chrome://flags/#keep-old-history | Enabled |

始终提示安装扩展，仅打开访客和无痕式窗口时显示头像，滚轮滚动切换标签页，以及保留三个月内的历史记录。

::alert
安装扩展还需要搭配 [Chromium Web Store](https://github.com/NeverDecaf/chromium-web-store/releases) 使用。
::

### 新标签页

| 实验功能（ungoogled-chromium flag） | 选项 |
| - | - |
| chrome://flags/#custom-ntp | chrome://new-tab-page |

Ungoogled Chromium 的默认标签页仅显示快捷方式，修改新标签地址就可以用回原来的搜索页啦。

## 书签同步

使用 [BookmarkHub](https://github.com/dudor/BookmarkHub) 将你的书签上传至 GitHub Gist，随时同步数据。

::quote
快同步吧。
::

::folding
#title
一些扩展程序
#default
这部分的内容和本文所写的关联并不大，但还是值得推荐一下。

| 扩展程序 | 作用 |
| - | - |
| [Atomic CSS Devtools](https://github.com/astahmer/atomic-css-devtools) | 开发专用 |
| [BewlyCat](https://github.com/keleus/BewlyCat) | b站优化 |
| [Refined GitHub](https://github.com/refined-github/refined-github) | GitHub优化 |
| [uBlock Origin](https://github.com/gorhill/uBlock) | 去广告 |
| [Vue force dev](https://github.com/hzmming/vue-force-dev) | 开发专用 |
| [Vue.js devtools](https://github.com/vuejs/devtools) | 开发专用 |
| [Wappalyzer](https://github.com/wappalyzer) | 查看网站架构 |
| [小电视空降助手](https://github.com/hanydd/BilibiliSponsorBlock) | b站优化 |
| [脚本猫](https://github.com/scriptscat/scriptcat) | 油猴脚本 |
| [陪读蛙](https://github.com/mengxi-ream/read-frog) | 翻译 |
::
