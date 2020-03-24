import http from './base'
const baseUrl = 'http://127.0.0.1:5000'
// 关于
export const pageAbout = (params) => {
  return http.fetchGet(`${baseUrl}/about`, params)
}
