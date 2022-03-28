import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '主页',
        icon: 'dashboard'
      }
    }]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: 'Example',
    meta: {
      title: '用户',
      icon: 'el-icon-user-solid'
    },
    children: [{
        path: 'list',
        name: 'userList',
        component: () => import('@/views/user/userList/index'),
        meta: {
          title: '用户列表'
        }
      },
      {
        path: 'type',
        name: 'userType',
        component: () => import('@/views/user/userType/index'),
        meta: {
          title: '用户类型'
        }
      },
      {
        path: 'record',
        name: 'userRecord',
        component: () => import('@/views/user/userRecord/index'),
        meta: {
          title: '用户练习记录'
        }
      },
      {
        path: 'tag',
        name: 'userTag',
        component: () => import('@/views/user/userTag/index'),
        meta: {
          title: '用户标签'
        }
      },
      {
        path: 'role',
        name: 'roleList',
        component: () => import('@/views/role/index'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'router',
        name: 'router',
        component: () => import('@/views/router/index'),
        meta: {
          title: '路由管理'
        }
      },

    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/refund',
    name: 'Example',
    meta: {
      title: '订单',
      icon: 'el-icon-s-order'
    },
    children:[
      {
        path: 'refund',
        name: 'refund',
        component: () => import('@/views/order/refund/index'),
        meta: {
          title: '退款订单'
        }
      },
      {
        path: 'member',
        name: 'member',
        component: () => import('@/views/order/member/index'),
        meta: {
          title: '会员订单'
        }
      },
      {
        path: 'nowOrder',
        name: 'nowOrder',
        component: () => import('@/views/order/NowOrder/index'),
        meta: {
          title: 'Now贝订单'
        }
      },
      {
        path: 'course',
        name: 'course',
        component: () => import('@/views/order/course/index'),
        meta: {
          title: '课程订单'
        }
      },
      {
        path: 'appraisal',
        name: 'appraisal',
        component: () => import('@/views/order/appraisal/index'),
        meta: {
          title: '测评订单'
        }
      },
    ]
  },
  {
    path: '/inquire',
    component: Layout,
    redirect: '/inquire/order',
    name: 'Example',
    meta: {
      title: '查询',
      icon: 'el-icon-search'
    },
    children:[
      {
        path: 'queryOrder',
        name: 'queryOrder',
        component: () => import('@/views/inquire/order/index'),
        meta: {
          title: '查询订单'
        }
      },
      {
        path: 'succeed',
        name: 'succeed',
        component: () => import('@/views/inquire/succeed/index'),
        meta: {
          title: '无忧卡未成功支付'
        }
      },
      {
        path: 'failing',
        name: 'failing',
        component: () => import('@/views/inquire/failing/index'),
        meta: {
          title: '双11298未成功支付'
        }
      }
    ]
  },
  {
    path: '/teachers',
    component: Layout,
    redirect: '/teachers/authentication',
    name: 'Example',
    meta: {
      title: '师资',
      icon: 'el-icon-user'
    },
    children:[
      {
        path: 'authentication',
        name: 'authentication',
        component: () => import('@/views/teachers/authentication/index'),
        meta: {
          title: '认证老师'
        }
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import('@/views/teachers/feedback/index'),
        meta: {
          title: '学员反馈'
        }
      },
      {
        path: 'commonProblem',
        name: 'commonProblem',
        component: () => import('@/views/teachers/commonProblem/index'),
        meta: {
          title: '常见问题'
        }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]


export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   name: '权限测试',
  //   meta: {
  //     role: ['admin', 'super_editor']
  //   }, //页面需要的权限
  //   children: [{
  //     path: 'index',
  //     component: Permission,
  //     name: '权限测试页',
  //     meta: {
  //       role: ['admin', 'super_editor']
  //     } //页面需要的权限
  //   }]
  // },
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // }
];


const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
