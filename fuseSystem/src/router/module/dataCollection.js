import Layout from '@/layout'
const routes = [{
  path: '/datacollection',
  component: Layout,
  meta: { title: '采集分组', meta: '/datacollection' },
  children: [{
    path: 'collgroup',
    name: 'collgroup',
    component: () => import('@/views/dataCollection/collecteGroup/index'),
    meta: { title: '采集分组', meta: '/collgroup' },
  },{
    path: 'collpoint',
    name: 'collpoint',
    redirect: '/datacollection/collpoint/index',
    component: () => import('@/views/dataCollection/index'),
    children: [{
      path: 'index',
      name: 'deploymentPoint',
      component: () => import('@/views/dataCollection/deploymentPoint/index'),
      meta: { title: '部署采集点', meta: '/index' },
    },{
      path: 'log',
      name: 'deploymentPointLog',
      component: () => import('@/views/dataCollection/deploymentPoint/log'),
      meta: { title: '采集日志', meta: '/log' },
    }]
  },{
    path: 'colldata',
    name: 'colldata',
    component: () => import('@/views/dataCollection/collectData/index'),
    meta: { title: '采集数据', meta: '/colldata' },
  },{
    path: 'combineport',
    name: 'combineport',
    redirect: '/datacollection/combineport/index',
    component: () => import('@/views/dataCollection/index'),
    children: [{
      path: 'index',
      name: 'combinePort',
      component: () => import('@/views/dataCollection/aggregatePort/index'),
      meta: { title: '聚合端口', meta: '/index' },
    },{
      path: 'port',
      name: 'aggregatePort',
      component: () => import('@/views/dataCollection/aggregatePort/port'),
      meta: { title: '端口', meta: '/port' },
    },{
      path: 'traffic',
      name: 'aggregateTraffic',
      component: () => import('@/views/dataCollection/aggregatePort/traffic'),
      meta: { title: '流量', meta: '/traffic' },
    }]
  },{
    path: 'export',
    name: 'dataPlot',
    component: () => import('@/views/dataCollection/plot/index'),
    meta: { title: '导数出图', meta: '/export' },
  }]
}]
export default routes
