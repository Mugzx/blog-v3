---
title: Arch Linux 安装记录
description: 文章记录了手动安装 Arch Linux 过程中一些问题的解决方法以及基础的系统美化，以便快速上手。
date: 2025-11-23 19:59:22
updated: 2025-12-14 22:08:52
image: https://mu-s4.s3.bitiful.net/2025/11/28.avif?!style=1
categories: [随笔]
tags: [Arch, Linux, 指南]
recommend: true
references:
  - title: archlinux 简明指南
    link: https://arch.icekylin.online/guide/rookie/basic-install
  - title: SHORiNのArch Linux实践经历与指南
    link: https://github.com/SHORiN-KiWATA/ShorinArchExperience-ArchlinuxGuide/wiki
---

::timeline
{2025年11月13日}

成功安装了Arch Linux，但又因为一些操作把系统搞寄了。

{2025年11月23日}

第二次成功安装了 Arch Linux，遂准备写下这篇文章进行记录。
::

## 注意事项

你可以在不同的硬盘中安装 Arch Linux，这样可以更安全地折腾😘。

### Ventoy 的启动模式

如果 :tip[以正常模式启动]{tip="Boot in normal mode"} 安装但无法进入系统的话，可以试试 :tip[以 grub2 模式启动]{tip="Boot in grub2 mode"}。

:quote[也许可以先选择 Live ISO？]

担心兼容问题可以尝试先用 EndeavourOS、Fedora 等发行版临时运行一个操作系统来进行测试。

### 引导与参数

::chat
{:省略了很多聊天记录…}

{.Mugzx}

［一张关于报错信息的图片］

{Pinpe}

🤔

可能是驱动/硬件问题？

::

Pinpe 大佬指出我的无线网卡 intel 3165AC 可能与 Linux 有一些 :tip[兼容问题]{tip="比如以 pcieport 为开头的报错信息"}。

:copy{lang="zsh" code="vim /etc/default/grub"}

如果这个报错信息影响了你输入命令的话，可以在 `GRUB_CMDLINE_LINUX` 中添加 `pci=noaer`，禁用这个报错信息，除此之外，还需要调整 grub 的引导参数。

- 取消 `GRUB_DISABLE_OS_PROBER=false` 的注释，以便进行双系统引导。
  - **（可选）** 选择 rEFind 进行引导则不添加。

- 英特尔的硬件请在 `GRUB_CMDLINE_LINUX_DEFAULT` 中添加 `nowatchdog`和`modprobe.blacklist=iTCO_wdt`。

### 手动为 rEFind 安装驱动

大致步骤与 [🔍 rEFind](https://arch.icekylin.online/guide/advanced/optional-cfg-2.html#%F0%9F%94%8D-refind) 的操作相同，但需要注意路径问题，如果发现通过 rEFind 引导失败了，可以参考以下修改。

```[refind_linux.conf]
"Boot with standard options"  "root=UUID=d69d9dc3-141c-495c-a6fc-fa6b8d3f4991 rw rootflags=subvol=@ pci=noaer loglevel=5 nowatchdog modprobe.blacklist=iTCO_wdt initrd=intel-ucode.img initrd=initramfs-%v.img"
"Boot to single-user mode"    "root=UUID=d69d9dc3-141c-495c-a6fc-fa6b8d3f4991 rw rootflags=subvol=@ pci=noaer loglevel=5 nowatchdog modprobe.blacklist=iTCO_wdt initrd=intel-ucode.img initrd=initramfs-%v.img single"
"Boot with minimal options"   "ro root=UUID=d69d9dc3-141c-495c-a6fc-fa6b8d3f4991"
```

对你来讲，内核参数的路径也许并不需要`@\boot\`的前缀，直接填写文件名即可。

## 基本美化

### 字体

:copy{lang="zsh" code="sudo pacman -S noto-fonts noto-fonts-emoji ttf-sarasa-gothic"}
:copy{lang="zsh" code="sudo pacman -S ttf-jetbrains-mono-nerd"}

调整所有字体为 Sans Serif 12pt，等宽字体设置为 Monospace，大小同样为12pt。

### 窗口

窗口可以在显示和监视器-显示器配置中调整屏幕缩放率，推荐为100%或120%，舒服即可。

在颜色和主题-窗口装饰元素中可以调整右上角的窗口按钮大小，推荐设置为中等。

### 桌面特效

:copy{lang="zsh" code="yay -S kwin-effect-rounded-corners-git"}

安装 KDE-Rounded-Corners 以设置圆角。

### 面板配置

::pic
---
src: https://mu-s4.s3.bitiful.net/2025/11/28-one.avif?!style=1
caption: 仿 Windows11 布局
---
::

这是我的 KDE Plasma 的配置，可以参考看看，壁纸出自 [RealShovelKun](https://www.reddit.com/r/MoeMorphism/comments/umjhgw/oc_arch_linuxchan_by_myself)。

## 软件

### 透明代理

:copy{lang="zsh" code="sudo pacman -S daed"}
:copy{lang="zsh" code="sudo systemctl enable --now daed"}

或使用 `yay -U`{lang="zsh"} 本地安装 `.pkg.tar.zst` 软件包。

### VSCodium

:copy{lang="zsh" code="yay -S vscodium-bin"}

::link-card
---
title: 从 VSCode 到 VSCodium
description: 一款完全开源的代码编辑器替代方案，轻松从 VSCode 迁移到 VSCodium，享受去遥测的纯净开发体验。
link: /2025/vscode-to-vscodium
---
::

### rEFInd-glassy

::pic
---
src: https://mu-s4.s3.bitiful.net/2025/11/28-two.avif?!style=1
caption: A minimalistic rEFInd theme
---
::

[Pr0cella/rEFInd-glassy](https://github.com/Pr0cella/rEFInd-glassy) 是一个极简，扁平化风格的 rEFInd 主题。

:copy{lang="zsh" code="sudo mkdir /boot/EFI/refind/themes && cd /boot/EFI/refind/themes"}
:copy{lang="zsh" code="git clone https://github.com/Pr0cella/rEFInd-glassy.git"}
:copy{lang="zsh" code="vim /boot/EFI/refind/refind.conf"}

编辑器打开 refind.conf，找个合适的位置添加 `include themes/rEFInd-glassy/theme.conf`。

### localsend

:copy{lang="zsh" code="yay -S localsend-bin"}

## 尝试更多

了解完 Linux 的基本知识，也许可以尝试更多桌面环境了。

:quote[比如niri和Hyprland。]

安装部分可以查看参考链接内的内容，按步骤安装即可。需要注意的就是**安装前创建快照**与**具体问题具体分析**。
