import express from 'express'
import React from 'react'
import Home from './containers/home'
import { renderToString } from 'react-dom/server'

const app = express()
const content = renderToString(<Home></Home>)
app.get('/', (req, res) => {
    res.send(`
        <html>
            <title>React ssr</title>
        </html>
        <body>
        ${content}
        </body>
    `)
})
app.listen(3000, () => {
    console.log('启动服务')
})