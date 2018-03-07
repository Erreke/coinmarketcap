<template>
    <label :class="['control', { 'is-loading': isCalculating }]">
        <input class="input" type="number" :value="value" placeholder="Amount of money" @input="handleInput"/>
    </label>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: 'AppConverterInput',
        props: {
            source: {
                type: String,
                required: true,
            },
        },
        computed: {
            ...mapGetters([
                'coins',
                'coinsToShow',
            ]),
            ...mapState([
                'converter',
            ]),
            value() {
                return this.converter[this.source].amount;
            },
            isCalculating() {
                return this.converter[this.source].isCalculating;
            }
        },
        methods: {
            handleInput(e) {
                console.log(e.target.value);
            }
        },
    }
</script>