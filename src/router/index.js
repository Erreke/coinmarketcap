import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import CurrencyPage from '@/pages/CurrencyPage'
import ConvertorPage from '@/pages/ConvertorPage'
import FaqPage from '@/pages/FaqPage'
import TodoPage from '@/pages/TodoPage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'is-active',
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
            path: '/convertor/',
            name: 'ConvertorPage',
            component: ConvertorPage
        },
        {
            path: '/faq/',
            name: 'FaqPage',
            component: FaqPage
        },
        {
            path: '/todo/',
            name: 'TodoPage',
            component: TodoPage
        }
    ]
})
