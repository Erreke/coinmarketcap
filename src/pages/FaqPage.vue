<template>
    <div class="section">
        <div class="container" v-if="coinsCount">
            <app-search></app-search>
            <app-table></app-table>
            <app-pagination></app-pagination>
        </div>

        <app-progress v-else></app-progress>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

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
            'app-pagination': pagination,
            'app-progress': progress,
            'app-search': search,
            'app-table': table
        },
    }
</script>
