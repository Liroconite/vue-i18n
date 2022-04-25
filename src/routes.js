import LoginPage from './components/login.vue'
import HelloPage from './components/HelloWorld.vue'
import ComptePage from './components/Compte.vue'

export const routes = [
    { 
        path:'/', 
        component: LoginPage
    },
    { 
        path:'/compte', 
        component: ComptePage
    },
    { 
        path:'/hello', 
        component: HelloPage
    }
]