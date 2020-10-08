
 <div align="center">
 <img align="center" width="180" src="https://github.com/Rabbitzzc/image-hosting-service/blob/master/step-tooltip-avator.png?raw=true" />
  <h2>Step Tooltip</h2>
  <blockquote>step by step tooltip guilder for any website.lightweight, & minify✨✨✨.</blockquote>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/step-tooltip">
  <img alt="npm" src="https://img.shields.io/npm/v/step-tooltip">
  <img alt="Travis (.org)" src="https://img.shields.io/travis/Rabbitzzc/step-tooltip">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Rabbitzzc/step-tooltip">
  <img alt="node-current" src="https://img.shields.io/node/v/step-tooltip">
  <img alt="GitHub" src="https://img.shields.io/github/license/Rabbitzzc/step-tooltip">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/Rabbitzzc/step-tooltip">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Rabbitzzc/step-tooltip">

</div>


## ⭐️ Features

- Lightweight, minify.
- Generate arrows from pseudo-classes(before/after).


🤚🎨🤚🎨demo: https://step-tooltip-example.logiczc.vercel.app/


## 📦 Getting Started

### install
```sh
# npm 
npm install --save step-tooltip

# yarn
yarn add step-tooltip
```

### usage

```sh
import stepTooltip from 'step-tooltip'

stepTooltip()
```

### config

```js
{
  initialText: '哈喽，准备好了解 step-tooltip 了么？',
  steps: [],
  backdropColor: 'rgb(0 0 0 / 0.56)',
  options: {
    backLabel: '上一步',
    nextLabel: '下一步',
    skipLabel: '我知道了',
    doneLabel: '完成',
  }
}
```

| config        | func                              | default                                                      |
| ------------- | --------------------------------- | ------------------------------------------------------------ |
| initialText   | first show text                   | `哈喽，准备好了解 step-tooltip 了么？`                       |
| steps         | every step                        | `[]`                                                         |
| backdropColor | backdrop element box-shadow color | `'rgb(0 0 0 / 0.56)'`                                        |
| options       | other config                      | 1. backLabel: 上一步<br />2. nextLabel: 下一步<br />3. skipLabel: 我知道了<br />4. doneLabel: 完成 |



## 🔖 LICENSE

[MIT](./LICENSE)

## ✈️  Thanks
* [cssarrowplease](http://www.cssarrowplease.com/), css arrow.
