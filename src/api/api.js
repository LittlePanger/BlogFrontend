import http from './base'
export const baseUrl = 'http://127.0.0.1:8000'
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
// 导航
export const navBar = (params) => {
  return http.fetchGet(`${baseUrl}/api/navBar`, params)
};
// 文章
export const articleAPI = (params) => {
  return http.fetchGet(`${baseUrl}/api/article`, params)
};
// 首页文章详情
export const articleDetailHome = (params) => {
  return http.fetchGet(`${baseUrl}/api/articleDetail/home`, params)
};
// 归档文章详情
export const articleDetailFolder = (params) => {
  return http.fetchGet(`${baseUrl}/api/articleDetail/folder`, params)
};
// 留言板提交留言
export const commentSubmit = (params) => {
  return http.fetchPost(`${baseUrl}/api/comment`, params)
};
