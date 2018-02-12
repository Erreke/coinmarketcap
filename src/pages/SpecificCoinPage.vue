<template>
    <div class="section">
        <div class="container" v-if="coin">
            <div class="content">
                <h1 class="title">{{ coin['name'] }} ({{ coin['symbol'] }})</h1>
            </div>

            <div class="columns">
                <div class="column">
                    <article :class="[
                        'notification',
                        { 'is-primary': coin['percent_change_1h'] > 0 },
                        { 'is-danger': coin['percent_change_1h'] < 0 },
                    ]">
                        <p class="title">{{ coin['percent_change_1h'] | percent }}</p>
                        <p class="subtitle">Change 1H</p>
                    </article>
                </div>
                <div class="column">
                    <article :class="[
                        'notification',
                        { 'is-primary': coin['percent_change_24h'] > 0 },
                        { 'is-danger': coin['percent_change_24h'] < 0 },
                    ]">
                        <p class="title">{{ coin['percent_change_24h'] | percent}}</p>
                        <p class="subtitle">Change 24H</p>
                    </article>
                </div>
                <div class="column">
                    <article :class="[
                        'notification',
                        { 'is-primary': coin['percent_change_7d'] > 0 },
                        { 'is-danger': coin['percent_change_7d'] < 0 },
                    ]">
                        <p class="title">{{ coin['percent_change_7d'] | percent }}</p>
                        <p class="subtitle">Change 7D</p>
                    </article>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin[`price_${selectedCurrencyLower}`] | number_format }}</p>
                        <p class="subtitle">Price ({{ selectedCurrency }})</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin['price_btc'] | number_format}}</p>
                        <p class="subtitle">Price (BTC)</p>
                    </article>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin['available_supply'] | number_format }}</p>
                        <p class="subtitle">Available supply ({{ coin['symbol'] }})</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin['max_supply'] | number_format }}</p>
                        <p class="subtitle">Max supply ({{ coin['symbol'] }})</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin['total_supply'] | number_format }}</p>
                        <p class="subtitle">Total supply ({{ coin['symbol'] }})</p>
                    </article>
                </div>
            </div>

            <p>24H Volume ({{ selectedCurrency }}): {{ coin[`24h_volume_${selectedCurrencyLower}`] }}</p>
            <p>Market Capitalization ({{ selectedCurrency }}): {{ coin[`market_cap_${selectedCurrencyLower}`] }}</p>
        </div>
        <app-progress v-else></app-progress>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
    import axios from 'axios';
    import progress from '@/components/Progress';

    export default {
        name: 'SpecificCoinPage',
        components: {
            'app-progress': progress,
        },
        computed: {
            ...mapState({
                coin: 'specificCoin',
            }),
            ...mapGetters([
                'selectedCurrency'
            ]),
            selectedCurrencyLower() {
                return this.selectedCurrency.toLowerCase()
            },
            alias() {
                return this.$route.params.alias
            },
        },
        methods: {
            ...mapActions({
                fetchCoin: 'FETCH_SPECIFIC_COIN',
            }),
            ...mapMutations({
                clearCoin: 'CLEAR_SPECIFIC_COIN',
            }),
        },
        created() {
            this.clearCoin();
            this.fetchCoin(this.alias);
        },
    }
</script>
