<template>
    <div class="site">
        <Nav/>
        <div class="w3-main" style="margin-left:250px;">
<!--            <Context/>-->
<!--            <ListProducts />-->
            <Cart />

            <Footer/>
        </div>
    </div>
</template>

<script>
    import Nav from "@/assets/template/nav";
    import Footer from "@/assets/template/footer";
    import Context from "@/assets/template/context";
    import ListProducts from "@/assets/template/listProducts";
    import Cart from "@/assets/template/Cart";

    export default {
        name: "home",
        components: {Cart, ListProducts, Context, Footer, Nav}
    }
</script>

<style scoped lang="scss">
    @import "./../css/base.scss";
    @import "./../css/positions.scss";
    @import "./../css/text.scss";
    @import "./../css/space.scss";

    .site{
        display: flex;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>