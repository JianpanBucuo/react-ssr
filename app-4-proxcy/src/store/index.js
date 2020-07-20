import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from './home'
import { reducer as headerRducer } from './header'
import { reducer as translationReducer } from './translation'
import clientAxios from '../client/request'
import createInstance from '../server/request'
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose
const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(clientAxios)),
    // other store enhancers if any
);
const reducer = combineReducers({
    home: homeReducer,
    header: headerRducer,
    translation: translationReducer
})

const getStore = (req) => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(createInstance(req))))
}

export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, enhancer)
}
export default getStore