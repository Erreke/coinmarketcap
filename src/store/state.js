export default {
    locale: 'ru',
    locales: ['en', 'ru'],
    isDarkTheme: false,
    coins: {
        items: [],
        pagination: {
            current: 1,
            perPage: 10,
            isLoading: false,
        },
        sort: {
            column: 'rank',
            direction: 'asc'
        },
    },
    currencies: {
        AUD: {
            value: 'aud',
            text: 'AUD',
            sign: '',
        },
        BRL: {
            value: 'brl',
            text: 'BRL',
            sign: '',
        },
        BTC: {
            value: 'btc',
            text: 'BTC',
            sign: 'BTC',
        },
        CAD: {
            value: 'cad',
            text: 'CAD',
            sign: '',
        },
        CHF: {
            value: 'chf',
            text: 'CHF',
            sign: '',
        },
        CLP: {
            value: 'clp',
            text: 'CLP',
            sign: '',
        },
        CNY: {
            value: 'cny',
            text: 'CNY',
            sign: '',
        },
        CZK: {
            value: 'czk',
            text: 'CZK',
            sign: '',
        },
        DKK: {
            value: 'dkk',
            text: 'DKK',
            sign: '',
        },
        EUR: {
            value: 'eur',
            text: 'EUR',
            sign: '€',
        },
        ETH: {
            value: 'eth',
            text: 'ETH',
            sign: 'ETH',
        },
        GBP: {
            value: 'gbp',
            text: 'GBP',
            sign: '',
        },
        HKD: {
            value: 'hkd',
            text: 'HKD',
            sign: '',
        },
        HUF: {
            value: 'huf',
            text: 'HUF',
            sign: '',
        },
        IDR: {
            value: 'idr',
            text: 'IDR',
            sign: '',
        },
        ILS: {
            value: 'ils',
            text: 'ILS',
            sign: '',
        },
        INR: {
            value: 'inr',
            text: 'INR',
            sign: '',
        },
        JPY: {
            value: 'jpy',
            text: 'JPY',
            sign: '',
        },
        KRW: {
            value: 'krw',
            text: 'KRW',
            sign: '',
        },
        MXN: {
            value: 'mxn',
            text: 'MXN',
            sign: '',
        },
        MYR: {
            value: 'myr',
            text: 'MYR',
            sign: '',
        },
        NOK: {
            value: 'nok',
            text: 'NOK',
            sign: '',
        },
        NZD: {
            value: 'nzd',
            text: 'NZD',
            sign: '',
        },
        PHP: {
            value: 'php',
            text: 'PHP',
            sign: '',
        },
        PKR: {
            value: 'pkr',
            text: 'PKR',
            sign: '',
        },
        PLN: {
            value: 'pln',
            text: 'PLN',
            sign: '',
        },
        RUB: {
            value: 'rub',
            text: 'RUB',
            sign: '₽',
        },
        SEK: {
            value: 'sek',
            text: 'SEK',
            sign: '',
        },
        SGD: {
            value: 'sgd',
            text: 'SGD',
            sign: '',
        },
        THB: {
            value: 'thb',
            text: 'THB',
            sign: '',
        },
        TRY: {
            value: 'try',
            text: 'TRY',
            sign: '',
        },
        TWD: {
            value: 'twd',
            text: 'TWD',
            sign: '',
        },
        USD: {
            value: 'usd',
            text: 'USD',
            sign: '$',
        },
        ZAR: {
            value: 'zar',
            text: 'ZAR',
            sign: '',
        },
    },
    global: null,
    selectedCurrency: 'USD',
    specificCoin: null,
    lastUpdated: null,
    isLoading: false,
    isCurrencyChangeUpdating: false,
    isNeedToContinueLoading: true,
    converter: {
        first: {
            amount: 0,
            name: null,
            symbol: null,
            usdPrice: 0,
            oppositePrice: 0,
            isCalculating: false,
            isLoading: false,
        },
        second: {
            amount: 0,
            name: null,
            symbol: null,
            usdPrice: 0,
            oppositePrice: 0,
            isCalculating: false,
            isLoading: false,
        },
        isReversing: false,
    }
}
