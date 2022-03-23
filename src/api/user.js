import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data,
    formData: true,
    // headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token },
    headers: { 'content-type': 'multipart/form-data;' },
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}


