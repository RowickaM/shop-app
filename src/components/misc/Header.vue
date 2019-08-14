<template>
    <header class="w3-margin-left w3-margin-right">
        <p class="w3-xlarge">{{headerDisplay}}</p>
        <p style="display: flex; align-items: baseline">
            <router-link :to="{name:'cart'}" class="header-short">
                {{getCartCount}} items<i class="fa fa-shopping-cart w3-margin-right"></i>
            </router-link>
            <input v-model="search" placeholder="Start typing to find products" class="search" style="display: none; width: 0"/>
            <i class="fa fa-search" v-on:click="showSearchBar"></i>
        </p>
    </header>

</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "Header",
        props: ['header'],
        computed: {
            ...mapGetters(['getCartCount', 'getSearchText']),
            getComponent() {
                return this.$router.currentRoute.name;
            },
            search: {
                get() {
                    return this.getSearchText;
                },
                set(search) {
                    this.setSearchText({search: search});
                    if (this.getComponent !== 'find') {
                        this.$router.push({name: 'find'});
                    }
                }
            },
            headerDisplay() {
                if (this.header) {
                    if (this.header.toLowerCase() === 'skinny' || this.header.toLowerCase() === 'relaxed'
                        || this.header.toLowerCase() === 'bootcut' || this.header.toLowerCase() === 'straight') {
                        return "Jeans | " + this.header;
                    } else {
                        return this.header;
                    }
                } else {
                    return '';
                }
            }
        },
        methods: {
            ...mapActions(['setSearchText']),
            showSearchBar() {
                let searchinput = document.getElementsByClassName('search')[0];
                if (searchinput.style.display === 'none') {

                    searchinput.style.display = 'block';
                    setTimeout(() => searchinput.style.width = '330px', 1);
                } else {
                    searchinput.style.width = '0';
                    setTimeout(() => searchinput.style.display = 'none', 400);
                }

            }
        },
    }
</script>

<style scoped lang="scss">
    header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        a.header-short {
            width: 110px;
            display: flex;

            i {
                font-size: 24px;
                height: 34px;
            }
        }
    }

    .w3-xlarge {
        text-transform: capitalize;
    }

    .search {
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