(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{475:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("学习不走弯路，"),t("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[s._v("关注公众号")]),s._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),s._v(" "),t("h1",{attrs:{id:"前后端分离项目-如何解决跨域问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离项目-如何解决跨域问题"}},[s._v("#")]),s._v(" 前后端分离项目，如何解决跨域问题")]),s._v(" "),t("blockquote",[t("p",[s._v("跨域资源共享（CORS）是前后端分离项目很常见的问题，本文主要介绍当SpringBoot应用整合SpringSecurity以后如何解决该问题。")])]),s._v(" "),t("h2",{attrs:{id:"什么是跨域问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域问题"}},[s._v("#")]),s._v(" 什么是跨域问题")]),s._v(" "),t("p",[s._v("CORS全称Cross-Origin Resource Sharing，意为跨域资源共享。当一个资源去访问另一个不同域名或者同域名不同端口的资源时，就会发出跨域请求。如果此时另一个资源不允许其进行跨域资源访问，那么访问的那个资源就会遇到跨域问题。")]),s._v(" "),t("h2",{attrs:{id:"跨域问题演示及解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题演示及解决"}},[s._v("#")]),s._v(" 跨域问题演示及解决")]),s._v(" "),t("blockquote",[t("p",[s._v("我们使用mall项目的源代码来演示一下跨域问题。此时前端代码运行在8090端口上，后端代码运行在8080端口上，由于其域名都是localhost，但是前端和后端运行端口不一致，此时前端访问后端接口时，就会产生跨域问题。")])]),s._v(" "),t("h3",{attrs:{id:"点击前端登录按钮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击前端登录按钮"}},[s._v("#")]),s._v(" 点击前端登录按钮")]),s._v(" "),t("blockquote",[t("p",[s._v("此时发现调用登录接口时出现跨域问题。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/tech_screen_35.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/img/mall/tech_screen_28.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/img/mall/tech_screen_29.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"覆盖默认的corsfilter来解决该问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆盖默认的corsfilter来解决该问题"}},[s._v("#")]),s._v(" 覆盖默认的CorsFilter来解决该问题")]),s._v(" "),t("blockquote",[t("p",[s._v("添加GlobalCorsConfig配置文件来允许跨域访问。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("macro"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mall"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bean")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("annotation"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Configuration")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorsConfiguration")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UrlBasedCorsConfigurationSource")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token import"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("springframework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorsFilter")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 全局跨域配置\n * Created by macro on 2019/7/27.\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GlobalCorsConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 允许跨域调用的过滤器\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorsFilter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("corsFilter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorsConfiguration")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorsConfiguration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许所有域名进行跨域调用")]),s._v("\n        config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAllowedOrigin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许跨越发送cookie")]),s._v("\n        config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAllowCredentials")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//放行全部原始头信息")]),s._v("\n        config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAllowedHeader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//允许所有请求方法跨域调用")]),s._v("\n        config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addAllowedMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UrlBasedCorsConfigurationSource")]),s._v(" source "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UrlBasedCorsConfigurationSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerCorsConfiguration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CorsFilter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("h3",{attrs:{id:"重新运行代码-点击登录按钮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新运行代码-点击登录按钮"}},[s._v("#")]),s._v(" 重新运行代码，点击登录按钮")]),s._v(" "),t("blockquote",[t("p",[s._v("发现需要登录认证的/admin/info接口的OPTIONS请求无法通过认证，那是因为复杂的跨越请求需要先进行一次OPTIONS请求进行预检，我们的应用整合了SpringSecurity，对OPTIONS请求并没有放开登录认证。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/tech_screen_30.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/img/mall/tech_screen_31.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"设置springsecurity允许options请求访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置springsecurity允许options请求访问"}},[s._v("#")]),s._v(" 设置SpringSecurity允许OPTIONS请求访问")]),s._v(" "),t("blockquote",[t("p",[s._v("在SecurityConfig类的configure(HttpSecurity httpSecurity)方法中添加如下代码。")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("antMatchers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HttpMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OPTIONS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//跨域请求会先进行一次options请求")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("permitAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"/img/mall/tech_screen_32.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"重新运行代码-点击登录按钮-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新运行代码-点击登录按钮-2"}},[s._v("#")]),s._v(" 重新运行代码，点击登录按钮")]),s._v(" "),t("blockquote",[t("p",[s._v("发现已经可以正常访问。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/tech_screen_33.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/img/mall/tech_screen_34.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"一次完整的跨域请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次完整的跨域请求"}},[s._v("#")]),s._v(" 一次完整的跨域请求")]),s._v(" "),t("h3",{attrs:{id:"先发起一次options请求进行预检"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先发起一次options请求进行预检"}},[s._v("#")]),s._v(" 先发起一次OPTIONS请求进行预检")]),s._v(" "),t("ul",[t("li",[s._v("请求头信息：")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Access-Control-Request-Headers: content-type\nAccess-Control-Request-Method: POST\nOrigin: http://localhost:8090\nReferer: http://localhost:8090/\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("响应头信息：")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Access-Control-Allow-Credentials: true\nAccess-Control-Allow-Headers: content-type\nAccess-Control-Allow-Methods: POST\nAccess-Control-Allow-Origin: http://localhost:8090\nCache-Control: no-cache, no-store, max-age=0, must-revalidate\nContent-Length: 0\nDate: Sat, 27 Jul 2019 13:40:32 GMT\nExpires: 0\nPragma: no-cache\nVary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers\nX-Content-Type-Options: nosniff\nX-Frame-Options: DENY\nX-XSS-Protection: 1; mode=block\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ul",[t("li",[s._v("请求成功返回状态码为200")])]),s._v(" "),t("h3",{attrs:{id:"发起真实的跨域请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发起真实的跨域请求"}},[s._v("#")]),s._v(" 发起真实的跨域请求")]),s._v(" "),t("ul",[t("li",[s._v("请求头信息：")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Accept: application/json, text/plain, */*\nContent-Type: application/json;charset=UTF-8\nOrigin: http://localhost:8090\nReferer: http://localhost:8090/\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36\n{username: "admin", password: "123456"}\npassword: "123456"\nusername: "admin"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("响应头信息：")])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Access-Control-Allow-Credentials: true\nAccess-Control-Allow-Origin: http://localhost:8090\nCache-Control: no-cache, no-store, max-age=0, must-revalidate\nContent-Type: application/json;charset=UTF-8\nDate: Sat, 27 Jul 2019 13:40:32 GMT\nExpires: 0\nPragma: no-cache\nTransfer-Encoding: chunked\nVary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers\nX-Content-Type-Options: nosniff\nX-Frame-Options: DENY\nX-XSS-Protection: 1; mode=block\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[s._v("请求成功返回状态码为200")])]),s._v(" "),t("h2",{attrs:{id:"项目源码地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目源码地址"}},[s._v("#")]),s._v(" 项目源码地址")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/macrozheng/mall",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/macrozheng/mall"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);