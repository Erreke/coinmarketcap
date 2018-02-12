<template>
    <article :class="[ 'accordion', 'is-info', { 'is-active': item.isOpened } ]">
        <div class="accordion-header toggle" @click="TOGGLE_FAQ(index)">
            <p>{{ item.q }}</p>
            <i class="icon"></i>
        </div>
        <div class="accordion-body">
            <div class="accordion-content content" v-html="item.a"></div>
        </div>
    </article>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        props: [
            'index',
            'item',
        ],
        methods: {
            ...mapMutations([
                'TOGGLE_FAQ'
            ]),
        },
    }
</script>

<style scoped>
    .accordion-header {
        user-select: none;
    }
    .icon::after {
        margin-left: 5px;
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        content: '';
        border-width: 8px 4px 0 4px;
        border-color: #fff transparent transparent transparent;
    }
    .is-active .icon::after {
        content: '';
        border-width: 0 4px 8px 4px;
        border-color: transparent transparent #fff transparent;
    }
</style>