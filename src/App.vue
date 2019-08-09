<template>
    <div id="app">
      <home />
    </div>
</template>

<script>
  import home from './assets/template/home';

    export default {
        name: 'app',
        components: {
          home
        }
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


</style>
