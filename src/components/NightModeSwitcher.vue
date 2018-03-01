<template>
    <div class="navbar-item">
        <div class="field is-grouped">
            <div class="control">
                <div class="field">
                    <input id="switchNightMode" type="checkbox" class="switch is-rounded is-large is-info" v-model="isChecked">
                    <label for="switchNightMode"></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'NightModeSwitcher',

        computed: {
            ...mapState([
                'isDarkTheme',
            ]),
            isChecked: {
                get: function () {
                    return this.isDarkTheme;
                },
                set: function (value) {
                    this.setDarkTheme(value);
                }
            }

        },

        methods: {
            ...mapMutations({
                setDarkTheme: 'SET_DARK_THEME',
            }),
        }
    }
</script>