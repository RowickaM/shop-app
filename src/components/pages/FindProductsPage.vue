<template>
    <div>
        <Header/>
        <input type="text" class="w3-input w3-border w3-margin-left" v-model="search" placeholder="Zacznij pisać aby wyszukać"/>
        <ProductMini v-for="product in getProductsByName"
                     :key="product.id"
                     :product="product" />
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ProductMini from "@/components/product/ProductMini";
    import {mapGetters} from "vuex";

    export default {
        name: "FindProductsPage",
        components: {ProductMini, Header},
        data(){
            return{
                search: 'wine'
            }
        },
        computed:{
          ...mapGetters(['getProductsByName']),
        },
        watch:{
            search: function (val) {
                this.getProductsByName(val);
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "./../../assets/css/base.scss";
    @import "./../../assets/css/positions.scss";
    @import "./../../assets/css/space.scss";
    @import "./../../assets/css/text.scss";

    input{
        width: calc(100% - 52px);
    }
</style>