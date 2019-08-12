<template>
    <nav id="nav" class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px">
        <div class="w3-container w3-display-container w3-padding-16">
            <!--            <i class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>-->
            <router-link :to="{name:'home'}"><h3 class="w3-wide"><b>LOGO</b></h3></router-link>
        </div>
        <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">
            <a href="#" class="w3-bar-item w3-button">Shirts</a>
            <a href="#" class="w3-bar-item w3-button">Dresses</a>
            <a class="w3-button w3-block w3-white w3-left-align" id="myBtn">
                Jeans <i class="fa fa-caret-down"></i>
            </a>
            <div id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium w3-show">
                <a href="#" class="w3-bar-item w3-button w3-light-grey"><i class="fa fa-caret-right w3-margin-right"></i>Skinny</a>
                <a href="#" class="w3-bar-item w3-button">Relaxed</a>
                <a href="#" class="w3-bar-item w3-button">Bootcut</a>
                <a href="#" class="w3-bar-item w3-button">Straight</a>
            </div>
            <a href="#" class="w3-bar-item w3-button">Jackets</a>
            <a href="#" class="w3-bar-item w3-button">Gymwear</a>
            <a href="#" class="w3-bar-item w3-button">Blazers</a>
            <a href="#" class="w3-bar-item w3-button">Shoes</a>
        </div>
        <a class="w3-bar-item w3-button w3-padding normal" href="#contact" >Contact</a>
        <a class="w3-bar-item w3-button w3-padding normal" href="#subscribe" >Newsletter</a>
        <a class="w3-bar-item w3-button w3-padding normal" href="#subscribe" >Subscribe</a>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
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