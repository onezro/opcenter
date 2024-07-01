import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'
// import { getParentLayout } from '@/utils/routerHelper'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Root',
    meta: {
      hidden: true,

    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: '登录',

    }
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Dashboard',
    meta: {
      title: '首页',
      icon: 'House',

    },
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/Dashboard/Analysis.vue'),
        name: 'Analysis',
        meta: {
          title: '首页',
          icon: 'House',
          affix: true
        }
      },

    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/role',
    name: 'Permission',
    meta: {
      title: '系统管理',
      icon: 'Monitor',
    },
    children: [
      {
        path: 'role',
        component: () => import('@/views/permission/role.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'Avatar'
        }
      },
      {
        path: 'menu',
        component: () => import('@/views/permission/menu.vue'),
        name: 'Menu',
        meta: {
          title: '菜单管理',
          icon: 'Tickets'
        }

      },
      {
        path: 'empolyee',
        component: () => import('@/views/permission/empolyee.vue'),
        name: 'Empolyee',
        meta: {
          title: '员工管理',
          icon: 'User'
        }

      },
    ]
  },
  // {
  //   path: '/404',
  //   component: () => import('@/views/Error/404.vue'),
  //   name: 'NoFind',
  //   meta: {

  //     title: '404',

  //   }
  // }
]

export const asyncRouterMap = [

  // {
  //   path: '/guide',
  //   component: Layout,
  //   name: 'Guide',
  //   meta: {},
  //   children: [
  //     {
  //       path: 'guide',
  //       component: () => import('@/views/Guide/Guide.vue'),
  //       name: 'GuideDemo',
  //       meta: {
  //         title: '引导',
  //         icon: 'Location'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/level',
  //   component: Layout,
  //   // redirect: '/level/menu1/menu1-1-1',
  //   name: 'Level',
  //   meta: {
  //     title: '多级菜单',
  //     icon: 'FolderOpened'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       name: 'Menu1',
  //       // redirect: '/level/menu1/menu1-1-1',
  //       // component: () => import('@/views/Level/index1.vue'),
  //       meta: {
  //         title: '菜单1'
  //       },
  //       children: [
  //         {
  //           path: 'menu1-1-1',
  //           name: 'Menu111',
  //           component: () => import('@/views/Level/Menu111.vue'),
  //           meta: {
  //             title: '菜单111'
  //           }
  //         },
  //         {
  //           path: 'menu1-2',
  //           name: 'Menu12',
  //           component: () => import('@/views/Level/Menu12.vue'),
  //           meta: {
  //             title: '菜单12'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       name: 'Menu2',
  //       component: () => import('@/views/Level/Menu2.vue'),
  //       meta: {
  //         title: '菜单2'
  //       }
  //     }
  //   ]
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap as RouteRecordRaw[]
})



export default router