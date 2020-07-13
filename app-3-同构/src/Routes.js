import { Route } from 'react-router-dom'
import React from 'react'
import Home from './containers/home'
import Login from './containers/login'
export default [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',

    },
    {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
    }
]
// export default (
//     <div>
//         <Route path='/' exact component={Home}></Route>
//         <Route path='/login' exact component={Login}></Route>
//     </div>
// )
