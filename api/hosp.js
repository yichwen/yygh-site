import request from '@/utils/request'

const api = '/api/hosp/hospital';

export default {
  // query hospital list
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api}/findHospList/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  // search by ambiguous name
  getByHosname(hosname) {
    return request({
      url: `${api}/findByHosname/${hosname}`,
      method: 'get'
    })
  },
  show(hoscode) {
    return request({
      url: `${api}/findHospDetail/${hoscode}`,
      method: 'get'
    })
  },
  findDepartment(hoscode) {
    return request({
      url: `${api}/department/${hoscode}`,
      method: 'get'
    })
  },
  getBookingScheduleRule(page, limit, hoscode, depcode) {
    return request({
      url: `${api}/auth/getBookingScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
      method: 'get'
    })
  },
  findScheduleList(hoscode, depcode, workDate) {
    return request({
      url: `${api}/auth/findScheduleList/${hoscode}/${depcode}/${workDate}`,
      method: 'get'
    })
  },
  getSchedule(id) {
    return request({
      url: `${api}/auth/getSchedule/${id}`,
      method: 'get'
    })
  }
}