<template>
    <div style="padding: 0 15px">
        <Header :header="'Checkout'"/>
        <h1>Checkout & Payment</h1>
        <div>
            <ItemListCart v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="total"><h5>TOTAL: </h5><span>${{total}}</span></div>

        <h2>Enter your address and credit card data</h2>
        <div class="form">
            <div class="w3-row s4">
                <h4>Your address</h4>
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="John Doe">

                <label for="phone">Name</label>
                <input id="phone" type="tel" placeholder="0-100-200-300">

                <label for="postalCode">Name</label>
                <input id="postalCode" type="text" placeholder="10-200">

                <label for="town">Name</label>
                <input id="town" type="text" placeholder="New York">

                <label for="street">Name</label>
                <input id="street" type="text" placeholder="1st Street Avenue">

            </div>

            <div class="w3-row s4">
                <h4>Credit card</h4>
                <label for="number">Name</label>
                <input id="number" type="text" placeholder="---- ---- ---- ----">

                <label for="expiryDate">Name</label>
                <input id="expiryDate" type="text" placeholder="--/----">

                <label for="cvv">Name</label>
                <input id="cvv" type="text" placeholder="---">

            </div>
        </div>

        <div class="buttons">
            <button class="w3-button w3-black w3-padding-large w3-large">back to shopping cart</button>
            <button class="w3-button w3-green w3-padding-large w3-large" >order & pay<i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ItemListCart from "@/components/cart/ItemListCart";

    export default {
        name: "PaymentPage",
        components: {Header, ItemListCart},
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: '',
                        count: 1
                    },
                    {
                        id: 2,
                        name: 'Mega Ripped Jeans',
                        price: 19.99,
                        annotation: 'New',
                        count: 3
                    },
                    {
                        id: 3,
                        name: 'Washed Skinny Jeans',
                        price: 20.50,
                        annotation: '',
                        count: 1
                    },
                    {
                        id: 4,
                        name: 'Vintage Skinny Jeans',
                        price: 14.99,
                        annotation: '',
                        count: 2
                    },
                ]
            }
        },
        computed: {
            total() {
                let total = 0;
                this.products.forEach(item => total += item.price * item.count);
                return total;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/space.scss";
    @import "./../../assets/css/text.scss";

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
        border: 2px solid rgba(132, 132, 132, 0.89);
        display: block;
    }

    label {
        font-weight: bold;
        font-size: 12px;
        font-family: "Montserrat", sans-serif;
        display: block;
    }

    .form{
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
    .fas{
        margin-left: 5px;
    }
</style>