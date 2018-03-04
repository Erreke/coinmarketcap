<template>
    <span :class="className">
        <slot />
    </span>
</template>

<script>
    export default {
        name: 'colorize',
        props: ['value'],
        computed: {
            className() {
                return this.value > 0 ? 'green' : 'red'
            }
        }
    }
</script>

<style>
    .green {
        color: green;
    }
    .red {
        color: red;
    }
</style>