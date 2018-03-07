<template>
    <div class="control">
        <div :class="['dropdown', { 'is-active': isOpened }]">
            <div class="dropdown-trigger">
                <button class="button" @click="handleToggle">
                    <span>{{ selected.name }} ({{ selected.symbol }})</span>
                    <span class="icon is-small"><i class="fas fa-angle-down"></i></span>
                </button>
            </div>
            <div class="dropdown-menu" @mouseleave="handleClose">
                <div class="dropdown-content">
                    <label class="dropdown-item">
                        <input class="input" type="text" placeholder="Coin">
                    </label>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item" v-for="item in coinsToShow">{{ item.name }} ({{ item.symbol }})</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';

    export default {
        name: 'AppConverterSelect',
        props: {
            source: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                isOpened: false,
            }
        },
        methods: {
            handleToggle() {
                this.isOpened = !this.isOpened;
            },
            handleClose() {
                this.isOpened = false;
            }
        },
        computed: {
            ...mapGetters([
                'coins',
                'coinsToShow',
            ]),
            ...mapState([
                'converter',
            ]),
            selected() {
                return this.converter[this.source]
            }
        },
    }
</script>