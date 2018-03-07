<template>
    <div :class="['dropdown', {'is-active': isOpened }]">
        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="handleOpen">
                <span>{{ $t('limiter.show-items') }} {{ paginationPerPage }}</span>
                <span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>
            </button>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content" @click.prevent="handleSelect">
                <a
                    href="#"
                    v-for="item in items"
                    :data-value="item"
                    :class="['dropdown-item', {'is-active': item === paginationPerPage}]"
                >{{ getText(item) }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'Limiter',
        data: () => {
            return {
                isOpened: false,
                items: [
                    10,
                    50,
                    100,
                    500,
                    'all',
                ],
            }
        },
        computed: {
            ...mapGetters([
                'paginationPerPage',
                'coinsCount',
            ]),
        },
        methods: {
            ...mapMutations({
                setPaginationLoading: 'SET_PAGINATION_LOADING',
                setPaginationPerPage: 'SET_PAGINATION_PER_PAGE',
                setPaginationCurrent: 'SET_PAGINATION_CURRENT',
            }),
            handleOpen() {
                this.isOpened = !this.isOpened
            },
            handleSelect(e) {
                this.setPaginationLoading(true);
                this.isOpened = false;

                const perPage = e.target.dataset.value === 'all' ? this.coinsCount : e.target.dataset.value;

                this.setPaginationPerPage(parseInt(perPage));
                this.setPaginationCurrent(1);
                this.setPaginationLoading(false);
            },
            getText(value) {
                if (value === 'all') {
                    return this.$t('limiter.view-all');
                } else {
                    return value;
                }
            }
        },
    }
</script>