import axios from 'axios';

export default {
    FETCH_ALL({dispatch, commit}, isForceUpdate = false) {
        dispatch('FETCH_GLOBAL', {isForceUpdate});
        dispatch('FETCH_COINS', {isForceUpdate, isStartFromZero: true});
    },

    FETCH_GLOBAL({commit, state}, {isForceUpdate = false}) {
        const global = localStorage.getItem('global');

        if (!global || isForceUpdate) {
            commit('SET_LOADING_STATUS', true);

            axios.get(`https://api.coinmarketcap.com/v1/global/?convert=${state.selectedCurrency}`)
                .then(response => {
                    const timestamp = Date.now();

                    localStorage.setItem('updated', JSON.stringify(timestamp));
                    localStorage.setItem('global', JSON.stringify(response.data));

                    commit('SET_GLOBAL_DATA', response.data);
                    commit('SET_LAST_UPDATED_DATE', timestamp);
                    commit('SET_LOADING_STATUS', false);
                })

        } else {
            const timestamp = localStorage.getItem('updated');

            commit('SET_LAST_UPDATED_DATE', timestamp);
            commit('SET_GLOBAL_DATA', JSON.parse(global));

        }
    },

    FETCH_COINS({commit, dispatch, getters, state}, {
        isForceUpdate = false,
        isRecursive = false,
        isStartFromZero = false
    }) {
        const coins = localStorage.getItem('coins');
        const start = isStartFromZero ? 0 : getters.coinsCount;

        if (!coins || isForceUpdate) {
            commit('SET_LOADING_STATUS', true);

            axios.get(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=100&convert=${state.selectedCurrency}`)
                .then(response => {
                    const timestamp = Date.now();

                    localStorage.setItem('updated', JSON.stringify(timestamp));
                    localStorage.setItem('coins', JSON.stringify(getters.coins.concat(response.data)));

                    if (isRecursive) {
                        commit('ADD_COINS', response.data);

                    } else {
                        commit('SET_COINS', response.data);

                    }

                    commit('SET_LAST_UPDATED_DATE', timestamp);
                })
                .then(() => {
                    dispatch('FETCH_COINS', {
                        isForceUpdate: true,
                        isRecursive: true,
                    });
                })
                .then(() => {
                    commit('SET_LOADING_STATUS', false);

                })
                .catch(error => {
                    console.log(error.response.data.error);
                })

        } else {
            const timestamp = localStorage.getItem('updated');
            commit('SET_LAST_UPDATED_DATE', timestamp);
            commit('ADD_COINS', JSON.parse(coins));

        }
    },

    FETCH_SPECIFIC_COIN({commit, state}, coin) {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/${coin}/?convert=${state.selectedCurrency}`)
            .then(response => {
                commit('SET_SPECIFIC_COIN', response.data);
            })
    },

    SELECT_CURRENCY({commit, dispatch}, currency) {
        commit('SET_SELECTED_CURRENCY', currency);
        dispatch('FETCH_ALL', true);
    }
}
