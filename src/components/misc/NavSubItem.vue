<template>
            <router-link :to="{name:'category', params:{name: category.name}}" class="w3-bar-item w3-button"  :class="{ 'w3-light-grey' : choose}">
                <i  class="fa  w3-margin-right "  :class="{ 'fa-caret-right' : choose}"></i>{{category.name}}
            </router-link>
    <!--        w router-link w3-light-grey   w i fa-caret-right-->
</template>

<script>
    export default {
        name: "NavSubItem",
        props:['category'],
        computed:{
            choose(){
                return this.$route.params.name === this.category.name;
            }
        }
    }
</script>

<style scoped lang="scss">
.w3-bar-item.w3-button{
    padding-left: 0;
}
.w3-bar-item.w3-button.w3-light-grey{
    padding-left: 16px;
}
</style>