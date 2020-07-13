import * as constant from './actionTypes'
const defaultState = {
    newsList: [],
    name: 'nic1'
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.CHANGE_LIST: return Object.assign({}, state, { newsList: action.list })
        default: return state
    }
}