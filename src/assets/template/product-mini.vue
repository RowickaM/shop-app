<template>
    <div class="product">
        <div id="img"></div>
        <span v-if="product.annotation !== ''">{{product.annotation}}</span>
        <div class="info">
            <p>{{product.name}}</p>
            <p><b>${{product.price}}</b></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-mini",
        props:['product']
    }
</script>

<style scoped>
    .product{
        position: relative;
    }
    #img {
        width: 205px;
        height: 256px;
        background-image: linear-gradient(to right top, #37051b, #5e2831, #844d48, #a97563, #cd9f81);
    }
    span{
        background: black;
        color: white;
        position: absolute;
        top:0;
        left: 0;
        padding: 3px;
    }
</style>