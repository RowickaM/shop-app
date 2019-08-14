<template>
    <div>
        <Header/>
        <h1>Chosen products</h1>
        <div v-if="getCart.length > 0" class="product-cart">
            <CartItem v-for="product in getCart" :key="product.id" :product="product" :count="product.count"/>
        </div>
        <div v-else class="empty-category w3-text-grey">
            <p>Brak wyników.</p>
        </div>
        <div class="buttons">
            <router-link :to="{name:'home'}"><button class="w3-button w3-black w3-padding-large w3-large">back to store</button></router-link>
            <router-link :to="{name:'payment'}">
                <button class="w3-button w3-green w3-padding-large w3-large">
                    checkout <i class="fas fa-arrow-right"></i>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import CartItem from "@/components/cart/CartItem";
    import {mapGetters, mapActions} from "vuex";

    export default {
        name: "Cart",
        components: {CartItem, Header},
        computed: {
            ...mapGetters(['getCart']),
        },
        methods: {
            ...mapActions(['fetchProducts']),
        },
        created() {
            this.fetchProducts();
            // this.setTempCart();
        }
    }
</script>

<style scoped lang="scss">

</style>