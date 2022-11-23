import axios from 'axios'
import router from '../router'
import {Toast} from "vant";


// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//     axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

const request = axios.create({
    baseURL: 'http://localhost:8088',
    timeout: 5000,
})
//请求拦截
// request.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token')
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config
//     },
//     (error) => Promise.reject(error),
// )

request.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('token')
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        // return config

        const token = localStorage.getItem('Authorization')
        if (config.url !== "/login") {
            if (token !== null)
                config.headers.common['X-Auth-Token'] = token
        }
        return config
    },
    (error) => Promise.reject(error),
)

// 响应拦截
// request.interceptors.response.use(
//     (response) => response,
//     ({ response }) => {
//         const { status, data } = response
//         const { message } = data
//         // Message.error(message)
//         if (status === 401) router.push("/403")
//         return Promise.reject(error)
//     },
// )

request.interceptors.response.use(
    res => {
        if (res.data.code === 401) {
            // if (res.data.msg ==)
            router.push("/login")
            Toast(res.data.msg)
        } else if (res.data.code === 403) {
            router.push("/403")
            Toast("没有权限")
        }
        return res;
    },
    error => {
        return Promise.reject(error)
    }
)

export default request
