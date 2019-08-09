<template>
    <div class="w3-main">
        <h2>Explore our {{nameCategory}} collection</h2>
        <div>
            <p class="w3-small">{{products.length}} items</p>
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
        name: "listProducts",
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
                nameCategory:'shirts'
            }
        }
    }
</script>

<style scoped>

</style>