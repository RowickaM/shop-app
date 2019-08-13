<template>
    <div>
        <router-link :to="{name:'category', params:{name: category.name}}"  v-if="category.startsub" v-on:click="changeShow" class="w3-button w3-block w3-white w3-left-align" style="width: 100%;">{{category.name}} <i class="fa fa-caret-down"></i></router-link>
        <router-link :to="{name:'category', params:{name: category.name}}"  v-if="!category.startsub && !category.sub" class="w3-bar-item w3-button">{{category.name}}</router-link>
            <div v-if="category.startsub && show" id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium w3-show">
                        <NavSubItem v-for="subcategory in subcategories" :key="subcategory.id" :category="subcategory"/>
<!--                         w3-light-grey-->
            </div>

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
                show:false,
                subcategories:[
                    {
                        id: 4,
                        name: 'categoria4',
                        sub:true
                    },
                    {
                        id: 5,
                        name: 'categoria5',
                        sub:true
                    },
                    {
                        id: 6,
                        name: 'categoria6',
                        sub:true
                    },
                    {
                        id: 7,
                        name: 'categoria7',//tu koniec submenu
                        sub:true
                    },
                ]
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