---
title: 入手 Cudy TR3000
description: 我出于系统的安装便利，入手了一台小巧的路由器，同时也发现了该路由器的不足之处。
date: 2026-01-10 13:29:11
updated: 2026-01-20 01:27:52
categories: [分享]
tags: [路由器]
references:
  - title: OpenWrt Wiki - Cudy TR3000
    link: https://openwrt.org/toh/cudy/tr3000
---

## 原因

为了能让我的 Arch Linux 系统安装软件包可以方便一些，也是出于家里的房子还在装修，未来我的房间会有一个单独的网线接口等原因。决定先行购买一台 Cudy TR3000 来用，尽早熟悉如何使用比较好。

## 简易安装

整理了一下刷机顺序，大致为以下步骤，在路由器的WEB界面中刷入两次固件就可以开始使用了。

::timeline
{需要访问http:\/\/192.168.10.1}

原厂后台管理界面

{这次是http:\/\/192.168.1.1}

先刷入过渡固件

{访问固件默认的IP地址}

再刷入第三方固件
::

::alert{type="warning"}
我的设备不是 SN2544 以后的新批次 128M 设备，是用旧的 :tip[过渡固件]{tip="MD5: b8333d8eebd067fcb43bec855ac22364"} 刷入的系统。
::

安全起见，我更建议 SN2544 之前的 128M 设备依旧使用旧的过渡固件，新批次的设备直接 [前往官网获取固件](https://www.cudy.com/zh-cn/blogs/faq/openwrt-software-download) 即可。

## 基本配置

128MB 闪存的版本在刷入第三方固件后 `/overlay` 的分区剩余的磁盘空间可能有点小，不过我也只用作代理工具而已，调整一下配置就还是十分甚至九分够用的，也不用去为了更多的磁盘空间折腾 U-Boot 引导。

## 缺点

### 下载大文件吃力

Cudy TR3000 只要不断电以及重启就可以很稳定的使用了，不过小巧的体积说明它的散热是有些问题的。

:copy{prompt="$" code='pacman -S --noconfirm --needed adobe-source-han-serif-cn-fonts adobe-source-han-sans-cn-fonts noto-fonts-cjk noto-fonts noto-fonts-emoji'}

尤其是在下载思源黑体等字体文件时有着明显的发热和被其拖慢的下载速度。

### 信号干扰

::video-embed
---
type: bilibili
id: BV13bqqBUEcF
---
::

### 性价比

总体算还好的，我买的时候已经是涨价之后的价格了，170元左右的价格应该买到其它更好的路由器。
