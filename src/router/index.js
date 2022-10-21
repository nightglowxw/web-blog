import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '@/views/index/IndexView'
import LayOut from '@/views/layout'
import Forbidden from '@/views/errorpage/Forbidden'
import NotFound from '@/views/errorpage/NotFound'

// 解决 NavigationDuplicated 错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // },
  {
    path: '/',
    name: 'layout',
    component: LayOut,
    meta: {
      name: '首页'
    },
    children: [
      {
        path: '/',
        name: 'index',
        component: IndexView,
        children: [
          {
            path: '/',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/index/components/LeftView.vue'
              )
          },
          {
            path: '/nav/0',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/index/components/LeftView.vue'
              )
          },
          {
            path: '/nav/1',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/index/components/CodeView.vue'
              )
          },
          {
            path: '/nav/2',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/index/components/ItemsWritten.vue'
              )
          },
          {
            path: '/nav/3',
            component: () =>
              import(
                /* webpackChunkName: "about" */ '../views/index/components/ElementUi.vue'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/403',
    name: '403',
    component: Forbidden
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
