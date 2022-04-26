import Layout from '@/layout'
const routes = [{
  path: '/room',
  component: Layout,
  meta: { title: '机房管理', meta: '/room' },
  children: [{
      path: 'frame',
      redirect: '/room/frame/index',
      component: () => import('@/views/room/index'),
      children: [{
          path: 'index',
          name: 'frameIndex',
          component: () => import('@/views/room/frame/index'),
          meta: { title: '机柜管理', meta: '/index' },
        },
        {
          path: 'detail',
          name: 'frameDetail',
          component: () => import('@/views/room/frame/detail'),
          meta: { title: '机房详情', meta: '/detail'},
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () => import('@/views/room/frame/statistics'),
          meta: { title: '机房统计图', meta: '/statistics' },
        },
        {
          path: 'reportform',
          name: 'reportForm',
          component: () => import('@/views/room/frame/reportForm'),
          meta: { title: '机柜报表', meta: '/reportform' },
        },
      ]
    },
    {
      path: 'dutyfault',
      redirect: '/room/dutyfault/report',
      component: () => import('@/views/room/index'),
      children: [
        {
          path: 'report',
          name: 'report',
          component: () => import('@/views/room/dutyFault/index'),
          meta: { title: '故障处理', meta: '/report'},
        },
        {
          path: 'faultdetail',
          name: 'faultDetail',
          component: () =>import('@/views/room/dutyFault/detail'),
          meta: { title: '故障详情', meta: '/faultdetail'},
        }
      ]
    },
    {
      path: 'roomposition',
      redirect: '/room/roomPosition/position',
      component: () => import('@/views/room/index'),
      children: [
        {
          path: 'position',
          name: 'position',
          component: () => import('@/views/room/roomPosition/index'),
          meta: { title: '机房位置管理', meta: '/position'},
        },
        {
          path: 'visualize',
          name: 'visualize',
          component: () =>import('@/views/room/roomPosition/visualize'),
          meta: { title: '可视化管理', meta: '/visualize'},
        }
    ]
    },
  ]
}]
export default routes
