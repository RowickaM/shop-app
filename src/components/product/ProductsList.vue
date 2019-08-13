<template>
    <div class="w3-main">
        <h1 v-if="nameCategory" class="w3-margin-left">Explore our {{nameCategory.toLowerCase()}} collection</h1>
        <div>
            <p class="w3-small w3-text-grey w3-margin-left">{{length}} items</p>
        </div>
        <div class="products">
            <ProductMini v-for="product in getProducts"
                         :key="product.id"
                         :product="product"/>
<!--                            :category="product."/>-->
        </div>
    </div>
</template>

<script>
    import ProductMini from "@/components/product/ProductMini";
    import {mapGetters, mapActions} from "vuex";
    export default {
        name: "ProductsList",
        components: {ProductMini},
        props:['nameCategory'],
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters(['getProducts']),
            length(){
                return (this.getProducts) ? this.getProducts.length : 0;
            },
        },
        methods:{
            ...mapActions(['fetchProducts'])
        },
        created() {
            if (this.getProducts)
                this.fetchProducts();
        }
    }
</script>

<style scoped>
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";
</style>