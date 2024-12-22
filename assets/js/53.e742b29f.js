(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{386:function(v,t,_){"use strict";_.r(t);var e=_(4),d=Object(e.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"调优堆栈内存参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调优堆栈内存参数"}},[v._v("#")]),v._v(" 调优堆栈内存参数")]),v._v(" "),t("h3",{attrs:{id:"堆栈大小典型配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆栈大小典型配置参数"}},[v._v("#")]),v._v(" 堆栈大小典型配置参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[v._v("配置参数")])]),v._v(" "),t("th",[t("strong",[v._v("说明")])]),v._v(" "),t("th",[t("strong",[v._v("示例")])])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("-Xmx")])]),v._v(" "),t("td",[v._v("设置最大堆大小。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m")]),v._v("，设置JVM最大可用内存为3550 MB。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-Xms")])]),v._v(" "),t("td",[v._v("设置JVM初始内存。")]),v._v(" "),t("td",[t("code",[v._v("-Xms3550m")]),v._v("，设置JVM初始内存为3550 MB。此值建议与"),t("code",[v._v("-Xmx")]),v._v("相同，避免每次垃圾回收完成后JVM重新分配内存。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-Xmn")])]),v._v(" "),t("td",[v._v("设置年轻代大小。")]),v._v(" "),t("td",[t("code",[v._v("-Xmn2g")]),v._v("，设置年轻代大小为2 GB。整个JVM内存大小=年轻代大小+年老代大小+持久代大小。持久代一般固定大小为64 MB，所以增大年轻代后，将会减小年老代大小。此值对系统性能影响较大，Sun官方推荐配置为整个堆的3/8。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-Xss")])]),v._v(" "),t("td",[v._v("设置线程的栈大小。")]),v._v(" "),t("td",[t("code",[v._v("-Xss128k")]),v._v("，设置每个线程的栈大小为128 KB。"),t("strong",[v._v("说明")]),v._v("JDK 5.0版本以后每个线程栈大小为1 MB，JDK 5.0以前版本每个线程栈大小为256 KB。请依据应用的线程所需内存大小进行调整。在相同物理内存下，减小该值可以生成更多的线程。但是操作系统对一个进程内的线程个数有一定的限制，无法无限生成，一般在3000个~5000个。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:NewRatio=n")])]),v._v(" "),t("td",[v._v("设置年轻代和年老代的比值。")]),v._v(" "),t("td",[t("code",[v._v("-XX:NewRatio=4")]),v._v("，设置年轻代（包括Eden和两个Survivor区）与年老代的比值（除去持久代）。如果设置为4，那么年轻代与年老代所占比值为1:4，年轻代占整个堆栈的1/5。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:SurvivorRatio=n")])]),v._v(" "),t("td",[v._v("年轻代中Eden区与两个Survivor区的比值。")]),v._v(" "),t("td",[t("code",[v._v("-XX:SurvivorRatio=4")]),v._v("，设置年轻代中Eden区与Survivor区的大小比值。如果设置为4，那么两个Survivor区与一个Eden区的比值为2:4，一个Survivor区占整个年轻代的1/6。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:MaxPermSize=n")])]),v._v(" "),t("td",[v._v("设置持久代大小。")]),v._v(" "),t("td",[t("code",[v._v("-XX:MaxPermSize=16m")]),v._v("，设置持久代大小为16 MB。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:MaxTenuringThreshold=n")])]),v._v(" "),t("td",[v._v("设置垃圾最大年龄。")]),v._v(" "),t("td",[t("code",[v._v("-XX:MaxTenuringThreshold=0")]),v._v("，设置垃圾最大年龄。如果设置为0，那么年轻代对象不经过Survivor区，直接进入年老代。对于年老代比较多的应用，提高了效率。如果将此值设置为较大值，那么年轻代对象会在Survivor区进行多次复制，增加了对象在年轻代的存活时间，增加在年轻代即被回收的概率。")])])])]),v._v(" "),t("h2",{attrs:{id:"调优收集器参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调优收集器参数"}},[v._v("#")]),v._v(" 调优收集器参数")]),v._v(" "),t("h3",{attrs:{id:"吞吐量优先的收集器配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#吞吐量优先的收集器配置参数"}},[v._v("#")]),v._v(" 吞吐量优先的收集器配置参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[v._v("配置参数")])]),v._v(" "),t("th",[t("strong",[v._v("说明")])]),v._v(" "),t("th",[t("strong",[v._v("示例")])])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("-XX:+UseParallelGC")])]),v._v(" "),t("td",[v._v("选择垃圾收集器为并行收集器。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3800m -Xms3800m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:ParallelGCThreads=20")]),v._v("，"),t("code",[v._v("-XX:+UseParallelGC")]),v._v("此配置仅对年轻代有效，即在示例配置下，年轻代使用并发收集，而年老代仍旧使用串行收集。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:ParallelGCThreads")])]),v._v(" "),t("td",[v._v("配置并行收集器的线程数，即同时多少个线程一起进行垃圾回收。"),t("strong",[v._v("说明")]),v._v("此值建议配置与处理器数目相等。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3800m -Xms3800m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:ParallelGCThreads=20")]),v._v("，"),t("code",[v._v("-XX:ParallelGCThreads=20")]),v._v("表示配置并行收集器的线程数为20个。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+UseParallelOldGC")])]),v._v(" "),t("td",[v._v("配置年老代垃圾收集方式为并行收集。"),t("strong",[v._v("说明")]),v._v("JDK 6.0支持对年老代并行收集。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:ParallelGCThreads=20 -XX:+UseParallelOldGC")]),v._v("，"),t("code",[v._v("-XX:+UseParallelOldGC")]),v._v("表示对年老代进行并行收集。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:MaxGCPauseMillis")])]),v._v(" "),t("td",[v._v("设置每次年轻代垃圾回收的最长时间，如果无法满足此时间，JVM会自动调整年轻代大小，以满足此值。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:MaxGCPauseMillis=100")]),v._v("，"),t("code",[v._v("-XX:MaxGCPauseMillis=100")]),v._v("设置每次年轻代垃圾回收的最长时间为100 ms。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+UseAdaptiveSizePolicy")])]),v._v(" "),t("td",[v._v("设置此选项后，并行收集器自动选择年轻代区大小和相应的Survivor区比例，以达到目标系统规定的最低响应时该间或者收集频率，该值建议使用并行收集器时，并且一直打开。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:MaxGCPauseMillis=100 -XX:+UseAdaptiveSizePolicy")])])])])]),v._v(" "),t("h3",{attrs:{id:"响应时间优先的收集器配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应时间优先的收集器配置参数"}},[v._v("#")]),v._v(" 响应时间优先的收集器配置参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[v._v("配置参数")])]),v._v(" "),t("th",[t("strong",[v._v("说明")])]),v._v(" "),t("th",[t("strong",[v._v("示例")])])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("-XX:+UseConcMarkSweepGC")])]),v._v(" "),t("td",[v._v("设置年老代为并发收集。"),t("strong",[v._v("说明")]),v._v("配置了"),t("code",[v._v("-XX:+UseConcMarkSweepGC")]),v._v("，建议年轻代大小使用"),t("code",[v._v("-Xmn")]),v._v("设置。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:ParallelGCThreads=20 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+UseParNewGC")])]),v._v(" "),t("td",[v._v("设置年轻代为并行收集。可与CMS收集同时使用。JDK 5.0以上版本，JVM根据系统配置自行设置，无需再设置此值。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:ParallelGCThreads=20 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:CMSFullGCsBeforeCompaction")])]),v._v(" "),t("td",[v._v("由于并发收集器不对内存空间进行压缩、整理，所以运行一段时间以后会产生“碎片”，使得运行效率降低。此值设置运行多少次GC以后对内存空间进行压缩、整理。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=5 -XX:+UseCMSCompactAtFullCollection")]),v._v("，"),t("code",[v._v("-XX:CMSFullGCsBeforeCompaction=5")]),v._v("，表示运行GC5次后对内存空间进行压缩、整理。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+UseCMSCompactAtFullCollection")])]),v._v(" "),t("td",[v._v("打开对年老代的压缩。"),t("strong",[v._v("说明")]),v._v("该值可能会影响性能，但是可以消除碎片。")]),v._v(" "),t("td",[t("code",[v._v("-Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=5 -XX:+UseCMSCompactAtFullCollection")])])])])]),v._v(" "),t("h3",{attrs:{id:"其它类型收集器的配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它类型收集器的配置参数"}},[v._v("#")]),v._v(" 其它类型收集器的配置参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("配置参数")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("示例")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("-XX:+UseSerialGC")])]),v._v(" "),t("td",[t("code",[v._v("Serial + Serial Old")])]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+UseG1GC")])]),v._v(" "),t("td",[t("code",[v._v("G1")])]),v._v(" "),t("td")])])]),v._v(" "),t("h2",{attrs:{id:"gc日志参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc日志参数"}},[v._v("#")]),v._v(" GC日志参数")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[v._v("配置参数")])]),v._v(" "),t("th",[t("strong",[v._v("说明")])])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("-XX:+PrintGC")])]),v._v(" "),t("td",[v._v("用于输出GC日志。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+PrintGCDetails")])]),v._v(" "),t("td",[v._v("用于输出GC日志详情。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+PrintGCTimeStamps")])]),v._v(" "),t("td",[v._v("用于输出GC时间戳（JVM启动到当前日期的总时长的时间戳形式）。示例如下："),t("code",[v._v("0.855: [GC (Allocation Failure) [PSYoungGen: 33280K->5118K(38400K)] 33280K->5663K(125952K), 0.0067629 secs] [Times: user=0.01 sys=0.01, real=0.00 secs]")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+PrintGCDateStamps")])]),v._v(" "),t("td",[v._v("用于输出GC时间戳（日期形式）。示例如下："),t("code",[v._v("2022-01-27T16:22:20.885+0800: 0.299: [GC pause (G1 Evacuation Pause) (young), 0.0036685 secs]")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-XX:+PrintHeapAtGC")])]),v._v(" "),t("td",[v._v("在进行GC前后打印出堆的信息。")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-Xloggc:../logs/gc.log")])]),v._v(" "),t("td",[v._v("日志文件的输出路径。")])])])])])}),[],!1,null,null,null);t.default=d.exports}}]);