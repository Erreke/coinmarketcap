<template>
    <div class="navbar-end" v-if="isNeedToUpdateData">
        <div class="navbar-item">Last updated: {{ value }}</div>
        <a class="navbar-item tooltip is-tooltip-bottom" data-tooltip="Click to update" @click="fetchData">
            <i class="fas fa-sync"></i>
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
            ]),
            value() {
                const date = new Date(this.lastUpdated);
                return moment(date).fromNow();
            },
            isNeedToUpdateData() {
                return true;
            }
        },
        methods: {
            ...mapActions({
                fetchData: 'FETCH_DATA_FORCE',
            }),
        },
    }
</script>