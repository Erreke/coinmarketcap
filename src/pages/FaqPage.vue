<template>
    <div class="section">
        <div class="container">
            <section class="accordions">
                <faq-item
                    v-for="i in 12"
                    :item="getFaqText(i)"
                    :number="i"
                    :key="i"
                />
            </section>
        </div>
    </div>
</template>

<script>
    import FaqItem from '@/components/FaqItem';

    export default {
        components: {
            FaqItem,
        },
        methods: {
            getFaqText(i) {
                return {
                    q: this.$t(`faq.q${i}`),
                    a: this.$t(`faq.a${i}`),
                }
            }
        },
    }
</script>