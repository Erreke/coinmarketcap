<template>
    <div>
        <jumbotron></jumbotron>

        <div class="section">
            <div class="container" v-if="coinsCount">
                <div class="content">
                    <h2 class="title">TODO:</h2>
                    <ul>
                        <li><strike>Подключить bulma, bulma-extensions</strike></li>
                        <li><strike>Отображать селектор валюты, по-умолчанию USD</strike></li>
                        <li><strike>Отображать инпут для поиска валют</strike></li>
                        <li><strike>Отображать переключатель для ночного режима</strike></li>
                        <li><strike>Отобразить логотипы</strike></li>
                        <li><strike>Global Data</strike></li>
                        <li><strike>Форматировать цифры</strike></li>
                        <li><strike>Выделять цветами красный или зеленый в заввисимости от положительности или отрицательности значения</strike></li>
                        <li><strike>Ограничить монеты в зависимости "Show items"</strike></li>
                        <li>Сделать зависимость данных от текущей валюты</li>
                        <li>При загрузке приложения, проверить localStorage</li>
                        <li>Если там есть монеты отобразить их, кнопку "Обновить" и дату последнего обновления</li>
                        <li>Если нет, то подтягивать все данные по 100 монет в localStorage</li>
                        <li>Доделать пагинатор</li>
                        <li>Сделать поиск по монетам</li>
                        <li>Сделать страницу результатов поиска</li>
                        <li>Night mode</li>
                        <li>i18n</li>
                        <li>Сделать конвертор</li>
                    </ul>
                </div>

                <app-search></app-search>
                <app-table></app-table>
                <app-pagination></app-pagination>

            </div>

            <app-progress v-else></app-progress>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import jumbotron from '@/components/Jumbotron';
    import pagination from '@/components/Pagination';
    import progress from '@/components/Progress';
    import search from '@/components/Search';
    import table from '@/components/Table';

    export default {
        name: 'MainPage',
        computed: {
            ...mapGetters([
                'coinsCount',
            ]),
        },
        components: {
            jumbotron,
            'app-pagination': pagination,
            'app-progress': progress,
            'app-search': search,
            'app-table': table
        },
    }
</script>
