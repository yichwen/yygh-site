import request from '@/utils/request'

const api = '/api/user/patient';

export default {
  findList() {
    return request({
      url: `${api}/auth/findAll`,
      method: 'get'
    })
  },
  save(patient) {
    return request({
      url: `${api}/auth/save`,
      method: 'post',
      data: patient
    })
  },
  getById(id) {
    return request({
      url: `${api}/auth/get/${id}`,
      method: 'get'
    })
  },
  updateById(patient) {
    return request({
      url: `${api}/auth/update`,
      method: 'post',
      data: patient
    })
  },
  removeById(id) {
    return request({
      url: `${api}/auth/remove/${id}`,
      method: 'delete',
    })
  },

  
}