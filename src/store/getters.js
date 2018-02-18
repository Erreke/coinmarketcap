export default {
    coins(state) {
        return state.coins.items;
    },
    coinsToShow(state) {
        const start = (state.coins.pagination.current - 1) * state.coins.pagination.perPage;
        const end = start + state.coins.pagination.perPage;
        const coins = state.coins.items.slice(start, end);

        return coins.map((coin) => {
            return {
                id: coin.id,
                rank: coin.rank,
                name: coin.name,
                symbol: coin.symbol,
                price: coin[`price_${state.selectedCurrency.toLowerCase()}`],
                market_cap: coin[`market_cap_${state.selectedCurrency.toLowerCase()}`],
                percent_change_1h: coin.percent_change_1h,
                percent_change_24h: coin.percent_change_24h,
                percent_change_7d: coin.percent_change_7d,
            }
        });
    },
    coinsCount(state) {
        return state.coins.items.length
    },
    paginationCurrent(state) {
        return state.coins.pagination.current
    },
    paginationPerPage(state) {
        return state.coins.pagination.perPage
    },
    sortColumn(state) {
        return state.coins.sort.column
    },
    sortDirection(state) {
        return state.coins.sort.direction
    },
    currencies(state) {
        return state.currencies
    },
    selectedCurrency(state) {
        return state.selectedCurrency
    },
}
