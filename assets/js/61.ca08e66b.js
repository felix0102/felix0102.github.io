(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{236:function(e,t,r){"use strict";r.r(t);var o=r(6),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"boot-volume-查看磁盘信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot-volume-查看磁盘信息"}},[e._v("#")]),e._v(" Boot Volume 查看磁盘信息")]),e._v(" "),r("ul",[r("li",[e._v("lsblk")])]),e._v(" "),r("h2",{attrs:{id:"进行分区"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进行分区"}},[e._v("#")]),e._v(" 进行分区")]),e._v(" "),r("ul",[r("li",[e._v("parted fixed partition")]),e._v(" "),r("li",[e._v("fdisk /dev/sda")]),e._v(" "),r("li",[e._v("reboot")]),e._v(" "),r("li",[e._v("mkfs -t ext4 /dev/sda4")]),e._v(" "),r("li",[e._v("mount /dev/sda4 /u01")]),e._v(" "),r("li",[e._v("mkdir /u01/home")]),e._v(" "),r("li",[e._v("cp -R /home/opc /u01/home")]),e._v(" "),r("li",[e._v("chown -R opc:opc /u01/home/opc")]),e._v(" "),r("li",[e._v("usermod -d /u01/home/opc opc")]),e._v(" "),r("li",[e._v("fstab  /dev/sda4 /u01 ext4 defaults 0 0")])]),e._v(" "),r("h3",{attrs:{id:"usermode-user-opc-is-currently-used-by-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usermode-user-opc-is-currently-used-by-process"}},[e._v("#")]),e._v(" usermode: user opc is currently used by process")]),e._v(" "),r("ul",[r("li",[e._v("you must kill currently used process first. But this process probably is your SSH connection. So, in this case you need to run this commands on nohup.")]),e._v(" "),r("li",[e._v("nohup kill 23795;sleep 2; usermod -d /u01/home/opc opc&")])]),e._v(" "),r("h2",{attrs:{id:"vm-修改hostname"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vm-修改hostname"}},[e._v("#")]),e._v(" VM 修改hostname")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://einstein.oracle.com/apex/f?p=300000:Q:106410300071800::NO::QUESTION:impact-of-setting-preserve-hostinfo-2-in-the-etc-oci-hostname-conf-file-1900",target:"_blank",rel:"noopener noreferrer"}},[e._v("修改Hostname"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"oci-打开ping功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oci-打开ping功能"}},[e._v("#")]),e._v(" oci 打开ping功能")]),e._v(" "),r("blockquote",[r("p",[e._v("0.0.0.0/0      ICMP                    8       ICMP traffic for: 8 Echo")])]),e._v(" "),r("h2",{attrs:{id:"reference-link"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reference-link"}},[e._v("#")]),e._v(" Reference Link")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.cloud.oracle.com/iaas/Content/Block/Tasks/extendingbootpartition.htm?Highlight=parted",target:"_blank",rel:"noopener noreferrer"}},[e._v("parted boot volume"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://qiita.com/chinaperfirect/items/a525e4db0fae036b94f5",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux fstab"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/zhouchang3/article/details/52996100",target:"_blank",rel:"noopener noreferrer"}},[e._v("ext4&xfs"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/MYSQLZOUQI/p/4818174.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("fdisk parted"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);