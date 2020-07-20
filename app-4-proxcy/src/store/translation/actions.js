import * as constant from './actionTypes'

export const getTranslationListEvent = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/translations.json?secret=PP87ANTIPIRATE').then(res => {
            let list = []
            if (res.data.success === true) {
                list = res.data.data
            }
            dispatch(getList(list))
        })
    }
}
const getList = (translationList) => {
    return {
        type: constant.getTranslationListType,
        translationList
    }
}