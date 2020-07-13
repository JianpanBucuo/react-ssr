import express from 'express'
import { render } from './utils'
import getStore from '../store'
import { matchRoutes } from 'react-router-config'
import { matchPath } from 'react-router-dom'
import Routes from '../Routes'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = getStore()
    const matchedRoutes = []
    Routes.some(route => {
        const match = matchPath(req.path, route)
        if (match) {
            matchedRoutes.push(route)
        }
    })
    const promise = []
    matchedRoutes.forEach(v => {
        if (v.loadData) {
            promise.push(v.loadData(store))
        }
    })
    Promise.all(promise).then(() => {
        res.send(render(req, store, Routes))
    })
})
app.listen(3000, '192.168.1.6', () => {
    console.log('启动服务')
})