import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from './home'

const reducer = combineReducers({
    home: homeReducer
})

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}
export default getStore