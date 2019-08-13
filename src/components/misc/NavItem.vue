<template><div>
    <router-link :to="{name:'category', params:{name: category.name}}" >
        <a v-if="category.startsub" v-on:click="changeShow" class="w3-button w3-block w3-white w3-left-align" style="width: 100%;">{{category.name}} <i class="fa fa-caret-down"></i></a>
        <a v-if="!category.startsub && !category.sub" class="w3-bar-item w3-button">{{category.name}}</a>
            <div v-if="category.sub && show" id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium w3-show">
                        <router-link class="w3-bar-item w3-button"><i  v-if="category.id===4" class="fa fa-caret-right w3-margin-right"></i>{{category.name}}</router-link>
<!--                         w3-light-grey-->
                <NavSubItem v-if="show" :category="category"/>
            </div>
    </router-link>

</div>



</template>

<script>
    import NavSubItem from "@/components/misc/NavSubItem";
    export default {
        name: "NavItem",
        components: {NavSubItem},
        props:['category'],
        data(){
            return {
                show:false
            }
        },
        methods:{
            changeShow(){
                this.show = true;
            }
        },
        created(){
            let temp = document.getElementsByClassName('w3-button')[10];
        }
    }
</script>

<style scoped>

</style>