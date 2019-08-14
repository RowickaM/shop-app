<template>
    <div>
        <a v-if="category.startsub" v-on:click="changeShow"
           :class="{'w3-light-grey' : choose || show }"
           class="w3-button w3-block w3-left-align"
           style="width: 100%;">

            {{category.name}} <i class="fa fa-caret-down"></i>
        </a>
        <router-link :to="{name:'category', params:{name: category.name}}"
                     v-if="!category.startsub && !category.sub"
                     class="w3-bar-item w3-button"
                     :class="{'w3-light-grey' : choose}">
            {{category.name}}
        </router-link>
            <div v-if="category.startsub && show" id="demoAcc"
                 class="w3-bar-block w3-hide w3-padding-large w3-medium w3-show">
                        <NavSubItem v-for="subcategory in subcategories"
                                    :key="subcategory.id"
                                    :category="subcategory"/>
<!--                         w3-light-grey-->
            </div>

</div>



</template>

<script>
    import NavSubItem from "@/components/misc/NavSubItem";
    import subcategories from "@/assets/data/subCategories";

    export default {
        name: "NavItem",
        components: {NavSubItem},
        props:['category'],
        data(){
            return {
                show:false,
                subcategories: subcategories
            }
        },
        computed:{
            choose(){
                return this.$route.params.name === this.category.name;
            }
        },
        methods:{
            changeShow(){
                this.show = !this.show;
                this.$router.push({name:'category', params:{name: this.category.name}})
            }
        }

    }
</script>

<style scoped lang="scss">

</style>