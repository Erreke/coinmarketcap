<template>
    <nav class="pagination is-right is-primary">

        <limiter />

        <ul class="pagination-list" v-if="pagesCount > 1">
            <li v-for="page in pages">
                <span class="pagination-ellipsis" v-if="page.ellipse">&hellip;</span>
                <a :class="['pagination-link', { 'is-current': page.current }]" href="#"
                   @click.prevent="handleClickToPage" v-else>{{ page.value }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';
    import limiter from '@/components/Limiter';

    export default {
        name: 'pagination',
        components: {
            limiter,
        },
        computed: {
            ...mapGetters({
                current: 'paginationCurrent',
                perPage: 'paginationPerPage',
                count: 'coinsCount',
            }),
            pagesCount() {
                return Math.ceil(this.count / this.perPage);
            },
            pages() {
                const result = [];
                const length = this.pagesCount > 7 ? 7 : this.pagesCount;

                if(this.pagesCount <= 7) {
                    for (let i =1; i <= length; i++) {
                        result.push({
                            value: i,
                            current: this.current === i,
                            ellipse: false,
                        });
                    }

                } else {
                    if (this.current <= 4) {
                        result.push({
                            value: 1,
                            current: this.current === 1,
                            ellipse: false,
                        });
                        result.push({
                            value: 2,
                            current: this.current === 2,
                            ellipse: false,
                        });
                        result.push({
                            value: 3,
                            current: this.current === 3,
                            ellipse: false,
                        });
                        result.push({
                            value: 4,
                            current: this.current === 4,
                            ellipse: false,
                        });
                        result.push({
                            value: 5,
                            current: this.current === 5,
                            ellipse: false,
                        });
                        result.push({
                            ellipse: true,
                        });
                        result.push({
                            value: this.pagesCount,
                            current: this.current === this.pagesCount,
                            ellipse: false,
                        });

                    } else if (this.current > 4 && this.current <= this.pagesCount - 4) {
                        result.push({
                            value: 1,
                            current: this.current === 1,
                            ellipse: false,
                        });
                        result.push({
                            ellipse: true,
                        });
                        result.push({
                            value: this.current - 1,
                            current: false,
                            ellipse: false,
                        });
                        result.push({
                            value: this.current,
                            current: true,
                            ellipse: false,
                        });
                        result.push({
                            value: this.current + 1,
                            current: false,
                            ellipse: false,
                        });
                        result.push({
                            ellipse: true,
                        });
                        result.push({
                            value: this.pagesCount,
                            current: false,
                            ellipse: false,
                        });

                    } else  {
                        result.push({
                            value: 1,
                            current: this.current === 1,
                            ellipse: false,
                        });
                        result.push({
                            ellipse: true,
                        });
                        result.push({
                            value: this.pagesCount - 4,
                            current: this.current === this.pagesCount - 4,
                            ellipse: false,
                        });
                        result.push({
                            value: this.pagesCount - 3,
                            current: this.current === this.pagesCount - 3,
                            ellipse: false,
                        });
                        result.push({
                            value: this.pagesCount - 2,
                            current: this.current === this.pagesCount - 2,
                            ellipse: false,
                        });
                        result.push({
                            value: this.pagesCount - 1,
                            current: this.current === this.pagesCount - 1,
                            ellipse: false,
                        });
                        result.push({
                            value: this.pagesCount,
                            current: this.current === this.pagesCount,
                            ellipse: false,
                        });

                    }

                }

                return result;
            },
        },
        methods: {
            ...mapMutations({
                setPaginationCurrent: 'SET_PAGINATION_CURRENT'
            }),
            handleClickToPage(e) {
                const page = e.target.text;

                this.setPaginationCurrent(parseInt(page));
            },
        }
    }
</script>