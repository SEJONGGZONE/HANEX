import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAppStore } from '@/stores/index';
import appSetting from '@/app-setting';

import HomeView from '../views/index.vue';
/*
import Menu01 from '../views/menu_01.vue';
import Menu02 from '../views/menu_02.vue';
import Menu03 from '../views/menu_03.vue';
import Menu04 from '../views/menu_04.vue';
*/

const routes: RouteRecordRaw[] = [
    // dashboard
    { path: '/main', name: 'home', component: HomeView },
    { path: '/menu01', name: 'menu01', component: () => import('../views/menu_01.vue') },
    { path: '/menu02', name: 'menu02', component: () => import('../views/menu_02.vue') },
    { path: '/menu03', name: 'menu03', component: () => import('../views/menu_03.vue') },
    { path: '/menu04', name: 'menu04', component: () => import('../views/menu_04.vue') },
    { path: '/editList', name: 'editList', component: () => import('../views/editList.vue') },
    { path: '/editList2', name: 'editList2', component: () => import('../views/editList2.vue') },
    { path: '/workPage', name: 'workPage', component: () => import('../views/workPage.vue') },
    { path: '/imageView', name: 'imageView', component: () => import('../views/imageView.vue') },
    { path: '/gpsReport', name: 'gpsReport', component: () => import('../views/gpsReport.vue') },
    { path: '/signSample', name: 'signSample', component: () => import('../views/signSample.vue') },
    { path: '/cameraSample', name: 'cameraSample', component: () => import('../views/cameraSample.vue') },
    // 로그인
    {
        path: '/',
        name: 'boxed-signin',
        component: () => import('../views/auth/boxed-signin.vue'),
        meta: { layout: 'auth' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to?.meta?.layout == 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    next(true);
});
router.afterEach((to, from, next) => {
    appSetting.changeAnimation();
});
export default router;
