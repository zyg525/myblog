(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{418:function(v,_,t){"use strict";t.r(_);var r=t(4),s=Object(r.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"一、tcp和udp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、tcp和udp协议"}},[v._v("#")]),v._v(" 一、TCP和UDP协议")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"简述计算机网络的五层体系结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简述计算机网络的五层体系结构"}},[v._v("#")]),v._v(" 简述计算机网络的五层体系结构")])])]),v._v(" "),_("p",[v._v("计算机网络的五层体系结构从上到下依次是：")]),v._v(" "),_("p",[v._v("1、"),_("strong",[v._v("应用层")]),v._v("，包括"),_("code",[v._v("HTTP、DNS、FTP、SMTP、SSH")]),v._v("等协议；")]),v._v(" "),_("p",[v._v("2、"),_("strong",[v._v("传输层")]),v._v("，包括"),_("code",[v._v("TCP、UDP")]),v._v("等协议；")]),v._v(" "),_("p",[v._v("3、"),_("strong",[v._v("网络层")]),v._v("，包括"),_("code",[v._v("IP、ARP")]),v._v("等协议；")]),v._v(" "),_("p",[v._v("4、"),_("strong",[v._v("数据链路层")]),v._v("，包括"),_("code",[v._v("PPP")]),v._v("等协议；")]),v._v(" "),_("p",[v._v("5、"),_("strong",[v._v("物理层")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"tcp和udp的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的区别是什么"}},[v._v("#")]),v._v(" TCP和UDP的区别是什么？")])])]),v._v(" "),_("p",[v._v("TCP是"),_("strong",[v._v("面向连接的、可靠")]),v._v("的协议，UDP是"),_("strong",[v._v("无连接的、不可靠")]),v._v("的协议。")]),v._v(" "),_("p",[v._v("TCP主要应用于对效率要求低、对准确性要求高的场景，比如文件传输、收发邮件、远程登录。")]),v._v(" "),_("p",[v._v("UDP主要应用于对效率要求高、对准确性要求低的场景，比如实时聊天、实时通话、实时视频。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"简述tcp连接的建立、断开过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简述tcp连接的建立、断开过程"}},[v._v("#")]),v._v(" 简述TCP连接的建立、断开过程")])])]),v._v(" "),_("p",[v._v("TCP连接的建立过程被称为"),_("strong",[v._v("三次握手")]),v._v("：")]),v._v(" "),_("p",[v._v("1、第一次握手：A向B发送建立连接的请求；")]),v._v(" "),_("p",[v._v("2、第二次握手：B向A发送确认；")]),v._v(" "),_("p",[v._v("3、第三次握手：A向B发送收到确认的确认请求。")]),v._v(" "),_("p",[v._v("TCP连接的断开过程被称为"),_("strong",[v._v("四次挥手")]),v._v("：")]),v._v(" "),_("p",[v._v("1、第一次挥手：A向B发送断开连接的请求；")]),v._v(" "),_("p",[v._v("2、第二次挥手：B向A发送确认，此时A到B方向的连接断开，但是B到A方向的连接还未断开；")]),v._v(" "),_("p",[v._v("3、第三次挥手：B向A发送断开连接的请求；")]),v._v(" "),_("p",[v._v("4、第四次挥手：A向B发送确认，此时B到A方向的连接也断开了。")]),v._v(" "),_("h2",{attrs:{id:"二、http协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、http协议"}},[v._v("#")]),v._v(" 二、HTTP协议")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"简述从浏览器输入url到显示主页的过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简述从浏览器输入url到显示主页的过程"}},[v._v("#")]),v._v(" 简述从浏览器输入URL到显示主页的过程")])])]),v._v(" "),_("p",[v._v("1、通过DNS将域名解析为IP；")]),v._v(" "),_("p",[v._v("2、建立TCP连接，三次握手；")]),v._v(" "),_("p",[v._v("3、浏览器向服务器发送请求，服务器返回响应，浏览器解析响应并渲染页面；")]),v._v(" "),_("p",[v._v("4、释放TCP连接，四次挥手。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"介绍一下常见的端口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下常见的端口"}},[v._v("#")]),v._v(" 介绍一下常见的端口")])])]),v._v(" "),_("p",[_("strong",[v._v("80")]),v._v("：HTTP协议的端口；")]),v._v(" "),_("p",[_("strong",[v._v("443")]),v._v("：HTTPS协议的端口；")]),v._v(" "),_("p",[_("strong",[v._v("22")]),v._v("：SSH协议的端口；")]),v._v(" "),_("p",[_("strong",[v._v("3306")]),v._v("：mysql数据库的端口。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"介绍一下常见的响应状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下常见的响应状态码"}},[v._v("#")]),v._v(" 介绍一下常见的响应状态码")])])]),v._v(" "),_("p",[_("strong",[v._v("1xx")]),v._v("：通知性状态码，比如请求收到了或正在处理；")]),v._v(" "),_("p",[_("strong",[v._v("2xx")]),v._v("：成功状态码，常见的有200；")]),v._v(" "),_("p",[_("strong",[v._v("3xx")]),v._v("：重定向状态码，常见的有302；")]),v._v(" "),_("p",[_("strong",[v._v("4xx")]),v._v("：客户端错误状态码，常见的有404；")]),v._v(" "),_("p",[_("strong",[v._v("5xx")]),v._v("：服务端错误状态码，常见的有500。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"简述http的报文结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简述http的报文结构"}},[v._v("#")]),v._v(" 简述HTTP的报文结构")])])]),v._v(" "),_("p",[v._v("HTTP请求报文包括"),_("strong",[v._v("首部、空行、请求体")]),v._v("三部分，其中首部包括"),_("strong",[v._v("请求行和请求头")]),v._v("，请求行又包括"),_("strong",[v._v("请求方式、URL、协议类型")]),v._v("。")]),v._v(" "),_("p",[v._v("HTTP响应报文包括"),_("strong",[v._v("首部、空行、响应体")]),v._v("三部分，其中首部包括"),_("strong",[v._v("状态行和响应头")]),v._v("，状态行又包括"),_("strong",[v._v("协议类型、响应状态码、状态码解释短语")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"uri和url的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uri和url的区别是什么"}},[v._v("#")]),v._v(" URI和URL的区别是什么？")])])]),v._v(" "),_("p",[v._v("URI是统一资源标识符，是一种抽象的概念，URL是统一资源定位符，是一个具体的字符串，通过它可以定位具体的资源。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"http1-0和http1-1的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1的区别是什么"}},[v._v("#")]),v._v(" HTTP1.0和HTTP1.1的区别是什么？")])])]),v._v(" "),_("p",[v._v("HTTP1.0默认使用短连接，每次请求都要新建TCP连接，而HTTP1.1默认使用长连接，多次请求可以共用一个TCP连接。")]),v._v(" "),_("ul",[_("li",[_("h3",{attrs:{id:"get和post请求的区别是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get和post请求的区别是什么"}},[v._v("#")]),v._v(" GET和POST请求的区别是什么？")])])]),v._v(" "),_("p",[v._v("GET将请求参数放在URL中，POST放在请求体中。因此"),_("strong",[v._v("GET请求携带的数据量是有限的")]),v._v("，而POST请求是无限的。并且"),_("strong",[v._v("GET请求会暴露参数，不太安全")]),v._v("。")])])}),[],!1,null,null,null);_.default=s.exports}}]);