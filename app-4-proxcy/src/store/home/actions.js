import * as constant from './actionTypes'

const changList = (list) => {
    return {
        type: constant.CHANGE_LIST,
        list
    }
}

export const getHomeListAction = () => {
    let request = null
    return async (dispatch, getState, axiosInstance) => {
        // http://192.168.1.6:3000/list-demo.json
        // axios.get('http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE')

        return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE').then(res => {
            const list = res.data.data
            dispatch(changList(list))
        })
    }
}