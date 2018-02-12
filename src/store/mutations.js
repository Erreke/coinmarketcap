export default {
    CLEAR_SPECIFIC_COIN (state) {
        state.specificCoin = null;
    },

    SET_COINS (state, coins) {
        console.log(coins);
        state.coins.items = coins
    },

    SET_SPECIFIC_COIN (state, coin) {
        state.specificCoin = coin[0]
    },

    SET_GLOBAL_DATA (state, data) {
        console.log(data);
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

    SET_LAST_UPDATED_DATE(state, date) {
        state.lastUpdated = date;
    },

    TOGGLE_FAQ(state, index) {
        state.faq[index].isOpened = !state.faq[index].isOpened;
    },

    TOGGLE_UPDATE_NEED_STATUS(state) {
        state.isNeedToUpdateData = true;
    },

}
