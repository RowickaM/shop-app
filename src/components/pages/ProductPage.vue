<template>
    <div>
        <Header/>
        <div class="short-info">
            <div id="img">
                <img :src="getProduct.product.image" />
            </div>
            <div class="w3-margin-left-large">
                <h1>{{getProduct.product.product_name}}y</h1>
                <h5>product {{getProduct.product.id}}</h5>
                <h3 class="bold">{{getProduct.product.company}}</h3>
                <p>{{getProduct.product.short_description}}</p>
                <h2 class="bold">{{getProduct.product.price}}</h2>
            </div>
        </div>
        <div class="description">
            {{getProduct.product.description}}
        </div>
        <div class="buttons">
            <router-link :to="{name:'home'}">
                <button class="w3-button w3-black w3-padding-large w3-large">back to store</button>
            </router-link>
            <button class="w3-button w3-green w3-padding-large w3-large" v-on:click="addToCart" >
                add to cart <i class="fa fa-shopping-cart w3-margin-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "ProductsDetails",
        components: {Header},
        computed:{
            ...mapGetters(['getProductByID']),
            getProduct(){
                return this.getProductByID(parseInt(this.$route.params.id))[0];
            }
        },
        methods:{
            ...mapActions(['addProductToCart', 'fetchProducts']),
            addToCart() {
                this.addProductToCart({product: this.getProduct});
            }
        },
        created(){
            window.scrollTo(0,0);
            this.fetchProducts();
        },
    }
</script>

<style scoped lang="scss">
    img {
        min-width: 386px;
        min-height: 482px;
    }

    .short-info {
        display: flex;
        width: 98%;
        margin: 0 auto;
        justify-content: space-between;
        .w3-margin-left-large{
            margin-left: 70px;
            h1{
                margin-bottom: 0;
            }
            h5,h3,h2,p{
                margin-top:10px;
                margin-bottom: 0;
            }
            p{
                font-size: 14px;
            }
        }
    }

    .description{
        padding: 30px 10px;
        font-size: 15px;
    }

    .bold{
        font-weight: bold;
    }

    /*386482*/

</style>