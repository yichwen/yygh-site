import request from '@/utils/request'

const api = '/api/ucenter/wx';

export default {
  getLoginParam() {
    return request({
      url: `${api}/getLoginParam`,
      method: 'get'
    })
  },
  createNative(orderId) {
    return request({
      url: `/api/order/weixin/createNative/${orderId}`,
      method: 'get'
    })
  },
  queryPayStatus(orderId) {
    return request({
      url: `/api/order/weixin/queryPayStatus/${orderId}`,
      method: 'get'
    })
  }
}