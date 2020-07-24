import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config'
const App = () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <Fragment>
                    {/* {Routes.map(v => {
                        return <Route {...v}></Route>
                    })} */}
                    {renderRoutes(Routes)}
                </Fragment>
            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(App(), document.getElementById('root'))