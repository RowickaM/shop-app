<template>
    <header >
        <p class="w3-xlarge">{{headerDisplay}}</p>
        <p style="display: flex; align-items: baseline">
            <router-link :to="{name:'cart'}" class="header-short">
                {{getCartCount}} items<i class="fa fa-shopping-cart w3-margin-right"></i>
            </router-link>
            <input v-model="search" placeholder="Zacznij pisać aby wyszukać" class="search" style="display: none; "/>
            <i class="fa fa-search" v-on:click="showSearchBar"></i>
        </p>
    </header>

</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Header",
        props: ['header'],
        computed: {
            ...mapGetters(['getCartCount']),
            getComponent(){
                return this.$router.currentRoute.name;
            },
            headerDisplay(){
                if (this.header === 'categoria4' || this.header === 'categoria5' || this.header === 'categoria6' || this.header === 'categoria7'){
                    return "Categoria3 | "+this.header;
                }else{
                    return this.header
                }
            }
        },
        data(){
            return {
                search:''
            }
        },
        methods:{
            showSearchBar(){
                let searchbar = document.getElementsByClassName('search')[0];
                if (searchbar.style.display==='none') {

                    searchbar.style.display='block';
                    setTimeout(()=> searchbar.style.width = '330px', 1);
                }
                else{
                    searchbar.style.width='0';
                    setTimeout(()=>searchbar.style.display='none', 400);
                }

            }
        },
        watch:{
            search: function (val) {
                if (this.getComponent !=='find')
                    this.$router.push({name:'find'})
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";

    header {
        display: flex;
        justify-content: space-between;

        a.header-short {
            width: 100px;
            display: flex;
            i {
                font-size: 24px;
                height: 34px;
            }
        }
    }

    .w3-xlarge{
        text-transform: capitalize;
    }

    .search{
        border: 1px solid #ccc;
        width: 330px;
        height: 16px;
        padding: 8px;
        margin-right: 5px;
        transition: width 0.4s ease-in;
    }

/*
a {
            font-family: "Montserrat", sans-serif;
            font-size: 15px;
            font-weight: bold;
            vertical-align: middle;
            display: flex;
            flex-direction: column;
            justify-items: baseline;

            i {
                vertical-align: text-bottom;
                font-size: 24px;
            }
        }
*/
</style>