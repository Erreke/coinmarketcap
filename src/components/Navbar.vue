<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-tabs">
                <router-link class="navbar-item is-tab" :to="{ name: 'MainPage' }">Home</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'ConvertorPage' }">Convertor</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'FaqPage' }">FAQ</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'TodoPage' }">TODO</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                currentPage: this.$route.params.currency
            }
        },
        computed: {
            notMainPage() {
                return this.$route.name !== 'MainPage';
            }
        }
    }
</script>