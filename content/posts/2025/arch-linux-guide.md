---
title: Arch Linux 安装记录
description: 文章记录了手动安装 Arch Linux 过程中一些问题的解决方法以及基础的系统美化，以便快速上手。
date: 2025-11-23 19:59:22
updated: 2025-11-28 23:15:52
# image:
categories: [随笔]
tags: [Archlinux, 指南]
---

::timeline
{2025年11月13日}

成功安装了Arch Linux，但又因为一些操作把系统搞寄了。

{2025年11月23日}

第二次成功安装了 Arch Linux，遂准备写下这篇文章进行记录。
::

## 基于简明指南的注意事项

我是根据 [archlinux 简明指南](https://arch.icekylin.online/guide/rookie/basic-install.html) 安装的系统，它的系统安装详解部分对一些步骤进行了更详细的解释，推荐阅读。

我是在不同硬盘中安装的 Arch Linux，这样可以 :tip[更安全]{tip="随便折腾不怕把原来 Windows 系统搞坏～"} 地折腾。

### Ventoy 的启动模式

U盘安装 Ventoy 启动并进行系统安装，以 :tip[Boot in normal mode]{tip="以正常模式启动"} 可能会在最后因为分区损坏从而无法进入系统，请选择 :tip[Boot in grub2 mode]{tip="以 grub2 模式启动"}。

:quote[也许可以先选择 EndeavourOS 试试水？]

### 引导与参数

我的无线网卡 intel 3165AC 貌似与 Linux 有一些兼容问题，比如以`pcieport`为开头的报错信息。

```bash
vim /etc/default/grub
```

在`GRUB_CMDLINE_LINUX`中添加`pci=noaer`，禁用这个报错信息，除此之外，还需要添加其它参数。

- win10 需要添加 `GRUB_DISABLE_OS_PROBER=false`，不过 win11 并不需要。

- 英特尔的硬件请在 `GRUB_CMDLINE_LINUX_DEFAULT` 中添加 `modprobe.blacklist=iTCO_wdt` 而不是 `nowatchdog`。

### 手动为 rEFind 安装驱动

大致步骤与 [🔍 rEFind](https://arch.icekylin.online/guide/advanced/optional-cfg-2.html#%F0%9F%94%8D-refind) 的操作相同，但需要注意路径问题，如果发现通过 rEFind 引导失败了，可以参考以下修改。

```[refind_linux.conf]
"Boot with standard options"  "root=UUID=d69d9dc3-141c-495c-a6fc-fa6b8d3f4991 rw rootflags=subvol=@ pci=noaer loglevel=5 modprobe.blacklist=iTCO_wdt initrd=intel-ucode.img initrd=initramfs-%v.img"
"Boot to single-user mode"    "root=UUID=d69d9dc3-141c-495c-a6fc-fa6b8d3f4991 rw rootflags=subvol=@ pci=noaer loglevel=5 modprobe.blacklist=iTCO_wdt initrd=intel-ucode.img initrd=initramfs-%v.img single"
"Boot with minimal options"   "ro root=UUID=d69d9dc3-141c-495c-a6fc-fa6b8d3f4991"

```

对你来讲，内核参数的路径也许并不需要`@\boot\`的前缀，直接填写文件名即可。

## 基于简明指南的基本美化

### 字体

```bash
pacman -S noto-fonts noto-fonts-emoji noto-fonts-extra noto-fonts-cjk
pacman -S ttf-jetbrains-mono-nerd
```

调整所有字体为 Noto Sans 12pt，等宽字体设置为 JetBrainsMonoNL Nerd Font，大小同样为12pt。

### 窗口

窗口可以在显示和监视器-显示器配置中调整屏幕缩放率，推荐为100%或125%。

在颜色和主题-窗口装饰元素中可以调整右上角的窗口按钮大小，推荐设置为中等。

#### 桌面特效

这里参考了[我的KDE自定义设置#桌面特效](https://github.com/SHORiN-KiWATA/ShorinArchExperience-ArchlinuxGuide/wiki/%E6%88%91%E7%9A%84KDE%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AE%BE%E7%BD%AE#%E6%A1%8C%E9%9D%A2%E7%89%B9%E6%95%88)。

可以使用`yay -S kwin-effect-rounded-corners-git`{lang="sh"}设置圆角。

### 面板配置

::pic
---
src: https://mu-s4.s3.bitiful.net/2025/11/28-one.avif?!style=1
caption: 仿 Windows11 布局
---
::
