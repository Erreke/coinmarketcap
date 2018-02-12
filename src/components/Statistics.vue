<template>
    <div class="section">
        <div class="container">
            <nav class="level" v-if="isDataRecieved">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Market Cap:</p>
                        <p class="title">{{ total_market_cap | number_format | currency}}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">24h Vol:</p>
                        <p class="title">{{ total_24h_volume | number_format | currency }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">BTC Dominance:</p>
                        <p class="title">{{ bitcoin_percentage_of_market_cap | number_format | percent }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Cryptocurrencies:</p>
                        <p class="title">{{ active_currencies | number_format }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Markets:</p>
                        <p class="title">{{ active_markets | number_format }}</p>
                    </div>
                </div>
            </nav>
            <app-progress v-else></app-progress>
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