<template>
    <nav class="pagination is-right is-primary" role="navigation" aria-label="pagination">
        <limiter></limiter>
        <ul class="pagination-list">
            <li>
                <a class="pagination-link" aria-label="Goto page 1">1</a>
            </li>
            <li>
                <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
                <a class="pagination-link" aria-label="Goto page 45">45</a>
            </li>
            <li>
                <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
            </li>
            <li>
                <a class="pagination-link" aria-label="Goto page 47">47</a>
            </li>
            <li>
                <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
                <a class="pagination-link" aria-label="Goto page 86">86</a>
            </li>
        </ul>
    </nav><!--

    <div>


        <ul class="pagination justify-content-end">
            <li class="page-item" v-if="isFirstShowed">
                <a class="page-link" href="#" @click.prevent="handleClickToFirstPage">First</a>
            </li>

            <li class="page-item" v-if="isPreviousShowed">
                <a class="page-link" href="#" @click.prevent="handleClickToPreviousPage">Previous</a>
            </li>

            <li class="page-item disabled" v-if="isBeforeEllipsesShowed">
                <a class="page-link" tabindex="-1">...</a>
            </li>

            <li v-for="page in pages" :class="['page-item', { 'active': page === paginationCurrent }]">
                <a class="page-link" href="#" @click.prevent="handleClickToPage">{{ page }}</a>
            </li>

            <li class="page-item disabled" v-if="isAfterEllipsesShowed">
                <a class="page-link" tabindex="-1">...</a>
            </li>

            <li class="page-item" v-if="isNextShowed">
                <a class="page-link" href="#" @click.prevent="handleClickToNextPage">Next</a>
            </li>
            <li class="page-item" v-if="isLastShowed">
                <a class="page-link" href="#" @click.prevent="handleClickToLastPage">Last</a>
            </li>
        </ul>
    </div>-->
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import limiter from '@/components/Limiter';

    export default {
        name: 'pagination',
        components: {
            limiter,
        },
        data() {
            return {
                beforePagesCount: 2,
                afterPagesCount: 2,
            }
        },
        computed: {
            ...mapGetters([
                'paginationStart',
                'paginationCurrent',
                'paginationPerPage',
                'coinsCount',
            ]),
            allPages() {
                return Math.ceil(this.coinsCount / this.paginationPerPage);
            },
            pages() {
                if (this.paginationCurrent < 3) {
                    return [this.paginationCurrent, this.paginationCurrent + 1, this.paginationCurrent + 2, this.paginationCurrent + 3, this.paginationCurrent + 4, this.paginationCurrent + 5];

                } else if (this.paginationCurrent > this.allPages + 3){
                    return [this.paginationCurrent - 5, this.paginationCurrent - 4, this.paginationCurrent - 3, this.paginationCurrent -2,  this.paginationCurrent - 1, this.paginationCurrent];

                } else {
                    return [this.paginationCurrent - 2, this.paginationCurrent - 1, this.paginationCurrent, this.paginationCurrent + 1, this.paginationCurrent + 2];

                }
            },
            isFirstShowed() {
                return this.paginationCurrent > this.beforePagesCount + 1;
            },
            isPreviousShowed() {
                return this.paginationCurrent > this.beforePagesCount + 1;
            },
            isBeforeEllipsesShowed() {
                return this.paginationCurrent > this.beforePagesCount + 2;
            },
            isAfterEllipsesShowed() {
                return this.paginationCurrent < this.pages - this.afterPagesCount - 2;
            },
            isNextShowed() {
                return this.paginationCurrent < this.pages - this.afterPagesCount - 1;
            },
            isLastShowed() {
                return this.paginationCurrent < this.pages - this.afterPagesCount - 1;
            }
        },
        methods: {
            ...mapMutations([
                'SET_COINS_LIMIT',
                'SET_PAGINATION_CURRENT'
            ]),
            handleClickToFirstPage() {
                this.SET_PAGINATION_CURRENT(1);
            },

            handleClickToPreviousPage() {
                let value = this.paginationCurrent;
                this.SET_PAGINATION_CURRENT(--value);
            },
            handleClickToNextPage() {
                let value = this.paginationCurrent;
                this.SET_PAGINATION_CURRENT(++value);
            },
            handleClickToLastPage() {
                this.SET_PAGINATION_CURRENT(this.allPages);
            },
            handleClickToPage(e) {
                const page = e.target.text;

                this.SET_PAGINATION_CURRENT(parseInt(page));
            },
        }
    }
</script>