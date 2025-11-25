---
title: Arch Linux 安装记录
description: 关于 Arch Linux 安装的记录。
date: 2025-11-23 19:59:22
updated: 2025-11-23 19:59:22
image: # 图片
categories: [随笔]
tags: [Archlinux, 指南]
references:
  - title: Arch Linux 字体配置完全指南：从安装到优化 — geek-blogs.com
    link: https://geek-blogs.com/blog/arch-linux-font
---

::timeline
{2025年11月13日}

成功安装了Archlinux，但又因为一些操作把系统搞寄了。

{2025年11月23日}

第二次成功安装了Archlinux，遂准备写下这篇文章记录一些注意事项，但不提供完整的安装流程。
::

## 基于简明指南的注意事项

我参考 [archlinux 基础安装 | archlinux 简明指南](https://arch.icekylin.online/guide/rookie/basic-install.html) 安装的系统，所以部分步骤存在一些差异。

另外我推荐一盘一系统，随便折腾不怕把原来Windows系统搞坏~

### Ventoy的启动模式

我的电脑使用 :tip[Boot in normal mode]{tip="以正常模式启动"} 会在最后因为分区损坏从而无法进入系统；如果你的命令每一步都没错的话，那么可能是最开始的这一步就错了，请选择 :tip[Boot in grub2 mode]{tip="以 grub2 模式启动"}。

:quote[也许可以先选择 EndeavourOS 试试水？]

### PCle的 AER 机制

如果你的网卡与Archlinux系统有一些兼容问题，比如以`pcieport`为开头的报错信息，可以通过在GRUB引导中添加参数禁用。

```bash
sudo vim /etc/default/grub
```

在`GRUB_CMDLINE_LINUX`中添加`pci=noaer`。

### 引导与参数

1.win10 需要添加 `GRUB_DISABLE_OS_PROBER=false`，而 win11 并不需要。

2.英特尔的硬件请在 `GRUB_CMDLINE_LINUX_DEFAULT` 中添加 `modprobe.blacklist=iTCO_wdt` 而不是 `nowatchdog`。

### 手动为 rEFind 安装驱动

大致步骤与 [🔍 rEFind](https://arch.icekylin.online/guide/advanced/optional-cfg-2.html#%F0%9F%94%8D-refind) 的操作相同，但需要注意路径问题，如果发现通过 rEFind 引导失败了，可以参考以下修改。

```conf
initrd=intel-ucode.img initrd=initramfs-%v.img # Intel
initrd=amd-ucode.img initrd=initramfs-%v.img # AMD
```

对你来讲，内核参数的路径也许并不需要`@\boot\`的前缀，直接填写文件名即可。

## 基于简明指南的美化教程

### 字体

```bash
sudo pacman -S noto-fonts noto-fonts-cjk noto-fonts-emoji noto-fonts-extra
```
选择noto sans即可。

```bash
sudo pacman -S ttf-jetbrains-mono-nerd
```

选择jetbrains的字体即可。

### Waybar
