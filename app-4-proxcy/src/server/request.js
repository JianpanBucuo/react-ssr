import axios from 'axios'

const createInstance = (req) => {
    console.log(req.get('cookie'))
    return axios.create({
        baseURL: 'http://47.95.113.63/ssr/',
        headers: {
            cookie: req.get('cookie') || ''
        }
    })
}
export default createInstance
