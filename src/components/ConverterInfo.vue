<template>
    <p class="level-item has-text-centered">
        1 {{ converter[src].symbol }} = {{ converter[dst].oppositePrice }} {{ converter[dst].symbol }}
    </p>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'ConverterInfo',

        props: {
            src: {
                type: String,
                required: true,
            },
            dst: {
                type: String,
                required: true,
            },
        },

        computed: {
            ...mapState([
                'converter',
            ]),
        },
    }
</script>