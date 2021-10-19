import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Form from '../views/Form'
import Portfolio from '../views/Portfolio'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/create',
        name: 'Create',
        component: Form,
    },
    {
        path: '/portfolio/:id',
        name: 'Portfolio',
        component: Portfolio,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router