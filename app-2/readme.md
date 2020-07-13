# 客户端渲染步骤
1. 浏览器发送请求
2. 服务器返回html
3. 浏览器发送js请求
4. 服务器返回js文件
5. 浏览器执行js中的代码渲染页面

# 服务端渲染步骤
1. 浏览器发送请求
2. 服务器运行react代码生成页面
3. 服务器返回页面

# 打包
```js
const webpackNodeExternals = require('webpack-node-externals')
module.exports = {
    target: 'node', //打包服务器端代码
    externals: [webpackNodeExternals()], //不会把 node_modules 打包到文件里
}
```
可以将node_modules里的内容放置在打包内容之外，并在线上运行时 从 node_modules里引入

# 虚拟dom
虚拟dom是真实DOM的一个javascript的对象映射
react组件本质上是一个虚拟dom
1. 提升渲染性能
2. 使得服务器渲染时，很方便的将虚拟dom转换为字符串，返回给浏览器

## 优点
- 首屏非常快
- seo很方便
## 缺点
1. 客户端渲染在浏览器渲染，消耗浏览器性能 / react在服务器端进行 所以服务端渲染消耗服务器性能

## 使用场景
1. 需要首屏渲染速度优化
2. 搜索引擎优化

## 同时热更新服务端代码和客户端代码
```js
    "scripts": {
        "build": "webpack --config webpack.server.js --watch",  //webpack.server.js里的entry或entry的依赖有变化则自动重新打包
        "start": "nodemon --watch build --exec node ./build/bundle.js" // 如果build目录下的文件有变化，则重新启动服务
    },
```
### 优化
npm install  npm-run-all --save-dev 
```js
    "scripts": {
        "dev_build": "webpack --config webpack.server.js --watch",
        "dev_start": "nodemon --watch build --exec node ./build/bundle.js",
        "dev": "npm-run-all --parallel dev_**" //同时执行以dev_开头的命令
    }
```
