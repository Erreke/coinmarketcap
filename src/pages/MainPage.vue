<template>
    <div class="section">
        <div class="container" v-if="coinsCount">
            <app-search />
            <app-table />
            <app-pagination />
        </div>

        <app-progress v-else />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

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
