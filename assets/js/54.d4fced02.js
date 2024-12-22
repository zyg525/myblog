(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{389:function(_,v,t){"use strict";t.r(v);var a=t(4),r=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"内存布局"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存布局"}},[_._v("#")]),_._v(" 内存布局")]),_._v(" "),v("h3",{attrs:{id:"_1、介绍一下jvm的内存区域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍一下jvm的内存区域"}},[_._v("#")]),_._v(" 1、介绍一下JVM的内存区域")]),_._v(" "),v("p",[_._v("JVM的内存区域主要由"),v("strong",[_._v("Java堆、虚拟机栈、本地方法栈、程序计数器、方法区")]),_._v("五个部分组成，其中Java堆和方法区是所有线程共享的，虚拟机栈、本地方法栈、程序计数器是线程独立的。")]),_._v(" "),v("p",[_._v("Java堆中存放的是对象实例，它是内存回收的主要区域，也成为GC堆。")]),_._v(" "),v("p",[_._v("Java方法每次执行时都会创建一个栈帧，用来存放局部变量等数据，虚拟机栈则用来存放栈帧。")]),_._v(" "),v("p",[_._v("本地方法栈和虚拟机栈的作用类似，区别是它针对的是native方法。")]),_._v(" "),v("p",[_._v("程序计数器记录了正在执行的字节码指令的地址。")]),_._v(" "),v("p",[_._v("方法区用来存放类加载后的类型信息、静态变量、常量等。")]),_._v(" "),v("h3",{attrs:{id:"_2、描述一下对象的创建过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、描述一下对象的创建过程"}},[_._v("#")]),_._v(" 2、描述一下对象的创建过程")]),_._v(" "),v("p",[v("strong",[_._v("1、类加载检查")]),_._v("：当虚拟机执行到一个字节码new指令时，会先检查这个指令的参数能否在常量池中定位到一个类的符号引用，并且检查这个类是否已经被加载、解析、初始化，如果没有，就要先完成类加载过程；")]),_._v(" "),v("p",[v("strong",[_._v("2、分配内存")]),_._v("：虚拟机为对象分配内存，对象所需内存大小在类加载完成后就可以确定；")]),_._v(" "),v("p",[v("strong",[_._v("3、初始化零值")]),_._v("：虚拟机将分配好的内存初始化为零值；")]),_._v(" "),v("p",[v("strong",[_._v("4、设置对象头")]),_._v("：对象头中存放着对象的类型、哈希码、GC分代年龄、锁状态标志等信息；")]),_._v(" "),v("p",[v("strong",[_._v("5、执行构造方法")]),_._v("：new指令执行完后，虚拟机会执行对象的构造方法，为成员变量赋值，这时一个真正的对象就创建好了。")]),_._v(" "),v("h3",{attrs:{id:"_3、什么是内存泄漏、内存溢出"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、什么是内存泄漏、内存溢出"}},[_._v("#")]),_._v(" 3、什么是内存泄漏、内存溢出？")]),_._v(" "),v("p",[_._v("内存泄漏指的是已经申请的内存空间无法被释放。")]),_._v(" "),v("p",[_._v("内存溢出指的是申请的内存空间超过了可用容量。")]),_._v(" "),v("h2",{attrs:{id:"内存回收"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存回收"}},[_._v("#")]),_._v(" 内存回收")]),_._v(" "),v("h3",{attrs:{id:"_1、怎样判断对象是否存活"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、怎样判断对象是否存活"}},[_._v("#")]),_._v(" 1、怎样判断对象是否存活？")]),_._v(" "),v("p",[_._v("主流的方法是通过"),v("strong",[_._v("可达性分析算法")]),_._v("来判断，可达性分析算法会从根对象开始，根据引用关系往下搜索，如果一个对象和根对象没有直接或间接的引用关系，那么这个对象就是死亡的，否则就是存活的。")]),_._v(" "),v("h3",{attrs:{id:"_2、哪些对象可以作为根对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、哪些对象可以作为根对象"}},[_._v("#")]),_._v(" 2、哪些对象可以作为根对象？")]),_._v(" "),v("p",[_._v("常量、静态变量、局部变量等。")]),_._v(" "),v("h3",{attrs:{id:"_3、介绍一下强引用、软引用、弱引用、虚引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、介绍一下强引用、软引用、弱引用、虚引用"}},[_._v("#")]),_._v(" 3、介绍一下强引用、软引用、弱引用、虚引用")]),_._v(" "),v("p",[_._v("这四个引用的强弱程度依次减弱。强引用就是普通的赋值引用，强引用对象不会被回收；软引用对象会在内存溢出前回收；弱引用对象会在下一次垃圾收集时回收；无法通过虚引用获取到一个对象，它的作用只是在垃圾收集时获得一个通知。")]),_._v(" "),v("h3",{attrs:{id:"_4、介绍一下java堆的分代"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、介绍一下java堆的分代"}},[_._v("#")]),_._v(" 4、介绍一下Java堆的分代")]),_._v(" "),v("p",[_._v("为了方便回收内存，目前流行的虚拟机都把Java堆分成了新生代和老年代，新生代中存放着存活时间较短的对象，老年代中存放着存活时间较长的对象。")]),_._v(" "),v("h3",{attrs:{id:"_5、介绍一下垃圾收集算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、介绍一下垃圾收集算法"}},[_._v("#")]),_._v(" 5、介绍一下垃圾收集算法")]),_._v(" "),v("p",[_._v("主要有三种垃圾收集算法**：标记-清除，标记-复制，标记-整理**。")]),_._v(" "),v("p",[_._v("标记-清除算法的缺点是，当死亡对象很多时要进行大量标记，并且会产生很多空间碎片。")]),_._v(" "),v("p",[_._v("标记-复制算法的缺点是，当存活对象很多时要进行大量复制，并且可用内存会减少一半。")]),_._v(" "),v("p",[_._v("标记-整理算法的缺点是，当存活对象很多时要进行大量移动。")]),_._v(" "),v("h3",{attrs:{id:"_6、简述分配内存和回收内存的过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、简述分配内存和回收内存的过程"}},[_._v("#")]),_._v(" 6、简述分配内存和回收内存的过程")]),_._v(" "),v("p",[_._v("新对象优先在新生代进行分配。新生代由一块较大的Eden空间和两块大小相同、较小的Survivor空间构成，新创建的对象会优先在Eden空间和其中一块Survivor空间进行分配，如果空间不足，就会触发Minor GC，回收新生代中的死亡对象，并将存活的对象放入另一块Survivor空间，如果放不下，就会放入老年代，老年代中存放着大对象和长期存活的对象。")]),_._v(" "),v("h3",{attrs:{id:"_7、什么情况下出触发full-gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、什么情况下出触发full-gc"}},[_._v("#")]),_._v(" 7、什么情况下出触发Full GC？")]),_._v(" "),v("p",[_._v("当老年代或方法区内存不足时会触发Full GC。")]),_._v(" "),v("h3",{attrs:{id:"_8、介绍一下常见的垃圾收集器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8、介绍一下常见的垃圾收集器"}},[_._v("#")]),_._v(" 8、介绍一下常见的垃圾收集器")]),_._v(" "),v("p",[v("strong",[_._v("1、Serial + Serial Old")]),_._v("：它们是最基础的垃圾收集器，单线程执行收集任务，采用标记-复制和标记整理算法算法。")]),_._v(" "),v("p",[v("strong",[_._v("2、ParNew")]),_._v("：新生代收集器，多个收集线程并行执行任务，收集时用户程序必须暂停，采用标记-复制算法；")]),_._v(" "),v("p",[v("strong",[_._v("3、Parallel Scavenge + Parallel Old")]),_._v("：新生代收集器，多个收集线程并行执行任务，收集时用户程序必须暂停，采用标记-复制和标记整理算法，它的目标是达到一个可控制的吞吐量。")]),_._v(" "),v("p",[v("strong",[_._v("4、CMS")]),_._v("：老年代收集器，收集线程和用户线程并发执行，用户程序不需要暂停(大部分时间)，采用标记-清除算法。它的目标是让回收停顿时间变短，适用于对响应速度要求比较高的系统。")]),_._v(" "),v("p",[v("strong",[_._v("5、G1")]),_._v("：可用回收堆内存任何区域，采用标记-清除和标记-整理算法，它的目标是在延迟可控的情况下获得尽可能高的吞吐量。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[_._v("收集器")]),_._v(" "),v("th",[_._v("收集区域")]),_._v(" "),v("th",[_._v("线程数量")]),_._v(" "),v("th",[_._v("收集算法")]),_._v(" "),v("th",[_._v("特点")])])]),_._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("Serial")]),_._v(" "),v("td",[_._v("新生代")]),_._v(" "),v("td",[_._v("单线程")]),_._v(" "),v("td",[_._v("标记-复制")]),_._v(" "),v("td",[_._v("最基础的收集器")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("Serial Old")]),_._v(" "),v("td",[_._v("老年代")]),_._v(" "),v("td",[_._v("单线程")]),_._v(" "),v("td",[_._v("标记-整理")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("ParNew")]),_._v(" "),v("td",[_._v("新生代")]),_._v(" "),v("td",[_._v("多线程并行")]),_._v(" "),v("td",[_._v("标记-复制")]),_._v(" "),v("td",[_._v("Serial的多线程并行版本")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("Parallel Scavenge")]),_._v(" "),v("td",[_._v("新生代")]),_._v(" "),v("td",[_._v("多线程并行")]),_._v(" "),v("td",[_._v("标记-复制")]),_._v(" "),v("td",[_._v("目标是达到一个可控的吞吐量")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("Parallel Old")]),_._v(" "),v("td",[_._v("老年代")]),_._v(" "),v("td",[_._v("多线程并行")]),_._v(" "),v("td",[_._v("标记-整理")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("CMS")]),_._v(" "),v("td",[_._v("老年代")]),_._v(" "),v("td",[_._v("多线程并发")]),_._v(" "),v("td",[_._v("标记-清除")]),_._v(" "),v("td",[_._v("目标是让回收停顿时间变短")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[_._v("G1")]),_._v(" "),v("td",[_._v("新生代和老年代")]),_._v(" "),v("td",[_._v("多线程并发")]),_._v(" "),v("td",[_._v("标记-清除、标记整理")]),_._v(" "),v("td",[_._v("目标是在延迟可控的情况下获得尽可能高的吞吐量")])])])]),_._v(" "),v("blockquote",[v("p",[_._v("注：这里的多线程并行指的是会有多个线程执行回收任务，但用户线程必须暂停；多线程并发指的是回收线程和用户线程基本上可以同时执行。")])]),_._v(" "),v("h2",{attrs:{id:"类加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类加载"}},[_._v("#")]),_._v(" 类加载")]),_._v(" "),v("h3",{attrs:{id:"_1、描述一下类的生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、描述一下类的生命周期"}},[_._v("#")]),_._v(" 1、描述一下类的生命周期")]),_._v(" "),v("p",[_._v("类的生命周期分为七个阶段：加载 -> 验证 -> 准备 -> 解析 -> 初始化 -> 使用 -> 卸载。")]),_._v(" "),v("p",[v("strong",[_._v("加载阶段")]),_._v("：获取类的二进制字节流，将静态存储结构转换为方法区的运行时数据结构，创建代表类的Class对象。")]),_._v(" "),v("p",[v("strong",[_._v("验证阶段")]),_._v("：验证字节流，保证其符合虚拟机规范。")]),_._v(" "),v("p",[v("strong",[_._v("准备阶段")]),_._v("：为静态变量分配内存，并初始化为零值。")]),_._v(" "),v("p",[v("strong",[_._v("解析阶段")]),_._v("：将常量池中的符号引用解析为直接引用，直接引用和内存布局相关。")]),_._v(" "),v("p",[v("strong",[_._v("初始化阶段")]),_._v("：为静态变量赋值，执行静态代码块，如果父类还没有初始化，会先初始化父类。")]),_._v(" "),v("h3",{attrs:{id:"_2、介绍一下双亲委派模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、介绍一下双亲委派模型"}},[_._v("#")]),_._v(" 2、介绍一下双亲委派模型")]),_._v(" "),v("p",[_._v("Java中的类加载器主要有四种：从上往下分别是启动类加载器、扩展类加载器、应用程序类加载器、用户自定义类加载器。上层类加载器是下层类加载器的父加载器，当一个加载器收到加载类的请求时，会先将这个请求委派给父加载器去执行，每一层类加载器都是如此，如果父加载器无法加载类时，才会让子加载器去加载。")]),_._v(" "),v("p",[_._v("双亲委派模型的目的是为了避免程序中出现重复的类，保证系统的稳定。")]),_._v(" "),v("h3",{attrs:{id:"_3、自定义类加载器怎样破坏双亲委派模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、自定义类加载器怎样破坏双亲委派模型"}},[_._v("#")]),_._v(" 3、自定义类加载器怎样破坏双亲委派模型？")]),_._v(" "),v("p",[_._v("如果想破坏双亲委派模型，就重写"),v("code",[_._v("ClassLoader")]),_._v("类中的"),v("code",[_._v("loadClass()")]),_._v("方法，如果想使用双亲委派模型，就重写"),v("code",[_._v("findClass()")]),_._v("方法。")]),_._v(" "),v("h3",{attrs:{id:"_4、举几个双亲委派模型被破坏的例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、举几个双亲委派模型被破坏的例子"}},[_._v("#")]),_._v(" 4、举几个双亲委派模型被破坏的例子")]),_._v(" "),v("p",[_._v("1、JDBC会使用Java的核心类"),v("code",[_._v("Driver")]),_._v("来获取连接，这个类由启动类加载器加载，但它的实现类是由第三方厂商提供的，无法被启动类加载器加载，于是就在内部使用了线程上下文类加载器去加载，这个类加载器默认就是应用程序类加载器。这种行为破坏了双亲委派模型。")]),_._v(" "),v("p",[_._v("2、Tomcat中会部署多个Web应用，为了让不同的应用使用同一个类库，为每个Web容器都提供了单独的类加载器，应用优先使用自己的类加载器，如果加载不了才会去请求父加载器。这种行为也破坏了双亲委派模型。")])])}),[],!1,null,null,null);v.default=r.exports}}]);