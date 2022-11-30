import request from '@/utils/request'

const api = '/api/msm';

export default {
  sendCode(mobile) {
    return request({
      url: `${api}/send/${mobile}`,
      method: 'get'
    })
  }
}