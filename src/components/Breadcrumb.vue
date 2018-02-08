<template>
    <div class="section" v-if="notMainPage">
        <div class="container">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <router-link :to="{ name: 'MainPage' }">Home</router-link>
                    </li>
                    <li class="is-active"><a href="#" aria-current="page">{{ currentPage }}</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'breadcrumb',
        data() {
            return {
                currentPage: this.$route.params.currency
            }
        },
        computed: {
            notMainPage() {
                return this.$route.name !== 'MainPage';
            }
        }
    }
</script>