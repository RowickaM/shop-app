<template>
    <div>
        <i class="fas fa-times"></i>
        <h2>Title</h2>
        <h4>Subtitle</h4>
        <div>
            <button >BACK TO STORE</button>
            <button >SEE YOUR SHOPPING CART <i class="fa fa-shopping-cart w3-margin-right"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal"
    }
</script>

<style scoped>
    @import "./../css/base.scss";
    @import "./../css/positions.scss";
    @import "./../css/text.scss";
    @import "./../css/space.scss";
div{
    width: 900px;
    height: 240px;
}
</style>