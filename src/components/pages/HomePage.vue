<template>
    <div>
        <Header/>
        <!-- Image header -->
        <div class="w3-display-container w3-container">
            <div style="width:918px; height: 612px; background: #3a3a3a"></div>
            <div class="w3-display-topleft w3-text-white" style="padding:24px 48px">
                <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
                <h1 class="w3-hide-small">COLLECTION 2016</h1>
                <p><a href="#jeans" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
            </div>
        </div>

        <ProductsList />
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ProductsList from "@/components/product/ProductsList";

    export default {
        name: "HomePage",
        components: {ProductsList, Header}
    }
</script>

<style scoped>

</style>