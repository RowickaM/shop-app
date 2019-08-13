<template>
    <div>
        <Header :header='name'/>
        <div class="w3-main">
            <h1 v-if="name" class="w3-margin-left">Explore our {{name.toLowerCase()}} collection</h1>
            <div>
                <p class="w3-small w3-text-grey w3-margin-left">{{length}} items</p>
            </div>
<!--            <div class="products">-->
<!--                <ProductMini v-for="product in getProducts"-->
<!--                             :key="product.id"-->
<!--                             :product="product"/>-->
<!--            </div>-->
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
        data(){
            return{
                category:'Shirts',
                name:'',
                length:0,
            }
        },
        computed: {
            ...mapGetters(['getProductsByCategory']),
            // length() {
            //     return (this.getProducts) ? this.getProducts.length : 0;
            // },
            // name() {
            //     return this.$router.currentRoute.params.name;
            // },
            getProducts() {
                console.log( this.$router.currentRoute, this.$router.params);
                return this.getProductsByCategory(this.name.slice(9));

            }
        },
        beforeRouteUpdate(){
            this.name = this.$router.currentRoute.params.name;
            this.length = (this.getProducts) ? this.getProducts.length : 0;
        },
            created(){
                // if (this.getProducts){
                //     this.length = this.getProducts.length
                // }

            },
    }
</script>

<style scoped>

</style>