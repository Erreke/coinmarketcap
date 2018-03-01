<template>
    <layout>
        <app-header />
        <app-jumbotron />
        <app-navbar />

        <router-view />

        <app-statistics />
        <app-footer />
    </layout>
</template>

<script>
    import { mapActions } from 'vuex';

    import Layout from '@/layouts';
    import Jumbotron from '@/components/Jumbotron';
    import Header from '@/components/Header';
    import Navbar from '@/components/Navbar';
    import Statistics from '@/components/Statistics';
    import Footer from '@/components/Footer';

    export default {
        name: 'App',
        components: {
            Layout,
            'app-header': Header,
            'app-jumbotron': Jumbotron,
            'app-navbar': Navbar,
            'app-statistics': Statistics,
            'app-footer': Footer,
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
