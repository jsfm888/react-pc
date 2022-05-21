//封装axios
//实例化 请求拦截器 响应拦截器
import axios from 'axios'
import { getToken } from './token'

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

//添加请求拦截器
http.interceptors.request.use((config) => {
  const token = getToken()
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

//添加响应拦截器
http.interceptors.response.use((response) => {
  //2xx的状态码会触发该函数
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export { http }