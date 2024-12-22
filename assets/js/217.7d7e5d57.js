(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{554:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("学习不走弯路，"),n("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[s._v("关注公众号")]),s._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),s._v(" "),n("h1",{attrs:{id:"nginx的这些妙用-你肯定有不知道的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx的这些妙用-你肯定有不知道的"}},[s._v("#")]),s._v(" Nginx的这些妙用，你肯定有不知道的！")]),s._v(" "),n("blockquote",[n("p",[s._v("本文将从反向代理、文件压缩、地址重写三方面来讲解Nginx在Docker环境下的使用技巧！")])]),s._v(" "),n("h2",{attrs:{id:"在docker环境下的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在docker环境下的安装"}},[s._v("#")]),s._v(" 在Docker环境下的安装")]),s._v(" "),n("h3",{attrs:{id:"下载nginx的docker镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载nginx的docker镜像"}},[s._v("#")]),s._v(" 下载nginx的docker镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull nginx:1.10\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"从容器中拷贝nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从容器中拷贝nginx配置"}},[s._v("#")]),s._v(" 从容器中拷贝nginx配置")]),s._v(" "),n("ul",[n("li",[s._v("先运行一次容器（为了拷贝配置文件）：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/nginx/html:/usr/share/nginx/html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/nginx/logs:/var/log/nginx  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" nginx:1.10\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("将容器内的配置文件拷贝到指定目录：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx:/etc/nginx /mydata/nginx/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("修改文件名称：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nginx conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("终止并删除容器：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop nginx\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"使用docker命令启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用docker命令启动"}},[s._v("#")]),s._v(" 使用docker命令启动")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/nginx/html:/usr/share/nginx/html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/nginx/logs:/var/log/nginx  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/nginx/conf:/etc/nginx "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" nginx:1.10\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),n("blockquote",[n("p",[s._v("反向代理就是当请求访问你的代理服务器时，代理服务器会对你的请求进行转发，可以转发到静态的资源路径上去，也可以转发到动态的服务接口上去。下面我们以对域名进行代理为例，来讲讲如何进行静态代理和动态代理。")])]),s._v(" "),n("h3",{attrs:{id:"静态代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#静态代理"}},[s._v("#")]),s._v(" 静态代理")]),s._v(" "),n("blockquote",[n("p",[s._v("静态代理就是将请求代理到不同的静态资源路径上去，这里我们将对"),n("code",[s._v("docs.macrozheng.com")]),s._v("的请求代理到我的文档项目中，对"),n("code",[s._v("mall.macrozheng.com")]),s._v("的请求代理到mall的前端项目中。")])]),s._v(" "),n("ul",[n("li",[s._v("首先我们修改下本机的host文件：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("192.168.6.132 docs.macrozheng.com\n192.168.6.132 mall.macrozheng.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("然后将我们的文档项目和mall前端项目上传到nginx的html目录中去，并进行解压操作：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_01.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("在"),n("code",[s._v("/mydata/nginx/conf/conf.d")]),s._v("文件夹中添加配置文件docs.conf对文档项目进行反向代理：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen       80;\n    server_name  docs.macrozheng.com; #修改域名\n\n    location / {\n        root   /usr/share/nginx/html/docs; #代理到docs文件夹中\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("在"),n("code",[s._v("/mydata/nginx/conf/conf.d")]),s._v("文件夹中添加配置文件mall.conf对mall的前端项目进行反向代理：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen       80;\n    server_name  mall.macrozheng.com; #修改域名\n\n    location / {\n        root   /usr/share/nginx/html/mall; #代理到mall文件夹中\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("重启nginx服务：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart nginx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("通过"),n("code",[s._v("docs.macrozheng.com")]),s._v("即可访问到我们的文档项目了：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_02.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("通过"),n("code",[s._v("mall.macrozheng.com")]),s._v("即可访问到mall的前端项目了：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_03.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"动态代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[s._v("#")]),s._v(" 动态代理")]),s._v(" "),n("blockquote",[n("p",[s._v("动态代理就是把代理服务器的请求转发到另一个服务上去，这里我们将对"),n("code",[s._v("api.macrozheng.com")]),s._v("的请求代理到mall-admin的后台服务上去。")])]),s._v(" "),n("ul",[n("li",[s._v("首先我们修改下本机的host文件，添加如下规则：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("192.168.6.132 api.macrozheng.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("在"),n("code",[s._v("/mydata/nginx/conf/conf.d")]),s._v("文件夹中添加配置文件api.conf对将请求代理到远程的mall-admin服务上去：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen       80;\n    server_name  api.macrozheng.com; #修改域名\n\n    location / {\n    \tproxy_pass   http://120.27.63.9:8080; #修改为代理服务地址\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("重启动nginx服务后，通过"),n("code",[s._v("api.macrozheng.com/swagger-ui.html")]),s._v("即可访问到mall-admin的API文档页面了：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_04.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"文件压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件压缩"}},[s._v("#")]),s._v(" 文件压缩")]),s._v(" "),n("blockquote",[n("p",[s._v("如果我们租用了一个带宽很低的服务器，网站访问速度会很慢，这时我们可以通过让nginx开启GZIP压缩来提高网站的访问速度。这里我们以mall的前端项目为例来演示下它的提速效果。")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("首先我们对nginx进行限速操作，限制每个连接的访问速度为128K来建立一个比较慢的访问场景；")])]),s._v(" "),n("li",[n("p",[s._v("修改mall.conf配置文件，进行限速操作：")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen       80;\n    server_name  mall.macrozheng.com;\n    \n    limit_rate 128k; #限制网速为128K\n\n    location / {\n        root   /usr/share/nginx/html/mall;\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("ul",[n("li",[s._v("对mall的前端项目"),n("code",[s._v("mall.macrozheng.com")]),s._v("进行访问，我们可以发现网站中有个js文件比较大，需要加载12s：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_05.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("nginx返回请求头信息如下：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_06.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("修改"),n("code",[s._v("/mydata/nginx/conf")]),s._v("目录下的"),n("code",[s._v("nginx.conf")]),s._v("配置文件，开启GZIP压缩；")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('http {\n\n    gzip on; #开启gzip\n    gzip_disable "msie6"; #IE6不使用gzip\n    gzip_vary on; #设置为on会在Header里增加 "Vary: Accept-Encoding"\n    gzip_proxied any; #代理结果数据的压缩\n    gzip_comp_level 6; #gzip压缩比（1~9），越小压缩效果越差，但是越大处理越慢，所以一般取中间值\n    gzip_buffers 16 8k; #获取多少内存用于缓存压缩结果\n    gzip_http_version 1.1; #识别http协议的版本\n    gzip_min_length 1k; #设置允许压缩的页面最小字节数，超过1k的文件会被压缩\n    gzip_types application/javascript text/css; #对特定的MIME类型生效,js和css文件会被压缩\n\n    include /etc/nginx/conf.d/*.conf;\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("再次对mall的前端项目"),n("code",[s._v("mall.macrozheng.com")]),s._v("进行访问，我们可以发现js文件已经被压缩，加载时间缩短到3.88s，提速3倍左右：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_07.png",alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("nginx返回请求头中添加了"),n("code",[s._v("Content-Encoding: gzip")]),s._v("的信息：")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/img/mall/nginx_use_08.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"地址重写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#地址重写"}},[s._v("#")]),s._v(" 地址重写")]),s._v(" "),n("blockquote",[n("p",[s._v("有的时候我们的网站更换了域名，但还有用户在使用老的域名访问，这时可以通过nginx的地址重写来让用户跳转到新的域名进行访问。")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("比如说原来我们用的"),n("code",[s._v("docs.macrozheng.com")]),s._v("这个域名不用了，现在改成"),n("code",[s._v("www.macrozheng.com")]),s._v("了来访问文档项目了；")])]),s._v(" "),n("li",[n("p",[s._v("修改docs.conf配置文件，将地址带参数重写到新地址：")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('server {\n    listen       80;\n    server_name  docs.macrozheng.com; \n    \n    rewrite "^/(.*)$" http://www.macrozheng.com/$1; #地址重写到新地址\n\n    location / {\n        root   /usr/share/nginx/html/docs; \n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("此时访问旧域名"),n("code",[s._v("docs.macrozheng.com")]),s._v("会直接跳转到"),n("code",[s._v("www.macrozheng.com")]),s._v("去。")])]),s._v(" "),n("h2",{attrs:{id:"按目录划分项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#按目录划分项目"}},[s._v("#")]),s._v(" 按目录划分项目")]),s._v(" "),n("blockquote",[n("p",[s._v("有时候我们需要使用同一个域名来访问不同的前端项目，这时候就需要通过子目录来区分前端项目了。")])]),s._v(" "),n("ul",[n("li",[s._v("比如说我们需要按以下路径来访问各个前端项目；")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("www.macrozheng.com #访问文档项目\nwww.macrozheng.com/admin #访问后台项目\nwww.macrozheng.com/app #访问移动端项目\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("修改www.conf配置文件，添加不同的location规则，要注意"),n("code",[s._v("alias")]),s._v("和"),n("code",[s._v("root")]),s._v("指令的区别，root不会将location配置的路径去掉，而alias会将location配置的路径去掉。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server {\n    listen       80;\n    server_name  www.macrozheng.com;\n\n    location / {\n        root   /usr/share/nginx/html/www;\n        index  index.html index.htm;\n    }\n\n    location /admin {\n        alias   /usr/share/nginx/html/admin;\n        index  index.html index.htm;\n    }\n\n    location /app {\n        alias   /usr/share/nginx/html/app;\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"公众号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);