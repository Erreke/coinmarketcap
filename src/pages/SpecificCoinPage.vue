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
                        <p class="subtitle">{{ $t('coin-page.1h-change') }}</p>
                    </article>
                </div>
                <div class="column">
                    <article :class="[
                        'notification',
                        { 'is-primary': coin['percent_change_24h'] > 0 },
                        { 'is-danger': coin['percent_change_24h'] < 0 },
                    ]">
                        <p class="title">{{ coin['percent_change_24h'] | percent}}</p>
                        <p class="subtitle">{{ $t('coin-page.24h-change') }}</p>
                    </article>
                </div>
                <div class="column">
                    <article :class="[
                        'notification',
                        { 'is-primary': coin['percent_change_7d'] > 0 },
                        { 'is-danger': coin['percent_change_7d'] < 0 },
                    ]">
                        <p class="title">{{ coin['percent_change_7d'] | percent }}</p>
                        <p class="subtitle">{{ $t('coin-page.7d-change') }}</p>
                    </article>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin[`price_${selectedCurrencyLower}`] | number_format }}</p>
                        <p class="subtitle">{{ $t('coin-page.price', {selectedCurrency}) }}</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title">{{ coin['price_btc'] | number_format}}</p>
                        <p class="subtitle">{{ $t('coin-page.price-btc') }}</p>
                    </article>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <article class="notification">
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="coin['available_supply'] | number_format">
                            {{ coin['available_supply'] | shortener }}
                        </p>
                        <p class="subtitle">{{ $t('coin-page.available-supply', {symbol: coin['symbol']}) }}</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="coin['max_supply'] | number_format">
                            {{ coin['max_supply'] | shortener }}
                        </p>
                        <p class="subtitle">{{ $t('coin-page.max-supply', { symbol: coin['symbol'] }) }}</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="coin['total_supply'] | number_format">
                            {{ coin['total_supply'] | shortener }}
                        </p>
                        <p class="subtitle">{{ $t('coin-page.total-supply', { symbol: coin['symbol'] }) }}</p>
                    </article>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <article class="notification">
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="coin[`24h_volume_${selectedCurrencyLower}`] | number_format">
                            {{ coin[`24h_volume_${selectedCurrencyLower}`] | shortener }}
                        </p>
                        <p class="subtitle">{{ $t('coin-page.24h-volume', { selectedCurrency }) }}</p>
                    </article>
                </div>
                <div class="column">
                    <article class="notification">
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="coin[`market_cap_${selectedCurrencyLower}`] | number_format">
                            {{ coin[`market_cap_${selectedCurrencyLower}`] | shortener}}
                        </p>
                        <p class="subtitle">{{ $t('coin-page.market-cap', { selectedCurrency }) }}</p>
                    </article>
                </div>
            </div>

        </div>
        <app-progress v-else />
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    import progress from '@/components/Progress';

    export default {
        name: 'SpecificCoinPage',
        components: {
            'app-progress': progress,
        },
        computed: {
            ...mapState({
                coin: 'specificCoin',
                selectedCurrency: 'selectedCurrency',
            }),
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
