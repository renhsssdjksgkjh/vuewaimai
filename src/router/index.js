import { showToast } from 'vant'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home/HomeView.vue')
        },
        {
            path: '/home',
            component: () => import('../views/home/HomeView.vue')
        },
        {
            path: '/cart',
            component: () => import('../views/cart/CartView.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/order',
            component: () => import('../views/order/OrderView.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/mine',
            component: () => import('../views/mine/MineView.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/store',
            component: () => import('../views/store/index.vue')
        },
        {
            path: '/createorder',
            component: () => import('../views/createOrder/index.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/address',
            component: () => import('../views/address/index.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/addressedit',
            component: () => import('../views/address/addressEdit/index.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/userinfoedit',
            component: () => import('../views/userInfoEdit/index.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/login',
            component: () => import('../views/login/index.vue')
        },
        {
            path: '/register',
            component: () => import('../views/register/index.vue')
        }
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        //登录以后会在localstorage中，存储一个标识
        if (localStorage.isLogin === 'login') {
            next()
        } else {
            showToast('宝，先去登录')
            setTimeout(() => {
                next('/login')
            }, 500);
        }
    } else {
        next()
    }
})

export default router