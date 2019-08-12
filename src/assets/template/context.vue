<template>
    <div class="w3-main" >
<Header />
        <!-- Image header -->
        <div class="w3-display-container w3-container">
            <div style="width:918px; height: 612px; background: #3a3a3a"></div>
            <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
                <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
                <h1 class="w3-hide-small">COLLECTION 2016</h1>
                <p><a href="#jeans" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
            </div>
        </div>

        <div class="w3-container w3-text-grey" id="jeans">
            <p>{{products.length}} items</p>
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
    import Header from "@/assets/template/header";

    export default {
        name: "context",
        components: {Header, ProductMini},
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
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../css/base.scss";
    @import "./../css/positions.scss";
    @import "./../css/text.scss";
    @import "./../css/space.scss";

    a.w3-button{

        letter-spacing: 2px;
        font-size: 19px !important;
        font-weight: normal;
    }

    /*.wrapper {*/
    /*    position: relative;*/

    /*    .text-top-left-wrapper {*/
    /*        padding: 24px 48px;*/
    /*        position: absolute;*/
    /*        top: 0;*/
    /*        left: 0;*/

    /*    }*/

    /*    #img {*/
    /*        width: 918px;*/
    /*        height: 612px;*/
    /*        background-color: #2c3e50;*/
    /*    }*/

    /*    .text-white {*/
    /*        color: #fff;*/

    /*        p {*/
    /*            margin: 10px 0;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>