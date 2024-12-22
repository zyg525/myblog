(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{590:function(a,t,s){"use strict";s.r(t);var r=s(4),_=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("学习不走弯路，"),t("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("关注公众号")]),a._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),a._v(" "),t("h1",{attrs:{id:"swagger界面丑、功能弱怎么破-用postman增强下就给力了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger界面丑、功能弱怎么破-用postman增强下就给力了"}},[a._v("#")]),a._v(" Swagger界面丑、功能弱怎么破？用Postman增强下就给力了！")]),a._v(" "),t("blockquote",[t("p",[a._v("在使用Swagger的时候，你是否会有这种感觉：提交参数为JSON没法格式化，参数错了查找麻烦，返回结果没法折叠，太长了没法看！Swagger结合Postman使用后这一情况有很大改变，今天我们来讲下如何使用Postman增强Swagger的功能，希望对大家有所帮助！")])]),a._v(" "),t("h2",{attrs:{id:"postman使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postman使用"}},[a._v("#")]),a._v(" Postman使用")]),a._v(" "),t("p",[a._v("Postman是一款非常好用的接口调试工具，界面漂亮且功能强大，对Postman不了解的可以看下"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/MORhwiRmDd0c44mYn5ZrXA",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Postman：API接口调试利器》"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"swagger结合postman使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger结合postman使用"}},[a._v("#")]),a._v(" Swagger结合Postman使用")]),a._v(" "),t("blockquote",[t("p",[a._v("下面介绍下如何将Swagger API导入到Postman中去，然后使用Postman来调试接口。")])]),a._v(" "),t("h3",{attrs:{id:"swagger-api导入postman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swagger-api导入postman"}},[a._v("#")]),a._v(" Swagger API导入Postman")]),a._v(" "),t("ul",[t("li",[a._v("首先我们需要启动使用了Swagger的应用项目，这里以之前的"),t("code",[a._v("mall-tiny-swagger")]),a._v("项目为例子，找到"),t("code",[a._v("api-docs")]),a._v("路径，访问地址：http://localhost:8088/swagger-ui/")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_01.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("什么是Swagger的"),t("code",[a._v("api-docs")]),a._v("访问路径？该路径会返回JSON格式数据，应用中Swagger渲染API文档页面的所有数据就是来源于此，Postman也是可以通过这些数据来渲染API文档页面，这里的"),t("code",[a._v("api-docs")]),a._v("地址为：http://localhost:8088/v2/api-docs")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_02.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("在postman中点击"),t("code",[a._v("import")]),a._v("按钮，选择"),t("code",[a._v("Link")]),a._v("，输入Swagger的"),t("code",[a._v("api-docs")]),a._v("路径即可将Swagger生成的接口导入到Postman中去了；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_03.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("直接使用默认选项导入即可，无需修改；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_04.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("导入成功后，Swagger中的接口就会出现在Postman中了，之后就只需要在Postman中改改参数就可以开始调试接口了，是不是很方便！")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_05.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"postman设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postman设置环境变量"}},[a._v("#")]),a._v(" Postman设置环境变量")]),a._v(" "),t("ul",[t("li",[a._v("我们随意找个接口访问下，会发现访问出错了，那是因为"),t("code",[a._v("baseUrl")]),a._v("这个环境变量设置有问题，导致了接口无法访问；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_06.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("我们只要在Postman中设置"),t("code",[a._v("baseUrl")]),a._v("这个环境变量，就可以正常访问了；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_07.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("添加好环境变量之后，需要选择好环境才会被应用。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_08.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"访问需要登录认证的接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问需要登录认证的接口"}},[a._v("#")]),a._v(" 访问需要登录认证的接口")]),a._v(" "),t("ul",[t("li",[a._v("这时候再次访问接口会发现我们的接口需要登录认证才能正常访问；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_09.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("我们可以先调用登录接口来获取Token；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_10.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("给需要登录认证的接口添加"),t("code",[a._v("Bearer Token")]),a._v("类型的Token，我们可以发现需要配置一个叫"),t("code",[a._v("token")]),a._v("的环境变量；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_11.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("在环境变量中添加"),t("code",[a._v("token")]),a._v("；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_12.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("添加完环境变量后即可正常访问需要登录认证的接口了。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_13.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"有何缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有何缺点"}},[a._v("#")]),a._v(" 有何缺点")]),a._v(" "),t("blockquote",[t("p",[a._v("此种方法使用Postman来调试接口是非常强大的，但是对于文档展示能力有点偏弱。")])]),a._v(" "),t("ul",[t("li",[a._v("比如说Swagger中的接口对于请求和返回参数都有非常完善的注释信息；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_14.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("而在Postman中，这些文档信息得不到体现，Postman毕竟还只是一个接口调试工具。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/swagger_postman_15.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("Swagger和Postman结合使用比较好，Swagger用来看接口文档信息，Postman用于调试，将Swagger中的接口导入到Postman中可以弥补Swagger在接口调试方面的不足。")]),a._v(" "),t("h2",{attrs:{id:"项目源码地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目源码地址"}},[a._v("#")]),a._v(" 项目源码地址")]),a._v(" "),t("p",[a._v("https://github.com/macrozheng/mall-learning/tree/master/mall-tiny-swagger")]),a._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);t.default=_.exports}}]);