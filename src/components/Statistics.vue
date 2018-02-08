<template>
    <div class="section">
        <div class="container">
            <nav class="level" v-if="isDataRecieved">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Market Cap:</p>
                        <p class="title">{{ total_market_cap_usd | number_format }}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">24h Vol:</p>
                        <p class="title">{{ total_24h_volume_usd | number_format }}</p>
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
    import progress from '@/components/Progress';

    export default {
        name: 'statistics',
        components: {
            'app-progress': progress,
        },
        computed: {
            isDataRecieved() {
                return !!this.$store.state.global;
            },
            total_market_cap_usd() {
                return this.$store.state.global.total_market_cap_usd
            },
            total_24h_volume_usd() {
                return this.$store.state.global.total_24h_volume_usd
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

        /*
            this.total_market_cap_usd = this.$store.state.global.total_market_cap_usd;
            this.total_24h_volume_usd = this.$store.state.global.total_24h_volume_usd;
            this.bitcoin_percentage_of_market_cap = this.$store.state.global.bitcoin_percentage_of_market_cap;
            this.active_currencies =  this.$store.state.global.active_currencies;
            this.active_markets = this.$store.state.global.active_markets;
        */
    }
</script>