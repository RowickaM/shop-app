<template>
    <div class="item-list">
        <div class="count"><p class="count">{{product.count}}<span></span></p></div>
        <div class="product">
            <p class="name">{{product.name}}</p>
            <p class="price-pc">(${{product.price}}/pc.)</p>
        </div>
        <div class="total"><p>${{product.price * product.count}}</p></div>
    </div>
</template>

<script>
    export default {
        name: "ItemListCart",
        props: ['product']
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/space.scss";
    @import "./../../assets/css/text.scss";

    .item-list {
        display: flex;
        justify-content: space-between;

        p {
            font-weight: bold;
        }
        p.price-pc{
            font-weight: normal;
            margin-left: 50px;
        }
    }



    p.count {
        :before {
            content: 'x';
            vertical-align: text-bottom;
        }
    }

    .product {
        display: flex;

        width: 800px;
    }
</style>