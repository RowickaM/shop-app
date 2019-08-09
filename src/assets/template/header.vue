<template>
    <header class="w3-container w3-xlarge">
        <p class="w3-left">Jeans</p>
        <p class="w3-right">
            i <i class="fa fa-shopping-cart w3-margin-right"></i>
            <i class="fa fa-search"></i>
        </p>
    </header>

</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped lang="scss">
    #header{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        .header-short{
            width: 66px;
            display: flex;
            justify-content: space-between;
            i{
                font-size: 24px;
            }
        }
    }

</style>