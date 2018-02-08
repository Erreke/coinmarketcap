export default {
    allCoins(state) {
        return state.coins.items
    },
    coinsCount(state) {
        return state.coins.items.length
    },
    paginationStart(state) {
        return state.coins.pagination.start
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
    coin(state) {
        return state.coin
    },
    currency(state) {
        return state.currency
    },
}
