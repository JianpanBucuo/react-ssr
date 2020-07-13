import React, { Fragment } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

export const render = (req, store, Routes) => {

    // 难道异步数据，并填充到store之中
    // store里填充什么，需要结合当前用户请求地址和路由来判断
    // 根据路由路径，往store里加数据


    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Fragment>
                    {/* {Routes.map(routes => {
                        return <Route {...routes}></Route>
                    })} */}
                    {renderRoutes(Routes)}
                </Fragment>
            </StaticRouter>
        </Provider>
    ))
    return `
            <html>
                <title>React ssr</title>
                <body>
                    <div id='root'>${content}</div>
                    <script>
                        window.context = {
                            state:${JSON.stringify(store.getState())}
                        }
                    </script>
                    <script src='./index.js'></script>
                </body>
            </html>
        `
}