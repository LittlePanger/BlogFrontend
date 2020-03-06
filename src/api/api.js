import http from './public'
const baseUrl = '/api'
// 电脑列表
export const getComputer = (params) => {
  return http.fetchGet(`${baseUrl}/goods/computer`, params)
}
