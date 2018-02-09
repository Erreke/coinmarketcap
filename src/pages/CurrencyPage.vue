<template>
    <div class="section">
        <div class="container">
            <h2>{{ coin }}</h2>
            <div v-if="coin">
              <p>Name: {{ coin['name'] }}</p>
              <p>Symbol: {{ coin['symbol'] }}</p>
              <p>Rank: {{ coin['rank'] }}</p>
              <p>Price (USD): {{ coin['price_usd'] }}</p>
              <p>Price (BTC): {{ coin['price_btc'] }}</p>
              <p>24H Volume (USD): {{ coin['24h_volume_usd'] }}</p>
              <p>Market Capitalization (USD): {{ coin['market_cap_usd'] }}</p>
              <p>Available supply: {{ coin['available_supply'] }}</p>
              <p>Total supply: {{ coin['total_supply'] }}</p>
              <p>Max supply: {{ coin['max_supply'] }}</p>
              <p>Change 1H (%): <span v-html="coin['percent_change_1h']"></span></p>
              <p>Change 24H (%): <span v-html="coin['percent_change_24h']|colorize"></span></p>
              <p>Change 7D (%): <span v-html="coin['percent_change_7d']|colorize"></span></p>
            </div>
            <app-progress v-else></app-progress>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import axios from 'axios';
    import progress from '@/components/Progress';

    export default {
        name: 'CurrencyPage',
        components: {
            'app-progress': progress,
        },
        computed: {
            ...mapGetters([
                'coin',
            ]),
            coin() {
                return this.$route.params.currency
            },


            coin: function () {
              return this.$store.state.specificCoin
            },
            currency: function () {
              return this.$route.params.currency
            },
            isLoading: function () {
              return this.$store.state.isCoinsLoading
            }



        },
        mounted() {
            this.FETCH_COIN(this.coin);
        },
        methods: {
            ...mapActions([
                'FETCH_COIN',
            ]),
        },
      created () {
        this.$store.commit('CLEAR_SPECIFIC_DATA')
      },
      mounted () {
        this.$store.dispatch('FETCH_SPECIFIC_DATA', this.currency)
      }
    }
</script>
