<template>
    <nav id="nav" class="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style="z-index:3;width:250px">
        <div class="w3-container w3-display-container w3-padding-16">

            <router-link :to="{name:'home'}"><h3 class="w3-wide"><b>LOGO</b></h3></router-link>
        </div>
        <div class="w3-padding-64 w3-large w3-text-grey" style="font-weight:bold">

            <NavItem v-for="category in categories" :key="category.id" :category="category"/>
        </div>


        <a class="w3-bar-item w3-button w3-padding normal" href="#contact">Contact</a>
        <a class="w3-bar-item w3-button w3-padding normal" href="#subscribe">Newsletter</a>
        <a class="w3-bar-item w3-button w3-padding normal" href="#subscribe">Subscribe</a>
    </nav>
</template>

<script>
    import NavItem from "@/components/misc/NavItem";
    import {mapActions, mapGetters} from "vuex";
    import categories from "./../../assets/data/categories";

    export default {
        name: "Navigation",
        components: {NavItem},
        data() {
            return {
                categories: categories,
            }
        },
        computed: {
            ...mapGetters(['getProducts'])
        },
        methods: {
            ...mapActions(['fetchProducts'])
        },
        created() {
            if (!this.getProducts)
                this.fetchProducts();
        },
    }
</script>

<style scoped lang="scss">

</style>