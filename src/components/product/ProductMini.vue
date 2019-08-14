<template>
    <div class="product">
        <div :id=id>
            <div :id="loader" class="loader">
            </div>
            <div class="button w3-button w3-black" v-on:click="addToCart">Buy now <i
                    class="fa fa-shopping-cart w3-margin-right"></i></div>
        </div>
        <span v-if="product.annotation">{{product.annotation}}</span>
        <router-link :to="{name:'product', params:{'category': getNameCategory(), 'id':product.product.id}}">
            <div class="info">
                <p>{{product.product.product_name}}</p>
                <p><b>{{product.product.price}}</b></p>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import categories from "@/assets/data/categories";
    import subCategories from "@/assets/data/subCategories";

    export default {
        name: "ProductMini",
        props: ['product'],
        data(){
            return{
                isLoaded: false
            }
        },
        methods: {
            ...mapActions(['addProductToCart', 'changeModalState']),
            addToCart() {
                this.changeModalState();
                this.addProductToCart({product: this.product});
            },
            getNameCategory(){
                let idCategories = categories.filter(item=> this.product.category === item.id);

                if (!idCategories[0]){
                    idCategories= subCategories.filter(item=> this.product.category === item.id);
                }
                return idCategories[0].name;
            }
        },
        computed:{
            id(){
                return "img-"+this.product.product.id;
            },
            loader(){
                return "loader-"+this.product.product.id;
            },
            // category(){
            //     return this.getNameCategory;
            // }
        },
        mounted(){

            let loader = document.getElementById(this.loader);

            let img = new Image(205,256);
            img.src = this.product.product.image;
            img.onload = function (){
                loader.remove()
            };
            document.getElementById(this.id).append(img);


        }
    }
</script>

<style scoped lang="scss">
    @import './../../assets/css/loader.css';

    .product .button {
        background: black;
        color: white;
        visibility: hidden;
        position: absolute;
        top: 43%;
        left: 23%;
        padding-right: 0;
    }

    .info {
        width: 205px;
        cursor: pointer;
    }

    .product {
        margin-left: 12px;
        height: 383px ;
        margin-right: 13px;
        position: relative;
        transition: margin .3s ease-in;

        &:hover {
            margin-top: -5px;
            /*transition: margin .3s ease-in;*/

            .button {
                visibility: visible;
            }
        }
    }

    img {
        position: relative;
        width: 205px;
        height: 256px;
    }

    span {
        background: black;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        padding: 3px;
    }
</style>