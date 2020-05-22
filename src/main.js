// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/e-icon.css'
import mouse from '../static/js/mouseClick'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mouse);
Vue.use(mavonEditor);


//进度条
NProgress.inc(0.2);
NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from , next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path.startsWith('/cms')){
    if (!localStorage.getItem('accessToken')){
      next({name: 'login'})
    }
  }
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
})

router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
