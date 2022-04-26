import Layout from '@/layout'
const routes = [{
  path: '/storage',
  component: Layout,
  meta: { title: '仓库管理', meta: '/storage' },
  children: [{
    path: 'classify',
    name: 'classify',
    component: () => import('@/views/storage/classify/index'),
    meta: { title: '仓库分类管理', meta: '/classify' },
  },{
    path: 'customer',
    name: 'customer',
    component: () => import('@/views/storage/customers/index'),
    meta: { title: '仓库客户管理', meta: '/customer' },
  },{
    path: 'res',
    name: 'res',
    component: () => import('@/views/storage/res/index'),
    meta: { title: '仓库物品管理', meta: '/res' },
  },{
    path: 'instorage',
    name: 'instorage',
    redirect: '/storage/instorage/index',
    component: () => import('@/views/storage/index'),
    children: [{
      path: 'index',
      name: 'inStorageList',
      component: () => import('@/views/storage/putIn/index'),
      meta: { title: '仓库入库管理', meta: '/index' },
    },{
      path: 'detailed',
      name: 'inStorageDetailed',
      component: () => import('@/views/storage/putIn/detailed'),
      meta: { title: '入库明细', meta: '/detailed' },
    }]
  },{
    path: 'rescentre',
    name: 'rescentre',
    redirect: '/storage/rescentre/index',
    component: () => import('@/views/storage/index'),
    children: [{
      path: 'index',
      name: 'rescentreList',
      component: () => import('@/views/storage/rescentre/index'),
      meta: { title: '仓库物资中心', meta: '/index' },
    },{
      path: 'detailed',
      name: 'StorageCenterDetailed',
      component: () => import('@/views/storage/rescentre/detailed'),
      meta: { title: '物资明细', meta: '/detailed' },
    }]
  },{
    path: 'outstorage',
    name: 'outstorage',
    redirect: '/storage/outstorage/index',
    component: () => import('@/views/storage/index'),
    children: [{
      path: 'index',
      name: 'outStorageList',
      component: () => import('@/views/storage/outStorage/index'),
      meta: { title: '仓库管理', meta: '/index' },
    },{
      path: 'lendTracke',
      name: 'lendTracke',
      component: () => import('@/views/storage/outStorage/lendTracke'),
      meta: { title: '盘点清单', meta: '/lendTracke' },
    }]
  },{
    path: 'inventory',
    name: 'inventory',
    redirect: '/storage/inventory/index',
    component: () => import('@/views/storage/index'),
    children: [{
      path: 'index',
      name: 'inventoryIndex',
      component: () => import('@/views/storage/inventory/index'),
      meta: { title: '仓库盘点', meta: '/index' },
    },{
      path: 'inventoryList',
      name: 'inventoryList',
      component: () => import('@/views/storage/inventory/inventoryList'),
      meta: { title: '盘点清单', meta: '/inventoryList' },
    }]
  },{
    path: 'storageposition',
    name: 'storageposition',
    component: () => import('@/views/storage/position/index'),
    meta: { title: '仓库位置管理', meta: '/storageposition' },
  }]
}]

export default routes
