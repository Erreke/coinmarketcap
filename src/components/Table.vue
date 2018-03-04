<template>
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr @click="handleSort" :class="`sortable sort_by_${sortColumn} sort_direction_${sortDirection}`">
                <th data-title="rank" class="has-text-centered"><span>Rank</span></th>
                <th data-title="name"><span>Name</span></th>
                <th data-title="symbol"><span>Symbol</span></th>
                <th data-title="price_usd" class="has-text-right"><span>Price {{ selectedCurrency }}</span></th>
                <th data-title="market_cap_usd" class="has-text-right"><span>Market Cap {{ selectedCurrency }}</span></th>
                <th data-title="percent_change_1h" class="has-text-right"><span>1H change</span></th>
                <th data-title="percent_change_24h" class="has-text-right"><span>24H change</span></th>
                <th data-title="percent_change_7d" class="has-text-right"><span>7d change</span></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coin in coinsToShow">
                <td class="has-text-centered">{{ coin.rank }}</td>
                <td>
                    <router-link :to="{ name: 'SpecificCoinPage', params: { alias: coin.id }}">
                        {{ coin.name }}
                    </router-link>
                </td>
                <td>{{ coin.symbol }}</td>
                <td class="has-text-right">{{ coin.price | number_format | currency }}</td>
                <td class="has-text-right">{{ coin.market_cap | number_format | currency }}</td>
                <td class="has-text-right">
                    <colorize :value="coin.percent_change_1h">{{ coin.percent_change_1h | number_format | percent }}</colorize>
                </td>
                <td class="has-text-right">
                    <colorize :value="coin.percent_change_24h">{{ coin.percent_change_24h | number_format | percent }}</colorize>
                </td>
                <td class="has-text-right">
                    <colorize :value="coin.percent_change_7d">{{ coin.percent_change_7d | number_format | percent }}</colorize>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';
    import colorize from '@/components/Colorize';

    export default {
        name: 'app-table',
        components: {
            colorize
        },
        computed: {
            ...mapGetters([
                'coins',
                'coinsToShow',
                'sortColumn',
                'sortDirection',
            ]),
            ...mapState([
                'selectedCurrency',
            ]),
        },
        methods: {
            ...mapMutations({
                setSortDirectionType: 'SET_SORT_DIRECTION_TYPE',
                setSortedColumnName: 'SET_SORTED_COLUMN_NAME',
                setCoins: 'SET_COINS'
            }),
            handleSort(e) {
                let title = null;
                const target = e.target;
                const targetTagName = target.tagName;

                if (targetTagName === 'TH') {
                    title = target.dataset.title;
                }

                if (targetTagName === 'SPAN') {
                    title = target.parentNode.dataset.title;
                }

                if (title) {
                    this.$worker.postMessage({
                        title: title,
                        coins: this.coins,
                        sortDirection: this.sortDirection
                    });
                }
            }
        },
        created() {
            this.$worker.addEventListener('message', (e) => {
                this.setSortDirectionType(e.data.direction);
                this.setSortedColumnName(e.data.title);
                this.setCoins(e.data.coins);
            });
        }
    }
</script>

<style>
    .sortable th {
        cursor: pointer;
        user-select: none;
    }
    .sortable span {
        position: relative;
    }
    .sortable span::after {
        margin-left: 5px;
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
    }
    .sort_by_name.sort_direction_asc th[data-title="name"] span::after,
    .sort_by_symbol.sort_direction_asc th[data-title="symbol"] span::after,
    .sort_by_rank.sort_direction_asc th[data-title="rank"] span::after,
    .sort_by_price_usd.sort_direction_asc th[data-title="price_usd"] span::after,
    .sort_by_market_cap_usd.sort_direction_asc th[data-title="market_cap_usd"] span::after,
    .sort_by_percent_change_1h.sort_direction_asc th[data-title="percent_change_1h"] span::after,
    .sort_by_percent_change_24h.sort_direction_asc th[data-title="percent_change_24h"] span::after,
    .sort_by_percent_change_7d.sort_direction_asc th[data-title="percent_change_7d"] span::after {
        content: '';
        border-width: 8px 4px 0 4px;
        border-color: #363636 transparent transparent transparent;
    }
    .sort_by_name.sort_direction_desc th[data-title="name"] span::after,
    .sort_by_symbol.sort_direction_desc th[data-title="symbol"] span::after,
    .sort_by_rank.sort_direction_desc th[data-title="rank"] span::after,
    .sort_by_price_usd.sort_direction_desc th[data-title="price_usd"] span::after,
    .sort_by_market_cap_usd.sort_direction_desc th[data-title="market_cap_usd"] span::after,
    .sort_by_percent_change_1h.sort_direction_desc th[data-title="percent_change_1h"] span::after,
    .sort_by_percent_change_24h.sort_direction_desc th[data-title="percent_change_24h"] span::after,
    .sort_by_percent_change_7d.sort_direction_desc th[data-title="percent_change_7d"] span::after {
        content: '';
        border-width: 0 4px 8px 4px;
        border-color: transparent transparent #363636 transparent;
    }
</style>
