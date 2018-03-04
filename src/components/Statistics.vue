<template>
    <div class="section">
        <div class="container">
            <nav class="level" v-if="isDataRecieved">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ $t('statistics.total-market-cap') }}</p>
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="total_market_cap | number_format | currency">
                            {{ total_market_cap | shortener | currency}}
                        </p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ $t('statistics.total-24h-volume') }}</p>
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="total_24h_volume | number_format | currency">
                            {{ total_24h_volume | shortener | currency }}
                        </p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ $t('statistics.btc-dominance') }}</p>
                        <p class="title">{{ bitcoin_percentage_of_market_cap | number_format | percent }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ $t('statistics.cryptocurrencies') }}</p>
                        <p class="title">{{ active_currencies | number_format }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">{{ $t('statistics.markets') }}</p>
                        <p class="title tooltip is-tooltip-bottom" :data-tooltip="active_markets | number_format">
                            {{ active_markets | shortener }}
                        </p>
                    </div>
                </div>
            </nav>
            <app-progress v-else />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import progress from '@/components/Progress';

    export default {
        name: 'statistics',
        components: {
            'app-progress': progress,
        },
        computed: {
            ...mapState([
                'selectedCurrency',
            ]),
            isDataRecieved() {
                return this.$store.state.global;
            },
            total_market_cap() {
                return this.$store.state.global[`total_market_cap_${this.selectedCurrency.toLowerCase()}`]
            },
            total_24h_volume() {
                return this.$store.state.global[`total_24h_volume_${this.selectedCurrency.toLowerCase()}`]
            },
            bitcoin_percentage_of_market_cap() {
                return this.$store.state.global.bitcoin_percentage_of_market_cap
            },
            active_currencies() {
                return this.$store.state.global.active_currencies
            },
            active_markets() {
                return this.$store.state.global.active_markets
            },
        },
    }
</script>