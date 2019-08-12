<template>
    <div class="w3-main">
        <h1 v-if="nameCategory" class="w3-margin-left">Explore our {{nameCategory.toLowerCase()}} collection</h1>
        <div>
            <p class="w3-small w3-text-grey w3-margin-left">{{products.length}} items</p>
        </div>
        <div class="products">
            <ProductMini v-for="product in products"
                         :key="product.id"
                         :product="product"/>
        </div>
    </div>
</template>

<script>
    import ProductMini from "@/assets/template/product-mini";
    export default {
        name: "ProductsList",
        components: {ProductMini},
        props:['nameCategory'],
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
                        id: 8,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                    {
                        id: 9,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                    {
                        id: 10,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                    {
                        id: 11,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                    {
                        id: 12,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                    {
                        id: 13,
                        name: 'Ripped Skinny Jeans',
                        price: 24.99,
                        annotation: ''
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";
</style>