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
    { path: '/', name: 'home', component: HomeView },
    { path: '/menu01', name: 'menu01', component: () => import('../views/menu_01.vue') },
    { path: '/menu02', name: 'menu02', component: () => import('../views/menu_02.vue') },
    { path: '/menu03', name: 'menu03', component: () => import('../views/menu_03.vue') },
    { path: '/menu04', name: 'menu04', component: () => import('../views/menu_04.vue') },
    { path: '/editList', name: 'editList', component: () => import('../views/editList.vue') },
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
