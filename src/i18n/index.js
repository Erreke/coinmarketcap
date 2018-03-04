import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ru from './ru.json';
import en from './en.json';

Vue.use(VueI18n);

export default (store) => new VueI18n({
    locale: store.state.locale,
    messages: {
        en,
        ru,
    }
});
