import {babel} from "@rollup/plugin-babel"

import postcss from 'rollup-plugin-postcss'
import autoPreFixer from 'autoprefixer'

// 压缩
import {
    terser
} from "rollup-plugin-terser"

// 输出文件夹清除
import clear from "rollup-plugin-clear"


const path = require('path')
const resolve = function (filePath) {
    return path.join(__dirname, filePath)
}


export default {
    input: resolve('src/index.js'), // 入口文件
    output: [{ // 出口文件
        file: resolve('dist/index.min.js'),
        format: 'umd',
        name: 'index',
    }],
    plugins: [
        clear({
            targets: ["dist"]
        }),
        postcss({
            extensions: ['.css'],
            minimize: true, // 压缩
            extract: resolve('dist/index.min.css'),
            plugins: [autoPreFixer()]
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'runtime'
        }),
        terser(),
    ],
    external: []
}
