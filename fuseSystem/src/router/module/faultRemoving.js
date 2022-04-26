import Layout from '@/layout'
const routes = [{
  path: '/debugging',
  component: Layout,
  meta: { title: '排障', meta: '/debugging' },
  children: [{
    path: 'debugmachine',
    name: 'debugmachine',
    component: () => import('@/views/faultRemoving/management/index'),
    meta: { title: '排障机管理', meta: '/debugmachine' },
  },{
    path: 'command',
    name: 'debugCommand',
    component: () => import('@/views/faultRemoving/command/index'),
    meta: { title: '排障机命令', meta: '/command' },
  }]
}]
export default routes
