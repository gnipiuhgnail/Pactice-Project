import Layout from '@/layout'
const routes = [{
  path: '/networkmanagement',
  component: Layout,
  meta: { title: '网监管理', meta: '/networkmanagement' },
  children: [{
    path: 'entrance',
    name: 'entrance',
    component: () => import('@/views/networkMonitor/entrance/index'),
    meta: { title: '网监入口', meta: '/entrance' },
  },{
    path: 'networkset',
    name: 'networkSet',
    redirect: '/networkmanagement/networkset/index',
    component: () => import('@/views/networkMonitor/index'),
    children: [{
      path: 'index',
      name: 'networkSetting',
      component: () => import('@/views/networkMonitor/networkSet/index'),
      meta: { title: '网监设置', meta: '/index' },
    },{
      path: 'list',
      name: 'devicesList',
      component: () => import('@/views/networkMonitor/networkSet/list'),
      meta: { title: '设备列表', meta: '/list' },
    }]
  },{
    path: 'blacklist',
    name: 'blacklist',
    component: () => import('@/views/networkMonitor/blackList/index'),
    meta: { title: 'IP黑名单', meta: '/blacklist' },
  }]
}]
export default routes
