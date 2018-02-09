<template>
    <nav class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
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

                    <p class="navbar-item">
                        <a class="button is-info" href="https://github.com/Erreke/coinmarketcap">
                          <span class="icon">
                            <i class="fab fa-github" aria-hidden="true"></i>
                          </span>
                            <span>Github</span>
                        </a>
                    </p>


                    <language-selector></language-selector>

                    <night-mode-switcher></night-mode-switcher>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
    import LanguageSelector from '@/components/LanguageSelector';
    import NightModeSwitcher from '@/components/NightModeSwitcher';

    export default {
        name: 'header',
        components: {
            LanguageSelector,
            NightModeSwitcher,
        },
    }
</script>