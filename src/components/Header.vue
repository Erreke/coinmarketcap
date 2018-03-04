<template>
    <nav class="navbar is-fixed-top is-light" role="navigation">
        <div class="container">

            <div class="navbar-brand">
                <router-link class="navbar-item" :to="{ name: 'MainPage' }" exact>
                    <strong>COINMARKETCAP</strong>
                </router-link>

                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div class="navbar-menu">
                <div class="navbar-end">

                    <a class="navbar-item" href="https://github.com/Erreke/coinmarketcap" target="_blank">
                        <span class="icon" style="color: #333;">
                          <i class="fab fa-github"></i>
                        </span>
                    </a>

                    <selector-currency />

                    <selector-language />

                    <night-mode-switcher />
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
    import SelectorCurrency from '@/components/SelectorCurrency';
    import SelectorLanguage from '@/components/SelectorLanguage';
    import NightModeSwitcher from '@/components/NightModeSwitcher';

    export default {
        components: {
            SelectorCurrency,
            SelectorLanguage,
            NightModeSwitcher,
        },
    }
</script>