 
## 同构

问题：
1. 服务器渲染 renderToString 这个方法 不会把事件渲染出来， 只会渲染组件的基础内容
解决方法：
1. 在服务器端把页面渲染出来，并返回给浏览器后，并把相同的代码在浏览器再次运行一次

###同构
一套代码在服务器端运行一次，在浏览器执行一次

### 同构步骤
1. 服务器端运行react代码渲染出html
2. 发送html给浏览器
3. 浏览器接收到内容展示（事件绑定不生效）
4. 浏览器加载js文件
5. js中的react代码在浏览器端重新执行（事件绑定生效）
6. js中的react代码接管页面操作



# 客户端渲染步骤
1. 浏览器发送请求
2. 服务器返回html
3. 浏览器发送js请求
4. 服务器返回js文件
5. 浏览器执行js中的代码渲染页面
6. js代码拿到浏览器上的地址
7. js代码根据返回地址返回不同地路由内容

服务器渲染只发生在第一次访问页面的时候

## 中间层
计算性能更好（java, c++）

## 引入redux

## 异步数据服务端渲染： 
1. 构建loadData方法
2. 路由重构

## 数据的脱水和注水
