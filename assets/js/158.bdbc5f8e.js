(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{498:function(a,s,t){"use strict";t.r(s);var e=t(4),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("学习不走弯路，"),s("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("关注公众号")]),a._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),a._v(" "),s("h1",{attrs:{id:"我常用的自动化部署技巧-贼好用-推荐给大家"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我常用的自动化部署技巧-贼好用-推荐给大家"}},[a._v("#")]),a._v(" 我常用的自动化部署技巧，贼好用，推荐给大家！")]),a._v(" "),s("blockquote",[s("p",[a._v("SpringBoot+Jenkins自动化部署技巧，远程部署同样适用，附通用自动化脚本！本文将从半自动化部署讲起，到自动化部署，讲解一套生产环境切实可用的自动化部署方案！")])]),a._v(" "),s("h2",{attrs:{id:"半自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#半自动化部署"}},[a._v("#")]),a._v(" 半自动化部署")]),a._v(" "),s("blockquote",[s("p",[a._v("之前写过的SpringBoot应用打包Docker镜像都是通过Maven插件来实现的，由于远程服务器需要开发2375端口，存在一定的安全隐患。这次介绍另一种方法，使用DockerFile+Jar+自动化脚本的形式来部署。由于需要一定的手动操作，我把它称之为半自动化部署。")])]),a._v(" "),s("h3",{attrs:{id:"项目打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目打包"}},[a._v("#")]),a._v(" 项目打包")]),a._v(" "),s("ul",[s("li",[a._v("这次我们不使用Docker的Maven插件来打包，先在"),s("code",[a._v("pom.xml")]),a._v("中注释掉它；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_01.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("然后使用Maven的package命令直接将应用打成Jar包；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_02.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("此时在"),s("code",[a._v("target")]),a._v("目录下就会生成一个Jar包，我们打包Docker镜像的时候会用到它。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_03.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[a._v("#")]),a._v(" DockerFile")]),a._v(" "),s("p",[a._v("主要是定义了如何将Jar包打包成Docker镜像，对DockerFile不了解的朋友可以看下"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/U_OcNMpLAJJum_s9jbZLGg",target:"_blank",rel:"noopener noreferrer"}},[a._v("《使用Dockerfile为SpringBoot应用构建Docker镜像》"),s("OutboundLink")],1),a._v("，具体内容如下。")]),a._v(" "),s("div",{staticClass:"language-dockerfile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 该镜像需要依赖的基础镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" java:8")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将当前目录下的jar包复制到docker容器的/目录下")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ADD")]),a._v(" mall-tiny-jenkins-1.0-SNAPSHOT.jar /mall-tiny-jenkins-1.0-SNAPSHOT.jar")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 声明服务运行在8088端口")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" 8088")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定docker容器启动时运行jar包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" ["),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"java"')]),a._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-jar"')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/mall-tiny-jenkins-1.0-SNAPSHOT.jar"')]),a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定维护者的名字")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("MAINTAINER")]),a._v(" macro")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"自动化脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动化脚本"}},[a._v("#")]),a._v(" 自动化脚本")]),a._v(" "),s("p",[a._v("可以作为通用脚本来使用的模板脚本，只需改变其中的一些参数即可，具体执行流程为：停止旧服务->删除旧容器->删除旧镜像->打包新镜像->运行新镜像。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/env bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义应用组名")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("group_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mall-tiny'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义应用名称")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mall-tiny-jenkins'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义应用版本")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app_version")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'1.0-SNAPSHOT'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义应用环境")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("profile_active")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'qa'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'----copy jar----'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'----stop container----'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'----rm container----'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${group_name}")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_version}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'----rm image----'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打包编译docker镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${group_name}")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_version}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'----build image----'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8088")]),a._v(":8088 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--link")]),a._v(" mysql:db "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'spring.profiles.active'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${profile_active}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TZ")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Asia/Shanghai"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/localtime:/etc/localtime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mydata/app/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),a._v("/logs:/var/logs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${group_name}")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_name}")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${app_version}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'----start container----'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br")])]),s("p",[a._v("下面讲下自动化脚本里面值得注意的地方：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("group_name")]),a._v("、"),s("code",[a._v("app_name")]),a._v("、"),s("code",[a._v("app_version")]),a._v("可以用来定义打包镜像的属性；")]),a._v(" "),s("li",[s("code",[a._v("profile_active")]),a._v("可以让你的应用使用不同环境下的配置，比如使用"),s("code",[a._v("qa")]),a._v("可以启用测试环境的配置，使用"),s("code",[a._v("prod")]),a._v("可以启用生产环境配置，真正的一包多用；")]),a._v(" "),s("li",[s("code",[a._v("docker rmi")]),a._v("这步一定要有，如果不删除旧镜像，当新镜像打包的时候会产生"),s("code",[a._v("none")]),a._v("镜像；")]),a._v(" "),s("li",[s("code",[a._v("docker run")]),a._v("命令中的"),s("code",[a._v('-e TZ="Asia/Shanghai"')]),a._v("时区一定要设置，否则容器时间会和宿主机会相差8个小时。")])]),a._v(" "),s("h3",{attrs:{id:"部署运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署运行"}},[a._v("#")]),a._v(" 部署运行")]),a._v(" "),s("ul",[s("li",[a._v("直接上传我们的应用Jar包、DockerFile文件和自动化部署脚本到指定目录下；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_04.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("将自动化脚本修改为可执行；")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x run.sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("使用"),s("code",[a._v("./run.sh")]),a._v("命令直接运行脚本即可。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_05.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"结合jenkins自动化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结合jenkins自动化部署"}},[a._v("#")]),a._v(" 结合Jenkins自动化部署")]),a._v(" "),s("blockquote",[s("p",[a._v("之前的打包、上传文件都是我们手动完成的，其实这些操作也可以让Jenkins来帮我们实现，有了Jenkins才算得上是真正的自动化部署！")])]),a._v(" "),s("h3",{attrs:{id:"学前准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学前准备"}},[a._v("#")]),a._v(" 学前准备")]),a._v(" "),s("p",[a._v("学习下面的内容需要对Jenkins有一定的了解，不了解的朋友可以看下："),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/tQqvgSc9cHBtnqRQSbI4aw",target:"_blank",rel:"noopener noreferrer"}},[a._v("《使用Jenkins一键打包部署SpringBoot应用，就是这么6！》"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"publish-over-ssh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publish-over-ssh"}},[a._v("#")]),a._v(" Publish Over SSH")]),a._v(" "),s("p",[a._v("这里推荐安装这款Jenkins插件，它的主要作用是可以通过SSH在不同服务器之间传输文件和执行命令。比如说我们把Jenkins装在了测试服务器上，我们可以使用Jenkins在测试服务器上从Git仓库获取代码，然后打成Jar包。打包完成后我们可以通过这个插件将Jar包传输到正式服务器上去，然后执行正式服务器上的自动化脚本，从而实现正式服务器上的自动化部署。")]),a._v(" "),s("ul",[s("li",[a._v("首先我们可以在"),s("code",[a._v("系统管理->插件管理")]),a._v("中找到该插件，然后进行安装；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_06.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("然后在"),s("code",[a._v("系统管理->插件管理")]),a._v("中添加相应的SSH配置；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_07.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("配置完成后创建一个应用的构建任务，"),s("code",[a._v("源码管理")]),a._v("和"),s("code",[a._v("构建")]),a._v("中的Maven打包配置和之前的Jenkins教程中一样，只有最后一步不同，添加构建步骤为"),s("code",[a._v("通过SSH发送文件并执行命令")]),a._v(";")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_08.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("配置好我们的"),s("code",[a._v("SSH Publisher")]),a._v("，主要是源文件路径和目标文件路径，以及需要执行的脚本；")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_09.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("之后执行构建任务即可实现自动化部署了，此方法在两台不同服务器之间同样适用！")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/img/mall/sb_auto_deploy_10.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("从我写过的几篇自动化部署文章中，其实可以看出，Linux下的自动化部署主要是依靠一连串的Linux命令来实现的。Jenkins的自动化部署也是基于这些的，所以要学会自动化部署，Linux命令和Docker命令是必不可少的！")]),a._v(" "),s("h2",{attrs:{id:"项目源码地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目源码地址"}},[a._v("#")]),a._v(" 项目源码地址")]),a._v(" "),s("p",[a._v("https://github.com/macrozheng/mall-learning/tree/master/mall-tiny-jenkins")]),a._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);