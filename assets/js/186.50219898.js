(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{524:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("学习不走弯路，"),s("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("关注公众号")]),a._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),a._v(" "),s("h1",{attrs:{id:"使用maven插件为springboot应用构建docker镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用maven插件为springboot应用构建docker镜像"}},[a._v("#")]),a._v(" 使用Maven插件为SpringBoot应用构建Docker镜像")]),a._v(" "),s("blockquote",[s("p",[a._v("本文主要介绍如何使用Maven插件将SpringBoot应用打包为Docker镜像，并上传到私有镜像仓库Docker Registry的过程。")])]),a._v(" "),s("h2",{attrs:{id:"docker-registry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry"}},[a._v("#")]),a._v(" Docker Registry")]),a._v(" "),s("h3",{attrs:{id:"docker-registry-2-0搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-2-0搭建"}},[a._v("#")]),a._v(" Docker Registry 2.0搭建")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v(":5000 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" registry2 registry:2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果遇到镜像下载不下来的情况，需要修改 /etc/docker/daemon.json 文件并添加上 registry-mirrors 键值，然后重启docker服务：")]),a._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://registry.docker-cn.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"docker开启远程api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker开启远程api"}},[a._v("#")]),a._v(" Docker开启远程API")]),a._v(" "),s("h4",{attrs:{id:"用vim编辑器修改docker-service文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用vim编辑器修改docker-service文件"}},[a._v("#")]),a._v(" 用vim编辑器修改docker.service文件")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vi /usr/lib/systemd/system/docker.service\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("需要修改的部分：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/bin/dockerd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" fd:// "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--containerd")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/run/containerd/containerd.sock\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("修改后的部分：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/bin/dockerd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" tcp://0.0.0.0:2375 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" unix://var/run/docker.sock\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"让docker支持http上传镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让docker支持http上传镜像"}},[a._v("#")]),a._v(" 让Docker支持http上传镜像")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{ "insecure-registries":["192.168.3.101:5000"] }\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /etc/docker/daemon.json\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"修改配置后需要使用如下命令使配置生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置后需要使用如下命令使配置生效"}},[a._v("#")]),a._v(" 修改配置后需要使用如下命令使配置生效")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl daemon-reload\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"重新启动docker服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新启动docker服务"}},[a._v("#")]),a._v(" 重新启动Docker服务")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("systemctl stop "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\nsystemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"开启防火墙的docker构建端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启防火墙的docker构建端口"}},[a._v("#")]),a._v(" 开启防火墙的Docker构建端口")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2375")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"使用maven构建docker镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用maven构建docker镜像"}},[a._v("#")]),a._v(" 使用Maven构建Docker镜像")]),a._v(" "),s("blockquote",[s("p",[a._v("该代码是在mall-tiny-02的基础上修改的。")])]),a._v(" "),s("h3",{attrs:{id:"在应用的pom-xml文件中添加docker-maven-plugin的依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在应用的pom-xml文件中添加docker-maven-plugin的依赖"}},[a._v("#")]),a._v(" 在应用的pom.xml文件中添加docker-maven-plugin的依赖")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.spotify"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("docker-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.1.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("build-image"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("package"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("phase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("build"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("goal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("goals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("execution")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("executions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("imageName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mall-tiny/${project.artifactId}:${project.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("imageName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dockerHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("http://192.168.3.101:2375"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dockerHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("baseImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("java:8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("baseImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("entryPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v('["java", "-jar","/${project.build.finalName}.jar"]\n        '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("entryPoint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("targetPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("targetPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${project.build.directory}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("${project.build.finalName}.jar"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("resource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br")])]),s("p",[a._v("相关配置说明：")]),a._v(" "),s("ul",[s("li",[a._v("executions.execution.phase:此处配置了在maven打包应用时构建docker镜像；")]),a._v(" "),s("li",[a._v("imageName：用于指定镜像名称，mall-tiny是仓库名称，"),s("code",[a._v("${project.artifactId}")]),a._v("为镜像名称，"),s("code",[a._v("${project.version}")]),a._v("为仓库名称；")]),a._v(" "),s("li",[a._v("dockerHost：打包后上传到的docker服务器地址；")]),a._v(" "),s("li",[a._v("baseImage：该应用所依赖的基础镜像，此处为java；")]),a._v(" "),s("li",[a._v("entryPoint：docker容器启动时执行的命令；")]),a._v(" "),s("li",[a._v("resources.resource.targetPath：将打包后的资源文件复制到该目录；")]),a._v(" "),s("li",[a._v("resources.resource.directory：需要复制的文件所在目录，maven打包的应用jar包保存在target目录下面；")]),a._v(" "),s("li",[a._v("resources.resource.include：需要复制的文件，打包好的应用jar包。")])]),a._v(" "),s("h3",{attrs:{id:"修改application-yml-将localhost改为db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改application-yml-将localhost改为db"}},[a._v("#")]),a._v(" 修改application.yml，将localhost改为db")]),a._v(" "),s("blockquote",[s("p",[a._v("可以把docker中的容器看作独立的虚拟机，mall-tiny-docker访问localhost自然会访问不到mysql，docker容器之间可以通过指定好的服务名称db进行访问，至于db这个名称可以在运行mall-tiny-docker容器的时候指定。")])]),a._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("3306/mall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("?")]),a._v("useUnicode=true"),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("&characterEncoding=utf-8&serverTimezone=Asia/Shanghai")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" root\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" root\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"使用idea打包项目并构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用idea打包项目并构建镜像"}},[a._v("#")]),a._v(" 使用IDEA打包项目并构建镜像")]),a._v(" "),s("blockquote",[s("p",[a._v("注意：依赖的基础镜像需要先行下载，否则会出现构建镜像超时的情况，比如我本地并没有java8的镜像，就需要先把镜像pull下来，再用maven插件进行构建。")])]),a._v(" "),s("ul",[s("li",[a._v("执行maven的package命令:"),s("br"),a._v(" "),s("img",{attrs:{src:"/img/mall/refer_screen_68.png",alt:""}})]),a._v(" "),s("li",[a._v("构建成功:"),s("br"),a._v(" "),s("img",{attrs:{src:"/img/mall/refer_screen_66.png",alt:""}})]),a._v(" "),s("li",[a._v("镜像仓库已有该镜像："),s("br"),a._v(" "),s("img",{attrs:{src:"/img/mall/refer_screen_67.png",alt:""}})])]),a._v(" "),s("h2",{attrs:{id:"运行mall-tiny-docker项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行mall-tiny-docker项目"}},[a._v("#")]),a._v(" 运行mall-tiny-docker项目")]),a._v(" "),s("h3",{attrs:{id:"启动mysql服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql服务"}},[a._v("#")]),a._v(" 启动mysql服务")]),a._v(" "),s("ul",[s("li",[a._v("使用docker命令启动：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(":3306 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mydata/mysql/log:/var/log/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mydata/mysql/data:/var/lib/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mydata/mysql/conf:/etc/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mysql:5.7\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("ul",[s("li",[a._v("进入运行mysql的docker容器：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" mysql /bin/bash\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("使用mysql命令打开客户端：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-uroot")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-proot")]),a._v(" --default-character-set"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/img/mall/refer_screen_69.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("修改root帐号的权限，使得任何ip都能访问：")])]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("grant")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("all")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("on")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/img/mall/refer_screen_70.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("创建mall数据库：")])]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),a._v(" mall "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("character")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" utf8\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("将"),s("a",{attrs:{href:"https://github.com/macrozheng/mall-learning/blob/master/document/sql/mall.sql",target:"_blank",rel:"noopener noreferrer"}},[a._v("mall.sql"),s("OutboundLink")],1),a._v("文件拷贝到mysql容器的/目录下：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /mydata/mall.sql mysql:/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("将sql文件导入到数据库：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("use mall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /mall.sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("img",{attrs:{src:"/img/mall/refer_screen_71.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"启动mall-tiny-docker应用服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动mall-tiny-docker应用服务"}},[a._v("#")]),a._v(" 启动mall-tiny-docker应用服务")]),a._v(" "),s("ul",[s("li",[a._v("使用docker命令启动（--link表示应用可以用db这个域名访问mysql服务）：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v(":8080 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mall-tiny-docker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--link")]),a._v(" mysql:db "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/localtime:/etc/localtime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /mydata/app/mall-tiny-docker/logs:/var/logs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mall-tiny/mall-tiny-docker:0.0.1-SNAPSHOT\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:"/img/mall/refer_screen_72.png",alt:""}})]),a._v(" "),s("ul",[s("li",[a._v("开启8080端口：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("firewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("/tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("进行访问测试，地址："),s("a",{attrs:{href:"http://192.168.3.101:8080/swagger-ui.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://192.168.3.101:8080/swagger-ui.html"),s("OutboundLink")],1),a._v(" "),s("img",{attrs:{src:"/img/mall/refer_screen_73.png",alt:""}})])]),a._v(" "),s("h2",{attrs:{id:"项目源码地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目源码地址"}},[a._v("#")]),a._v(" 项目源码地址")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/macrozheng/mall-learning/tree/master/mall-tiny-docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/macrozheng/mall-learning/tree/master/mall-tiny-docker"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);