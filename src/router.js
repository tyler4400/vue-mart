import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login')
        },
        {
            path: '/about',
            name: 'about',
            meta: {
                auth: true // 把about页面当成必须登录才能访问的页面
            },
            component: () =>
                import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        const token = sessionStorage.getItem('vue-mart-token');
        if (token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.path }
            });
        }
    } else {
        next();
    }
});

export default router;
