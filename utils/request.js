import axios from 'axios'
import { Message } from 'element-ui'
import cookie from 'js-cookie'

const service = axios.create({
  baseURL: 'http://localhost:8657',
  timeout: 15000
})

service.interceptors.request.use(config => {
  // token will be handled later
  if (cookie.get('token')) {
    config.headers['token'] = cookie.get('token')
  }
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(response => {

  // ask for login if response code is 208
  if (response.data.code === 208) {
    loginEvent.$emit('loginDialogEvent')
    return
  } else {
    if (response.data.code !== 200) {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(response.data)
    } else {
      return response.data;
    }
  }
}, error => {
  return Promise.reject(error.response)
})

export default service