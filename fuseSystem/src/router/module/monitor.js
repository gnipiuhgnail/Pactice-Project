import Layout from '@/layout'
const routes = [{
  path: '/monitor',
  component: Layout,
  meta: { title: '监控策略', meta: '/monitor' },
  children: [{
    path: 'flowmonitor',
    name: 'flowMonitor',
    component: () => import('@/views/monitor/traffic/index'),
    meta: { title: '流量监控', meta: '/flowmonitor' },
  },{
    path: 'ipmonitor',
    name: 'ipMonitor',
    component: () => import('@/views/monitor/ip/index'),
    meta: { title: 'IP监控', meta: '/ipmonitor' },
  },{
    path: 'screen',
    name: 'monitorScreen',
    component: () => import('@/views/monitor/screenSettings/index'),
    meta: { title: '监控屏设置', meta: '/screen' },
  },{
    path: 'alarm',
    name: 'monitorAlarm',
    component: () => import('@/views/monitor/alarm/index'),
    meta: { title: '监控报表', meta: '/alarm' },
  },{
    path: 'report',
    name: 'monitorReport',
    component: () => import('@/views/monitor/reportForm/index'),
    meta: { title: '监控报表', meta: '/report' },
  },{
    path: 'status',
    name: 'serviceStatus',
    component: () => import('@/views/monitor/serviceStatus/index'),
    meta: { title: '监控服务状态', meta: '/status' },
  }]
}]

export default routes
