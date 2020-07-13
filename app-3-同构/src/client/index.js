import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore, { getClientStore } from '../store'

const App = () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <Fragment>
                    {Routes.map(v => {
                        return <Route {...v}></Route>
                    })}
                </Fragment>

            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(App(), document.getElementById('root'))