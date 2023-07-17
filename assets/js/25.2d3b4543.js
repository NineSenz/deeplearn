(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{445:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"什么是symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是symbol"}},[s._v("#")]),s._v(" 什么是Symbol?")]),s._v(" "),t("p",[s._v("Symbol是一种在编程语言中使用的数据类型。它可以被视为一种特殊的标识符，具有唯一性和不可变性。")]),s._v(" "),t("p",[s._v("在许多编程语言中，Symbol通常表示一个常量或变量的名称。与字符串不同，Symbol具有固定的值，因此可以用作常量，并且在程序执行期间不可更改。这种特性使得Symbol在某些情况下更加适合使用，例如在实现一个枚举类型时，其中每个枚举值都可以表示为一个Symbol。")]),s._v(" "),t("h3",{attrs:{id:"symbol的用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol的用途"}},[s._v("#")]),s._v(" Symbol的用途")]),s._v(" "),t("p",[s._v("Symbol也经常用于在JavaScript中创建对象属性，这些属性与其他属性不同，因为它们是不可枚举的。这意味着它们不会出现在对象的for...in循环中，从而避免了潜在的命名冲突。")]),s._v(" "),t("p",[s._v("另一个Symbol的用途是作为JavaScript中的迭代器。在这种情况下，每个Symbol都有一个相关的迭代器方法，可以用于生成对象的一系列值。这些Symbol通常称为“迭代器Symbol”，并且在ES6（ECMAScript 2015）中已被正式引入。")]),s._v(" "),t("p",[s._v("总之，Symbol是一种在编程语言中常见的数据类型，可以用于表示常量、变量名称、对象属性和迭代器等。它具有唯一性和不可变性，使得它在某些情况下比其他数据类型更加适合使用。")]),s._v(" "),t("p",[s._v("除了上述用途，Symbol还有一些其他的特性和用法。")]),s._v(" "),t("h3",{attrs:{id:"symbol的特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol的特性"}},[s._v("#")]),s._v(" Symbol的特性")]),s._v(" "),t("p",[s._v("首先，Symbol具有全局性，这意味着在应用程序的任何地方都可以使用相同的Symbol。这是因为Symbol是在运行时创建的，而不是在编译时。因此，如果使用相同的描述符创建两个Symbol，它们将被视为相等的，即使它们是在不同的地方创建的。")]),s._v(" "),t("p",[s._v("其次，Symbol可以具有描述符，这是一个可选的字符串参数，用于描述Symbol的用途。描述符在调试和日志记录方面非常有用，因为它们可以帮助开发人员识别程序中的Symbol。")]),s._v(" "),t("p",[s._v("最后，Symbol还具有Symbol.iterator属性，它是一个函数，返回一个迭代器对象。这个迭代器对象可以用于遍历数据结构（如数组、集合、映射等）中的元素。Symbol.iterator属性是ES6中的一个新特性，它可以用于自定义数据结构的遍历方法，使其可以被for...of循环遍历。")]),s._v(" "),t("p",[s._v("总的来说，Symbol是一种功能强大的数据类型，可以用于许多用途。它具有唯一性、不可变性、全局性和描述符等特性，使得它在某些情况下比其他数据类型更加适合使用。它的引入也使得JavaScript语言更加灵活和可扩展。")]),s._v(" "),t("h3",{attrs:{id:"symbol的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol的应用场景"}},[s._v("#")]),s._v(" Symbol的应用场景")]),s._v(" "),t("p",[s._v("在JavaScript中，Symbol还有一些其他的应用场景。例如：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("防止属性名冲突：Symbol可以用于作为对象属性名，这样可以防止属性名冲突。因为Symbol是唯一的，不会与其他属性名产生冲突。")])]),s._v(" "),t("li",[t("p",[s._v("简化接口：Symbol可以用于定义接口，因为接口中的方法名通常是固定的。使用Symbol可以使方法名更加清晰明了，避免了名称的歧义。")])]),s._v(" "),t("li",[t("p",[s._v("私有属性和方法：在JavaScript中，没有真正的私有属性和方法。但是，可以使用Symbol来模拟私有属性和方法。使用Symbol作为属性名，可以防止外部对象访问该属性。")])]),s._v(" "),t("li",[t("p",[s._v("作为标识符：在某些情况下，需要使用唯一的标识符来标识一个对象或值。Symbol可以用作这样的标识符，因为它们是唯一的，不可更改的。")])]),s._v(" "),t("li",[t("p",[s._v("自定义迭代器：使用Symbol.iterator属性可以为对象自定义迭代器。这样可以更加灵活地遍历对象中的元素，也可以使对象更容易地与for...of循环一起使用。")])])]),s._v(" "),t("p",[s._v("总的来说，Symbol是一种非常有用的数据类型，可以用于防止命名冲突、定义接口、模拟私有属性和方法、作为标识符以及自定义迭代器等。虽然Symbol是ES6中引入的新特性，但已经得到了广泛的应用和支持。")]),s._v(" "),t("h3",{attrs:{id:"symbol的其他特性和用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#symbol的其他特性和用法"}},[s._v("#")]),s._v(" Symbol的其他特性和用法")]),s._v(" "),t("p",[s._v("在JavaScript中，Symbol还有一些其他的特性和用法。以下是一些示例：")]),s._v(" "),t("ol",[t("li",[s._v('Symbol.for()：可以使用Symbol.for()方法创建一个全局Symbol，并将其存储在Symbol注册表中。这样可以在不同的代码模块中共享同一个Symbol。\n例如，下面的代码会创建一个名为"mySymbol"的全局Symbol，并将其存储在Symbol注册表中：')])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mySymbol "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mySymbol'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在其他代码模块中，可以通过同样的方式获取这个Symbol：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mySymbol "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mySymbol'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样，就可以在不同的代码模块中共享同一个Symbol了。")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v('Symbol.keyFor()：可以使用Symbol.keyFor()方法获取一个全局Symbol的描述符。如果该Symbol不是全局的，则返回undefined。\n例如，下面的代码会创建一个名为"mySymbol"的全局Symbol，并获取它的描述符：')])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mySymbol "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mySymbol'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" symbolDescriptor "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("keyFor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mySymbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("symbolDescriptor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 输出"mySymbol"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("Symbol.species：在JavaScript中，一些数据结构（如数组和Set）的方法会返回一个新的数据结构，通常是相同类型的数据结构。例如，Array的map()方法会返回一个新的Array，Set的filter()方法会返回一个新的Set。Symbol.species属性允许开发人员重写这些方法返回的数据结构类型。\n例如，下面的代码将Symbol.species属性设置为一个新的构造函数，用于覆盖默认的返回类型：")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyArray")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Symbol"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("species"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" myArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mappedArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myArray"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mappedArray "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出false")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mappedArray "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("在这个例子中，MyArray继承自Array，并覆盖了"),t("code",[s._v("Symbol.species")]),s._v("属性，返回一个新的Array构造函数。当使用"),t("code",[s._v("map()")]),s._v("方法对MyArray实例进行操作时，返回的新数组类型将由"),t("code",[s._v("Symbol.species")]),s._v("指定的构造函数确定。")]),s._v(" "),t("p",[s._v("总的来说，Symbol是一种非常有用的数据类型，可以用于防止命名冲突、定义接口、模拟私有属性和方法、作为标识符以及自定义迭代器等。此外，Symbol还具有全局性、描述符、Symbol.for()和Symbol.keyFor()方法以及Symbol.species属性等特性和用法，使得它更加灵活和强大。")])])}),[],!1,null,null,null);t.default=r.exports}}]);