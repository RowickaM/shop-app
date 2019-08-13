<template><div>
    <router-link :to="{name:'category', params:{name: category.name}}" v-if="category.id < 3 || category.id > 7"  class="w3-bar-item w3-button">{{category.name}}</router-link>

<!--    <router-link v-if="category.id === 3" class="w3-button w3-block w3-white w3-left-align" style="width: 100%" id="myBtn">-->
<!--        {{category.name}} <i class="fa fa-caret-down"></i>-->
<!--    </router-link>-->

<!--    <div v-if="category.id > 3 && category.id <=7" id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium w3-show">-->
<!--        <router-link class="w3-bar-item w3-button"><i  v-if="category.id===4" class="fa fa-caret-right w3-margin-right"></i>{{category.name}}</router-link>-->
<!--&lt;!&ndash;         w3-light-grey&ndash;&gt;-->
<!--    </div>-->


</div>



</template>

<script>
    export default {
        name: "NavItem",
        props:['category']
    }
</script>

<style scoped>

</style>