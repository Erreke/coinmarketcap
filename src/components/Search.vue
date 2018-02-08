<template>
    <nav class="level">
        <div class="level-left">
            <div class="select">
                <label>
                    <select>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>RUB</option>
                    </select>
                </label>
            </div>
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
    export default {
        data() {
            return {
                currencies: [
                    "AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR"
                ]
            }
        }
    }
</script>