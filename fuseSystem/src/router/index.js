// import Vue from 'vue'
// import Router from 'vue-router'

import systemModule from './module/system'
import roomModule from './module/room'
import networkSetModule from './module/networkSetings'
import devicesPortsModule from './module/devicesPorts'
import ipModule from './module/ip'
import storageModule from './module/storage'
import dataCollectModule from './module/dataCollection'
import monitorModule from './module/monitor'
import customeServiceModule from './module/customeService'
import networkMonitorModule from './module/networkMonitor'
import taskModule from './module/task'
import commandModule from './module/faultRemoving'
import logsModule from './module/logs'
import systemMaintainModule from './module/systemMaintain'
// Vue.use(Router)

// const createRouter = () => new Router({
//     // mode: 'history', // require service support
//     scrollBehavior: () => ({ y: 0 }),
//     routes: [...systemModule]
// })

// const router = createRouter()

// // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// export function resetRouter () {
//     const newRouter = createRouter()
//     router.matcher = newRouter.matcher // reset router
// }

// export default router

import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: [
    ...systemModule, ...roomModule, ...networkSetModule,
    ...devicesPortsModule, ...ipModule, ...storageModule,
    ...dataCollectModule, ...monitorModule, ...customeServiceModule,
    ...networkMonitorModule, ...taskModule, ...commandModule,
    ...logsModule, ...systemMaintainModule
  ]
})
export default router
