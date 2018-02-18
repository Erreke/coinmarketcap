// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('number_format', function (value) {
    if (!value) return '—';
    return new Intl.NumberFormat().format(value);
});

Vue.filter('shortener', function (value) {
    if (!value) return '—';

    if(value > 1000000000000000000) {
        const v = value / 1000000000000000000;
        return new Intl.NumberFormat().format(v.toFixed(2)) + 'Qi';

    } else if(value > 1000000000000000) {
        const v = value / 1000000000000000;
        return new Intl.NumberFormat().format(v.toFixed(2)) + 'Qa';

    } else if(value > 1000000000000) {
        const v = value / 1000000000000;
        return new Intl.NumberFormat().format(v.toFixed(2)) + 'T';

    } else if(value > 1000000000) {
        const v = value / 1000000000;
        return new Intl.NumberFormat().format(v.toFixed(2)) + 'B';

    } else if(value > 1000000) {
        const v = value / 1000000;
        return new Intl.NumberFormat().format(v.toFixed(2)) + 'M';

    } else if(value > 1000) {
        const v = value / 1000;
        return new Intl.NumberFormat().format(v.toFixed(2)) + 'K';

    } else {
        return new Intl.NumberFormat().format(value.toFixed(2));

    }
});

Vue.filter('percent', function (value) {
    if (!value) return '—';
    if (value === '—') return value;

    return value + '%';
});

Vue.filter('currency', function (value, curr) {
    if (!value) return '—';
    if (value === '—') return value;

    const currencies = store().state.currencies;
    const selectedCurrency = store().state.selectedCurrency;
    const sign = curr || currencies[selectedCurrency].sign;

    /*{
        'USD': '$',
        'EUR': '€',
        'RUB': '₽',
        'BTC': 'BTC',
        'ETH': 'ETH',
    };
*/
    return ['RUB', 'BTC', 'ETH'].includes(selectedCurrency) ? `${value} ${sign}` : `${sign} ${value}`;
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
