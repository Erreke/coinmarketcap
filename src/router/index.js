import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage'
import SpecificCoinPage from '@/pages/SpecificCoinPage'
import ConverterPage from '@/pages/ConverterPage'
import FaqPage from '@/pages/FaqPage'
import DisclaimerPage from '@/pages/DisclaimerPage'
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
            path: '/coin/:alias',
            name: 'SpecificCoinPage',
            component: SpecificCoinPage
        },
        {
            path: '/converter/',
            name: 'ConverterPage',
            component: ConverterPage
        },
        {
            path: '/faq/',
            name: 'FaqPage',
            component: FaqPage
        },
        {
            path: '/disclaimer/',
            name: 'DisclaimerPage',
            component: DisclaimerPage
        },
        {
            path: '/todo/',
            name: 'TodoPage',
            component: TodoPage
        }
    ]
})
