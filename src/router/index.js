import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../page/index'
// const Login = () => import('@/page/login')写法是vue-router 按需加载
const Login = () => import('../page/login');


Vue.use(Router)

export default new Router({
  // mode: 'history',  // 去掉#
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {path: '/login',name: 'login',component: Login}
  ]
})
