(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{576:function(l,t,a){"use strict";a.r(t);var s=a(4),i=Object(s.a)({},(function(){var l=this,t=l._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[t("p",[l._v("学习不走弯路，"),t("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[l._v("关注公众号")]),l._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),l._v(" "),t("h1",{attrs:{id:"虚拟机安装及使用linux-看这一篇就够了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机安装及使用linux-看这一篇就够了"}},[l._v("#")]),l._v(" 虚拟机安装及使用Linux，看这一篇就够了！")]),l._v(" "),t("blockquote",[t("p",[l._v("本文将从虚拟机安装、Linux系统安装、SSH客户端工具使用三方面来详细介绍Linux系统的安装及使用。")])]),l._v(" "),t("h2",{attrs:{id:"虚拟机安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机安装"}},[l._v("#")]),l._v(" 虚拟机安装")]),l._v(" "),t("blockquote",[t("p",[l._v("VirtualBox 是一款开源虚拟机软件，由Sun公司出品，现在则由Oracle进行开发。VirtualBox号称是最强的免费虚拟机软件，它性能优异且简单易用。可虚拟的系统包括Windows、Linux、MacOS、Android等操作系统！本文将使用VirtualBox作为虚拟机来安装Linux系统。")])]),l._v(" "),t("h3",{attrs:{id:"virtualbox的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox的安装"}},[l._v("#")]),l._v(" VirtualBox的安装")]),l._v(" "),t("ul",[t("li",[l._v("我们先下载VirtualBox安装包，下载地址：https://www.virtualbox.org/wiki/Downloads")]),l._v(" "),t("li",[l._v("下载完成后双击运行安装包一路点击下一步即可：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_01.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("中途需要自定义一下安装路径：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_02.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("最后点击完成，完成安装。")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_03.png",alt:""}})]),l._v(" "),t("h3",{attrs:{id:"创建虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机"}},[l._v("#")]),l._v(" 创建虚拟机")]),l._v(" "),t("ul",[t("li",[l._v("创建一个Linux虚拟机：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_04.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("分配虚拟机内存大小，可以根据自己电脑配置来决定：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_05.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("创建虚拟硬盘：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_06.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("设置虚拟硬盘文件类型，这里选择DVI格式：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_07.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("选择动态分配空间大小，如果你的硬盘空间比较大的话，可以选择固定大小：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_08.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("设置虚拟硬盘的位置和大小：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_09.png",alt:""}})]),l._v(" "),t("h2",{attrs:{id:"linux安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[l._v("#")]),l._v(" Linux安装")]),l._v(" "),t("blockquote",[t("p",[l._v("CentOS（Community Enterprise Operating System）是Linux发行版之一，中文意思为社区企业操作系统。它是来自于商业版 Red Hat Enterprise Linux依照开放源代码规定释出的源代码所编译而成，因此具有高度稳定性且完全开源。本文将以CentOS 7.6为例来介绍Linux系统的安装。")])]),l._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[l._v("#")]),l._v(" 下载")]),l._v(" "),t("ul",[t("li",[l._v("下载地址：http://vault.centos.org/7.6.1810/isos/x86_64/")]),l._v(" "),t("li",[l._v("下载文件：CentOS-7-x86_64-DVD-1810.iso")])]),l._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[l._v("#")]),l._v(" 安装")]),l._v(" "),t("ul",[t("li",[l._v("为虚拟机添加虚拟光盘，虚拟光盘指定为我们下载的ISO镜像文件：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_10.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("点击启动运行虚拟机：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_11.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("运行成功后，选择"),t("code",[l._v("Install CentOS 7")]),l._v("进行安装：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_12.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("选择系统安装过程中的语言，建议选择"),t("code",[l._v("English")]),l._v("选项：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_13.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("需要进行设置的部分示意图：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_14.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("时区设置，地区选择"),t("code",[l._v("Asia")]),l._v("，城市选择"),t("code",[l._v("Shanghai")]),l._v("：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_15.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("语言支持选择安装英文、简体中文两种语言安装包：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_16.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("软件安装设置选择"),t("code",[l._v("Server with GUI")]),l._v("，同时选择如图三种附加环境：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_17.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("磁盘分区设置，由于我的虚拟机设置的内存较小，需要创建一个较大的"),t("code",[l._v("swap")]),l._v("分区，内存设置较大的直接选择自动分区即可，这里我们使用手动分区：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_18.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("按如图所示进行手动分区操作；")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_19.png",alt:""}})]),l._v(" "),t("ul",[t("li",[t("p",[l._v("关于分区的几个目录的说明：")]),l._v(" "),t("ul",[t("li",[l._v("/：根分区；")]),l._v(" "),t("li",[l._v("swap：交换分区，可以当虚拟内存使用；")]),l._v(" "),t("li",[l._v("/boot：存储系统的引导信息和内核信息；")]),l._v(" "),t("li",[l._v("/usr：存储系统应用软件安装信息；")]),l._v(" "),t("li",[l._v("/var：存储系统日志信息。")])])]),l._v(" "),t("li",[t("p",[l._v("网络设置，设置主机名称和进行网络激活操作：")])])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_20.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("单击"),t("code",[l._v("Begin Installation")]),l._v("进行安装：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_21.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("安装过程中可以设置"),t("code",[l._v("root")]),l._v("用户的密码；")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_22.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("完成安装后重新启动即可进入系统，第一次启动需要同意协议并完成配置：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_23.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("此时宿主机还无法直接访问虚拟机，需要将虚拟机的网络模式改为桥接模式才可以。")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_24.png",alt:""}})]),l._v(" "),t("h2",{attrs:{id:"xshell使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xshell使用"}},[l._v("#")]),l._v(" Xshell使用")]),l._v(" "),t("blockquote",[t("p",[l._v("Xshell是一款SSH连接客户端工具，可以用于远程操作Linux系统。Xshell对于家庭和学校可以免费使用，提供一个有效邮箱，下载链接就会发送到你的的邮箱。")])]),l._v(" "),t("ul",[t("li",[t("p",[l._v("免费版本申请地址：https://www.netsarang.com/zh/free-for-home-school/")])]),l._v(" "),t("li",[t("p",[l._v("下载并安装完成Xshell以后，在Linux系统中打开命令行：")])])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_25.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("输入"),t("code",[l._v("ifconfig")]),l._v("命令获取IP地址；")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_26.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("获取完成后通过Xshell进行连接，并输入账号和密码：")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_27.png",alt:""}})]),l._v(" "),t("ul",[t("li",[l._v("连接完成后即可远程使用Linux系统了。")])]),l._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/linux_install_28.png",alt:""}})]),l._v(" "),t("h2",{attrs:{id:"其他相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他相关"}},[l._v("#")]),l._v(" 其他相关")]),l._v(" "),t("h3",{attrs:{id:"修改默认启动模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改默认启动模式"}},[l._v("#")]),l._v(" 修改默认启动模式")]),l._v(" "),t("p",[l._v("如果不想默认启动图形化界面的话，可以修改默认的启动模式，因为图形化界面还是比较占用内存的，使用命令如下。")]),l._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[l._v("# 将默认级别修改为多用户文本模式")]),l._v("\nsystemctl set-default multi-user.target\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[l._v("# 将默认级别修改为图形用户界面模式")]),l._v("\nsystemctl set-default graphical.target\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[l._v("# 重启")]),l._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[l._v("reboot")]),l._v("\n")])]),l._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[l._v("1")]),t("br"),t("span",{staticClass:"line-number"},[l._v("2")]),t("br"),t("span",{staticClass:"line-number"},[l._v("3")]),t("br"),t("span",{staticClass:"line-number"},[l._v("4")]),t("br"),t("span",{staticClass:"line-number"},[l._v("5")]),t("br"),t("span",{staticClass:"line-number"},[l._v("6")]),t("br")])]),t("h3",{attrs:{id:"linux常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令"}},[l._v("#")]),l._v(" Linux常用命令")]),l._v(" "),t("p",[l._v("可以参考下这个："),t("a",{attrs:{href:"/reference/linux"}},[l._v("开发者必备Linux命令")])]),l._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[l._v("#")]),l._v(" 公众号")]),l._v(" "),t("p",[t("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);