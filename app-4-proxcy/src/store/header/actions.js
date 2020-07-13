import * as constant from './actionTypes'

export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
        console.log('in getheaderinfo')
        return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE').then(res => {
            console.log(res.data.data.login)
            dispatch(changeLogin(res.data.data.login))
        })
    }
}
export const changeLogin = (value) => {
    return {
        type: constant.changeLoginType,
        value
    }
}