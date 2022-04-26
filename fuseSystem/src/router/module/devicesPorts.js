import Layout from '@/layout'
const routes = [{
  path: '/interchanger',
  component: Layout,
  meta: { title: '设备与端口', meta: '/interchanger' },
  children: [{
    path: 'device',
    name: 'device',
    redirect: '/interchanger/device/deviceManage',
    component: () => import('@/views/devicesAndPorts/index'),
    children: [{
      path: 'deviceManage',
      name: 'deviceManage',
      component: () => import('@/views/devicesAndPorts/devices/index'),
      meta: { title: '设备管理', meta: '/deviceManage' },
    }, {
      path: 'add',
      name: 'deviceAdd',
      component: () => import('@/views/devicesAndPorts/devices/add'),
      meta: { title: '添加设备', meta: '/deviceAdd' },
    }, {
      path: 'importExport',
      name: 'importExport',
      component: () => import('@/views/devicesAndPorts/devices/importExport'),
      meta: { title: '导入导出设备', meta: '/importExport' },
    }, {
      path: 'upperLowerShelves',
      name: 'upperLowerShelves',
      component: () => import('@/views/devicesAndPorts/devices/upperLowerShelves'),
      meta: { title: '上下架统计', meta: '/upperLowerShelves' },
    }, {
      path: 'detail',
      name: 'devicesDetail',
      component: () => import('@/views/devicesAndPorts/devices/detail'),
      meta: { title: '设备详情', meta: '/detail' },
    }]
  },{
    path: 'ports',
    name: 'portsManage',
    redirect: '/interchanger/ports/deviceList',
    component: () => import('@/views/devicesAndPorts/index'),
    children: [{
      path: 'deviceList',
      name: 'deviceList',
      component: () => import('@/views/devicesAndPorts/ports/index'),
      meta: { title: '设备列表', meta: '/deviceList' },
    },{
      path: 'portsManage',
      name: 'portsManage',
      component: () => import('@/views/devicesAndPorts/ports/manage'),
      meta: { title: '端口管理', meta: '/portsManage' },
    },{
      path: 'portTraffic',
      name: 'portTraffic',
      component: () => import('@/views/devicesAndPorts/ports/portTraffic'),
      meta: { title: '端口流量', meta: '/portTraffic' },
    },{
      path: 'includePort',
      name: 'includePort',
      component: () => import('@/views/devicesAndPorts/ports/includePort'),
      meta: { title: '包含端口', meta: '/includePort' },
    }]
  }
  ]
}]

export default routes
