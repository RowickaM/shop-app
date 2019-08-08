<template>
    <div class="site">
        <Nav/>
        <div class="context">
            <Header/>
            <Context/>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import Header from "@/assets/template/header";
    import Nav from "@/assets/template/nav";
    import Footer from "@/assets/template/footer";
    import Context from "@/assets/template/context";

    export default {
        name: "home",
        components: {Context, Footer, Nav, Header}
    }
</script>

<style scoped lang="scss">
    .site{
        display: flex;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>