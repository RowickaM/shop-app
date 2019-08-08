<template>
<div id="header">
    <div>
        <h3>Jeans</h3>
    </div>
    <div class="header-short">
        <div><i class="fas fa-shopping-cart"></i> </div>
        <div> <input type="text" hidden> <i class="fas fa-search"></i></div>
    </div>
</div>

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