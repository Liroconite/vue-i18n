import LoginPage from './components/login.vue'
import HelloPage from './components/HelloWorld.vue'
import CreatePage from './components/Compte.vue'
import DashboardUserPage from './components/dashboarduser.vue'
import LayoutDefault from './layout/NavBarre.vue'

export const routes = [

    {
        path: '/',
        component: LayoutDefault,
        children: [
            { path: '/', component: LoginPage },
            { path: '/register', component: CreatePage },
            {
                path: '/user', component: DashboardUserPage
            }
        ]
    },
    {
        path: '/hello',
        component: HelloPage
    },
]