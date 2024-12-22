(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{527:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("学习不走弯路，"),t("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[a._v("关注公众号")]),a._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),a._v(" "),t("h1",{attrs:{id:"微服务应用性能如何-apm监控工具来告诉你"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务应用性能如何-apm监控工具来告诉你"}},[a._v("#")]),a._v(" 微服务应用性能如何？APM监控工具来告诉你！")]),a._v(" "),t("blockquote",[t("p",[a._v("当微服务系统越来越庞大，各个服务间的调用关系也变得越来越复杂，需要一个工具来帮忙理清请求调用的服务链路。之前在"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/FEBeiU7PHrkXa8RrosXqlw",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Spring Cloud Sleuth：分布式请求链路跟踪》"),t("OutboundLink")],1),a._v("一文中使用的是Sleuth+Zipkin的解决方案，最近发现应用性能监控（Application Performance Monitoring，APM）也可以很好地解决该问题。对比SkyWalking和Elastic APM之后，发现Elastic APM更胜一筹，今天我们来一波Elastic APM的使用实践！")])]),a._v(" "),t("h2",{attrs:{id:"elastic-apm-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elastic-apm-简介"}},[a._v("#")]),a._v(" Elastic APM 简介")]),a._v(" "),t("p",[a._v("Elastic APM是基于Elastic Stack构建的应用性能监控（APM）系统。它主要有如下用途：")]),a._v(" "),t("ul",[t("li",[a._v("用来实时监控应用性能信息，包括HTTP请求调用时长、数据库查询信息、缓存调用信息和外部的HTTP请求调用信息。有助于我们快速找出并解决性能问题。")]),a._v(" "),t("li",[a._v("自动收集应用中未处理的错误和异常，显示异常的堆栈信息，有助于快速定位异常和了解出现频率。")]),a._v(" "),t("li",[a._v("度量指标是调试生产系统时的另一个重要信息来源。Elastic APM Agent 会自动收集主机级别的度量指标（比如Java JVM和Go Runtime的指标）。")]),a._v(" "),t("li",[a._v("支持分布式请求链路追踪，使你能够在一个视图中分析整个服务架构的性能问题。")])]),a._v(" "),t("h2",{attrs:{id:"相关组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关组件"}},[a._v("#")]),a._v(" 相关组件")]),a._v(" "),t("p",[a._v("Elastic APM 包括四大组件: APM Agent, APM Server, Elasticsearch, Kibana。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_01.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("APM Agent：以应用程序库的形式提供，负责收集应用运行时的性能监控数据和错误数据，短时间缓存后发送APM Server。")]),a._v(" "),t("li",[a._v("APM Server：一个独立的组件，负责接收APM Agent中发送的性能监控数据。验证并处理完数据后，会转存储到Elasticsearch中，之后就可以在Kibana APM 应用中查看性能监控数据了。")]),a._v(" "),t("li",[a._v("Elasticsearch：用于存储应用性能监控数据并提供聚合功能。")]),a._v(" "),t("li",[a._v("Kibana APM app：可视化查看APM性能监控数据，有助于找到性能瓶颈。")])]),a._v(" "),t("h2",{attrs:{id:"数据模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[a._v("#")]),a._v(" 数据模型")]),a._v(" "),t("p",[a._v("Elastic APM Agent 从其检测的应用程序中捕获不同类型的信息。这些操作被称为事件，可以是Span, Transaction, Error, or Metric。")]),a._v(" "),t("ul",[t("li",[a._v("Span（跨度）：Span包含一次操作过程中代码执行路径的信息。它从操作的开始到结束进行度量，并且可以与其他Span具有父/子关系。")]),a._v(" "),t("li",[a._v("Transaction（事务）：Transaction是一种特殊的Span，具有与之关联的其他属性。它描述了Elastic APM Agent捕获的最高级别事件，比如一次请求、一次批处理任务等。")]),a._v(" "),t("li",[a._v("Error（错误）：Error事件至少包含错误发生的原始异常或创建的日志的信息。")]),a._v(" "),t("li",[a._v("Metric（度量）：APM Agent 自动获取基本的主机级别指标，包括系统和进程级别的CPU和内存指标。也可以获取特定于代理的指标，例如Java Agent中的JVM指标和Go Agent中的Go运行时指标。")])]),a._v(" "),t("h2",{attrs:{id:"使用实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用实践"}},[a._v("#")]),a._v(" 使用实践")]),a._v(" "),t("blockquote",[t("p",[a._v("学习了上面的基本概念之后，是时候来波实践了，接下来我们将使用Elastic APM来监控SpringBoot应用的性能信息。")])]),a._v(" "),t("h3",{attrs:{id:"安装elasticsearch和kibana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装elasticsearch和kibana"}},[a._v("#")]),a._v(" 安装Elasticsearch和Kibana")]),a._v(" "),t("p",[a._v("安装Elastic APM之前，我们需要先安装好Elasticsearch和Kibana，具体参考"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/8nUunL02Y5AfXTCscYg54w",target:"_blank",rel:"noopener noreferrer"}},[a._v("《你居然还去服务器上捞日志，搭个日志收集系统难道不香么！》"),t("OutboundLink")],1),a._v("，注意使用7.6.2版本。")]),a._v(" "),t("h3",{attrs:{id:"安装apm-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装apm-server"}},[a._v("#")]),a._v(" 安装APM Server")]),a._v(" "),t("ul",[t("li",[a._v("下载APM Server的安装包，下载地址：https://www.elastic.co/cn/downloads/past-releases/apm-server-7-6-2")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_02.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("下载完成后解压到指定目录；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_03.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("修改配置文件"),t("code",[a._v("apm-server.yml")]),a._v("，修改下Elasticsearch的连接地址即可；")])]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("output.elasticsearch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"localhost:9200"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("使用如下命令启动APM Server即可，启动成功APM Server将在"),t("code",[a._v("8200")]),a._v("端口运行；")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("apm-sever "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("在Kibana中检测APM Server是否启动成功，访问地址：http://localhost:5601/app/kibana#/home/tutorial/apm")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_04.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"springboot集成apm-agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springboot集成apm-agent"}},[a._v("#")]),a._v(" SpringBoot集成APM Agent")]),a._v(" "),t("blockquote",[t("p",[a._v("Java应用集成APM Agent的方式有三种，我们使用最简单的方式，直接在应用中集成。")])]),a._v(" "),t("ul",[t("li",[a._v("在"),t("code",[a._v("pom.xml")]),a._v("中添加相关依赖；")])]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--Elastic Agent相关依赖--\x3e")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("co.elastic.apm"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("apm-agent-attach"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.17.0"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("ul",[t("li",[a._v("在应用启动类的"),t("code",[a._v("main")]),a._v("方法中添加Elastic APM的Attach API；")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MallTinyApplication")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ElasticApmAttacher")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("attach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SpringApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MallTinyApplication")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("ul",[t("li",[a._v("在"),t("code",[a._v("resource")]),a._v("目录下添加Elastic APM的配置文件"),t("code",[a._v("elasticapm.properties")]),a._v("；")])]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置服务名称")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("service_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("mall-tiny-apm")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置应用所在基础包")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("application_packages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("com.macro.mall.tiny")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置APM Server的访问地址")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("server_urls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("http://localhost:8200")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("ul",[t("li",[a._v("在Kibana中检测APM Agent是否启动成功，访问地址：http://localhost:5601/app/kibana#/home/tutorial/apm")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_05.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"查看性能监控信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看性能监控信息"}},[a._v("#")]),a._v(" 查看性能监控信息")]),a._v(" "),t("ul",[t("li",[a._v("打开监控面板以后，可以发现我们的"),t("code",[a._v("mall-tiny-apm")]),a._v("服务已经存在了；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_06.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("多次调用应用接口，即可查看到应用性能信息；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_07.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("打开某个"),t("code",[a._v("Transaction")]),a._v("查看详情，我们可以看到连SQL执行耗时信息都给我们统计好了；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_08.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("不仅如此，打开执行查询的"),t("code",[a._v("Span")]),a._v("查看详情，连SQL语句都给我们收集好了；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_09.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("在项目中添加一个有远程调用接口，看看能不能收集到请求调用链路；")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n * 品牌管理Controller\n * Created by macro on 2019/4/19.\n */")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Api")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("tags "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"PmsBrandController"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" description "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"商品品牌管理"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Controller")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/brand"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PmsBrandController")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ApiOperation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"远程调用获取所有品牌信息"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RequestMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/remoteListAll"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" method "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RequestMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("GET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ResponseBody")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CommonResult")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PmsBrand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("remoteListAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//模拟耗时操作")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sleep")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("SECONDS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//远程调用获取数据")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" response "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HttpUtil")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://localhost:8088/brand/listAll"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JSONObject")]),a._v(" jsonObject "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JSONObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JSONArray")]),a._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" jsonObject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getJSONArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"data"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PmsBrand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" brandList "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PmsBrand")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CommonResult")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("success")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("brandList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br")])]),t("ul",[t("li",[a._v("发现完全可以，Elastic APM完全可以取代Sleuth+Zipkin来做微服务的请求链路跟踪了；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_10.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("使用我们之前"),t("code",[a._v("springcloud-learning")]),a._v("中的微服务调用案例，也是可以进行请求链路跟踪的；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_13.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("接下来我们人为制造一个异常，在方法中添加"),t("code",[a._v("int i=1/0;")]),a._v("即可，查看下收集到的异常信息；")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_11.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("再来看下应用主机的度量信息，非常全面，CPU、内存、JVM信息都有了，以后性能调优的时候可以看看！")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/elastic_apm_start_12.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("Elastic APM 完全可以取代Sleuth+Zipkin来做分布式请求链路追踪，并且提供了数据库及缓存调用时长的统计，很好很强大！不止于此，它还可以用来实时监控应用性能信息及度量指标，连错误日志也收集好了，是一款很好的应用性能监控工具！")]),a._v(" "),t("h2",{attrs:{id:"项目源码地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目源码地址"}},[a._v("#")]),a._v(" 项目源码地址")]),a._v(" "),t("p",[a._v("https://github.com/macrozheng/mall-learning/tree/master/mall-tiny-apm")]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("p",[a._v("官方文档：https://www.elastic.co/guide/en/apm/index.html")]),a._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);