<template>

<div>
  <Score></Score>
</div>

</template>

<script>
  import Score from 'components/business/score/Score.vue'
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
          Score
        }
    }
</script>

<style scoped>
  .customreports {
    overflow: hidden;
    height: 1000px;
    background-color: #eaedf1;
  }


</style>
