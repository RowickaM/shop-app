<template>
    <div>
        <Header :header="'Welcome'"/>
        <!-- Image header -->
        <div class="w3-display-container w3-container">
            <div >
                <img src="https://dummyimage.com/920x600/3a3a3a/fff" style="width:920px; height: 600px;">
            </div>
            <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
                <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
                <h1 class="w3-hide-small">COLLECTION 2016</h1>
                <p><a class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>

            </div>
        </div>
        <div class="w3-main">
            <h1 v-if="nameCategory" class="w3-margin-left">Explore our {{nameCategory.toLowerCase()}} collection</h1>
            <div v-if="isLoaded">
                <div>
                    <p class="w3-small w3-text-grey w3-margin-left">{{length}} items</p>
                </div>
                <div class="products">
                    <ProductMini v-for="product in getProducts"
                                 :key="product.id"
                                 :product="product"/>
                </div>
            </div>
            <div v-else class="loading ">
                <h2>Retrieving products for you...</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import {mapGetters} from 'vuex';
    import ProductMini from "@/components/product/ProductMini";

    export default {
        name: "HomePage",
        components: {ProductMini, Header},
        data() {
            return {
                nameCategory: '',
                isLoaded:false
            }
        },
        computed: {
            ...mapGetters(['getProducts']),
            length() {
                return (this.getProducts) ? this.getProducts.length : 0;
            },
        },
        created(){
            setTimeout(() => this.isLoaded = true, 500)
        }

    }


</script>

<style  lang="scss">
.loading{
    height: 256px;
    vertical-align: middle;
    text-align: center;
    h2{
        line-height: 256px;
    }
}
</style>