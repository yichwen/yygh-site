import request from '@/utils/request'

const api = '/api/user';

export default {
  login(userInfo) {
    return request({
      url: `${api}/login`,
      method: 'post',
      data: userInfo
    })
  },
  saveUserAuth(userAuth) {
    return request({
      url: `${api}/auth/userAuth`,
      method: 'POST',
      data: userAuth
    })
  },
  getUserInfo() {
    return request({
      url: `${api}/auth/getUserInfo`,
      method: 'get'
    })
  },

}