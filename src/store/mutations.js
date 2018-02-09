export default {
    SET_COINS (state, coins) {
        state.coins.items = coins
    },

    SET_COIN (state, coin) {
        state.coin = coin[0]
    },

    SET_GLOBAL_DATA (state, data) {
        state.global = data
    },

    SET_SORTED_COLUMN_NAME (state, name) {
        state.coins.sort.column = name
    },

    SET_SORT_DIRECTION_TYPE (state, type) {
        state.coins.sort.direction = type
    },

    SET_PAGINATION_START (state, start) {
        state.coins.pagination.start = start
    },

    SET_PAGINATION_PER_PAGE (state, perPage) {
        state.coins.pagination.perPage = perPage
    },

    SET_PAGINATION_CURRENT (state, current) {
        state.coins.pagination.current = current
    },

    SET_SELECTED_CURRENCY(state, currency) {
        state.selectedCurrency = currency;
    },

}
