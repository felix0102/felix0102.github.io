(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{118:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"使用iptables进行端口重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用iptables进行端口重定向"}},[t._v("#")]),t._v(" 使用iptables进行端口重定向")]),t._v(" "),e("p",[t._v("我们的要将端口80重定向到同一服务器中的端口8080。这可以通过PREROUTING链中添加规则来完成。因此，运行以下命令。")]),t._v(" "),e("blockquote",[e("p",[t._v("iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080")])]),t._v(" "),e("h3",{attrs:{id:"查看重定向的端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看重定向的端口"}},[t._v("#")]),t._v(" 查看重定向的端口")]),t._v(" "),e("blockquote",[e("p",[t._v("iptables -t nat -L -n -v")])]),t._v(" "),e("h3",{attrs:{id:"保存修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保存修改"}},[t._v("#")]),t._v(" 保存修改")]),t._v(" "),e("blockquote",[e("p",[t._v("iptables-save")])])])}),[],!1,null,null,null);a.default=r.exports}}]);