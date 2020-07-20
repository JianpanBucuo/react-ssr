// import { Route } from 'react-router-dom'
// import React from 'react'
import Home from './containers/home'
import Translation from './containers/translation'
import NotFound from './containers/notFound'
import App from './app'
export default [{
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
        {
            path: '/',
            component: Home,
            exact: true,
            loadData: Home.loadData,
            key: 'home',

        },
        {
            path: '/translation',
            component: Translation,
            exact: true,
            loadData: Translation.loadData,
            key: 'translation'
        },
        {
            component: NotFound,

            key: 'notFound'
        }
    ]
}]

// export default (
//     <div>
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/login' exact component={Login}></Route>
//     </div>
// )
