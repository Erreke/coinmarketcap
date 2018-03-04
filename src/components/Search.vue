<template>
    <nav class="level">
        <div class="level-left"></div>
        <div class="level-right">
            <div class="control">
                <div class="field has-addons">
                    <label class="control">
                        <input class="input" type="text" :placeholder="$t('find-a-coin')">
                    </label>
                    <div class="control">
                        <a class="button is-info">{{ $t('search') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
