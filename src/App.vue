<template>
  <div id="app">
    <ued-nav></ued-nav>
    <Tag></Tag>
    <router-view></router-view>
  </div>
</template>

<script>
  import UedNav from 'business/nav/Nav.vue'
  import Tag from 'business/tag/Tag.vue'
  export default {
    name: 'app',
    components: {
      UedNav,
      Tag
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
