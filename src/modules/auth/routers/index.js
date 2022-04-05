export default {

    name: 'auth',
    component: () =>
        import ('@/modules/auth/layouts/AuthLayout.vue'),
    children: [

        {
            path: '',
            name: 'login',
            component: () =>
                import ('@/modules/auth/views/Login.vue'),
        },
        {
            path: '/registro',
            name: 'registro',
            component: () =>
                import ('@/modules/auth/views/Register.vue'),
        }


    ],


}