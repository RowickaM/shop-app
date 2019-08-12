<template>
    <div class="product">
        <div id="img">
            <img src="#"/>
            <div class="button w3-button w3-black">Buy now <i class="fa fa-shopping-cart w3-margin-right"></i></div>
        </div>
        <span v-if="product.annotation !== ''">{{product.annotation}}</span>
        <div class="info">
            <p>{{product.name}}</p>
            <p><b>${{product.price}}</b></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductMini"
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
        visibility: hidden ; /*czemu się nie chowa*/
        position: absolute;
        top: 40%;
        left: 16%;
        padding-right: 0;
    }

    .product {
        position: relative;

        &:hover {
            margin-top: -5px;

            .button {
                visibility: visible;
            }
        }
    }

    #img {
        position: relative;
        width: 205px;
        height: 256px;
        background-image: linear-gradient(to right top, #37051b, #5e2831, #844d48, #a97563, #cd9f81);
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