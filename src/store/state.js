export default {
    locale: 'en',
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
    faq: [
        {
            q: 'What is "Market Capitalization" and how is it calculated?',
            a: '<p>Market Capitalization is one way to rank the relative size of a cryptocurrency. It\'s calculated by multiplying the Price by the Circulating Supply.</p><p>Market Cap = Price X Circulating Supply.</p>',
            isOpened: false,
        },
        {
            q: 'How are the prices calculated for the various cryptocurrencies?',
            a: 'Price is calculated by taking the volume weighted average of all prices reported at each market. Sources for the prices can be found on the markets section on each cryptocurrency page. For example, Bitcoin\'s markets.',
            isOpened: false,
        },
        {
            q: 'What is the difference between "Circulating Supply", "Total Supply", and "Max Supply"?',
            a: `<p>Circulating Supply is the best approximation of the number of coins that are circulating in the market and in the general public's hands.</p>
                <p>Total Supply is the total amount of coins in existence right now (minus any coins that have been verifiably burned).</p>
                <p>Max Supply is the best approximation of the maximum amount of coins that will ever exist in the lifetime of the cryptocurrency.</p>`,
            isOpened: false,
        },
        {
            q: 'Why is the Circulating Supply used in determining the market capitalization instead of Total Supply?',
            a: 'We\'ve found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can\'t affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing.',
            isOpened: false,
        },
        {
            q: 'What is the criteria for a cryptocurrency to be listed on CoinMarketCap?',
            a: `<p>The criteria for a cryptocurrency to be listed is the following:</p>
                <ul>
                    <li>Must be a cryptocurrency or a crypto token.</li>
                    <li>Must be on a public exchange with an API that reports the last traded price and the last 24 hour trading volume.</li>
                    <li>Must have a non-zero trading volume on at least one supported exchange so a price can be determined.</li>
                    <li>For market cap ranking, an accurate circulating supply figure is required.</li>
                </ul>
                <p>If you'd like to have a cryptocurrency listed and it meets all of the criteria, please fill out the request form.</p>`,
            isOpened: false,
        },
        {
            q: 'Why are markets with no fees excluded from the price average and total trading volume?',
            a: 'When no fees are being charged at the exchange, it is possible for a trader (or bot) to trade back and forth with themselves and generate a lot of "fake" volume without penalty. It\'s impossible to determine how much of the volume is fake so we exclude it entirely from the calculations.',
            isOpened: false,
        },
        {
            q: 'How do I purchase cryptocurrency?',
            a: 'CoinMarketCap reports on the trading activities of thousands of markets but does not directly sell any cryptocurrency. The best way to find where to buy is by looking on the markets section for the cryptocurrency. For example, to find where to buy Bitcoin, you can look at the markets section for Bitcoin.',
            isOpened: false,
        },
        {
            q: 'In what time zone is the site based?',
            a: 'Data is collected, recorded, and reported in UTC time unless otherwise specified.',
            isOpened: false,
        },
        {
            q: 'At what time is the 24 hour % change based?',
            a: 'It\'s based on the current time. It\'s a rolling 24 hour period.',
            isOpened: false,
        },
        {
            q: 'Why does the supply number sometimes appear grayed out?',
            a: 'A grayed out supply number indicates that the data source for the supply has gone stale for at least seven days and might not be up to date.',
            isOpened: false,
        },
        {
            q: 'Why are you listing [insert random cryptocurrency]? It\'s clearly a scam!',
            a: 'Nearly every crypocurrency has been called a scam at some point in its lifetime. We\'re not here to judge the merits of any cryptocurrency, but we provide the best tools for you to make your own conclusions. As long as it meets the listing criteria, it\'s eligible to be on the site.',
            isOpened: false,
        },
        {
            q: 'Am I allowed to use content (screenshots, data, graphs, etc.) for one of my personal projects and/or commercial use?',
            a: 'Absolutely! Feel free to use any content as you see fit. We kindly ask that you cite us as a source.',
            isOpened: false,
        },
    ],
    selectedCurrency: 'USD',
    specificCoin: null,
    lastUpdated: null,
    isLoading: false,
    isCurrencyChangeUpdating: false,
    isNeedToContinueLoading: true,
}
