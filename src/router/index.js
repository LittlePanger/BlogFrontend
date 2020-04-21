import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import index from '../page/index'
// const Login = () => import('@/page/login')写法是vue-router 按需加载
const Index = () => import('../page/blog/index');
const Home = () => import('../page/blog/home');
const Login = () => import('../page/blog/login');
const Folder = () => import('../page/blog/folder');
const Comment = () => import('../page/blog/comment');
const About = () => import('../page/blog/about');
const ArticleCom = () => import('../page/blog/article');
const Test = () => import('../page/test/test');
const IndexCMS = () => import('../page/cms/index');
const DashboardCMS = () => import('../page/cms/dashboard');
const FolderCMS = () => import('../page/cms/folder');
const CommentCMS = () => import('../page/cms/comment');
const SettingsCMS = () => import('../page/cms/settings');
const ArticleCMS = () => import('../page/cms/article');

Vue.use(Router)

export default new Router({
  mode: 'history',  // 去掉#
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: '/folder', name: 'folder', component: Folder},
        {path: '/comment', name: 'comment', component: Comment},
        {path: '/about', name: 'about', component: About},
        {path: '/article/:year/:month/:day/:name', name: 'article', component: ArticleCom},
      ],
    },
    {path: '/home', component: Home},
    {path: '/account/login', name: 'login', component: Login},
    {path: '/test', name: 'test', component: Test},
    {
      path: '/cms',
      name: 'indexCMS',
      component: IndexCMS,
      children: [
        {path: '/cms/dashboard', name: 'dashboardCMS', component: DashboardCMS},
        {path: '/cms/folder', name: 'folderCMS', component: FolderCMS},
        {path: '/cms/comment', name: 'commentCMS', component: CommentCMS},
        {path: '/cms/settings', name: 'settingsCMS', component: SettingsCMS},
        {path: '/cms/article/:year/:month/:day/:name', name: 'articleCMS', component: ArticleCMS},
      ]
    },
  ]
})
