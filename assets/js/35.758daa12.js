(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{457:function(s,n,a){"use strict";a.r(n);var e=a(2),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一、stat模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、stat模块"}},[s._v("#")]),s._v(" 一、stat模块")]),s._v(" "),n("p",[s._v("stat模块类似linux的stat命令，用于获取文件的状态信息。")]),s._v(" "),n("p",[s._v("https://docs.ansible.com/ansible/latest/modules/stat_module.html#stat-module")]),s._v(" "),n("p",[s._v("获取/etc/fstab文件的状态信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@manage01 ~]#  ansible -m stat 192.168.98.201 -a "path=/etc/fstab"\n192.168.98.201 | SUCCESS => {\n    "ansible_facts": {\n        "discovered_interpreter_python": "/usr/libexec/platform-python"\n    },\n    "changed": false,\n    "stat": {\n        "atime": 1571386074.1020715,\n        "attr_flags": "",\n        "attributes": [],\n        "block_size": 4096,\n        "blocks": 8,\n        "charset": "us-ascii",\n        "checksum": "554e387b5bde93c05baa689312e9a8db5579629e",\n        "ctime": 1570636725.1020045,\n        "dev": 64768,\n        "device_type": 0,\n        "executable": false,\n        "exists": true,\n        "gid": 0,\n        "gr_name": "root",\n        "inode": 16777347,\n        "isblk": false,\n        "ischr": false,\n        "isdir": false,\n        "isfifo": false,\n        "isgid": false,\n        "islnk": false,\n        "isreg": true,\n        "issock": false,\n        "isuid": false,\n        "mimetype": "text/plain",\n        "mode": "0644",\n        "mtime": 1570636308.3990006,\n        "nlink": 1,\n        "path": "/etc/fstab",\n        "pw_name": "root",\n        "readable": true,\n        "rgrp": true,\n        "roth": true,\n        "rusr": true,\n        "size": 579,\n        "uid": 0,\n        "version": "1364475400",\n        "wgrp": false,\n        "woth": false,\n        "writeable": true,\n        "wusr": true,\n        "xgrp": false,\n        "xoth": false,\n        "xusr": false\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br")])]),n("h2",{attrs:{id:"二、学习视频"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、学习视频"}},[s._v("#")]),s._v(" 二、学习视频")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.bilibili.com/video/BV19J41167sM?p=25",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频：ansible常用模块知识图谱"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);