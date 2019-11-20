import VueRouter from 'vue-router'

const Home = resolve => {
    require.ensure([], () => {
        resolve(
            require('./views/pages/home')
        )
    });
};

let routes = [
    {
        path: '/',
        component: require('./layouts/home'),
        meta: {requiresAuth: true},
        children: [
            {
                path: '',
                name: 'app.home',
                component: Home
            }
        ]
    },
    {
        path: '*',
        component: require('./layouts/error'),
        children: [
            {
                path: '*',
                component: require('./views/pages/page-not-found')
            }
        ]
    }
];

const router = new VueRouter({
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

export default router;