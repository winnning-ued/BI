<template>

  <div class="card">
    <CircleProgress></CircleProgress>
  </div>

</template>

<script>
  import CircleProgress from 'base/progress/CircleProgress.vue'
  export default{
    props: [],
    data: function () {
      return {};
    },
    created() {


    },
    mounted() {


    },
    methods: {},
    components: {
      CircleProgress
    }
  }
</script>

<style scoped>
  .card{
    width: 300px;
    min-height: 100px;
    background: white;
  }
  /*.customreports {*/
    /*overflow: hidden;*/
    /*height: 1000px;*/
    /*background-color: #eaedf1;*/
  /*}*/


</style>
