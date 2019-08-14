<template>
    <div>
        <Header/>
        <input type="text" class="w3-input w3-border w3-margin-left" v-model="search" placeholder="Zacznij pisać aby wyszukać"/>
        <div v-if="length > 0">
            <p class="w3-small w3-text-grey w3-margin-left">{{length}} items</p>
        </div>
        <div v-if="length > 0" class="products">
            <ProductMini v-for="product in getProductsByName(search)"
                         :key="product.id"
                         :product="product"/>
        </div>
        <div v-else class="empty-category w3-text-grey">
            <p>Brak wyników.</p>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/misc/Header";
    import ProductMini from "@/components/product/ProductMini";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "FindProductsPage",
        components: {ProductMini, Header},
        computed:{
          ...mapGetters(['getProductsByName','getSearchText']),
            search:{
              get(){
                  return this.getSearchText;
              },
              set(search){
                  this.setSearchText({search:search})
              }
            },
            length(){
              return this.getProductsByName(this.search).length;
            }
        },
        methods:{
          ...mapActions(['setSearchText']),
        },
    }
</script>

<style scoped lang="scss">
    input{
        width: calc(100% - 52px);
    }
</style>