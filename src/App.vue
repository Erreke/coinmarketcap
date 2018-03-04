<template>
    <div id="app" :class="{ 'is-light': !isDarkTheme, 'is-dark': isDarkTheme }">
        <app-header />
        <app-jumbotron />
        <app-navbar />

        <router-view />

        <app-statistics />
        <app-footer />
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

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

        computed: {
            ...mapState([
                'isDarkTheme',
            ]),
        },

        methods: {
            ...mapActions({
                fetchAll: 'FETCH_ALL',
            }),
        },

        mounted() {
            this.fetchAll();
        },
    }
</script>

<style lang="scss">
    @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
    @import 'node_modules/bulma/sass/utilities/_all.sass';
    @import 'node_modules/bulma/sass/base/_all.sass';
    @import 'node_modules/bulma/sass/grid/_all.sass';
    @import 'node_modules/bulma/sass/layout/_all.sass';
    @import 'node_modules/bulma/sass/elements/_all.sass';
    @import 'node_modules/bulma/sass/components/_all.sass';
    @import 'node_modules/bulma-extensions/extensions.sass';

    .is-light {
        // @import './assets/themes/light/variables.scss';
        // @import './assets/themes/light/overrides.scss';
    }

    .is-dark {
        @import './assets/themes/dark/variables.scss';
        @import './assets/themes/dark/overrides.scss';
    }
</style>