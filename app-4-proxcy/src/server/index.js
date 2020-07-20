import express from 'express'
import { render } from './utils'
import getStore from '../store'
import { matchRoutes } from 'react-router-config'
import { matchPath } from 'react-router-dom'
import Routes from '../Routes'
import proxy from 'express-http-proxy'


const app = express()
app.use(express.static('public'))
app.use('/api', proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
        // http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE
        return '/ssr/api' + req.url
    }
}));
app.get('*', (req, res) => {
    const store = getStore(req)
    // const matchedRoutes = []
    // Routes.some(route => {
    //     const match = matchPath(req.path, route)
    //     if (match) {
    //         matchedRoutes.push(route)
    //     }
    // })
    const matchedRoutes = matchRoutes(Routes, req.path)
    const promise = []
    matchedRoutes.forEach(v => {
        // 多级路由服务端渲染
        if (v.route.loadData) {

            promise.push(v.route.loadData(store))
        }
        v.route.routes && v.route.routes.map(v => {
            if (v.loadData) {
                promise.push(v.loadData(store))
            }
        })

    })
    Promise.all(promise).then(() => {
        const context = { a: 1 }
        const html = render(req, store, Routes, context)
        console.log(context)
        if (context.notFound == true) {
            res.status(404)
        }
        if (context.action === 'REPLACE') {
            res.redirect(301, context.url)
            return
        }
        res.send(html)
    }).catch(() => {
        res.send('')
    })
})
app.listen(3000, '192.168.1.7', () => {
    console.log('启动服务')
})
// http://47.95.113.63/ssr/api/isLogin.json?secret=PP87ANTIPIRATE
// http://47.95.113.63/ssr/api/login.json?secret=PP87ANTIPIRATE
// http://47.95.113.63/ssr/api/logOut.json?secret=PP87ANTIPIRATE
// http://47.95.113.63/ssr/api/translations.json?secret=PP87ANTIPIRATE