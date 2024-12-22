(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{556:function(s,a,t){"use strict";t.r(a);var e=t(4),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("学习不走弯路，"),a("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[s._v("关注公众号")]),s._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),s._v(" "),a("h1",{attrs:{id:"mysql主从复制-从原理到实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从复制-从原理到实践"}},[s._v("#")]),s._v(" MySql主从复制，从原理到实践！")]),s._v(" "),a("blockquote",[a("p",[s._v("本文将从MySql主从复制的原理出发，详细介绍MySql在Docker环境下的主从复制搭建，以一个主实例和一个从实例实现主从复制为例。")])]),s._v(" "),a("h2",{attrs:{id:"什么是主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是主从复制"}},[s._v("#")]),s._v(" 什么是主从复制？")]),s._v(" "),a("p",[s._v("主从复制是指将主数据库的DDL和DML操作通过二进制日志传到从数据库上，然后在从数据库上对这些日志进行重新执行，从而使从数据库和主数据库的数据保持一致。")]),s._v(" "),a("h2",{attrs:{id:"主从复制的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的原理"}},[s._v("#")]),s._v(" 主从复制的原理")]),s._v(" "),a("ul",[a("li",[s._v("MySql主库在事务提交时会把数据变更作为事件记录在二进制日志Binlog中；")]),s._v(" "),a("li",[s._v("主库推送二进制日志文件Binlog中的事件到从库的中继日志Relay Log中，之后从库根据中继日志重做数据变更操作，通过逻辑复制来达到主库和从库的数据一致性；")]),s._v(" "),a("li",[s._v("MySql通过三个线程来完成主从库间的数据复制，其中Binlog Dump线程跑在主库上，I/O线程和SQL线程跑着从库上；")]),s._v(" "),a("li",[s._v("当在从库上启动复制时，首先创建I/O线程连接主库，主库随后创建Binlog Dump线程读取数据库事件并发送给I/O线程，I/O线程获取到事件数据后更新到从库的中继日志Relay Log中去，之后从库上的SQL线程读取中继日志Relay Log中更新的数据库事件并应用，如下图所示。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/mall/mysql_master_slave_06.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"主实例搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主实例搭建"}},[s._v("#")]),s._v(" 主实例搭建")]),s._v(" "),a("ul",[a("li",[s._v("运行mysql主实例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql-master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/mysql-master/log:/var/log/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/mysql-master/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/mysql-master/conf:/etc/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" mysql:5.7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("在mysql的配置文件夹"),a("code",[s._v("/mydata/mysql-master/conf")]),s._v("中创建一个配置文件"),a("code",[s._v("my.cnf")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" my.cnf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("修改配置文件my.cnf，配置信息如下：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 设置server_id，同一局域网中需要唯一")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 指定不需要同步的数据库名称")]),s._v("\nbinlog-ignore-db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 开启二进制日志功能")]),s._v("\nlog-bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mall-mysql-bin  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 设置二进制日志使用内存大小（事务）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_cache_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1M  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 设置使用的二进制日志格式（mixed,statement,row）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mixed  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 二进制日志过期清理时间。默认值为0，表示不自动清理。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("expire_logs_days")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slave_skip_errors")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1062")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("修改完配置后重启实例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart mysql-master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("进入"),a("code",[s._v("mysql-master")]),s._v("容器中：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mysql-master /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在容器中使用mysql的登录命令连接到客户端：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-proot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("创建数据同步用户：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("CREATE "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nGRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"从实例搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从实例搭建"}},[s._v("#")]),s._v(" 从实例搭建")]),s._v(" "),a("ul",[a("li",[s._v("运行mysql从实例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3308")]),s._v(":3306 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mysql-slave "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/mysql-slave/log:/var/log/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/mysql-slave/data:/var/lib/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/mysql-slave/conf:/etc/mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" mysql:5.7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("在mysql的配置文件夹"),a("code",[s._v("/mydata/mysql-slave/conf")]),s._v("中创建一个配置文件"),a("code",[s._v("my.cnf")]),s._v("：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" my.cnf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("修改配置文件my.cnf：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 设置server_id，同一局域网中需要唯一")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("server_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 指定不需要同步的数据库名称")]),s._v("\nbinlog-ignore-db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 开启二进制日志功能，以备Slave作为其它数据库实例的Master时使用")]),s._v("\nlog-bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mall-mysql-slave1-bin  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 设置二进制日志使用内存大小（事务）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_cache_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1M  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 设置使用的二进制日志格式（mixed,statement,row）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("binlog_format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mixed  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 二进制日志过期清理时间。默认值为0，表示不自动清理。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("expire_logs_days")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("slave_skip_errors")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1062")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## relay_log配置中继日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("relay_log")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mall-mysql-relay-bin  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## log_slave_updates表示slave将复制事件写进自己的二进制日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log_slave_updates")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## slave设置为只读（具有super权限的用户除外）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("read_only")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("ul",[a("li",[s._v("修改完配置后重启实例：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart mysql-slave\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"将主从数据库进行连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将主从数据库进行连接"}},[s._v("#")]),s._v(" 将主从数据库进行连接")]),s._v(" "),a("ul",[a("li",[s._v("连接到主数据库的mysql客户端，查看主数据库状态：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("show master status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("主数据库状态显示如下：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/mall/mysql_master_slave_01.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("进入"),a("code",[s._v("mysql-slave")]),s._v("容器中：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mysql-slave /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在容器中使用mysql的登录命令连接到客户端：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-proot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("在从数据库中配置主从复制：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("change master to "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.6.132'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'slave'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_password")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3307")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_log_file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mall-mysql-bin.000001'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_log_pos")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("617")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_connect_retry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("主从复制命令参数说明：")]),s._v(" "),a("ul",[a("li",[s._v("master_host：主数据库的IP地址；")]),s._v(" "),a("li",[s._v("master_port：主数据库的运行端口；")]),s._v(" "),a("li",[s._v("master_user：在主数据库创建的用于同步数据的用户账号；")]),s._v(" "),a("li",[s._v("master_password：在主数据库创建的用于同步数据的用户密码；")]),s._v(" "),a("li",[s._v("master_log_file：指定从数据库要复制数据的日志文件，通过查看主数据的状态，获取File参数；")]),s._v(" "),a("li",[s._v("master_log_pos：指定从数据库从哪个位置开始复制数据，通过查看主数据的状态，获取Position参数；")]),s._v(" "),a("li",[s._v("master_connect_retry：连接失败重试的时间间隔，单位为秒。")])])]),s._v(" "),a("li",[a("p",[s._v("查看主从同步状态：")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("show slave status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("从数据库状态显示如下：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/mall/mysql_master_slave_02.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("开启主从同步：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("start slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看从数据库状态发现已经同步：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/mall/mysql_master_slave_03.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"主从复制测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制测试"}},[s._v("#")]),s._v(" 主从复制测试")]),s._v(" "),a("blockquote",[a("p",[s._v("主从复制的测试方法有很多，可以在主实例中创建一个数据库，看看从实例中是否有该数据库，如果有，表示主从复制已经搭建成功。")])]),s._v(" "),a("ul",[a("li",[s._v("在主实例中创建一个数据库"),a("code",[s._v("mall")]),s._v("；")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/mall/mysql_master_slave_04.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("在从实例中查看数据库，发现也有一个"),a("code",[s._v("mall")]),s._v("数据库，可以判断主从复制已经搭建成功。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/mall/mysql_master_slave_05.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);