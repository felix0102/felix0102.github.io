(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{106:function(t,a,i){"use strict";i.r(a);var c=i(0),e=Object(c.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"git-checkout-指定的文件夹"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout-指定的文件夹"}},[t._v("#")]),t._v(" git checkout 指定的文件夹")]),t._v(" "),i("p",[t._v("使用git clone可以获取远程服务器的所有仓库代码，然而有时想查看仓库里某个目录或文件，例如examples目录的时候。")]),t._v(" "),i("p",[t._v("从1.7.0版本开始git提供稀疏检出的功能。所谓稀疏检出就是本地版本库检出时不检出全部，只将指定的文件从本地版本库检出到工作区，而其他未指定的文件则不予检出")]),t._v(" "),i("h3",{attrs:{id:"git-pull-folder-docs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-folder-docs"}},[t._v("#")]),t._v(" git pull folder:docs")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v(' git init\n git config core.sparsecheckout true\n echo "docs/*" >> .git/info/sparse-checkout \n git pull master https://github.com/felix0102/chn.git \n git checkout\n')])])]),i("h2",{attrs:{id:"clone-specific-git-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clone-specific-git-branch"}},[t._v("#")]),t._v(" clone specific git branch")]),t._v(" "),i("ul",[i("li",[t._v("git clone -b master https://github.com/felix0102/WeChatPlugin-MacOS.git")])]),t._v(" "),i("h2",{attrs:{id:"checkout-specific-git-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#checkout-specific-git-branch"}},[t._v("#")]),t._v(" checkout specific git branch")]),t._v(" "),i("ul",[i("li",[t._v("git checkout <name_of_branch>")])]),t._v(" "),i("h2",{attrs:{id:"list-all-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#list-all-branch"}},[t._v("#")]),t._v(" list all branch")]),t._v(" "),i("ul",[i("li",[t._v("git branch -a")])]),t._v(" "),i("h2",{attrs:{id:"git-commit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),i("ul",[i("li",[t._v("git add newfile")]),t._v(" "),i("li",[t._v('git commit -m "comment"')]),t._v(" "),i("li",[t._v("git push")])]),t._v(" "),i("h2",{attrs:{id:"git-修改文件后提交到远程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-修改文件后提交到远程"}},[t._v("#")]),t._v(" git 修改文件后提交到远程")]),t._v(" "),i("p",[t._v("修改文件后，怎么提交到远程仓库")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('git commit -a -m ""  提交到本地库\ngit push  提交到远程仓库\n')])])])])}),[],!1,null,null,null);a.default=e.exports}}]);