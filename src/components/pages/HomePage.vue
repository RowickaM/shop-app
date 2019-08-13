<template>
    <div>
        <Header/>
        <!-- Image header -->
        <div class="w3-display-container w3-container">
            <div style="width:918px; height: 612px; background: #3a3a3a"></div>
            <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
                <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
                <h1 class="w3-hide-small">COLLECTION 2016</h1>
                <p><a class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>

            </div>
        </div>
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
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import {mapActions, mapGetters} from 'vuex';
    import ProductMini from "@/components/product/ProductMini";

    export default {
        name: "HomePage",
        components: {ProductMini, Header},
        data(){
            return {
                nameCategory:''
            }
        },
        computed: {
            ...mapGetters(['getProducts']),
            length() {
                return (this.getProducts) ? this.getProducts.length : 0;
            },
        },
            methods: {
                ...mapActions(['fetchProducts'])
            },
            created() {
                if (!this.getProducts)
                    this.fetchProducts();
            }
        }


</script>

<style scoped>

</style>