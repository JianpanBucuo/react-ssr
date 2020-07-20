import * as constant from './actionTypes'

export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE').then(res => {
            dispatch(changeLogin(res.data.data.login))
        })
    }
}
const changeLogin = (value) => {
    return {
        type: constant.changeLoginType,
        value
    }
}
export const loginEvent = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/login.json?secret=PP87ANTIPIRATE').then(res => {
            dispatch(changeLogin(true))
        })
    }
}
export const logOutEvent = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/logOut.json?secret=PP87ANTIPIRATE').then(res => {
            dispatch(changeLogin(false))
        })
    }
}