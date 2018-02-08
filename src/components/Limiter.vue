<template>
    <div :class="['dropdown', {'is-active': isOpened }]">

        <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="handleOpen">
                <span>Show items: {{ paginationPerPage }}</span>
                <span class="icon is-small"><i class="fas fa-angle-down" aria-hidden="true"></i></span>
            </button>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content" @click.prevent="handleSelect">
                <a v-for="item in items" :data-value="item.value" :class="['dropdown-item', {'is-active': item.value === paginationPerPage}]" href="#">{{ item.text }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'Limiter',
        data() {
            return {
                isOpened: false,
                items: [
                    {
                        value: 10,
                        text: '10'
                    },
                    {
                        value: 50,
                        text: '50'
                    },
                    {
                        value: 100,
                        text: '100'
                    },
                    {
                        value: 500,
                        text: '500'
                    },
                    {
                        value: 'all',
                        text: 'View All'
                    },
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
            ...mapMutations([
                'SET_PAGINATION_PER_PAGE'
            ]),
            handleOpen() {
                this.isOpened = !this.isOpened
            },
            handleSelect(e) {
                this.isOpened = false;

                const perPage = e.target.dataset.value === 'all' ? this.coinsCount : e.target.dataset.value;

                this.SET_PAGINATION_PER_PAGE(parseInt(perPage));
            }
        }
    }
</script>