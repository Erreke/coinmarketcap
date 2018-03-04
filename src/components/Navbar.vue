<template>
    <nav class="navbar has-shadow">
        <div class="container">
            <div class="navbar-tabs">
                <router-link class="navbar-item is-tab" :to="{ name: 'MainPage' }">{{ $t('navbar.home') }}</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'ConverterPage' }">{{ $t('navbar.converter') }}</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'FaqPage' }">{{ $t('navbar.faq') }}</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'DisclaimerPage' }">{{ $t('navbar.disclaimer') }}</router-link>
                <router-link class="navbar-item is-tab" :to="{ name: 'TodoPage' }">{{ $t('navbar.todo') }}</router-link>
            </div>

            <last-updated />
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