# [duoduo-cashier](https://github.com/YunYouJun/duoduo-cashier)

Record work income

## Intend

做一个记账小程序

- 账号系统
- 路由鉴权
- 图表显示变化
- 增删改查
- [PWA](https://pwa.nuxtjs.org/)
- 第三方登陆与绑定（GitHub）
- 国际化
- Travis CI 持续集成
- 变量配置分离
- [谷歌统计](https://zh.nuxtjs.org/faq/google-analytics)

## Base

### 底层框架

- [Vue](https://cn.vuejs.org/)

### 应用框架

- [Nuxt](https://zh.nuxtjs.org/)

### UI框架

- [Element UI](https://github.com/ElemeFE/element)

#### Chart

- [Chart.js](https://github.com/chartjs/Chart.js)
- [vue-chartjs](https://github.com/apertureless/vue-chartjs)

### 后台数据库

- [Leancloud](https://leancloud.cn/)

### Other

- [Vuex](https://vuex.vuejs.org/)
- [axios](https://github.com/axios/axios)

## 前言

唔，没什么可说的。

写给没什么网站开发基础的多多同学。

## 古往今来

首先，开发一个网站，有多种开发方式。
在远古时代，网页常常是通过编写 [Html](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 标签元素（如 `<p></p>`），
并拼凑起来展示网页的内容。
后来有了 [Css](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 来控制网页地布局，
再后来又有了 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)，
可以实现与用户之间的交互和一些计算。
譬如点击按钮后，让网页的某部分内容发生变化，样式发生改变等等等等。
所以 Html + Css + JavaScript 成为了开发网页必备的三剑客。
这些都可以在 [Mozilla](https://developer.mozilla.org/) 中更加深入地了解，在此略过不表。

后来 [jQuery](https://jquery.com/) 横空出世，几乎一统江湖。那么 jQuery 又是什么？
jQuery 名中含有一个 j， Query 则是查询的意思。顾名思义，jQuery 是由 JavaScript 编写的一个库。
用来更加快速地查找出 Html 文档中的标签元素，并操纵它。这也大大提高了前端开发的效率。

但天下大势，分久必合，合久必分。为了克服 HTML 在构建应用上的不足，由谷歌开发的 [Angualar](https://github.com/angular/angular) 诞生（2009）。相比 jQuery 而言，是一种更完备的 Web 应用开发的解决方案。
后来 Facebook 对市场上所有 JavaScript MVC 框架都不满意，就决定自己写一套。
[React](https://github.com/facebook/react/) 就此诞生，并于 2013 年 5 月开源。
而 Vue 的第一个 [Commit](https://github.com/vuejs/vue/commit/83fac017f96f34c92c3578796a7ddb443d4e1f17) 可追溯至 2013 年 7 月 28 日，此后势如破竹，并于去年成功超过 React 在 Github 上的 Star 数。成为目前 GitHub 上最受欢迎的前端框架。
Angular/React/Vue 三足鼎立之势业已形成。

## 开始

Vue.js 与 jQuery 不同，jQuery 操纵 DOM （（文档对象模型(Document Object Model)），譬如一个标签就是一个对象模型），
而 Vue 则由数据驱动，当数据发生改变时，再更新视图，并不直接操纵 DOM 。

说了这么多，本项目决定采用 Nuxt.js 来开发，Nuxt 正是基于 Vue.js 的通用应用框架。
好处就是，它可以提供一个良好的模板结构，以及服务端渲染、异步数据加载、中间件支持等等许多特性。
这些特性，通过 Vue 相关的插件与配置同样可以从零实现，而 Nuxt 则将其集成在一起，可以帮我们省去许多的工作。

项目地址： <https://github.com/YunYouJun/duoduo-cashier>

### 安装 Nuxt

可参考 [Nuxt 文档](https://zh.nuxtjs.org/guide/installation/)

运行 create-nuxt-app

此处我使用 [yarn](https://www.yarnpkg.com/zh-Hans/)

```sh
yarn create nuxt-app duoduo-cashier
```

默认服务器为 None，因为后台打算使用 LeanCloud ，一是需求小可以使用开发版免费，二则无需额外搭建后台服务器。

UI 框架选择了 [Element-UI](https://github.com/ElemeFE/element) ，因为过去经常使用，较为熟悉，且 Github 上星数最多，经常维护。

选择 SPA[single page web application] 模式，旨在开发单页应用，即只有一张Web页面的应用，当进行交互时，动态更新页面视图，也是现在较为流行的模式。

安装 [axios](https://github.com/axios/axios) 模块，以备发送 api 请求。
( axios 是一个流行的基于 promise 的 HTTP 库，可以方便地发送请求并获取响应数据，是前端与后端建立连接的重要桥梁。)

进入文件夹，启动项目

```sh
cd duoduo-cashier
yarn dev
```

目录结构及各文件夹用途可参见[此处文档](https://zh.nuxtjs.org/guide/directory-structure)

#### Prettier

因为安装了 prettier 美化代码格式，所以有时会出现类似如下相关提示。

```sh
   8:17  error  Delete `␍⏎␍⏎`  prettier/prettier
  13:8   error  Delete `␍⏎`    prettier/prettier

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```

输入如下命令，自动修复。

```sh
yarn lint --fix
```

默认 prettier 配置文件 `.prettierrc` 如下

```json
{
  "semi": false,
  "singleQuote": true
}
```

`semi` 为 false 代表 js 语句结尾不使用分号 `;`

`singleQuote` 为 true 代表 js 中引号使用单引号

### 前端页面

#### 配置公共 CSS

公共需要的 CSS 可以写在额外单独的文件里。
配置方法参见 [CSS 配置](https://zh.nuxtjs.org/api/configuration-css/#css-%E9%85%8D%E7%BD%AE)

本项目配置在了 `@/assets/css/main.scss` 里 （ @ 代表项目根目录）

使用 scss 需要额外安装 `node-sass` `sass-loader`

```sh
yarn add -S -D node-sass sass-loader
# 如果只有 -S 写入 package.json 的 dependencies 里, 有了 -D 则写入 devDependencied 里
```

[sass](http://sass-lang.com/) 是一种成熟、稳定、强大的CSS预处理器，
可以看作一种用来编写 css 的编程语言。

SCSS 是 Sass3 版本当中引入的新语法特性，完全兼容CSS3的同时继承了Sass强大的动态功能。

与原生 css 相比的好处有如可以进行嵌套，使用变量等等。

```scss
$primary-color: #333;
body {
  color: $primary-color;
  .class {
    ...
  }
}
```

#### 图表

图表部分的实现自然要依靠大家的智慧。框架必不可少.
此处我选用的是基于 Html5 Canvas 的 [Chart.js](https://github.com/chartjs/Chart.js)，
以及用 vue 对其进行封装的 [vue-chartjs](https://github.com/apertureless/vue-chartjs)。

```sh
# 安装依赖
yarn add vue-chartjs chart.js
```

### 后端交互

因为采用 LeanCloud 作为后端，所以无需另外编写后台代码。

为了降低对 LeanCloud 的依赖（譬如日后迁移后台），用个专业名词来说就是解耦，
决定采用 LeanCloud 提供的 [Rest API](https://leancloud.cn/docs/rest_api.html) 服务。(这是一种通用的前后端分离的方法)

同时采用 [Postman](https://www.getpostman.com/) （一个 HTTP Client 工具，可以自定义 HTTP 请求）来进行接口的调试。
可参考[使用 Postman 调试 REST API](https://forum.leancloud.cn/t/postman-rest-api/8638)

#### 配置 axios

可参考 [nuxt-axios 文档](https://axios.nuxtjs.org/options)

<!-- 发生了跨域，需要开启 proxy 。 -->

<!-- ```js
// nuxt.config.js 中 axios 字段
module.exports = {
  ...
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': 'https://sqgxqvmq.api.lncld.net/1.1/',
    pathRewrite: { '^/api/': '' }
    // 此处须进行替换，因为代理后的 api 链接中不含 /api/ 字段
    // 如 http://localhost:3000/api/login 等价于 https://sqgxqvmq.api.lncld.net/1.1/login
  }
  ...
}
``` -->

预先配置 axios 中请求的基础部分 [browerBaseURL](https://axios.nuxtjs.org/options#browserbaseurl) 

```js
// nuxt.config.js 中 axios 字段
module.exports = {
  ...
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    browserBaseURL: 'https://sqgxqvmq.api.lncld.net/1.1/'
  },
  ...
}
```

还需额外通过拦截器配置 axios 发送请求的全局 Headers 。可参见[Extending axios](https://axios.nuxtjs.org/extend)

```js
// nuxt.config.js
{
  ...
  plugins: [
    '~/plugins/axios'
  ]
  ...
}
```

```js
// ~/plugins/axios.js
// 此处为 Leancloud api 对应应用 duoduo-cashier 的 Id 与 Key
export default function({ $axios, redirect }) {
  $axios.setHeader('X-LC-Id', 'SqGXqvMqLFSGgxYpcXFbmBgR-gzGzoHsz')
  $axios.setHeader('X-LC-Key', 'kUXrbjyUdvJV4i1FhsVayqa4')
  ...
}
```

配置完毕千万记得重启，泪流满面。

#### 发送请求

通过 axios 发送请求，在 Vue 的 methods 中即可类似如下调用。

```js
...
  login() {
    this.$axios.$post('api/login', this.loginForm)
      .then((res) => {  // 此处使用箭头函数
        ...
        this.$message({
          type: 'success',
          message: '登录成功！'
        })
      }
  }
...
```

箭头函数有些类似于普通的 function 函数，譬如还可以这么写。

```js
...
  login() {
    let _this = this
    this.$axios.$post('api/login', this.loginForm)
      .then(function(res) {  // 此处使用箭头函数
        ...
        _this.$message({
          type: 'success',
          message: '登录成功！'
        })
      }
  }
...
```

显然使用箭头函数要更为方便，箭头函数的好处就是不会创建自己的 this ,它只会从自己的作用域链的上一层继承 this ，
因此可以继续在其内部使用继承自外部的 this 。

> Tip: 当箭头函数仅有一个参数的时候，可以省略掉括号。
> (res) => {}
> res => {}

可参见[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### 中间件

##### 路由鉴权

当我们想要一些页面只允许登录后的用户才能访问，就需要用到中间件来拦截并过滤请求。

在 [middleware](https://zh.nuxtjs.org/examples/middleware) 文件夹下，新建 `auth.js` 。

```js
export default function({ store, redirect }) {
  if (!store.state.username) {
    return redirect('/login')
  }
}
```

在显示页面前，会先去查找是否有用户信息存储下来，当无法获取登录后的用户信息时，便会重定向回登陆页面。

##### 持续登录状态

此外，我们想要一直保留用户的登录状态。可以依靠 [Vuex](https://zh.nuxtjs.org/guide/vuex-store) 。
但 Vuex 当页面刷新时，会丢失数据。
想要实现保留用户登录状态，文中提供的方法是 nuxtServerInit ，每次从服务器获取到数据时都会执行一次。
但我们无法对 LeanCloud 的后台服务器内容进行修改，且编写的是静态化页面。
所以采用 Html 5 提供的 sessionStorage 来存储，并通过全局的中间件在每次页面开始时，
从 sessionStorage 中读取数据存储到 Vuex 的状态树中。

```js
// middleware/status.js
export default function({ store }) {
  if (!store.state.sessionStorage) {
    if (sessionStorage.getItem('sessionToken') !== null) {
      let sessionToken = sessionStorage.getItem('sessionToken')
      store.commit('SET_SESSION_TOKEN', sessionToken)
    }
  }
  if (!store.state.username) {
    if (sessionStorage.getItem('username') !== null) {
      let username = sessionStorage.getItem('username')
      store.commit('SET_USER', username)
    }
  }
}
```

```js
// store/index.js
export const state = () => ({
  username: null,
  sessionToken: null
})

export const mutations = {
  SET_SESSION_TOKEN: function(state, sessionToken) {
    state.sessionToken = sessionToken
    if (sessionToken) {
      sessionStorage.setItem('sessionToken', sessionToken)
    } else {
      sessionStorage.removeItem('sessionToken')
      // 这里需要使用 removeItem
      // 否则 sessionStorage.setItem('sessionToken', null) 会将其赋值变为 "null" 字符串
    }
  },
  SET_USER: function(state, username) {
    state.username = username
    if (username) {
      sessionStorage.setItem('username', username)
    } else {
      sessionStorage.removeItem('username')
    }
  }
}

// 实现登出 通过 this.$store.dispatch('logout) 调用
export const actions = {
  logout({ commit }) {
    commit('SET_USER', null)
    commit('SET_SESSION_TOKEN', null)
  }
}
```

### 部署

[部署到 GitHub Pages](https://zh.nuxtjs.org/faq/github-pages)

不过有一个坑就是 GitHub Pages 似乎无法访问带有 `/_nuxt/` 链接的资源，与下划线有关。
所以需要修改配置 `build` 中 [publicPath](https://zh.nuxtjs.org/api/configuration-build#publicpath)。

默认为 `_nuxt`，修改为 `nuxt`，也可以修改为其他不带下划线的名称。

### Q&A