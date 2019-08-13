<template>
    <div>
        <Header :header='name'/>
        <div class="w3-main">
            <h1 v-if="name" class="w3-margin-left">Explore our {{name.toLowerCase()}} collection</h1>
            <div>
                <p class="w3-small w3-text-grey w3-margin-left">{{length}} items</p>
            </div>
            <div class="products">
                <ProductMini v-for="product in getProducts"
                             :key="product.id"
                             :product="product"/>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ProductMini from "@/components/product/ProductMini";
    import {mapGetters} from "vuex";

    export default {
        name: "CategoryPage",
        components: {Header, ProductMini},
        computed: {
            ...mapGetters(['getProductsByCategory']),
            length() {
                return (this.getProducts) ? this.getProducts.length : 0;
            },
            name() {
                return this.$route.params.name;
            },
            getProducts() {
                return this.getProductsByCategory(parseInt(this.name.slice(9)));
            }
        },
    }
</script>

<style scoped>

</style>