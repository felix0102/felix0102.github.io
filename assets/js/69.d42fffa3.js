(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{71:function(n,t,s){"use strict";s.r(t);var l=s(0),e=Object(l.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h3",{attrs:{id:"shell-sftp-upload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-sftp-upload"}},[this._v("#")]),this._v(" shell sftp upload")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#!/bin/bash\n#SFTP配置信息\n#用户名\nUSER=root\n#密码\nPASSWORD=5EYS40T04BMF\n#待上传文件根目录\nSRCDIR=/u02/dab/sftpFiles\n#FTP目录\nDESDIR=/u01/sftpFiles\n#IP\nIP=192.168.10.11\n#端口\nPORT=22022\n\n#获取文件\ncd ${SRCDIR} ;\n#目录下的所有文件\n#FILES=`ls` \n#修改时间在执行时间五分钟之前的xml文件\nFILES=`find ${SRCDIR} -mmin -50 -name '*.xml'`\n\nfor FILE in ${FILES}\ndo\n    echo ${FILE}\n#发送文件 (关键部分）\nlftp -u ${USER},${PASSWORD} sftp://${IP}:${PORT} <<EOF\ncd ${DESDIR}/\nlcd ${SRCDIR}\nput ${FILE}\nby\nEOF\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);