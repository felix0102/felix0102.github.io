(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{85:function(a,t,r){"use strict";r.r(t);var e=r(0),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h3",{attrs:{id:"dataguard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dataguard"}},[a._v("#")]),a._v(" Dataguard")]),a._v(" "),r("ul",[r("li",[a._v("DB-1\nfelix1.subnet.vcn.oraclevcn.com:1521/DB1212_bom19z.subnet.vcn.oraclevcn.com")]),a._v(" "),r("li",[a._v("Dataguard-1\n152.67.10.185  dg.subnet.vcn.oraclevcn.com:1521/DB1212_bom1ff.subnet.vcn.oraclevcn.com")])]),a._v(" "),r("h3",{attrs:{id:"database-restore-必须关闭-dataguard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-restore-必须关闭-dataguard"}},[a._v("#")]),a._v(" Database Restore 必须关闭 Dataguard")]),a._v(" "),r("h3",{attrs:{id:"database-restore-时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-restore-时间"}},[a._v("#")]),a._v(" Database Restore 时间")]),a._v(" "),r("h3",{attrs:{id:"database-auto-backup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-auto-backup"}},[a._v("#")]),a._v(" Database auto backup")]),a._v(" "),r("ul",[r("li",[a._v("请注意，要使备份操作成功运行，数据库和DB系统必须处于“可用”状态。")]),a._v(" "),r("li",[a._v("Oracle建议在进行备份操作时避免执行可能干扰可用性的操作(例如补丁和数据保护操作)。")]),a._v(" "),r("li",[a._v("如果自动备份操作失败，数据库服务将在第二天的备份窗口中重试该操作。")]),a._v(" "),r("li",[a._v("如果按需完全备份失败，则可以在数据库系统和数据库可用性恢复后再次尝试该操作。")])]),a._v(" "),r("h3",{attrs:{id:"除了列出的先决条件外，确保满足以下条件以避免备份失败"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#除了列出的先决条件外，确保满足以下条件以避免备份失败"}},[a._v("#")]),a._v(" 除了列出的先决条件外，确保满足以下条件以避免备份失败:")]),a._v(" "),r("ul",[r("li",[a._v("数据库的归档模式设置为ARCHIVELOG(默认)。")]),a._v(" "),r("li",[a._v("数据库主机文件系统上的/u01目录有足够的空闲空间来执行备份进程。")]),a._v(" "),r("li",[a._v("oracle用户的.bash_profile文件不包含任何交互式命令(例如oraenv或可能生成错误或警告消息的命令)。")]),a._v(" "),r("li",[a._v("没有使用RMAN命令对RMAN备份设置进行任何更改。")])]),a._v(" "),r("h3",{attrs:{id:"备份时间窗口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#备份时间窗口"}},[a._v("#")]),a._v(" 备份时间窗口")]),a._v(" "),r("ul",[r("li",[a._v("备份窗口时区——在2018年11月20日之后，在任何数据库上首次启用的自动备份将在DB系统所在时区的午夜到早上6点之间运行。如果您在此日期之前启用了数据库的自动备份，那么数据库的备份窗口将继续在UTC时间午夜到早上6:00之间。")]),a._v(" "),r("li",[a._v("Dataguard—您可以使用关联中的备用角色在数据库上启用自动备份功能。但是，在承担主要角色之前，不会创建该数据库的自动备份。")]),a._v(" "),r("li",[a._v("保留期更改—如果您在将来缩短数据库的自动备份保留期，则系统将删除超出更新保留期的现有备份。")]),a._v(" "),r("li",[a._v("对象存储成本——自动备份会导致对象存储使用成本。")])]),a._v(" "),r("h3",{attrs:{id:"oracle-rac"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oracle-rac"}},[a._v("#")]),a._v(" oracle RAC")]),a._v(" "),r("h3",{attrs:{id:"oracle-scn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oracle-scn"}},[a._v("#")]),a._v(" oracle SCN")])])}),[],!1,null,null,null);t.default=s.exports}}]);