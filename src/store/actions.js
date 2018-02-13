import axios from 'axios';

export default {
    FETCH_ALL({ dispatch }, isForceUpdate = false) {
        dispatch('FETCH_GLOBAL', { isForceUpdate });
        dispatch('FETCH_COINS', { isForceUpdate });
    },
    
    FETCH_GLOBAL({ commit, state }, { isForceUpdate = false }) {
        const global = localStorage.getItem('global');

        if ( !global || isForceUpdate ) {
            if (isForceUpdate) {
                commit('SET_LOADING_STATUS', true);
            }

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

    FETCH_COINS({commit, dispatch, getters, state}, { isForceUpdate = false, isRecursive = false }) {
        debugger;
        const coins = localStorage.getItem('coins');
        const start = getters.coinsCount;

        if (!coins || isForceUpdate) {
            if (isForceUpdate) {
                commit('SET_LOADING_STATUS', true);
            }
            
            axios.get(`https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=100&convert=${state.selectedCurrency}`)
                .then(response => {
                    debugger;

                    const timestamp = Date.now();

                    localStorage.setItem('updated', JSON.stringify(timestamp));
                    localStorage.setItem('coins', JSON.stringify(getters.coins.concat(response.data)));

                    if (isRecursive) {
                        commit('ADD_COINS', response.data);

                    } else {
                        commit('SET_COINS', response.data);

                    }

                    commit('SET_LAST_UPDATED_DATE', timestamp);
                    commit('SET_LOADING_STATUS', false);
                })
                .then(() => {
                    debugger;

                    dispatch('FETCH_COINS', {
                        isForceUpdate: true,
                        isRecursive: true,
                    });
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

    SORT_COINS({commit, getters}, title) {
        let result = 0;

        const coins = getters.coins.sort((coinA, coinB) => {

            const A = coinA[title];
            const B = coinB[title];

            const a = (title === 'name' || title === 'symbol') ? A.toUpperCase() : parseFloat(A);
            const b = (title === 'name' || title === 'symbol') ? B.toUpperCase() : parseFloat(B);


            if (getters.sortDirection === 'desc') {
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

    SELECT_CURRENCY({commit, dispatch}, currency) {
        commit('SET_SELECTED_CURRENCY', currency);
        dispatch('FETCH_ALL', true);
    }
}
