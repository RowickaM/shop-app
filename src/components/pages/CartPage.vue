<template>
    <div>
        <Header />
        <h5>Chosen products</h5>
        <div class="product-cart">
            <CartItem v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="buttons">
            <button class="w3-button w3-black w3-padding-large w3-large">back to store</button>
            <button class="w3-button w3-green w3-padding-large w3-large" >checkout  <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import CartItem from "@/components/cart/CartItem";
    export default {
        name: "Cart",
        components: {CartItem, Header},
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: '',
                        count:1
                    },
                    {
                        id: 2,
                        name: 'Mega Ripped Jeans',
                        price: 19.99,
                        annotation: 'New',
                        count:3
                    },
                    {
                        id: 3,
                        name: 'Washed Skinny Jeans',
                        price: 20.50,
                        annotation: '',
                        count:1
                    },
                    {
                        id: 4,
                        name: 'Vintage Skinny Jeans',
                        price: 14.99,
                        annotation: '',
                        count:2
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";

</style>