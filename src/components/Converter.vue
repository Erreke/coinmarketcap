<template>
    <section>
        <div class="level">
            <div class="level-item">
                <div class="field has-addons">
                    <app-converter-select source="first"/>
                    <app-converter-input source="first"/>

                    <app-converter-reverser/>

                    <app-converter-input source="second"/>
                    <app-converter-select source="second"/>
                </div>
            </div>
        </div>

        <div class="level">
            <app-converter-info src="first" dst="second" />
            <app-converter-info src="second" dst="first" />
        </div>
    </section>
</template>

<script>
    import {mapActions} from 'vuex';

    import ConverterInfo from '@/components/ConverterInfo';
    import ConverterInput from '@/components/ConverterInput';
    import ConverterSelect from '@/components/ConverterSelect';
    import ConverterReverser from '@/components/ConverterReverser';

    export default {
        name: 'AppConverter',

        components: {
            'app-converter-info': ConverterInfo,
            'app-converter-input': ConverterInput,
            'app-converter-select': ConverterSelect,
            'app-converter-reverser': ConverterReverser,
        },

        methods: {
            ...mapActions({
                convert: 'CONVERT',
            }),
        },

        mounted() {
            this.convert({
                first: 'bitcoin',
                second: 'ethereum',
            });
        }
    }
</script>