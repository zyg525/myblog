(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{490:function(a,l,t){"use strict";t.r(l);var s=t(4),e=Object(s.a)({},(function(){var a=this,l=a._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[l("p",[a._v("学习不走弯路，"),l("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("关注公众号")]),a._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),a._v(" "),l("h1",{attrs:{id:"mall在linux环境下的自动化部署-基于jenkins"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mall在linux环境下的自动化部署-基于jenkins"}},[a._v("#")]),a._v(" mall在Linux环境下的自动化部署（基于Jenkins）")]),a._v(" "),l("blockquote",[l("p",[a._v("本文是"),l("code",[a._v("mall")]),a._v("项目的专属Jenkins自动化部署方法。")])]),a._v(" "),l("h2",{attrs:{id:"jenkins的基本使用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jenkins的基本使用"}},[a._v("#")]),a._v(" Jenkins的基本使用")]),a._v(" "),l("p",[a._v("关于Jenkins的基本使用可以参考："),l("a",{attrs:{href:"https://mp.weixin.qq.com/s/tQqvgSc9cHBtnqRQSbI4aw",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用Jenkins一键打包部署SpringBoot应用，就是这么6！"),l("OutboundLink")],1)]),a._v(" "),l("h2",{attrs:{id:"执行脚本准备"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本准备"}},[a._v("#")]),a._v(" 执行脚本准备")]),a._v(" "),l("blockquote",[l("p",[a._v("首先我们先把需要远程执行的脚本准备好。")])]),a._v(" "),l("ul",[l("li",[l("p",[a._v("脚本文件都存放在了"),l("code",[a._v("mall")]),a._v("项目的"),l("code",[a._v("/document/sh")]),a._v("目录下：")])]),a._v(" "),l("li",[l("p",[a._v("上传脚本前在IDEA中修改所有脚本文件的换行符格式为"),l("code",[a._v("LF")]),a._v("，否则脚本会无法执行；")])])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_01.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("将所有脚本文件上传到指定目录，这里我们上传到"),l("code",[a._v("/mydata/sh")]),a._v("目录下；")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_02.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("将所有脚本文件都修改为可执行文件:")])]),a._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x ./mall-*\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br")])]),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_03.png",alt:""}})]),a._v(" "),l("h2",{attrs:{id:"jenkins中创建任务"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#jenkins中创建任务"}},[a._v("#")]),a._v(" Jenkins中创建任务")]),a._v(" "),l("blockquote",[l("p",[a._v("接下来我们将通过在Jenkins中创建任务来实现自动化部署。由于我们的"),l("code",[a._v("mall")]),a._v("是个多模块的项目，部署上面和曾经的单模块项目还是有所区别的。")])]),a._v(" "),l("h3",{attrs:{id:"mall-admin"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mall-admin"}},[a._v("#")]),a._v(" mall-admin")]),a._v(" "),l("blockquote",[l("p",[a._v("由于各个模块的执行任务的创建都大同小异，下面将详细讲解mall-admin模块任务的创建，其他模块将简略讲解。")])]),a._v(" "),l("ul",[l("li",[a._v("首先我们选择"),l("code",[a._v("构建一个自由风格的软件项目")]),a._v("mall-admin，然后配置其Git仓库地址，这里我直接使用了Gitee上面的地址：")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_04.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("之后我们创建一个构建，构建"),l("code",[a._v("mall")]),a._v("项目中的依赖模块，否则当构建可运行的服务模块时会因为无法找到这些模块而构建失败；")])]),a._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[l("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 只install mall-common,mall-mbg,mall-security三个模块")]),a._v("\nclean "),l("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),l("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" mall-common,mall-mbg,mall-security "),l("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v("\n")])]),a._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[a._v("1")]),l("br"),l("span",{staticClass:"line-number"},[a._v("2")]),l("br")])]),l("ul",[l("li",[a._v("依赖项目构建示意图：")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_05.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("再创建一个构建，单独构建并打包mall-admin模块：")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_06.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("添加一个远程SSH执行任务，去执行mall-admin的运行脚本：")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_07.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("点击保存，完成mall-admin的执行任务创建。")])]),a._v(" "),l("h3",{attrs:{id:"mall-portal"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mall-portal"}},[a._v("#")]),a._v(" mall-portal")]),a._v(" "),l("blockquote",[l("p",[a._v("mall-portal和其他模块与mall-admin创建任务方式基本一致，只需修改构建模块时的pom.xml文件位置和执行脚本位置即可。")])]),a._v(" "),l("ul",[l("li",[a._v("我们可以直接从mall-admin模块的任务复制一个过来创建：")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_08.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("修改第二个构建中的pom.xml文件位置，改为：${WORKSPACE}/mall-portal/pom.xml")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_09.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("修改第三个构建中的SSH执行脚本文件位置，改为：/mydata/sh/mall-portal.sh")])]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_10.png",alt:""}})]),a._v(" "),l("ul",[l("li",[a._v("点击保存，完成mall-portal的执行任务创建。")])]),a._v(" "),l("h3",{attrs:{id:"mall-search"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mall-search"}},[a._v("#")]),a._v(" mall-search")]),a._v(" "),l("p",[a._v("参考mall-admin和mall-portal的创建即可。")]),a._v(" "),l("h3",{attrs:{id:"任务创建完成"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#任务创建完成"}},[a._v("#")]),a._v(" 任务创建完成")]),a._v(" "),l("p",[l("img",{attrs:{src:"/img/mall/mall_deploy_jenkins_11.png",alt:""}})]),a._v(" "),l("h2",{attrs:{id:"项目地址"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[a._v("#")]),a._v(" 项目地址")]),a._v(" "),l("p",[l("a",{attrs:{href:"https://github.com/macrozheng/mall",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/macrozheng/mall"),l("OutboundLink")],1)]),a._v(" "),l("h2",{attrs:{id:"公众号"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),l("p",[l("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);l.default=e.exports}}]);