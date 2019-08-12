<template>
    <header class="w3-container w3-xlarge">
        <p class="w3-left">{{header}}</p>
        <p class="w3-right">
            <router-link :to="{name:'cart'}">{{getCartCount}} items<i class="fa fa-shopping-cart w3-margin-right"></i>
            </router-link>
            <i class="fa fa-search"></i>
        </p>
    </header>

</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Header",
        props: ['header'],
        computed: {
            ...mapGetters(['getCartCount'])
        }
    }
</script>

<style scoped lang="scss">
    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/text.scss";
    @import "./../../assets/css/space.scss";

    #header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        .header-short {
            width: 66px;
            display: flex;
            justify-content: space-between;

            i {
                font-size: 24px;
            }
        }
    }

    .w3-right a {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        font-weight: bold;
        vertical-align: middle;

        i {
            vertical-align: text-bottom;
            font-size: 24px;
        }
    }


</style>