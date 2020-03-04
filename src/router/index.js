import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '../page/index'
// const Login = () => import('@/page/login')写法是vue-router 按需加载
const Index = () => import('../page/index');
const Home = () => import('../page/home');
const Login = () => import('../page/login');
const Folder = () => import('../page/folder');
const Comment = () => import('../page/comment');


Vue.use(Router)

export default new Router({
  mode: 'history',  // 去掉#
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect:'/home',
      children: [
        {path: '/folder',name: 'folder',component: Folder},
        {path: '/comment',name: 'comment',component: Comment},
      ],
    },
    {path: '/home', component: Home},
    {path: '/login',name: 'login',component: Login},
  ]
})
