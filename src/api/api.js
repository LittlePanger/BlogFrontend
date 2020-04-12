import http from './base'
const baseUrl = 'http://127.0.0.1:8000'
// 关于
export const pageAbout = (params) => {
  return http.fetchGet(`${baseUrl}/api/page/about`, params)
};
// 留言
export const pageComment = (params) => {
  return http.fetchGet(`${baseUrl}/api/page/comment`, params)
};
