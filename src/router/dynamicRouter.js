const dynamicRouter = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
    meta: {
    }
  },
  {
    path: '/user-admin',
    name: 'user-admin',
    component: () => import('@/views/user-admin/index'),
    meta: {
      name: '用户管理',
      icon: 'el-icon-user'

    },
    children: [
      {
        path: 'audit-list',
        name: 'audit-list',
        component: () => import('@/views/user-admin/audit-list'),
        meta: {
          name: '审核列表',
          icon: 'el-icon-edit'
        }
      },
      {
        path: 'user-list',
        name: 'user-list',
        component: () => import('@/views/user-admin/user-list'),
        meta: {
          name: '用户列表',
          icon: 'el-icon-coordinate'
        }
      },
      {
        path: 'user-grade-management',
        name: 'user-grade-management',
        component: () => import('@/views/user-admin/user-grade-management'),
        meta: {
          name: '用户等级管理',
          icon: 'el-icon-data-line'
        }
      }
    ]
  },
  {
    path: '/order-management',
    name: 'order-management',
    component: () => import('@/views/order-management'),
    meta: {
      name: '订单管理',
      icon: 'el-icon-document-copy'
    },
    children: [
      {
        path: 'identify-order',
        name: 'identify-order',
        component: () => import('@/views/order-management/identify-order'),
        meta: {
          name: '专业鉴定订单',
          icon: 'el-icon-medal'
        }
      },
      {
        path: 'turing-order',
        name: 'turing-order',
        component: () => import('@/views/order-management/turing-order'),
        meta: {
          name: '图灵鉴定订单',
          icon: 'el-icon-trophy'
        }
      }
    ]
  },
  {
    path: '/identify-management',
    name: 'identify-management',
    component: () => import('@/views/identify-management'),
    meta: {
      name: '鉴别管理',
      icon: 'el-icon-edit-outline'
    },
    children: [
      {
        path: 'category-management',
        name: 'category-management',
        component: () => import('@/views/identify-management/category-management'),
        meta: {
          name: '品类管理',
          icon: 'el-icon-box'
        }
      },
      {
        path: 'brand-management',
        name: 'brand-management',
        component: () => import('@/views/identify-management/brand-management'),
        meta: {
          name: '品牌管理',
          icon: 'el-icon-bank-card'
        }
      }

    ]
  },
  {
    path: '/marketing-campaign',
    name: 'marketing-campaign',
    component: () => import('@/views/marketing-campaign'),
    meta: {
      name: '营销活动',
      icon: 'el-icon-date'
    },
    children: [{
      path: 'free-appraisal',
      name: 'free-appraisal',
      component: () => import('@/views/marketing-campaign/free-appraisal'),
      meta: {
        name: '免费鉴定',
        icon: 'el-icon-view'
      }
    }]
  },
  {
    path: '/system-setting',
    name: 'system-setting',
    component: () => import('@/views/system-setting/setting'),
    meta: {
      name: '系统设置',
      icon: 'el-icon-setting'
    }
  },
  {
    path: '/lecturer-management',
    name: 'lecturer-management',
    component: () => import('@/views/lecturer-management/index.vue'),
    meta: {
      name: '讲师管理',
      icon: 'el-icon-school'
    }
  },
  {
    path: '/funds-management',
    name: 'funds-management',
    component: () => import('@/views/funds-management'),
    meta: {
      name: '资金管理',
      icon: 'el-icon-money'
    },
    children: [{
      path: 'withdrawal-list',
      name: 'withdrawal-list',
      component: () => import('@/views/funds-management/withdrawal-list'),
      meta: {
        name: '提现列表',
        icon: 'el-icon-coin'
      }
    }]
  },
  {
    path: '/content-setting',
    name: 'content-setting',
    component: () => import('@/views/content-setting'),
    meta: {
      name: '内容设置',
      icon: 'el-icon-folder-opened'
    },
    children: [
      {
        path: 'banner-management',
        name: 'banner-management',
        component: () => import('@/views/content-setting/banner-management'),
        meta: {
          name: 'banner管理',
          icon: 'el-icon-notebook-2'
        }
      },
      {
        path: 'study-management',
        name: 'study-management',
        component: () => import('@/views/content-setting/study-management'),
        meta: {
          name: '鉴定学堂管理',
          icon: 'el-icon-office-building'
        }
      }
    ]
  },
  {
    path: '/authority-management',
    name: 'authority-management',
    component: () => import('@/views/authority-management'),
    meta: {
      name: '权限管理',
      icon: 'el-icon-unlock'
    },
    children: [
      {
        path: 'role-details',
        name: 'role-details',
        component: () => import('@/views/authority-management/role-details'),
        meta: {
          name: '添加新角色',
          icon: 'el-icon-folder-add'
        }
      },
      {
        path: 'role-management',
        name: 'role-management',
        component: () => import('@/views/authority-management/role-management'),
        meta: {
          name: '角色管理',
          icon: 'el-icon-notebook-1'
        }
      },
      {
        path: 'account-management',
        name: 'account-management',
        component: () => import('@/views/authority-management/account-management'),
        meta: {
          name: '账号管理',
          icon: 'el-icon-collection'
        }
      }
    ]
  }
]

export default dynamicRouter
