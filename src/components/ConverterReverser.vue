<template>
    <div class="control">
        <a :class="['button', { 'is-loading': isReversing }]" @click="handleReverse">
            <span class="icon is-small">
                <i class="fas fa-exchange-alt"></i>
            </span>
        </a>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'AppConverterReverser',

        methods: {
            handleReverse() {

            },
        },

        computed: {
            ...mapState([
                'converter',
            ]),
            isReversing() {
                return this.converter.isReversing;
            }
        },
    }
</script>