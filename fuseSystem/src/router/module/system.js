import Layout from '@/layout'

const routes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/interchanger/device',
    },

    {
        path: '/system',
        component: Layout,
        meta: { title: '系统设置', meta: '/group' },
        children: [
            {
                path: 'group',
                name: 'group',
                component: () =>
                    import ('@/views/system/group/index'),
                meta: { title: '用户组管理', meta: '/group' }
            },
            {
                path: 'role',
                name: 'role',
                component: () =>
                    import ('@/views/system/role/index'),
                meta: { title: '角色管理', meta: '/role' }
            },
            {
                path: 'user',
                name: 'user',
                component: () =>
                    import ('@/views/system/user/index'),
                meta: { title: '用户管理', meta: '/user' }
            },
            {
                path: 'department',
                name: 'department',
                component: () =>
                    import ('@/views/system/department/index'),
                meta: { title: '部门管理', meta: '/department' }
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import ('@/views/system/menu/index'),
                meta: { title: '菜单管理', meta: '/department' }
            },
            {
                path: 'jurisdiction',
                name: 'jurisdiction',
                component: () => import ('@/views/system/jurisdiction/index'),
                meta: { title: '权限管理', meta: '/jurisdiction' }
            },
            {
                path: 'log',
                name: 'log',
                component: () => import ('@/views/system/log/index'),
                meta: { title: '日志管理', meta: '/log' }
            }
        ]
    },
    // 404 page must be placed at the end !!!
    { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true }
]
export default routes
