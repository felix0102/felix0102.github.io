(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{263:function(s,e,n){"use strict";n.r(e);var a=n(6),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"查看session"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看session"}},[s._v("#")]),s._v(" 查看session：")]),s._v(" "),n("blockquote",[n("p",[s._v("select * from v$session where username is not null")])]),s._v(" "),n("blockquote",[n("p",[s._v("select username,count(username) from v$session where username is not null group by username")])]),s._v(" "),n("h3",{attrs:{id:"当前连接数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#当前连接数"}},[s._v("#")]),s._v(" 当前连接数：")]),s._v(" "),n("blockquote",[n("p",[s._v("select count(*) from v$process")])]),s._v(" "),n("h3",{attrs:{id:"查看数据库允许的最大连接数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库允许的最大连接数"}},[s._v("#")]),s._v(" 查看数据库允许的最大连接数：")]),s._v(" "),n("blockquote",[n("p",[s._v("select value from v$parameter where name = 'processes'")])]),s._v(" "),n("h3",{attrs:{id:"查看当前并发连接数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看当前并发连接数"}},[s._v("#")]),s._v(" 查看当前并发连接数")]),s._v(" "),n("blockquote",[n("p",[s._v("Select count(*) from v$session where status='ACTIVE'")])]),s._v(" "),n("h3",{attrs:{id:"获得需要kill-session的信息-使用v-session-和-gv-session视图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获得需要kill-session的信息-使用v-session-和-gv-session视图"}},[s._v("#")]),s._v(" 获得需要kill session的信息(使用V$SESSION 和 GV$SESSION视图)")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SET LINESIZE 180\nCOLUMN spid FORMAT A10\nCOLUMN username FORMAT A10\nCOLUMN program FORMAT A40;\n\n\nSELECT s.inst_id,\ns.sid,\ns.serial#,\np.spid,\ns.username,\ns.program,\ns.paddr,\ns.STATUS FROM gv$session s\nJOIN gv$process p ON p.addr = s.paddr AND p.inst_id = s.inst_id and s.username='FELIX'\nWHERE s.type != 'BACKGROUND';\n")])])]),n("p",[s._v("Select count(*) from v$session where status='ACTIVE'")]),s._v(" "),n("p",[s._v("begin\nrdsadmin.rdsadmin_util.kill(\nsid    => 748,\nserial => 30576);\nend;\n/")]),s._v(" "),n("p",[s._v("SELECT s.inst_id,\ns.sid,\ns.serial#,\n--s.sql_id,\np.spid,\ns.username,\ns.program\nFROM   gv$session s\nJOIN gv$process p ON p.addr = s.paddr AND p.inst_id = s.inst_id\nWHERE  s.type != 'BACKGROUND';")]),s._v(" "),n("h3",{attrs:{id:"从v-sqlarea中查询最占用资源的查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从v-sqlarea中查询最占用资源的查询"}},[s._v("#")]),s._v(" 从V$SQLAREA中查询最占用资源的查询")]),s._v(" "),n("p",[s._v("select b.username username,a.disk_reads reads,\na.executions exec,a.disk_reads/decode(a.executions,0,1,a.executions) rds_exec_ratio,\na.sql_text Statement\nfrom v$sqlarea a,dba_users b\nwhere a.parsing_user_id=b.user_id\nand a.disk_reads > 100000\norder by a.disk_reads desc;")]),s._v(" "),n("p",[s._v("用buffer_gets列来替换disk_reads列可以得到占用最多内存的sql语句的相关信息。\nV$SQL是内存共享SQL区域中已经解析的SQL语句。")]),s._v(" "),n("h3",{attrs:{id:"列出使用频率最高的5个查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#列出使用频率最高的5个查询"}},[s._v("#")]),s._v(" 列出使用频率最高的5个查询")]),s._v(" "),n("p",[s._v("select sql_text,executions\nfrom (select sql_text,executions,\nrank() over\n(order by executions desc) exec_rank\nfrom v$sql)\nwhere exec_rank <=5;")]),s._v(" "),n("h3",{attrs:{id:"消耗磁盘读取最多的sql-top5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#消耗磁盘读取最多的sql-top5"}},[s._v("#")]),s._v(" 消耗磁盘读取最多的sql top5")]),s._v(" "),n("p",[s._v("select disk_reads,sql_text\nfrom (select sql_text,disk_reads,\ndense_rank() over\n(order by disk_reads desc) disk_reads_rank\nfrom v$sql)\nwhere disk_reads_rank <=5;")]),s._v(" "),n("h3",{attrs:{id:"找出需要大量缓冲读取-逻辑读-操作的查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#找出需要大量缓冲读取-逻辑读-操作的查询"}},[s._v("#")]),s._v(" 找出需要大量缓冲读取（逻辑读）操作的查询")]),s._v(" "),n("p",[s._v("select buffer_gets,sql_text\nfrom (select sql_text,buffer_gets,\ndense_rank() over\n(order by buffer_gets desc) buffer_gets_rank\nfrom v$sql)\nwhere buffer_gets_rank<=5;")]),s._v(" "),n("h3",{attrs:{id:"磁盘读取最多的sql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#磁盘读取最多的sql"}},[s._v("#")]),s._v(" 磁盘读取最多的SQL")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select disk_reads,sql_text\nfrom (select sql_text,disk_reads,\ndense_rank() over\n(order by disk_reads desc) disk_reads_rank\nfrom v$sql)\nwhere disk_reads_rank <=5;\n")])])]),n("h3",{attrs:{id:"回话内存占用情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#回话内存占用情况"}},[s._v("#")]),s._v(" 回话内存占用情况")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('SELECT server "连接类型",\n       s.username,\n       OSUSEr,\n       NAME,\n       VALUE/1024/1024 "占用内存MB",\n       s.SID "会话ID",\n       s.serial#,\n       spid "操作系统进程ID",\n       p.PGA_USED_MEM,\n       p.PGA_ALLOC_MEM,\n       p.PGA_FREEABLE_MEM,\n       p.PGA_MAX_MEM\n  FROM v$session s, v$sesstat st, v$statname sn, v$process p\n WHERE st.SID = s.SID\n   AND st.statistic# = sn.statistic#\n   AND sn.NAME LIKE \'session pga memory\'\n   AND p.addr = s.paddr\n ORDER BY VALUE DESC\n\n')])])]),n("h3",{attrs:{id:"时间占用最多的查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间占用最多的查询"}},[s._v("#")]),s._v(" 时间占用最多的查询")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('SELECT S.SQL_TEXT,\n       S.SQL_FULLTEXT,\n       S.SQL_ID,\n       ROUND(ELAPSED_TIME / 1000000 / (CASE\n               WHEN (EXECUTIONS = 0 OR NVL(EXECUTIONS, 1) = 1) THEN\n                1\n               ELSE\n                EXECUTIONS\n             END),\n             2) "执行时间\'S\'",\n       S.EXECUTIONS "执行次数",\n       S.OPTIMIZER_COST "COST",\n       S.SORTS,\n       S.MODULE, --连接模式（JDBC THIN CLIENT：程序）\n       -- S.LOCKED_TOTAL,\n       --S.PHYSICAL_READ_BYTES "物理读",\n       -- S.PHYSICAL_READ_REQUESTS "物理读请求",\n       --S.PHYSICAL_WRITE_REQUESTS "物理写",\n       -- S.PHYSICAL_WRITE_BYTES "物理写请求",\n       S.ROWS_PROCESSED      "返回行数",\n       S.DISK_READS          "磁盘读",\n       S.DIRECT_WRITES       "直接路径写",\n       S.PARSING_SCHEMA_NAME,\n       S.LAST_ACTIVE_TIME\n  FROM GV$SQLAREA S\n WHERE ROUND(ELAPSED_TIME / 1000000 / (CASE\n               WHEN (EXECUTIONS = 0 OR NVL(EXECUTIONS, 1) = 1) THEN\n                1\n               ELSE\n                EXECUTIONS\n             END),\n             2) > 5 --100 0000微秒=1S\n   AND S.PARSING_SCHEMA_NAME = USER\n   AND TO_CHAR(S.LAST_LOAD_TIME, \'YYYY-MM-DD\') =\n       TO_CHAR(SYSDATE, \'YYYY-MM-DD\')\n   AND S.COMMAND_TYPE IN (2, 3, 5, 6, 189)\n ORDER BY "执行时间\'S\'" DESC;\n ```\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);