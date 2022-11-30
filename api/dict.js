import request from '@/utils/request'

const api = '/admin/cmn/dict';

export default {
  findByDictCode(dictCode) {
    return request({
      url: `${api}/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  findByParentId(parentId) {
    return request({
      url: `${api}/findChildData/${parentId}`,
      method: 'get'
    })
  }
}