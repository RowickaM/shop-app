<template>
    <div style=" width: 920px;">
        <Header/>
        <h5>Chosen products</h5>
        <div class="product-cart">
            <cart-item v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="buttons">
            <button>BACK TO STORE</button>
            <button>CHECKOUT</button>
        </div>
    </div>
</template>

<script>
    import Header from "@/assets/template/header";
    import CartItem from "@/assets/template/cartItem";
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
.product-cart{
}
</style>