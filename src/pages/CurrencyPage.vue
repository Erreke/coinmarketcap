<template>
    <div class="section">
        <div class="container">
            <h2>{{ coin }}</h2>
            <div v-if="coin">COIN</div>
            <app-progress v-else></app-progress>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import axios from 'axios';
    import progress from '@/components/Progress';

    export default {
        name: 'CurrencyPage',
        components: {
            'app-progress': progress,
        },
        computed: {
            ...mapGetters([
                'coin',
            ]),
            coin() {
                return this.$route.params.currency
            }
        },
        mounted() {
            this.FETCH_COIN(this.coin);
        },
        methods: {
            ...mapActions([
                'FETCH_COIN',
            ]),
        }
    }
</script>
