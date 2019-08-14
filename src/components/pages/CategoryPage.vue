<template>
    <div>
        <Header :header='name'/>
        <div class="w3-main">
            <h1 v-if="name" class="w3-margin-left">Explore our {{name.toLowerCase()}} collection</h1>
            <div>
                <p class="w3-small w3-text-grey w3-margin-left">{{length}} items</p>
            </div>
            <div v-if="length > 0 " class="products">
                <ProductMini v-for="product in getProducts"
                             :key="product.id"
                             :product="product"/>
            </div>
            <div v-else class="loading">
                <h2>Not found</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ProductMini from "@/components/product/ProductMini";
    import categories from "@/assets/data/categories";
    import subCategories from "@/assets/data/subCategories";
    import {mapGetters} from "vuex";

    export default {
        name: "CategoryPage",
        components: {Header, ProductMini},
        computed: {
            ...mapGetters(['getProductsByCategory']),
            length() {
                return (this.getProducts) ? this.getProducts.length : 0;
            },
            name() {
                return this.$route.params.name;
            },
            getProducts() {
                let idCategories = categories.filter(item=> this.name.toString().toLowerCase() === item.name.toLowerCase());

                if (!idCategories[0]){
                    idCategories= subCategories.filter(item=> this.name.toString().toLowerCase() === item.name.toLowerCase());
                }

                return this.getProductsByCategory(parseInt(idCategories[0].id));
            },

        },
    }
</script>

<style scoped lang="scss">
    .empty-category{
        text-align: center;
        font-size: 40px;
    }
</style>