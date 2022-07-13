import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '@/views/index/IndexView'

Vue.use(VueRouter)

const routes = [
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
            /* webpackChunkName: "about" */ '../views/index/components/ElementUi.vue'
          )
      }
      // {
      //   path: '/nav/:id',
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "about" */ '../views/index/components/NavView.vue'
      //     )
      // }
    ]
  }
  // {
  //   path: '/login',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/login/LoginView.vue')
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
