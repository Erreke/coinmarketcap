<template>
    <div :class="['navbar-item has-dropdown', { 'is-active': isOpened }]" @mouseenter="handleActivate" @mouseleave="handleDeactivate">
        <a class="navbar-link" href="#">{{ locale | uppercase}}</a>
        <div class="navbar-dropdown is-boxed">
            <a
                href="#"
                class="navbar-item"
                :data-value="item"
                :key="item"
                v-for="item in locales"
                @click.prevent="handleSelect"
            >{{ item | uppercase }}</a>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'SelectorLanguage',
        data() {
            return {
                isOpened: false,
            }
        },
        computed: {
            ...mapState([
                'locale',
                'locales',
            ]),
        },
        methods: {
            ...mapMutations({
                changeLocale: 'SET_LOCALE',
            }),
            handleSelect(e) {
                const locale = e.target.dataset.value;

                this.$i18n.locale = locale;
                this.changeLocale(locale);
                this.isOpened = false;
            },
            handleActivate() {
                this.isOpened = true;
            },
            handleDeactivate() {
                this.isOpened = false;
            },
        }
    }
</script>