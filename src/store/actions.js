import axios from 'axios';

export default {
    FETCH_DATA({ commit, dispatch, getters }) {
        axios.get(`https://api.coinmarketcap.com/v1/global/?convert=${getters.selectedCurrency}`)
            .then(request => {
                commit('SET_GLOBAL_DATA', request.data);
                dispatch('FETCH_COINS')
            })
    },

    FETCH_COINS({ commit, getters }) {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=${getters.selectedCurrency}`)
            .then(request => {
                commit('SET_COINS', request.data);
            })
    },

    FETCH_COIN({ commit, getters }, coin) {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${getters.selectedCurrency}`)
            .then(request => {
                commit('SET_COIN', request.data);
            })
    },

    SORT_COINS({ commit, getters }, title) {
        let result = 0;

        const coins = getters.coins.sort((coinA, coinB) => {

            const A = coinA[title];
            const B = coinB[title];

            const a = (title === 'name' || title === 'symbol') ? A.toUpperCase() : parseFloat(A);
            const b = (title === 'name' || title === 'symbol') ? B.toUpperCase() : parseFloat(B);


            if(getters.sortDirection === 'desc') {
                if (a < b) {
                    result = -1;
                } else if (a > b) {
                    result = 1;
                } else {
                    result = 0;
                }
            } else {
                if (a > b) {
                    result = -1;
                } else if (a < b) {
                    result = 1;
                } else {
                    result = 0;
                }
            }

            return result;
        });

        commit('SET_SORT_DIRECTION_TYPE', getters.sortDirection === 'desc' ? 'asc' : 'desc');
        commit('SET_SORTED_COLUMN_NAME', title);
        commit('SET_COINS', coins);
    },

    SELECT_CURRENCY({ commit, dispatch }, currency) {
        commit('SET_SELECTED_CURRENCY', currency);
        dispatch('FETCH_DATA');
    }
}
