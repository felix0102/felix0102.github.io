(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{246:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"java-jdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-jdk"}},[t._v("#")]),t._v(" java jdk")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo yum install jdk1.8")])]),t._v(" "),a("h2",{attrs:{id:"jenkins-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-install"}},[t._v("#")]),t._v(" jenkins install")]),t._v(" "),a("blockquote",[a("p",[t._v("env: oracle linux 7 , jdk 1.8")])]),t._v(" "),a("h3",{attrs:{id:"import-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-repo"}},[t._v("#")]),t._v(" import repo")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo")])]),t._v(" "),a("h3",{attrs:{id:"import-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-key"}},[t._v("#")]),t._v(" import key")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key")])]),t._v(" "),a("h3",{attrs:{id:"install-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-jenkins"}},[t._v("#")]),t._v(" install jenkins")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo yum install jenkins")])]),t._v(" "),a("h3",{attrs:{id:"modify-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-configuration"}},[t._v("#")]),t._v(" modify configuration")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo vi /etc/sysconfig/jenkins")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('## Type:        integer(0:65535)\n## Default:     8080\n## ServiceRestart: jenkins\n#\n# Port Jenkins is listening on.\n# Set to -1 to disable\n#\nJENKINS_PORT="8080"\n')])])]),a("h3",{attrs:{id:"start-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-jenkins"}},[t._v("#")]),t._v(" start jenkins")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo systemctl start jenkins")])]),t._v(" "),a("h3",{attrs:{id:"view-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-status"}},[t._v("#")]),t._v(" view status")]),t._v(" "),a("blockquote",[a("p",[t._v("sudo systemctl status jenkins")])]),t._v(" "),a("h3",{attrs:{id:"view-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-password"}},[t._v("#")]),t._v(" view password")]),t._v(" "),a("blockquote",[a("p",[t._v("cat /var/lib/jenkins/secrets/initAdminPassword")])]),t._v(" "),a("h3",{attrs:{id:"jenkins-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-log"}},[t._v("#")]),t._v(" jenkins log")]),t._v(" "),a("p",[t._v("By default logs should be made available in /var/log/jenkins/jenkins.log ,if you can't find the initAdminPasswword file ,then you can find the passwork in the log file")])])}),[],!1,null,null,null);s.default=n.exports}}]);