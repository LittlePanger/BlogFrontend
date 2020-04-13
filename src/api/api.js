import http from './base'
const baseUrl = 'http://127.0.0.1:8000'
// 归档
export const pageFolder = (params) => {
  return http.fetchGet(`${baseUrl}/api/page/folder`, params)
};
// 留言
export const pageComment = (params) => {
  return http.fetchGet(`${baseUrl}/api/page/comment`, params)
};
// 关于
export const pageAbout = (params) => {
  return http.fetchGet(`${baseUrl}/api/page/about`, params)
};
// mobile社交
export const socialInfo = (params) => {
  return http.fetchGet(`${baseUrl}/api/socialInfo`, params)
};
// 个人信息
export const personalInfo = (params) => {
  return http.fetchGet(`${baseUrl}/api/personalInfo`, params)
};
