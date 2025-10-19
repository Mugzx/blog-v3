---
title: 字体优化与显示效果提升
description: 包含两个不同但互补的字体优化实践：一是针对网站性能的字体子集化，二是针对系统中显示质量的字体更新。可以从中获得实用的字体优化方案，让良好体验始终走在前列。
date: 2025-02-06 22:13:42
updated: 2025-10-05 17:16:05
image: https://mu-s4.s3.bitiful.net/2025/10/05.avif!style=1
categories: [分享]
tags: [字体]
recommend: true
references:
  - title: 看小字不割裂的新微软雅黑！手把手无损替换旧微软雅黑！
    link: https://www.bilibili.com/video/BV1YGE1z2ECR
---

## 注意实际体验

::alert{type="info"}
文章上半部分创作于2025年2月6日，主要围绕修改博客字体展开。
::

以前在用 WordPress 的Argon主题时，我经常会去 Echo 大佬的博客里看他的美化教程。当时也是刚接触博客圈子不久，只想着怎么让博客更好看。一直在那改样式、改背景、改字体。

:zhilu-header

而在我修改现在的博客主题时，发现博客页眉处景深动画标题使用的 :tip[`阿里妈妈方圆体`]{tip="AlimamaFangYuanTi.woff2"} 字体文件拖慢了博客整体的加载速度，导致加载变慢。身为站长的我当然不能忍，很快啊，我就立马打开 DeepSeek 开始求助了起来:

::chat

{.Mugzx}

我想要在一个已有的字体文件的基础上保留里面我想要的字体（地球驿站）

{:(以下是DeepSeek的生成了一大段话之后的总结)}

{DeepSeek}

- **推荐工具**：优先使用 :tip[`fonttools`]{tip="使用Python语言通过命令行工具来进行字体子集化"} 命令行工具，快速精准生成子集字体。
- **手动备用**：少量字符或图形界面操作可选 :tip[FontCreator]{tip="字体编辑软件，要手动选择需要保留的字形"}。
- **最终验证**：务必测试安装后的字体，确保无乱码或缺失。

::

- `fonttools` 需要安装 `python` 环境，我觉得有点麻烦，直到最后也没用上💦。

- FontCreator 只能手动的来一个一个删来进行字体子集化处理。

::link-banner
---
banner: https://xlenco-img.s3.bitiful.net/i/2024/10/e308bb926c6e3323783e6c536edc136f.webp
title: 前端字体压缩方案 | 希乐博客
link: https://blog.xlenco.top/posts/858a
---
::

我参考了希乐的这篇文章提出的字体压缩方案，可以保留字体中需要的字符，压缩字体文件大小。符合我的需求，但是只能保留一种字体样式，这样一来博客的可变字体动画就看不出来效果了。

## 处理字体大小

#### 网站

我通过搜索引擎找到了这个字体子集化网站：[在线字体裁剪](https://font-subset.disidu.com)。不过用这个网站裁剪的字体文件还是有些许问题的，通过 FontCreator 打开之后可以发现里面保留了 AB 字形。

#### 命令行

纸鹿大佬也提供了 [命令行生成子集](https://blog.zhilu.site/previews/example#zhiluheader) 的方案，即借助前面所说的 `fonttools` 命令行工具生成。

```sh
# iconfont 网页版生成的字体子集在 Chrome 124 的版本无法解析，需要借助 fonttools 工具手动生成子集
pip install fonttools brotli
pyftsubset ./AlimamaFangYuanTi.ttf --text=Header文本 --flavor=woff2
```

## 字体渲染

::alert{type="info"}
文章下半部分创作于2025年7月23日，主要围绕修改系统字体展开。
::

Windows 的旧微软雅黑字体在1080P的屏幕下显示效果有些许不足，比如在部分文字渲染中显示点阵字体，使用小号文字显示不够清晰等问题。

:blur[观察`C:\Windows\Fonts`路径下的系统默认微软雅黑字体，会发现其文件版本为2017年推出的 Windows 10 秋季创意者更新中推出的v6.25版本（细体为v6.23版本），但在其后续的版本中又出现过 :tip[＂新微软雅黑＂]{tip="Noble Scarlet字体，又名微软雅黑v11.3"}。]

搜索发现，将旧微软雅黑替换为v11.3版本，可以提升一定的体验。

## 替换

下载所需的 [字体](https://www.123pan.com/s/gzY0Vv-iXm0d) 并在C盘下创建存放字体的文件夹，你可以选择在替换字体之前备份一份旧微软雅黑文件，留有选择的余地。

按住 :key[Shift]{code="shift"} 重启电脑，进入高级启动选项菜单，然后：

::timeline

{依次点击进入：}

疑难解答

高级选项

命令提示符
::

输入：

:copy{prompt="X:\Windows\System32>" lang="bat" code="xcopy C:\wryh C:\Windows\Fonts"}

如果提示找不到文件，可以通过记事本间接查看实际盘符。

:copy{prompt="X:\Windows\System32>" code="notepad"}

按照提示完成操作，退出点击继续，重启后即可开始使用 :tip[新字体]{tip="新字体在系统的大型版本更新中会被重置"} 啦ヾ(≧∇≦*)ゝ！

::alert
可以再更进一步调整 ClearType，使文字易于阅读。
::
