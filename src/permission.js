import router from './router'
import store from './store/index'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import {
  getLeftNav
} from "@/api/user";
import db from "@/utils/localstorage"
import {filterAsyncRouter} from "@/utils/filterRouter" 
NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist
var getRouter
console.log(getRouter);

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // 设置页面title
  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      const hasGetUserInfo = store.getters.name
      if (getObjArr('router')) {
        next()
      } else {
        try {
          // console.log(db.get('USER_ROUTER'))
          if (getRouter == undefined) {
            if (!getObjArr('router')) {
              getLeftNav().then((res) => {
                getRouter = res.result.lists
                getRouter = filterAsyncRouter(getRouter)
                saveObjArr('router', getRouter)
                store.commit('account/setRoutes', getRouter)
                router.addRoutes(getRouter)
                router.options.routes = router.options.routes.concat(getRouter)
                next()
              });
            } else {
              // routerGo(to, next)
              getRouter = getObjArr('router')
              getRouter = filterAsyncRouter(getRouter)
              router.addRoutes(getRouter)
              router.options.routes = router.options.routes.concat(getRouter)
              next()
            }
          }
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          // Message.error(error || 'Has Error')
          Message.error({ message: error || 'Has Error' })
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
// function routerGo(to, next) {
//   // console.log(getRouter);
//   getRouter = filterAsyncRouter(getRouter) //过滤路由
//   router.addRoutes(getRouter) //动态添加路由
//   // global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
//   next({
//     ...to,
//     replace: true
//   })
// }

function saveObjArr(name, data) { //localStorage 存储数组对象的方法
  localStorage.setItem(name, JSON.stringify(data))
}

function getObjArr(name) { //localStorage 获取数组对象的方法
  return JSON.parse(window.localStorage.getItem(name));

}

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
