import Layout from '@/layout'
const routes = [{
  path: '/task',
  component: Layout,
  meta: { title: '任务管理', meta: '/task' },
  children: [{
    path: 'work',
    name: 'workOrder',
    component: () => import('@/views/task/index'),
    meta: { title: '工单管理', meta: '/work' },
  }]
}]
export default routes
