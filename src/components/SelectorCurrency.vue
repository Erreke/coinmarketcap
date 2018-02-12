<template>
    <div :class="['navbar-item has-dropdown', { 'is-active': isOpened }]" @mouseenter="handleActivate" @mouseleave="handleDeactivate">
        <a class="navbar-link" href="#">{{ selectedCurrency }}</a>
        <div class="navbar-dropdown is-boxed">
            <div class="columns">
                <div class="column" v-for="col in table">
                    <a class="navbar-item" href="#" v-for="row in col" :data-value="row" @click="handleSelect">
                        <span>{{ row }}</span>
                        <!--<i class="fas fa-spinner fa-pulse" v-if="isLoading && selectedCurrency === row"></i>-->
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {
                cols: 2,
                rows: 17,
                table: [],
                isOpened: false,
            }
        },
        computed: {
            ...mapState([
                'currencies',
                'selectedCurrency',
                'isCurrencyChangeUpdating',
            ]),
        },
        methods: {
            handleSelect(e) {
                // this.$store.dispatch('SELECT_CURRENCY', e.target.dataset.value)

                this.$store.dispatch('SELECT_CURRENCY', e.target.innerText);
            },
            handleActivate() {
                this.isOpened = true;
            },
            handleDeactivate() {
                this.isOpened = false;
            },
        },
        mounted() {
            const length = Object.keys(this.currencies).length;
            const cols = [];

            for(let i = 0, k = 0; i < this.cols; i++) {
                const rows = [];

                for(let j = 0; j < this.rows; j++, k++) {
                    if(length > k) {
                        rows.push(Object.keys(this.currencies)[k]);
                    }
                }
                cols.push(rows);
            }

            this.table = cols;
        }
    }
</script>