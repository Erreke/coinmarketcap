<template>
    <div class="section">
        <div class="container">
            <section class="accordions">
                <faq-item v-for="(item, index) in faq" :index="index" :item="item" :key="index"></faq-item>
            </section>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import FaqItem from '@/components/FaqItem';

    export default {
        components: {
            FaqItem,
        },
        computed: mapState([
            'faq'
        ]),
    }
</script>