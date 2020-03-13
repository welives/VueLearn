import request from '@/plugins/axios'

// 这里封装api请求
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post',
    token: true
  })
}
