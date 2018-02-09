<template>
    <nav class="level">
        <div class="level-left">
            <currency-selector></currency-selector>
        </div>
        <div class="level-right">
            <div class="control">
                <div class="field has-addons">
                    <div class="control">
                        <input class="input" type="text" placeholder="Find a coin">
                    </div>
                    <div class="control">
                        <a class="button is-info">Search</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import CurrencySelector from '@/components/CurrencySelector';

    export default {
        components: {
            CurrencySelector
        },
    }
</script>