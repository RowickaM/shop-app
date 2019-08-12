<template>
    <div id="app" class="site">
            <Navigation/>
        <Modal v-if="getModalState"/>
        <div style="margin-left: 250px">
           <router-view></router-view>
            <Footer />
        </div>

    </div>
</template>

<script>
  import Navigation from "@/components/misc/Navigation";
  import Footer from "@/components/misc/Footer";
  import Modal from "@/components/misc/Modal";
  import {mapGetters} from 'vuex';

    export default {
        name: 'app',
        components: {
            Modal,
            Footer,
            Navigation,
        },
        computed:{
            ...mapGetters(['getModalState'])
        },
    }
</script>

<style lang="scss">
  @import './assets/css/base.scss';
    body {
        margin: 0;
        line-height: 1.5;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

  .site{
      /*display: flex;*/
      width: 80%;
      max-width: 1200px;
      margin: 0 auto;
  }
    .buttons{
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        margin-bottom: 15px;
        text-transform: uppercase;
    }

</style>
