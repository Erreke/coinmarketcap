import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import CurrencyPage from '@/pages/CurrencyPage'
import TodoPage from '@/pages/TodoPage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/currencies/:currency',
            name: 'CurrencyPage',
            component: CurrencyPage
        },
        {
            path: '/todo/',
            name: 'TodoPage',
            component: TodoPage
        }
    ]
})
