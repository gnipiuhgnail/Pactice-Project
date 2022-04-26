import Layout from '@/layout'
const routes = [{
  path: '/ip',
  component: Layout,
  meta: { title: 'IP地址', meta: '/interchanger' },
  children: [{
    path: 'ipv4',
    name: 'ipv4',
    redirect: '/ip/ipv4/list',
    component: () => import('@/views/ip/index'),
    children: [{
      path: 'list',
      name: 'ipv4List',
      component: () => import('@/views/ip/ipv4/index'),
      meta: { title: 'IPV4', meta: '/ipv4List' },
    },{
      path: 'distributionDetails',
      name: 'distributionDetails',
      component: () => import('@/views/ip/ipv4/distributionDetails'),
      meta: { title: '分发详细', meta: '/distributionDetails' },
    },{
      path: 'distributionRecord',
      name: 'distributionRecord',
      component: () => import('@/views/ip/ipv4/distributionRecord'),
      meta: { title: 'IP段分发记录', meta: '/distributionRecord' },
    },{
      path: 'center',
      name: 'ipCenter',
      component: () => import('@/views/ip/ipv4/ipCenter'),
      meta: { title: '分发详细', meta: '/center' },
    },{
      path: 'allowOrDisable',
      name: 'allowOrDisable',
      component: () => import('@/views/ip/ipv4/allowOrDisable'),
      meta: { title: 'IP允许或禁止操作', meta: '/allowOrDisable' },
    }]
  },{
    path: 'ipv6',
    name: 'ipv6',
    redirect: '/ip/ipv6/list',
    component: () => import('@/views/ip/index'),
    children: [{
      path: 'list',
      name: 'ipv6List',
      component: () => import('@/views/ip/ipv6/index'),
      meta: { title: 'IPV6', meta: '/ipv6List' },
    },{
      path: 'distributionDetails',
      name: 'ipv6DistributionDetails',
      component: () => import('@/views/ip/ipv6/distributionDetails'),
      meta: { title: '分发详细', meta: '/distributionDetails' },
    },{
      path: 'distributionRecord',
      name: 'ipv6DistributionRecord',
      component: () => import('@/views/ip/ipv6/distributionRecord'),
      meta: { title: 'IP段分发记录', meta: '/distributionRecord' },
    },{
      path: 'center',
      name: 'ipv6Center',
      component: () => import('@/views/ip/ipv6/ipCenter'),
      meta: { title: '分发详细', meta: '/ipCenter' },
    },{
      path: 'allowOrDisable',
      name: 'ipv6AllowOrDisable',
      component: () => import('@/views/ip/ipv6/allowOrDisable'),
      meta: { title: 'IP允许或禁止操作', meta: '/allowOrDisable' },
    }]
  }]
}]

export default routes
