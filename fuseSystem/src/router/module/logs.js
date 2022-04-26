import Layout from '@/layout'
const routes = [{
  path: '/logs',
  component: Layout,
  meta: { title: '日志管理', meta: '/logs' },
  children: [{
    path: 'log',
    name: 'logsIndex',
    component: () => import('@/views/logs/index'),
    meta: { title: '日志管理', meta: '/log' },
  }]
}]
export default routes
