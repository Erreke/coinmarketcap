<template>
    <div id="app">
        <app-header></app-header>

        <app-breadcrumb></app-breadcrumb>

        <router-view></router-view>

        <app-statistics></app-statistics>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import Header from '@/components/Header';
    import Breadcrumb from '@/components/Breadcrumb';
    import Statistics from '@/components/Statistics';
    import Footer from '@/components/Footer';

    export default {
        name: 'App',
        components: {
            'app-header': Header,
            'app-breadcrumb': Breadcrumb,
            'app-statistics': Statistics,
            'app-footer': Footer,
        },
        mounted() {
            this.FETCH_GLOBAL_DATA();
            this.FETCH_COINS();
        },
        methods: {
            ...mapActions([
                'FETCH_GLOBAL_DATA',
                'FETCH_COINS',
            ]),
        }
    }
</script>

<style lang="scss">
    @import 'node_modules/bulma/bulma.sass';
    @import 'node_modules/bulma-extensions/extensions.sass';
</style>
