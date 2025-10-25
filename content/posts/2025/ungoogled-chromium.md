---
title: Ungoogled Chromium 简单体验及配置
description: 介绍 Ungoogled Chromium 的优势，分享安装方法及常用实验功能设置，替代原版 Google Chrome，提升隐私与使用体验。
date: 2025-10-24 00:11:45
updated: 2025-10-25 23:57:11
categories: [分享]
tags: [哲学, 马克思主义]
references:
  - title: 📋 ungoogled chromium 安装配置 - 布铃酱的点心铺
    link: https://blyrin.cn/notes/ungoogled-chromium
---

## 换一个

Google 的 Chrome 浏览器会在用户数据的路径中生成AI模型相关文件，占用了我很多磁盘空间。

:copy{prompt="Chrome" code="%LOCALAPPDATA%\Google\Chrome\User Data\OptGuideOnDeviceModel"}

而这个东西无法通过`chrome://flags`实验特性管理将其关闭。当然，你也可以通过修改文件夹权限，注册表等操作阻止这个东西的生成，但我觉得始终不如换个浏览器来的好。

## 来安装吧

我推荐使用 `scoop install ungoogled-chromium` 安装，在更新版本时比较方便。

### Widevine DRM

如果需要观看受版权保护的视频，则需要安装 Widevine DRM 组件。不过目前从 `dl.google.com` 安装组件的方式已经失效，Linux 可以使用社区维护的 Widevine DRM 组件，而其他平台仅推荐从文件路径中手动提取。

## 功能配置

这是我开启一些实验功能，可以参考一下。

| 实验功能（原生自带） | 选项 |
| - | - |
| chrome://flags/#enable-parallel-downloading | Enabled |
| chrome://flags/#enable-tab-audio-muting | Enabled |

自带的实验功能我开启的不多，仅开启了多线程下载以及 :tip[控制单个标签页静音]{tip="参考 Microsoft Edge 和 Firefox 的标签页"}。

### 增强功能

Ungoogled Chromium 不依赖于 Google 的网络服务。它在继承使用体验的同时，也增加了一些自己的新功能，详见[`README.md`](https://github.com/ungoogled-software/ungoogled-chromium)的说明内容。

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

使用 BookmarkHub 将你的书签上传至 GitHub Gist，随时同步数据。

::quote
快同步吧。
::
