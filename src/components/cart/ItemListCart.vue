<template>
    <div class="item-list">
        <div class="count"><p class="count">{{product.count}}<span></span></p></div>
        <div class="product">
            <p class="name">{{product.product.product.product_name}}</p>
            <p class="price-pc">({{product.product.product.price}}/pc.)</p>
        </div>
        <div class="total"><p>${{total}}</p></div>
    </div>
</template>

<script>
    export default {
        name: "ItemListCart",
        props: ['product'],
        computed:{
            total() {
                return parseFloat(this.product.product.product.price.substr(1) * this.product.count).toFixed(2);
            }
        },
    }
</script>

<style scoped lang="scss">
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