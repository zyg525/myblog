(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{466:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("学习不走弯路，"),t("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[s._v("关注公众号")]),s._v(" 回复「学习路线」，获取mall项目专属学习路线！")]),s._v(" "),t("h1",{attrs:{id:"营销模块数据库表解析-一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#营销模块数据库表解析-一"}},[s._v("#")]),s._v(" 营销模块数据库表解析（一）")]),s._v(" "),t("blockquote",[t("p",[s._v("本文主要对限时购（秒杀）功能相关表进行解析，采用数据库表与功能对照的形式。")])]),s._v(" "),t("h2",{attrs:{id:"相关表结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关表结构"}},[s._v("#")]),s._v(" 相关表结构")]),s._v(" "),t("h3",{attrs:{id:"限时购表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限时购表"}},[s._v("#")]),s._v(" 限时购表")]),s._v(" "),t("blockquote",[t("p",[s._v("用于存储限时购活动的信息，包括开始时间、结束时间以及上下线状态。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sms_flash_promotion\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   id                   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   title                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'标题'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   start_date           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'开始日期'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   end_date             "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'结束日期'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'上下线状态'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   create_time          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"限时购场次表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限时购场次表"}},[s._v("#")]),s._v(" 限时购场次表")]),s._v(" "),t("blockquote",[t("p",[s._v("用于存储限时购场次的信息，在一天中，一个限时购活动会有多个不同的活动时间段。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sms_flash_promotion_session\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   id                   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编号'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   name                 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'场次名称'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   start_time           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'每日开始时间'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   end_time             "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'每日结束时间'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'启用状态：0->不启用；1->启用'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   create_time          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"限时购与商品关系表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限时购与商品关系表"}},[s._v("#")]),s._v(" 限时购与商品关系表")]),s._v(" "),t("blockquote",[t("p",[s._v("用于存储与限时购相关的商品信息，一个限时购中有多个场次，每个场次都可以设置不同活动商品。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sms_flash_promotion_product_relation\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   id                   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   flash_promotion_id   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'限时购id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   flash_promotion_session_id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'编号'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   product_id           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'商品价格'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   flash_promotion_price "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("decimal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'限时购价格'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   flash_promotion_count "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'限时购数量'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   flash_promotion_limit "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'每人限购数量'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   sort                 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'排序'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"限时购通知记录表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限时购通知记录表"}},[s._v("#")]),s._v(" 限时购通知记录表")]),s._v(" "),t("blockquote",[t("p",[s._v("用于存储会员的限时购预约记录，当有的限时购场次还未开始时，会员可以进行预约操作，当场次开始时，系统会进行提醒。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" sms_flash_promotion_log\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   id                   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("auto_increment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   member_id            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'会员id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   product_id           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'商品id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   member_phone         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'会员电话'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   product_name         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'商品名称'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   subscribe_time       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'会员订阅时间'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   send_time            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("datetime")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("comment")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'发送时间'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"管理端展现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理端展现"}},[s._v("#")]),s._v(" 管理端展现")]),s._v(" "),t("h3",{attrs:{id:"限时购数据列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限时购数据列表"}},[s._v("#")]),s._v(" 限时购数据列表")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_72.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"编辑限时购活动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑限时购活动"}},[s._v("#")]),s._v(" 编辑限时购活动")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_73.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"限时购场次列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限时购场次列表"}},[s._v("#")]),s._v(" 限时购场次列表")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_74.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"编辑限时购场次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑限时购场次"}},[s._v("#")]),s._v(" 编辑限时购场次")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_75.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"添加商品到限时购场次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加商品到限时购场次"}},[s._v("#")]),s._v(" 添加商品到限时购场次")]),s._v(" "),t("h4",{attrs:{id:"点击设置商品"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击设置商品"}},[s._v("#")]),s._v(" 点击设置商品")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_76.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"点击商品列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点击商品列表"}},[s._v("#")]),s._v(" 点击商品列表")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_77.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"选择商品进行添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择商品进行添加"}},[s._v("#")]),s._v(" 选择商品进行添加")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_78.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("注意：添加到限时购的商品需要修改"),t("code",[s._v("pms_product")]),s._v("表的"),t("code",[s._v("promotion_type")]),s._v("为5，优惠计算规则也应该改成使用限时购的优惠。")])]),s._v(" "),t("h3",{attrs:{id:"编辑限时购商品信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑限时购商品信息"}},[s._v("#")]),s._v(" 编辑限时购商品信息")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_79.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"移动端展现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端展现"}},[s._v("#")]),s._v(" 移动端展现")]),s._v(" "),t("h3",{attrs:{id:"已开抢的限时购"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#已开抢的限时购"}},[s._v("#")]),s._v(" 已开抢的限时购")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_80.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"抢购中的限时购"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抢购中的限时购"}},[s._v("#")]),s._v(" 抢购中的限时购")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_81.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"即将开始的限时购"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#即将开始的限时购"}},[s._v("#")]),s._v(" 即将开始的限时购")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_82.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"即将开始的限时购可以设置预约提醒"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#即将开始的限时购可以设置预约提醒"}},[s._v("#")]),s._v(" 即将开始的限时购可以设置预约提醒")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/mall/database_screen_83.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[s._v("#")]),s._v(" 公众号")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg",alt:"公众号图片"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);