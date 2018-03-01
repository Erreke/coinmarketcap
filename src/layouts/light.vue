<template>
    <div class="light">
        <slot />
    </div>
</template>

<style lang="scss">
    @import 'node_modules/bulma/sass/utilities/_all.sass';

    .light {
        @import 'node_modules/bulma/sass/layout/_all.sass';
        @import 'node_modules/bulma/sass/elements/_all.sass';
        @import 'node_modules/bulma/sass/components/_all.sass';
        @import 'node_modules/bulma-extensions/extensions.sass';
    }
</style>