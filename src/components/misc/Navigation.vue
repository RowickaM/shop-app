<template>
    <nav id="nav" class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px">
        <div class="w3-container w3-display-container w3-padding-16">

            <router-link :to="{name:'home'}"><h3 class="w3-wide"><b>LOGO</b></h3></router-link>
        </div>
        <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">

            <NavItem v-for="category in categories" :key="category.id" :category="category" />
<!--            <a href="#" class="w3-bar-item w3-button">Shirts</a>-->
<!--            <a href="#" class="w3-bar-item w3-button">Dresses</a>-->
<!--            <a class="w3-button w3-block w3-white w3-left-align" style="width: 100%" id="myBtn">-->
<!--                Jeans <i class="fa fa-caret-down"></i>-->
<!--            </a>-->
<!--            <div id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium w3-show">-->
<!--                <a href="#" class="w3-bar-item w3-button w3-light-grey"><i class="fa fa-caret-right w3-margin-right"></i>Skinny</a>-->
<!--                <a href="#" class="w3-bar-item w3-button">Relaxed</a>-->
<!--                <a href="#" class="w3-bar-item w3-button">Bootcut</a>-->
<!--                <a href="#" class="w3-bar-item w3-button">Straight</a>-->
<!--            </div>-->
<!--            <a href="#" class="w3-bar-item w3-button">Jackets</a>-->
<!--            <a href="#" class="w3-bar-item w3-button">Gymwear</a>-->
<!--            <a href="#" class="w3-bar-item w3-button">Blazers</a>-->
<!--            <a href="#" class="w3-bar-item w3-button">Shoes</a>-->
        </div>


        <a class="w3-bar-item w3-button w3-padding normal" href="#contact" >Contact</a>
        <a class="w3-bar-item w3-button w3-padding normal" href="#subscribe" >Newsletter</a>
        <a class="w3-bar-item w3-button w3-padding normal" href="#subscribe" >Subscribe</a>
    </nav>
</template>

<script>
    import NavItem from "@/components/misc/NavItem";
    export default {
        name: "Navigation",
        components: {NavItem},
        data(){
            return{
                categories:[
                    {
                        id: 1,
                        name: 'categoria1'
                    },
                    {
                        id: 2,
                        name: 'categoria2'
                    },
                    {
                        id: 3,
                        name: 'categoria3'//tu początek submenu
                    },
                    {
                        id: 4,
                        name: 'categoria4'
                    },
                    {
                        id: 5,
                        name: 'categoria5'
                    },
                    {
                        id: 6,
                        name: 'categoria6'
                    },
                    {
                        id: 7,
                        name: 'categoria7'//tu koniec submenu
                    },
                    {
                        id: 8,
                        name: 'categoria8'
                    },
                    {
                        id: 9,
                        name: 'categoria9'
                    },
                    {
                        id: 10,
                        name: 'categoria10'
                    },
                    {
                        id: 11,
                        name: 'categoria11'
                    },

                ],
            }
        }
    }
</script>

<style scoped>
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";

    /*#nav {*/
    /*    color:#757575;*/
    /*    width: 250px;*/
    /*    z-index: 3;*/
    /*    height: 100%;*/
    /*}*/
</style>