<template>
            <router-link :to="{name:'category', params:{name: category.name}}" class="w3-bar-item w3-button "><i  class="fa  w3-margin-right"></i>{{category.name}}</router-link>
    <!--         w3-light-grey   fa-caret-right-->
</template>

<script>
    export default {
        name: "NavSubItem",
        props:['category'],
    }
</script>

<style scoped>

</style>