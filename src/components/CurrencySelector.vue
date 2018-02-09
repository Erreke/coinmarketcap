<template>
    <div class="select">
        <label>
            <select @change="handleSelect">
                <option v-for="item in currencies" :key="item.text" :value="item.value">{{ item.text }}</option>
            </select>
        </label>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'currencies',
                'selectedCurrency',
            ]),
        },
        methods: {
            handleSelect(e) {
                this.$store.dispatch('SELECT_CURRENCY', e.target.value.toUpperCase());
            }
        }
    }
</script>