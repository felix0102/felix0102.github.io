(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{117:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"查看防火墙是否启用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看防火墙是否启用"}},[t._v("#")]),t._v(" 查看防火墙是否启用")]),t._v(" "),e("ul",[e("li",[t._v("firewall-cmd --state")])]),t._v(" "),e("h3",{attrs:{id:"centos7启动防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7启动防火墙"}},[t._v("#")]),t._v(" centos7启动防火墙")]),t._v(" "),e("ul",[e("li",[t._v("systemctl start firewalld.service")])]),t._v(" "),e("h3",{attrs:{id:"centos7停止防火墙-关闭防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7停止防火墙-关闭防火墙"}},[t._v("#")]),t._v(" centos7停止防火墙/关闭防火墙")]),t._v(" "),e("ul",[e("li",[t._v("systemctl stop firewalld.service")])]),t._v(" "),e("h3",{attrs:{id:"centos7重启防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7重启防火墙"}},[t._v("#")]),t._v(" centos7重启防火墙")]),t._v(" "),e("ul",[e("li",[t._v("systemctl restart firewalld.service")])]),t._v(" "),e("h3",{attrs:{id:"设置开机启用防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置开机启用防火墙"}},[t._v("#")]),t._v(" 设置开机启用防火墙")]),t._v(" "),e("ul",[e("li",[t._v("systemctl enable firewalld.service")])]),t._v(" "),e("h3",{attrs:{id:"设置开机不启动防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置开机不启动防火墙"}},[t._v("#")]),t._v(" 设置开机不启动防火墙")]),t._v(" "),e("ul",[e("li",[t._v("systemctl disable firewalld.service")])]),t._v(" "),e("h3",{attrs:{id:"新增开放一个端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新增开放一个端口号"}},[t._v("#")]),t._v(" 新增开放一个端口号")]),t._v(" "),e("ul",[e("li",[t._v("firewall-cmd --zone=public --add-port=80/tcp --permanent")])]),t._v(" "),e("p",[t._v("说明:\n–zone #作用域\n–add-port=80/tcp #添加端口，格式为：端口/通讯协议\n–permanent 永久生效，没有此参数重启后失效")]),t._v(" "),e("h3",{attrs:{id:"添加多个端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加多个端口"}},[t._v("#")]),t._v(" 添加多个端口:")]),t._v(" "),e("ul",[e("li",[t._v("firewall-cmd --zone=public --add-port=80-90/tcp --permanent")])]),t._v(" "),e("h3",{attrs:{id:"删除端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除端口"}},[t._v("#")]),t._v(" 删除端口")]),t._v(" "),e("ul",[e("li",[t._v("firewall-cmd --zone=public --remove-port=80/tcp --permanent")])]),t._v(" "),e("h3",{attrs:{id:"实现5423–-80端口转发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现5423–-80端口转发"}},[t._v("#")]),t._v(" 实现5423–>80端口转发")]),t._v(" "),e("ul",[e("li",[t._v("firewall-cmd --permanent --zone=trusted --add-forward-port=port=5423:proto=tcp:toport=80 //添加永久配置")])]),t._v(" "),e("h3",{attrs:{id:"查看防火墙信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看防火墙信息"}},[t._v("#")]),t._v(" 查看防火墙信息")]),t._v(" "),e("p",[t._v("centos7查看防火墙所有信息")]),t._v(" "),e("ul",[e("li",[t._v("firewall-cmd --list-all\ncentos7查看防火墙开放的端口信息")]),t._v(" "),e("li",[t._v("firewall-cmd --list-ports")])])])}),[],!1,null,null,null);a.default=s.exports}}]);