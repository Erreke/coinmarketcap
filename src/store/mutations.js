export default {
    CLEAR_SPECIFIC_COIN (state) {
        state.specificCoin = null;
    },

    ADD_COINS (state, coins) {
        state.coins.items = [...state.coins.items, ...coins];
    },

    SET_COINS (state, coins) {
        state.coins.items = coins;
    },

    SET_SPECIFIC_COIN (state, coin) {
        state.specificCoin = coin[0]
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

    SET_PAGINATION_PER_PAGE (state, perPage) {
        state.coins.pagination.perPage = perPage
    },

    SET_PAGINATION_CURRENT (state, current) {
        state.coins.pagination.current = current
    },

    SET_PAGINATION_LOADING (state, isLoading) {
        state.coins.pagination.isLoading = isLoading;
    },

    SET_SELECTED_CURRENCY (state, currency) {
        state.selectedCurrency = currency;
    },

    SET_LAST_UPDATED_DATE (state, date) {
        state.lastUpdated = date;
    },

    SET_LOADING_STATUS (state, status) {
        state.isLoading = status;
    },

    SET_DARK_THEME (state, payload) {
        state.isDarkTheme = payload;
    },

    SET_LOCALE (state, locale) {
        state.locale = locale;
    },

    SET_CONVERTER_COIN (state, payload) {
        state.converter[payload.type].name = payload.data.name;
        state.converter[payload.type].symbol = payload.data.symbol;
        state.converter[payload.type].usdPrice = payload.data.price_usd;
    },

    SET_CONVERTER_AMOUNT (state, payload) {
        state.converter[payload.type].amount = payload.amount;
    },

    SET_CONVERTER_OPPOSITE_PRICE (state, payload) {
        state.converter[payload.type].oppositePrice = payload.price;
    },

}
