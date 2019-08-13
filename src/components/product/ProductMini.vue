<template>
    <div class="product">
        <div id="img">
            <img :src="product.image"/>
            <div class="button w3-button w3-black" v-on:click="addToCart">Buy now <i
                    class="fa fa-shopping-cart w3-margin-right"></i></div>
        </div>
        <span v-if="product.annotation">{{product.annotation}}</span>
        <router-link :to="{name:'product', params:{'category':'category', 'id':product.id}}">
            <div class="info">
                <p>{{product.product_name}}</p>
                <p><b>{{product.price}}</b></p>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "ProductMini",
        props: ['product'], //,'category'
        methods: {
            ...mapActions(['addProductToCart', 'changeModalState']),
            addToCart() {
                this.changeModalState();
                this.addProductToCart({product: this.product});
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";

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
        margin-right: 13px;
        position: relative;

        &:hover {
            margin-top: -5px;

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