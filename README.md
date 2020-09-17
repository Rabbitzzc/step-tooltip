
 <div align="center">
 <img align="center" width="180" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/logo-shadow.png" />
  <h2>Javascript Npm Template</h2>
  <blockquote>关于该库的一些简单介绍，比如作用，依赖等等</blockquote>
  <img alt="npm" src="https://img.shields.io/npm/dw/test">
  <img alt="Travis (.org)" src="https://img.shields.io/travis/rust-lang/rust">
  <img alt="npm" src="https://img.shields.io/npm/v/test">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/npm-template/js-npm-template">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/test">
  <img alt="node-current" src="https://img.shields.io/node/v/test">
  <img alt="GitHub" src="https://img.shields.io/github/license/npm-template/js-npm-template">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/npm-template/js-npm-template">

<strong>一些其他提示和备注.（可选）</strong>
</div>


## ⭐️ Features

- 使用 typescript 编写，提供更好的代码提示和类型检查
- 包体积更小，轻量无依赖


## 📦 Getting Started

### install
```sh
# npm 
npm install --save lib

# yarn
yarn add lib
```

### usage

参数配置如下：

| Option | Type   | Description |
| ------ | ------ | ----------- |
| param1 | string | intro param |
| param1 | string | intro param |
| param1 | string | intro param |
| param1 | array  | intro param |
| param1 | string | intro param |



```sh
import utils from lib

utils()
```

For more examples, please refer to the [Documentation](https://github.com/npm-template/js-npm-template)



## ✨ Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## ⚙️ Changelog

See [CHANGELOG]()

## LICENSE

[MIT](./LICENSE)

## ✈️  TODO
* todo 


<br>
<br>

---
> 下面主要是该模板存在的一些配置文件信息，实际开发中直接在README删除。

## template included
- [x] `babelrc` (主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中)
- [x] `editorconfig` (定义和维护跨编辑器（或IDE）的统一的代码风格)
- [x] `browserslistrc`  (在不同的前端工具之间共用目标浏览器和 node 版本的配置工具)
- [x] `prettier` (代码格式化，对具体的语法有具体的格式化方案)
- [x] `eslint` (提供一个插件化的javascript代码检测工具)
- [x] `gitignore`
- [x] `commitlint` (git commit lint)
- [x] `huskyrc`  (git 提交之前的格式化与检查)
- [x] `README` (lib info)
- [x] `LICENSE`
- [x] `.travis.yml` (travis)
- [x] `npmrc`
- [x] `CHANGELOG`
- [x] `git author` (检测用户提交账号) 


## 备注
`@babel/runtime-corejs3` 导入会导致包体积变大，如果没有必要，直接删除即可，并更改 babel 配置
---


