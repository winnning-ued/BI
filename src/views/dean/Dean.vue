<template>

  <div class="custom-content clearfix">
    <div class="switchbox clear">
      <timeswitch class="floatL"></timeswitch>
      <div class="back floatR">返回</div>
    </div>
    <score></score>
    <card class="floatL margin-top-16"></card>
    <card class="floatR margin-top-16"></card>
    <card class="floatL margin-top-16"></card>
    <card class="floatR margin-top-16"></card>
    <card class="floatL margin-top-16"></card>
    <card class="floatR margin-top-16"></card>
  </div>

</template>

<script>
  import score from 'business/score/Score.vue'
  import card from 'business/card/Card.vue'
  import timeswitch from 'business/timeSwitch/TimeSwitch.vue'
  export default{
    props: [],
    data: function () {
      return {};
    },
    created() {

      console.log('CustomReports created.');

    },
    mounted() {

      console.log('CustomReports mounted.');

    },
    methods: {},
    components: {
      score,
      card,
      timeswitch
    }
  }
</script>

<style scoped>

  .custom-content {
    width: 1024px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .switchbox {
    width: 100%;
    height: 50px;
    padding-top: 10px;
  }

  .back {
    width: 64px;
    height: 28px;
    cursor: pointer;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #e1e1e1;
    padding-left: 8px;
    background: url("../../assets/img/back.png") no-repeat 6px 7px;
    background-color: #fff;
  }

</style>
