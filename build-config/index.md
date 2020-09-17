### 备注
默认请求，该模板使用的是 `Rollup` 对 JS 代码进行打包，正如其官网所说：Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

同时为了方便开发者使用自己喜欢的打包工具，这里也提供了 `Webpack` 和 `Parcel` 的配置。相应的开发环境依赖并没有安装，需要手动安装。

### Webpack 配置

#### 待安装依赖
* webpack
* webpack-cli
* @babel/core babel-loader @babel/preset-env  @babel/plugin-transform-runtime @babel/polyfill
* uglifyjs-webpack-plugin
* clean-webpack-plugin

### Parcel 配置
Parcel 是 Web 应用打包工具，适用于经验不同的开发者。它利用多核处理提供了极快的速度，并且不需要任何配置。

Parcel 内置使用@babel/preset-env，因此只需要关注 babelrc 配置文件即可。

因此 Parcel 不存在配置文件，运行下面命令即可：

```sh
parcel build src/index.js -d dist/index.min.js --no-cache
```
#### 待安装依赖
* parcel-bundler
