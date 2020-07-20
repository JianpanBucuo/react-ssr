import * as constant from './actionTypes'
const defaultState = {
    translationList: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.getTranslationListType: return Object.assign({}, state, { translationList: action.translationList })
        default: return state
    }
}