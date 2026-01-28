---
title: 蓝天公模电脑缺少驱动
date: 2026-01-25 18:42:11
updated: 2026-01-25 18:42:11
categories: [分享]
---

## 驱动

神舟的蓝天公模电脑没有键盘背光，需要安装 `tuxedo-drivers-dkms` 驱动。

:copy{prompt="$" code='yay -S tuxedo-control-center-bin'}
:copy{prompt="$" code='reboot'}

重启系统使驱动生效，这样内核就可以识别到对应的LED设备了。

## 图形界面

命令行无法持久保存修改项，使用 `tuxedo-control-center-bin` 图形界面可以更方便地管理键盘背光。

:copy{prompt="$" code='yay -S tuxedo-control-center-bin'}

## 其它

```bash
ls /sys/class/leds/rgb:kbd_backlight/
brightness  max_brightness  multi_intensity  subsystem  uevent
device      multi_index     power            trigger
```

一般来讲修改 `brightness`,`multi_intensity`,`trigger` 就可以了。

### 颜色以及亮度

设置颜色，这里我设置为蓝色。

:copy{prompt="$" code='echo "0 0 255" | sudo tee /sys/class/leds/rgb:kbd_backlight/multi_intensity'}

设置亮度，最高为 255。

:copy{prompt="$" code='echo 255 | sudo tee /sys/class/leds/rgb:kbd_backlight/brightness'}

### 事件选项

trigger 可以控制背光的触发事件，我设置的是电池充满时亮起，使用 `cat` 命令你可以看到更多触发事件。

:copy{prompt="$" code='echo BAT0-full | sudo tee /sys/class/leds/rgb:kbd_backlight/trigger'}
:copy{prompt="$" code='cat /sys/class/leds/rgb:kbd_backlight/trigger'}
