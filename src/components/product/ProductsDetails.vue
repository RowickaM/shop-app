<template>
    <div>
        <Header/>
        <div class="short-info">
            <div id="#img"></div>
            <div>
                <h3>title</h3>
                <p>product {{getProduct.id}}</p>
                <h4>Subtitle</h4>
                <p>Little text</p>
                <h3>$Price</h3>
            </div>
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi assumenda consequatur cupiditate
            deserunt ducimus earum eligendi error in inventore maxime minima nulla odit reiciendis sapiente similique,
            voluptas? At, pariatur!
        </div>
        <div class="buttons">
            <router-link :to="{name:'home'}"><button>back to store</button></router-link>
            <button v-on:click="addToCart">add to cart</button>
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
                return this.getProductByID(parseInt(this.$route.params.id));
            }
        },
        methods:{
            ...mapActions(['addProductToCart']),
            addToCart() {
                this.addProductToCart({product: this.getProduct});
            }
        }

    }
</script>

<style scoped>

</style>