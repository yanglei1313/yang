import request from '@/utils/request'





//获取权限树
export function getAuthTree() {
  return request({
    url: '/config/getauthtree',
    method: 'post'
  })
}


//
export function getAuth(data) {
  return request({
    url: '/config/getAuth',
    method: 'post',
    data
  })
}

//新增权限
export function addAuth(data) {
  return request({
    url: '/config/addAuth', 
    method: 'post',
    data
  })
}


//编辑权限
export function modifyAuth(data) {
  return request({
    url: '/config/modifyAuth', 
    method: 'post',
    data
  })
}

//获取角色列表
export function getRole(data) {
  return request({
    url: '/config/getRole', 
    method: 'post',
    data
  })
}

//新增/编辑角色
export function editRole(data) {
  return request({
    url: '/config/editRole', 
    method: 'post',
    data
  })
}

//删除角色
export function deleteRole(data) {
  return request({
    url: '/config/deleteRole', 
    method: 'post',
    data
  })
}

//新增用户
export function addUser(data) {
  return request({
    url: '/member/addUser', 
    method: 'post',
    data
  })
}
