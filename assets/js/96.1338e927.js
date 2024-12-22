(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{435:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、创建版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、创建版本库"}},[s._v("#")]),s._v(" 一、创建版本库")]),s._v(" "),a("p",[s._v("创建版本库有2种方法：一是先创建本地版本库再和远程库关联，二是直接从远程库克隆。")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"创建本地版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建本地版本库"}},[s._v("#")]),s._v(" 创建本地版本库")])])]),s._v(" "),a("p",[s._v("1、在项目根目录下执行"),a("code",[s._v("init")]),s._v("命令，创建本地版本库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、将本地库和远程库关联")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://gitee.com/zyg525/springboot-test.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、查看远程库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、删除远程库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"从远程库克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从远程库克隆"}},[s._v("#")]),s._v(" 从远程库克隆")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/zyg525/springboot-test.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"二、修改文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、修改文件"}},[s._v("#")]),s._v(" 二、修改文件")]),s._v(" "),a("p",[s._v("我们在工作区对文件进行修改，然后将修改后的文件添加到暂存区，最后将暂存区的文件提交到版本库。")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"工作区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作区"}},[s._v("#")]),s._v(" 工作区")])])]),s._v(" "),a("p",[s._v("工作区指的就是我们能看到的目录。与工作区相关的命令有：")]),s._v(" "),a("p",[s._v("1、比较文件内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" readme.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看工作区文件和暂存区中文件的区别")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD -- readme.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看工作区文件和版本库中最新版本的区别")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2、将修改后的文件提交到暂存区")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、查看工作区和暂存区状态")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"暂存区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂存区"}},[s._v("#")]),s._v(" 暂存区")])])]),s._v(" "),a("p",[s._v("与暂存区相关的命令有：")]),s._v(" "),a("p",[s._v("1、将暂存区的所有文件提交到版本库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'第一次提交'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、撤销修改，如果文件还未add到暂存区，那么撤销工作区的修改；如果文件已经add到暂存区，那么撤销暂存区的修改")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- readme.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"版本库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本库"}},[s._v("#")]),s._v(" 版本库")])])]),s._v(" "),a("p",[s._v("与版本库相关的命令有：")]),s._v(" "),a("p",[s._v("1、查看提交日志")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#美化日志")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2、将版本库回退至某个历史版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" HEAD^ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#回退至上个版本")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" 3c6e "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#回退至某个commitId对应的版本")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3、查询所有执行过的命令，可以用这个命令寻找消失的"),a("code",[s._v("commitId")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"三、分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、分支管理"}},[s._v("#")]),s._v(" 三、分支管理")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"创建与合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支"}},[s._v("#")]),s._v(" 创建与合并分支")])])]),s._v(" "),a("p",[s._v("1、查看本地所有分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、以当前分支为基底，创建并切换到目标分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、切换分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、合并目标分支到当前分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("默认使用"),a("code",[s._v("Fast forward")]),s._v("模式进行合并，这种模式下，删除分支后，会丢失分支信息，如果不想丢失分支信息，可以禁用该模式：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merge with no-ff"')]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、删除分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" dev\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#强制删除未合并的分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("6、查看分支合并图谱")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"分支冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支冲突"}},[s._v("#")]),s._v(" 分支冲突")])])]),s._v(" "),a("p",[s._v("假设dev分支是以master分支为基底创建的新分支，在正常情况下，我们会修改dev分支，master分支保持不变，然后将dev分支合并到master分支，这时不会发生冲突，所谓的合并只不过是把master指针移到dev上。"),a("strong",[s._v("但是如果master分支也被修改，此时dev分支的基底和master分支的最新版本不一致，就会发生冲突，此时需要找到冲突的内容进行修改，然后重新"),a("code",[s._v("add、commit")])]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"bug分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[s._v("#")]),s._v(" Bug分支")])])]),s._v(" "),a("p",[s._v("假如我们正在dev分支进行开发，工作区和暂存区都有修改的文件，如何在不commit这些文件的前提下，修改bug并commit到版本库呢？答案是使用"),a("code",[s._v("git stash")]),s._v("，这个命令可以暂时隐藏工作区和暂存区的文件。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当bug修改完成并commit之后，我们需要恢复工作区和暂存区的文件，首先查询stash：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后恢复stash：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"四、远程协作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、远程协作"}},[s._v("#")]),s._v(" 四、远程协作")]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"多人协作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多人协作"}},[s._v("#")]),s._v(" 多人协作")])])]),s._v(" "),a("p",[s._v("1、查看所有远程分支列表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、更新所有远程分支列表")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3、拉取远程分支，并合并到当前分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin dev\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin dev --allow-unrelated-histories "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果本地分支和远程分支没有关联，可以使用这个命令")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("远程分支合并到本地分支的原理，和本地分支互相合并的原理一样，发生冲突原因就是本地分支基底发生变化，解决冲突的办法是手动修改冲突的内容。")])]),s._v(" "),a("p",[s._v("4、拉取远程分支到本地，但是不合并")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉取远程dev分支到本地的origin/dev分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在origin/dev分支的基础上创建新的分支newBranch：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" newBranch origin/dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、推送本地当前分支到远程分支，然后合并到远程分支")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("本地分支合并到远程分支的原理，和本地分支互相合并的原理一样，发生冲突原因就是远程分支基底发生变化，解决冲突的办法是重新pull远程最新分支，然后手动修改冲突内容，再重新push到远程分支。")])]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"标签管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签管理"}},[s._v("#")]),s._v(" 标签管理")])])]),s._v(" "),a("p",[s._v("1、为当前所在分支的最新提交创建标签")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、为某个commitId创建标签")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.1 0d52\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" v1.1 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version 1.1 released"')]),s._v(" 0d52\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3、查看所有标签")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4、查看标签信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5、删除标签")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" v1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("6、推送本地标签到远程")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tags")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#推送本地所有标签到远程")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除远程标签：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v0.9\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"五、git常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、git常用命令"}},[s._v("#")]),s._v(" 五、Git常用命令")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/img/linux/git-cheat-sheet.jpg",alt:"Git常用命令"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);