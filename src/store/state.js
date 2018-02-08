export default {
    global: {
        total_market_cap_usd: 0,
        total_24h_volume_usd: 0,
        bitcoin_percentage_of_market_cap: 0,
        active_currencies: 0,
        active_markets: 0,
    },
    coin: null,
    currency: 'EUR',
    coins: {
        items: [],
        pagination: {
            start: 0,
            current: 1,
            perPage: 10,
        },
        sort: {
            column: 'rank',
            direction: 'asc'
        },
        updated: null,
    },
}
