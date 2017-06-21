<template>

  <div class="card">
    <circle></circle>
  </div>

</template>

<script>
  import circle from 'base/progress/CircleProgress.vue'
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
      circle
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
