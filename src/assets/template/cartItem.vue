<template>
    <div class="product">
        <div>{{product.count}}<span>x</span></div>
        <div  class="info-product">
            <div class="pic">img</div>
            <div class="info">
                <div class="name">{{product.name}}</div>
                <div class="price-pc">${{product.price}}/pc.</div>
                <div class="price">${{product.price * product.count}}</div>
            </div>
        </div>
        <div class="remove">
            remove
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartItem",
        props: ['product']
    }
</script>

<style scoped lang="scss">
    @import "./../css/base.scss";
    @import "./../css/positions.scss";
    @import "./../css/text.scss";
    @import "./../css/space.scss";
    .product{
        margin: 15px auto;
        display: flex;
        justify-content: space-between;
        .info-product {
            display: flex;
            .pic{
                width:120px;
                height: 150px;
                background: #844d48 ;
            }
            .info {
                width: 550px;
            }
        }
    }
</style>