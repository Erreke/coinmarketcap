<template>
    <div class="section">
        <div class="container">
            <h1 class="title has-text-centered">Converter</h1>

            <app-converter />
        </div>
    </div>
</template>

<script>
    import Converter from '@/components/Converter';

    export default {
        name: 'ConverterPage',
        components: {
            'app-converter': Converter,
        },
    }
</script>
