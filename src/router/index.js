import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DayBookRouter from '../modules/daybook/routers'
import authRoute from '../modules/auth/routers'
import isAuthenticatedGuard from '../modules/auth/routers/auth-guard'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/day-book',
        beforeEnter: [ isAuthenticatedGuard ] ,
        ...DayBookRouter
    },
    {
        path: '/auth',
        ...authRoute
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router