(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{569:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("学习不走弯路，"),s("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("关注公众号")]),a._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),a._v(" "),s("h1",{attrs:{id:"_10分钟搭建自己的git仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10分钟搭建自己的git仓库"}},[a._v("#")]),a._v(" 10分钟搭建自己的Git仓库")]),a._v(" "),s("blockquote",[s("p",[a._v("GitLab是一款使用MIT许可证的基于网络的Git仓库管理工具，我们可以使用它来搭建自己的Git仓库，本文将介绍如何使用Gitlab在Linux下快速搭建Git仓库。")])]),a._v(" "),s("h2",{attrs:{id:"gitlab服务端搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab服务端搭建"}},[a._v("#")]),a._v(" Gitlab服务端搭建")]),a._v(" "),s("blockquote",[s("p",[a._v("在Linux（CenterOS7.6）下我们会以Docker的方式来安装Gitlab，对Docker不了解的朋友可以参考："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/d_CuljDTJq680NTndAay8g",target:"_blank",rel:"noopener noreferrer"}},[a._v("开发者必备Docker命令"),s("OutboundLink")],1),a._v("。")])]),a._v(" "),s("h3",{attrs:{id:"下载gitlab的docker镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载gitlab的docker镜像"}},[a._v("#")]),a._v(" 下载Gitlab的Docker镜像")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull gitlab/gitlab-ce\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"运行如下命令来启动gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行如下命令来启动gitlab"}},[a._v("#")]),a._v(" 运行如下命令来启动Gitlab")]),a._v(" "),s("blockquote",[s("p",[a._v("需要注意的是我们的Gitlab的http服务运行在宿主机的1080端口上，这里我们将Gitlab的配置，日志以及数据目录映射到了宿主机的指定文件夹下，防止我们在重新创建容器后丢失数据。")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--detach")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10443")]),a._v(":443 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1080")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--publish")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1022")]),a._v(":22 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--volume")]),a._v(" /mydata/gitlab/config:/etc/gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--volume")]),a._v(" /mydata/gitlab/logs:/var/log/gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--volume")]),a._v(" /mydata/gitlab/data:/var/opt/gitlab "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-ce:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"开启防火墙的指定端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启防火墙的指定端口"}},[a._v("#")]),a._v(" 开启防火墙的指定端口")]),a._v(" "),s("blockquote",[s("p",[a._v("由于Gitlab运行在1080端口上，所以我们需要开放该端口，注意千万不要直接关闭防火墙，否则Gitlab会无法启动。")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开启1080端口")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1080")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启防火墙才能生效")]),a._v("\nsystemctl restart firewalld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看已经开放的端口")]),a._v("\nfirewall-cmd --list-ports\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"访问gitlab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问gitlab"}},[a._v("#")]),a._v(" 访问Gitlab")]),a._v(" "),s("ul",[s("li",[a._v("访问地址："),s("a",{attrs:{href:"http://192.168.3.101:1080/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://192.168.3.101:1080/"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("由于Gitlab启动比较慢，需要耐心等待10分钟左右，如果Gitlab没有启动完成访问，会出现如下错误。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_04.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("可以通过docker命令动态查看容器启动日志来知道gitlab是否已经启动完成。")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs gitlab "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_05.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"gitlab的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab的使用"}},[a._v("#")]),a._v(" Gitlab的使用")]),a._v(" "),s("h3",{attrs:{id:"gitlab启动完成后第一次访问-会让你重置root帐号的密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitlab启动完成后第一次访问-会让你重置root帐号的密码"}},[a._v("#")]),a._v(" Gitlab启动完成后第一次访问，会让你重置root帐号的密码")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_06.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"重置完成后输入帐号密码登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重置完成后输入帐号密码登录"}},[a._v("#")]),a._v(" 重置完成后输入帐号密码登录")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_07.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"选择创建项目、创建组织、创建帐号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择创建项目、创建组织、创建帐号"}},[a._v("#")]),a._v(" 选择创建项目、创建组织、创建帐号")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_08.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"创建组织"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建组织"}},[a._v("#")]),a._v(" 创建组织")]),a._v(" "),s("p",[a._v("首先我们需要创建一个组织，然后在这个组织下分别创建用户和项目，这样同组织的用户就可以使用该组织下的项目了。\n"),s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_09.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"创建用户并修改密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建用户并修改密码"}},[a._v("#")]),a._v(" 创建用户并修改密码")]),a._v(" "),s("h4",{attrs:{id:"找到添加用户的按钮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找到添加用户的按钮"}},[a._v("#")]),a._v(" 找到添加用户的按钮")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_10.png",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"输入用户名密码添加用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入用户名密码添加用户"}},[a._v("#")]),a._v(" 输入用户名密码添加用户")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_11.png",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"在编辑界面中修改用户密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在编辑界面中修改用户密码"}},[a._v("#")]),a._v(" 在编辑界面中修改用户密码")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_12.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_13.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"创建项目并添加readme文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目并添加readme文件"}},[a._v("#")]),a._v(" 创建项目并添加README文件")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_14.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_15.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"将用户分配到组织"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将用户分配到组织"}},[a._v("#")]),a._v(" 将用户分配到组织")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_16.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"git客户端安装及使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git客户端安装及使用"}},[a._v("#")]),a._v(" Git客户端安装及使用")]),a._v(" "),s("h3",{attrs:{id:"下载git客户端并安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载git客户端并安装"}},[a._v("#")]),a._v(" 下载Git客户端并安装")]),a._v(" "),s("ul",[s("li",[a._v("下载地址：https://github.com/git-for-windows/git/releases/download/v2.23.0.windows.1/Git-2.23.0-64-bit.exe")]),a._v(" "),s("li",[a._v("下载完成后，一路点击Next安装即可。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_01.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"clone项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone项目"}},[a._v("#")]),a._v(" clone项目")]),a._v(" "),s("ul",[s("li",[a._v("找到项目clone的地址：")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_17.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("打开Git命令行工具：")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_18.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("执行以下命令clone项目到本地：")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone http://192.168.3.101:1080/macrozheng/hello.git\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"提交代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交代码"}},[a._v("#")]),a._v(" 提交代码")]),a._v(" "),s("p",[a._v("进入项目目录，修改一下README.md并提交：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入项目工程目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" hello/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将当前修改的文件添加到暂存区")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 提交代码")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"first commit"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"推送到远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库"}},[a._v("#")]),a._v(" 推送到远程仓库")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_19.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"拉取远程仓库代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取远程仓库代码"}},[a._v("#")]),a._v(" 拉取远程仓库代码")]),a._v(" "),s("ul",[s("li",[a._v("在Gitlab上修改readme中的文件内容：")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_20.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("拉取代码：")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"本地创建并提交分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地创建并提交分支"}},[a._v("#")]),a._v(" 本地创建并提交分支")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换并从当前分支创建一个dev分支")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将新创建的dev分支推送到远程仓库")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin dev\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/blog/gitlab_screen_21.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"其他常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他常用命令"}},[a._v("#")]),a._v(" 其他常用命令")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换到dev分支")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看本地仓库文件状况")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" status\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看本地所有分支")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" branch\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看提交记录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" log\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);