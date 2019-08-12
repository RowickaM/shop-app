<template>
    <div>
        <Header/>
        <div class="short-info">
            <div id="#img"></div>
            <div>
                <h3>title</h3>
                <p>product id</p>
                <h4>Subtitle</h4>
                <p>Little text</p>
                <h3>$Price</h3>
            </div>
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi assumenda consequatur cupiditate
            deserunt ducimus earum eligendi error in inventore maxime minima nulla odit reiciendis sapiente similique,
            voluptas? At, pariatur!
        </div>
        <div class="buttons">
            <button>BACK TO STORE</button>
            <button>ADD TO CART</button>
        </div>
    </div>
</template>

<script>
    import Header from "@/assets/template/header";

    export default {
        name: "ProductsDetails",
        components: {Header}
    }
</script>

<style scoped>

</style>