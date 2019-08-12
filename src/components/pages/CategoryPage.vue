<template>
    <div>
        <Header :header='category'/>
        <ProductsList :nameCategory='category' />
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ProductsList from "@/components/product/ProductsList";
    export default {
        name: "CategoryPage",
        components: {ProductsList, Header},
        data(){
            return{
                category:'Shirts'
            }
        }
    }
</script>

<style scoped>

</style>