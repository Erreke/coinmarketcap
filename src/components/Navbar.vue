<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-tabs">
                <router-link class="navbar-item is-tab" :to="{ name: 'MainPage' }">Home</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'ConvertorPage' }">Convertor</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'FaqPage' }">FAQ</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'DisclaimerPage' }">Disclaimer</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'TodoPage' }">TODO</router-link>
            </div>

            <last-updated></last-updated>
        </div>
    </nav>
</template>

<script>
    import LastUpdated from '@/components/LastUpdated';

    export default {
        name: 'navbar',
        components: {
            LastUpdated
        }
    }
</script>