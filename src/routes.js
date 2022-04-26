import LoginPage from './components/login.vue'
import HelloPage from './components/HelloWorld.vue'
import CreatePage from './components/Compte.vue'
import DashboardUserPage from './components/dashboarduser.vue'

export const routes = [
    {
        path: '/',
        component: LoginPage
    },
    {
        path: '/Register',
        component: CreatePage
    },
    {
        path: '/hello',
        component: HelloPage
    },
    {
        path: '/user',
        component: DashboardUserPage
    }
]