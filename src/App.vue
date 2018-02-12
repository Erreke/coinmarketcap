<template>
    <div id="app">
        <app-header></app-header>
        <app-jumbotron></app-jumbotron>
        <app-navbar></app-navbar>

        <router-view></router-view>

        <app-statistics></app-statistics>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    import Jumbotron from '@/components/Jumbotron';
    import Header from '@/components/Header';
    import Navbar from '@/components/Navbar';
    import Statistics from '@/components/Statistics';
    import Footer from '@/components/Footer';

    export default {
        name: 'App',
        components: {
            'app-header': Header,
            'app-jumbotron': Jumbotron,
            'app-navbar': Navbar,
            'app-statistics': Statistics,
            'app-footer': Footer,
        },
        methods: {
            ...mapActions({
                fetchData: 'FETCH_DATA',
            }),
        },
        mounted() {
            this.fetchData();
        },
    }
</script>

<style lang="scss">
    @import 'node_modules/bulma/bulma.sass';
    @import 'node_modules/bulma-extensions/extensions.sass';
</style>
