import * as constant from './actionTypes'
const defaultState = {
    login: false
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.changeLoginType: return {
            ...state, login: action.value
        }

        default: return state
    }
}