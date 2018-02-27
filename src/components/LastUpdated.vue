<template>
    <div class="navbar-end" v-if="isNeedToUpdateData">
        <div class="navbar-item">Last updated: {{ value }}</div>
        <a class="navbar-item tooltip is-tooltip-bottom" data-tooltip="Click to update" @click="fetchAll(true)">
            <span v-show="isLoading"><i class="fas fa-sync is-loading"></i></span>
            <span v-show="!isLoading"><i class="fas fa-sync"></i></span>
        </a>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import moment from 'moment';

    export default {
        computed: {
            ...mapState([
                'locale',
                'lastUpdated',
                'isLoading',
            ]),
            value() {
                const date = new Date(parseInt(this.lastUpdated));
                return moment(date).fromNow();
            },
            isNeedToUpdateData() {
                return this.isLoading || Date.now() > parseInt(this.lastUpdated) + 1000 * 60 * 10;
            }
        },
        methods: {
            ...mapActions({
                fetchAll: 'FETCH_ALL',
            }),
        },
    }
</script>

<style scoped>
    .is-loading {
        animation: rotation .7s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>