(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{401:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("一个正则表达式就是一个描述规则的字符串，所以，只需要编写正确的规则，我们就可以让正则表达式引擎去判断目标字符串是否符合规则。正则表达式是一套标准，它可以用于任何语言。Java标准库的"),s("code",[t._v("java.util.regex")]),t._v("包内置了正则表达式引擎，在Java程序中使用正则表达式非常简单。")]),t._v(" "),s("p",[t._v("举个例子：要判断用户输入的年份是否是"),s("code",[t._v("20##")]),t._v("年，代码可以这样写：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" year "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" regex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20\\\\d\\\\d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("或者这样写：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20\\\\d\\\\d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2024"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[s("strong",[t._v("在正则表达式中，"),s("code",[t._v("\\d")]),t._v("表示任意一个"),s("code",[t._v("0-9")]),t._v("之间的数字，而在Java中转义字符"),s("code",[t._v("\\")]),t._v("要写成"),s("code",[t._v("\\\\")]),t._v("，所以要用"),s("code",[t._v("\\\\d")]),t._v("来表示。")])]),t._v(" "),s("h2",{attrs:{id:"简单匹配规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单匹配规则"}},[t._v("#")]),t._v(" 简单匹配规则")]),t._v(" "),s("p",[t._v("正则表达式的匹配规则是从左到右按规则匹配。简单的匹配规则如下：")]),t._v(" "),s("h3",{attrs:{id:"单个字符匹配规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单个字符匹配规则"}},[t._v("#")]),t._v(" 单个字符匹配规则")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("正则表达式")]),t._v(" "),s("th",[t._v("匹配规则")]),t._v(" "),s("th",[t._v("例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v(".")])]),t._v(" "),s("td",[t._v("可以匹配任意一个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a..c")]),t._v("可以匹配字符串"),s("code",[t._v("a1bc")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\d")])]),t._v(" "),s("td",[t._v("可以匹配"),s("code",[t._v("0-9")]),t._v("之间的任意一个数字")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("20\\d\\d")]),t._v("可以匹配字符串"),s("code",[t._v("2024")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\D")])]),t._v(" "),s("td",[t._v("和"),s("code",[t._v("\\d")]),t._v("相反")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\w")])]),t._v(" "),s("td",[t._v("可以匹配任意一个字母，或者"),s("code",[t._v("0-9")]),t._v("之间的任意一个数字，或者一个下划线"),s("code",[t._v("_")])]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\w\\w\\wc")]),t._v("可以匹配字符串"),s("code",[t._v("a5_sc")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\W")])]),t._v(" "),s("td",[t._v("和"),s("code",[t._v("\\w")]),t._v("相反")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\s")])]),t._v(" "),s("td",[t._v("可以匹配任意一个空白符，空白符包括空格"),s("code"),t._v("、 制表符"),s("code",[t._v("\\t")]),t._v("、换行符"),s("code",[t._v("\\n")]),t._v("、回车符"),s("code",[t._v("\\r")]),t._v("、换页符"),s("code",[t._v("\\f")])]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\sc")]),t._v("可以匹配字符串"),s("code",[t._v("a c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\S")])]),t._v(" "),s("td",[t._v("和"),s("code",[t._v("\\s")]),t._v("相反")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("\\u559d")])]),t._v(" "),s("td",[t._v("可以匹配任意一个Unicode字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\u559d")]),t._v("可以匹配字符串"),s("code",[t._v("a喝c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[123abcABC]")])]),t._v(" "),s("td",[t._v("可以匹配"),s("code",[t._v("123abcABC")]),t._v("中的任意一个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a[123abcABC]c")]),t._v("可以匹配字符串"),s("code",[t._v("a3c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[1-3a-cA-C]")])]),t._v(" "),s("td",[t._v("和"),s("code",[t._v("[123abcABC]")]),t._v("的规则一样，是一种简化写法")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("code",[t._v("[^1-3a-cA-C]")])]),t._v(" "),s("td",[t._v("和"),s("code",[t._v("[1-3a-cA-C]")]),t._v("相反")]),t._v(" "),s("td")])])]),t._v(" "),s("h3",{attrs:{id:"重复匹配规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重复匹配规则"}},[t._v("#")]),t._v(" 重复匹配规则")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("正则表达式")]),t._v(" "),s("th",[t._v("匹配规则")]),t._v(" "),s("th",[t._v("例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("可以匹配任意个字符，包括0个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\d*c")]),t._v("可以匹配字符串"),s("code",[t._v("a12345c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("+")])]),t._v(" "),s("td",[t._v("可以匹配大于0的任意个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\d+c")]),t._v("可以匹配字符串"),s("code",[t._v("a12345c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("?")])]),t._v(" "),s("td",[t._v("可以匹配0个或者1个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\d?c")]),t._v("可以匹配字符串"),s("code",[t._v("a1c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{n}")])]),t._v(" "),s("td",[t._v("可以精确匹配n个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\d{5}c")]),t._v("可以匹配字符串"),s("code",[t._v("a12345c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{n, m}")])]),t._v(" "),s("td",[t._v("可以匹配n-m个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\d{5,6}c")]),t._v("可以匹配字符串"),s("code",[t._v("a123456c")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("{n,}")])]),t._v(" "),s("td",[t._v("可以匹配大于等于n的任意个字符")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("a\\d{5,}c")]),t._v("可以匹配字符串"),s("code",[t._v("a1234567c")])])])])]),t._v(" "),s("h3",{attrs:{id:"其它匹配规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它匹配规则"}},[t._v("#")]),t._v(" 其它匹配规则")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("正则表达式")]),t._v(" "),s("th",[t._v("匹配规则")]),t._v(" "),s("th",[t._v("例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("|")])]),t._v(" "),s("td",[t._v("或规则匹配")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("hello|world")]),t._v("可以匹配字符串"),s("code",[t._v("world")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("()")])]),t._v(" "),s("td",[t._v("分组匹配")]),t._v(" "),s("td",[t._v("表达式"),s("code",[t._v("Java (hello|world)")]),t._v("可以匹配字符串"),s("code",[t._v("Java world")])])])])]),t._v(" "),s("h2",{attrs:{id:"分组匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分组匹配"}},[t._v("#")]),t._v(" 分组匹配")]),t._v(" "),s("p",[t._v("使用分组匹配可以从字符串中提取出符合规则的子串。比如对于"),s("code",[t._v("区号-电话号")]),t._v("这个格式，它的正则表达式是"),s("code",[t._v("\\d{3,4}-\\d{6,8}")]),t._v("，如果要提取出"),s("code",[t._v("010-12345678")]),t._v("中的区号和电话号，就要先把正则表达式分组，然后使用"),s("code",[t._v("java.util.regex")]),t._v("中的工具类进行提取：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\\\d{3,4})-(\\\\d{7,8})"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"010-12345678"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用Matcher时，必须首先调用matches()判断是否匹配成功，匹配成功后，才能调用group()提取子串")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s1="')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s2="')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n打印结果：\ns1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("010")]),t._v("\ns2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345678")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"贪婪匹配和非贪婪匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪婪匹配和非贪婪匹配"}},[t._v("#")]),t._v(" 贪婪匹配和非贪婪匹配")]),t._v(" "),s("p",[t._v("正则表达式默认使用"),s("strong",[t._v("贪婪匹配：任何一个规则，它总是尽可能多地向后匹配")]),t._v("。比如对于正则表达式"),s("code",[t._v("(\\d+)(0*)")]),t._v("，如果用它去提取"),s("code",[t._v("123000")]),t._v("，我们希望提取出的两个子串分别是"),s("code",[t._v("123")]),t._v("和"),s("code",[t._v("000")]),t._v("，但实际上提取出的是"),s("code",[t._v("123000")]),t._v("和"),s("code"),t._v("，因为"),s("code",[t._v("123000")]),t._v("完全符合"),s("code",[t._v("\\d+")]),t._v("的要求。如果要实现我们的目标，就要"),s("strong",[t._v("使用非贪婪匹配"),s("code",[t._v("?")]),t._v("，表示要尽可能少地向后匹配")]),t._v("，此时正则表达式应改为"),s("code",[t._v("(\\d+?)(0*)")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(\\\\d+?)(0*)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s1="')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s2="')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n打印结果：\ns1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\ns2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("000")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h2",{attrs:{id:"其它用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它用法"}},[t._v("#")]),t._v(" 其它用法")]),t._v(" "),s("h3",{attrs:{id:"分割字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分割字符串"}},[t._v("#")]),t._v(" 分割字符串")]),t._v(" "),s("p",[t._v("可以使用正则表达式分割字符串：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1, 2,   3      4、5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[, 、]+"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res = {1,2,3,4,5}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"搜索字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索字符串"}},[t._v("#")]),t._v(" 搜索字符串")]),t._v(" "),s("p",[t._v("可以使用正则表达式搜索字符串：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the quick brown fox jumps over the lazy dog."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\wo\\\\w"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" m "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不能使用matches()方法，因为是全局匹配，而find()是局部匹配")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n打印结果：\nrow\nfox\ndog\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"替换字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换字符串"}},[t._v("#")]),t._v(" 替换字符串")]),t._v(" "),s("p",[t._v("可以使用正则表达式替换字符串：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1,2 3、4-5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[, 、-]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// res = "1+2+3+4+5"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("如果我们要把搜索到的指定字符串按规则替换，使用"),s("code",[t._v("replaceAll()")]),t._v("的时候，我们传入的第二个参数可以使用"),s("code",[t._v("$1")]),t._v("、"),s("code",[t._v("$2")]),t._v("来反向引用匹配到的子串。例如：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1aA2bB3cC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replaceAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"([1-3])([a-c])([A-C])"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[$1]($2)<$3>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res = [1](a)<A>[2](b)<B>[3](c)<C>")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);