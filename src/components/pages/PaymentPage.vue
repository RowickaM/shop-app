<template>
    <div style="padding: 0 15px">
        <Header :header="'Checkout'"/>
        <h1>Checkout & Payment</h1>
        <div>
            <ItemListCart v-for="product in getCart" :key="product.id" :product="product"/>
        </div>
        <div class="total"><h5>TOTAL: </h5><span>${{total}}</span></div>

        <h2>Enter your address and credit card data</h2>
        <div class="form">
            <div class="w3-row s4">
                <h4>Your address</h4>
                <label for="name">Name</label>
                <input class="w3-border" id="name" type="text" placeholder="John Doe" />

                <label for="phone">Phone</label>
                <masked-input class="w3-border" id="phone" mask="0-111-111-111" placeholder="0-100-200-300" />

                <label for="postalCode">Postal Code</label>
                <masked-input class="w3-border" id="postalCode" mask="11-111" placeholder="10-200" />

                <label for="town">Town</label>
                <input class="w3-border" id="town" type="text" placeholder="New York" />

                <label for="street">Street</label>
                <input class="w3-border" id="street" type="text" placeholder="1st Street Avenue"/>

            </div>

            <div class="w3-row s4">
                <h4>Credit card</h4>
                <label for="number">Number</label>
                <masked-input class="w3-border" id="number" mask="1111 1111 1111 1111" placeholder="---- ---- ---- ----" />

                <label for="expiryDate">Expiry date</label>
                <masked-input class="w3-border" id="expiryDate" mask="11/1111" placeholder="--/----" />

                <label for="cvv">CVV</label>
                <masked-input class="w3-border" id="cvv" mask="111" placeholder="---" />

            </div>
        </div>

        <div class="buttons">
            <router-link :to="{name:'cart'}">
                <button class="w3-button w3-black w3-padding-large w3-large">
                    back to shopping cart
                </button>
            </router-link>
            <button class="w3-button w3-green w3-padding-large w3-large">order & pay<i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ItemListCart from "@/components/cart/ItemListCart";
    import MaskedInput from 'vue-masked-input'

    import {mapGetters} from 'vuex';

    export default {
        name: "PaymentPage",
        components: {Header, ItemListCart, MaskedInput},
        computed: {
            ...mapGetters(['getCart']),
            total() {
                let total = 0;
                this.getCart.forEach(item => total += item.product.product.price.substr(1) * item.count);
                return parseFloat(total).toFixed(2);
            }
        },
    }
</script>

<style scoped lang="scss">
    .total {
        border-top: 2px solid #666;
        text-align: right;

        h5 {
            display: inline;
            font-family: "Roboto", sans-serif;
            font-size: 13px;
        }

        span {
            font-size: 20px;
            font-weight: bold;
            font-family: "Montserrat", sans-serif;
        }
    }

    input {
        height: 36px;
        width: 195px;
        display: block;
        padding-left: 5px;
    }

    label {
        font-weight: bold;
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        display: block;
        margin-top: 15px;
    }

    .form {
        display: flex;
        width: calc(33.3333% + 15px);
        justify-content: space-between;
        margin-bottom: 35px;
    }

    .w3-row {
        font-family: "Montserrat", sans-serif;

        &.s4 {
            width: 33.3333%;
        }

        h4 {
            font-weight: bold;
        }
    }

    .fas {
        margin-left: 5px;
    }
</style>