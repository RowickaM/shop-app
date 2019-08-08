<template>
    <div>
        <div class="wrapper">
            <div id="img"></div>
            <div class="text-top-left-wrapper text-white">
                <p class="text-large">New arrivals</p>
                <p class="text-smallest">COLLECTION 2016</p>
                <p>
                    <a href="#jeans" class="btn btn-black btn-padding-large text-large">SHOP NOW</a>
                </p>
            </div>
        </div>
        <div>Count: {{products.length}} items</div>
        <div class="products">
            <ProductMini v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
    import ProductMini from "@/assets/template/product-mini";

    export default {
        name: "context",
        components: {ProductMini},
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                    {
                        id: 2,
                        name: 'Mega Ripped Jeans',
                        price: 19.99,
                        annotation: 'New'
                    },
                    {
                        id: 3,
                        name: 'Washed Skinny Jeans',
                        price: 20.50,
                        annotation: ''
                    },
                    {
                        id: 4,
                        name: 'Vintage Skinny Jeans',
                        price: 14.99,
                        annotation: ''
                    },
                    {
                        id: 5,
                        name: 'Mega Ripped Jeans',
                        price: 19.99,
                        annotation: ''
                    },
                    {
                        id: 6,
                        name: 'Washed Skinny  Jeans',
                        price: 20.50,
                        annotation: ''
                    },
                    {
                        id: 7,
                        name: 'Vintage Skinny Jeans',
                        price: 14.99,
                        annotation: 'Sale'
                    },
                    {
                        id: 1,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import './../css/base';
    .wrapper {
        position: relative;

        .text-top-left-wrapper {
            padding: 24px 48px;
            position: absolute;
            top: 0;
            left: 0;

        }

        #img {
            width: 918px;
            height: 612px;
            background-color: #2c3e50;
        }
        .text-white{
            color:#fff;
            p{
                margin: 10px 0;
            }
        }
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        width: 918px;
        justify-content: space-between;
    }
</style>