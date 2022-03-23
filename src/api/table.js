import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getFormList(params) {
  return request({
    url: '/vue-admin-template/dialogTable/list',
    method: 'get',
    params
  })
}
