import Layout from '@/layout'
const routes = [{
  path: '/systemmaintain',
  component: Layout,
  meta: { title: '系统设置与维护', meta: '/systemmaintain' },
  children: [{
    path: 'systemset',
    name: 'systemSet',
    component: () => import('@/views/systemMaintain/systemSet/index'),
    meta: { title: '系统设置', meta: '/systemset' },
  },{
    path: 'datamaintaining',
    name: 'dataMaintain',
    component: () => import('@/views/systemMaintain/dataMaintain/index'),
    meta: { title: '数据维护', meta: '/datamaintaining' },
  }]
}]
export default routes
