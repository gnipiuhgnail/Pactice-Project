import Layout from '@/layout'
const routes = [{
  path: '/service',
  component: Layout,
  meta: { title: '客服服务', meta: '/service' },
  children: [{
    path: 'vps',
    name: 'vps',
    redirect: '/service/vps/index',
    component: () => import('@/views/customeService/index'),
    children: [{
      path: 'index',
      name: 'vpsIndex',
      component: () => import('@/views/customeService/VPS/index'),
      meta: { title: 'VPS管理', meta: '/index' },
    },{
      path: 'examine',
      name: 'vpsExamine',
      component: () => import('@/views/customeService/VPS/examine'),
      meta: { title: 'VPS审核', meta: '/examine' },
    },{
      path: 'manage',
      name: 'vpsManagement',
      component: () => import('@/views/customeService/VPS/manage'),
      meta: { title: 'VPS管理', meta: '/manage' },
    },{
      path: 'apply',
      name: 'vpsApply',
      component: () => import('@/views/customeService/VPS/apply'),
      meta: { title: 'VPS申请', meta: '/apply' },
    },{
      path: 'personal',
      name: 'vpsPersonal',
      component: () => import('@/views/customeService/VPS/personal'),
      meta: { title: '我的VPS', meta: '/personal' },
    },{
      path: 'record',
      name: 'vpsRecord',
      component: () => import('@/views/customeService/VPS/record'),
      meta: { title: 'VPS记录', meta: '/record' },
    }]
  },{
    path: 'idc',
    name: 'idc',
    redirect: '/service/idc/index',
    component: () => import('@/views/customeService/index'),
    children: [{
      path: 'index',
      name: 'idcIndex',
      component: () => import('@/views/customeService/IDC/index'),
      meta: { title: 'IDC客户', meta: '/index' },
    },{
      path: 'ipQuery',
      name: 'ipQuery',
      component: () => import('@/views/customeService/IDC/ipQuery'),
      meta: { title: '查询IP段', meta: '/ipQuery' },
    },{
      path: 'detail',
      name: 'IDCDetail',
      component: () => import('@/views/customeService/IDC/detail'),
      meta: { title: '客户详情', meta: '/detail' },
    }]
  },{
    path: 'finance',
    name: 'finance',
    component: () => import('@/views/customeService/finance/index'),
    meta: { title: '财务管理', meta: '/finance' },
  }]
}]
export default routes
