<template>
    <div class="dark">
        <slot />
    </div>
</template>

<style lang="scss">
    @import 'node_modules/bulma/sass/utilities/_all.sass';

    .dark {
        @import '../assets/themes/dark/variables.scss';
        @import 'node_modules/bulma/sass/layout/_all.sass';
        @import 'node_modules/bulma/sass/elements/_all.sass';
        @import 'node_modules/bulma/sass/components/_all.sass';
        @import 'node_modules/bulma-extensions/extensions.sass';
        @import '../assets/themes/dark/overrides.scss';
    }
</style>