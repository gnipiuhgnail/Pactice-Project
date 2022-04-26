import Layout from '@/layout'
const routes = [{
  path: '/networkset',
  component: Layout,
  meta: { title: '网络设置', meta: '/networkset' },
  children: [{
      path: 'topology',
      name: 'topology',
      component: () => import('@/views/networkSet/topology/index'),
      meta: { title: '网络拓扑', meta: '/topology' },
    },{
      path: 'supplier',
      name: 'supplier',
      redirect: '/networkset/supplier/gateway',
      component: () => import('@/views/networkSet/index'),
      children: [{
        path: 'gateway',
        name: 'gateway',
        component: () => import('@/views/networkSet/suppliers/gateway'),
        meta: { title: '供应商网关', meta: '/gateway' },
      },{
          path: 'ports',
          name: 'vendorsPorts',
          component: () => import('@/views/networkSet/suppliers/ports'),
          meta: { title: '供应商端口', meta: '/ports' },
        }]
    }
  ]
}]
export default routes
