import request from '@/utils/request'

const api = '/api/order/orderInfo';

export default {
  submitOrder(scheduleId, patientId) {
    return request({
      url: `${api}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: 'post'
    })
  },
  getOrders(orderId) {
    return request({
      url: `${api}/auth/getOrders/${orderId}`,
      method: 'get'
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api}/auth/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  getStatusList() {
    return request({
      url: `${api}/auth/getStatusList`,
      method: 'get',
    })
  },
  cancelOrder(orderId) {
    return request({
      url: `${api}/auth/cancelOrder/${orderId}`,
      method: 'get',
    })
  }
}