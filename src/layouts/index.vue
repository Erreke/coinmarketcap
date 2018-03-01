<template>
    <div id="app">
        <dark v-if="isDarkTheme">
            <slot />
        </dark>

        <light v-if="!isDarkTheme">
            <slot />
        </light>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import Light from '@/layouts/light';
    import Dark from '@/layouts/dark';

    export default {
        name: 'Layout',

        components: {
            Light,
            Dark,
        },

        computed: {
            ...mapState([
                'isDarkTheme',
            ]),
        },

    }
</script>

<style lang="scss">
    @import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);
    @import 'node_modules/bulma/sass/utilities/_all.sass';
    @import 'node_modules/bulma/sass/base/_all.sass';
    @import 'node_modules/bulma/sass/grid/_all.sass';
</style>