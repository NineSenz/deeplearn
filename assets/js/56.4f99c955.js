(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{477:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"内容介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容介绍"}},[s._v("#")]),s._v(" 内容介绍")]),s._v(" "),t("ul",[t("li",[s._v("为什么要学习函数编程以及什么是函数式编程")]),s._v(" "),t("li",[s._v("函数式编程的特性(纯函数、柯里化、函数组合等)")]),s._v(" "),t("li",[s._v("函数式编程的应用场景")]),s._v(" "),t("li",[s._v("函数式编程库 "),t("code",[s._v("Lodash")])])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"为什么要学习函数式编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习函数式编程"}},[s._v("#")]),s._v(" 为什么要学习函数式编程")]),s._v(" "),t("p",[s._v("函数式编程是非常古老的一个概念，早于第一台计算机的诞生，函数式编程的历史。")]),s._v(" "),t("p",[s._v("那我们为什么现在还要学函数式编程？")]),s._v(" "),t("ul",[t("li",[s._v("函数式编程是随着 React 的流行受到越来越多的关注")]),s._v(" "),t("li",[s._v("Vue 3也开始拥抱函数式编程")]),s._v(" "),t("li",[s._v("函数式编程可以抛弃 "),t("code",[s._v("this")])]),s._v(" "),t("li",[s._v("打包过程中可以更好的利用 "),t("code",[s._v("tree shaking")]),s._v(" 过滤无用代码")]),s._v(" "),t("li",[s._v("方便测试、方便并行处理")]),s._v(" "),t("li",[s._v("有很多库可以帮助我们进行函数式开发："),t("code",[s._v("lodash")]),s._v("、"),t("code",[s._v("underscore")]),s._v("、"),t("code",[s._v("ramda")])])]),s._v(" "),t("hr"),s._v(" "),t("h3",{attrs:{id:"什么是函数式编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数式编程"}},[s._v("#")]),s._v(" 什么是函数式编程")]),s._v(" "),t("p",[t("strong",[s._v("函数式编程")]),s._v("(Functional Programming)是一种编程范式，我们常听说的编程范式还有面向过程编程、面向对象编程。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("面向对象编程的思维方式")]),s._v("：把现实世界中的事物抽象成程序世界中的类和对象，通过封装、继承、多态来演示事物之间的联系。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("函数式编程的思维方式")]),s._v("：把现实世界中的事物和事物之间的联系抽象到程序世界(对运算结果进行抽象)")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("程序的本质")]),s._v("：根据输入通过某种运算获得相对应地输出，程序开发过程中会涉及很多有输入和输出的函数")])]),s._v(" "),t("li",[t("p",[t("em",[t("code",[s._v("x -> f -> y")])]),s._v(" (x 通过 f 运算得到 y) 也就是函数式编程中的函数.  "),t("em",[t("code",[s._v("y = f(x)")])])])]),s._v(" "),t("li",[t("p",[t("font",{attrs:{color:"#d00"}},[t("strong",[s._v("函数式编程中的函数指的不是程序中的函数(方法)")])]),s._v("，而是数学中的函数映射关系，例如 "),t("em",[t("code",[s._v("y = sin(x)")])]),s._v(" x和y的关系")],1)]),s._v(" "),t("li",[t("p",[t("strong",[s._v("相同的输入始终要得到相同的输出")]),s._v("(纯函数)")])]),s._v(" "),t("li",[t("p",[s._v("函数式编程用来描述数据(函数)之间的关系")])]),s._v(" "),t("li",[t("p",[s._v("函数式编程用来描述数据(函数)之间的映射")])])])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 非函数式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" num2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("num1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" num2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);