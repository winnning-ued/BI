<template>

  <div class="custom-content clearfix">
    <div class="switchbox clear">
      <timeswitch class="floatL"></timeswitch>
      <div class="back floatR">返回</div>
    </div>
    <score></score>

    <template v-for="(item, index) in data">
      <card
        :class="getClassList(index)"
        :title="item.title"
        :list="item.data"></card>
    </template>

  </div>

</template>

<script>
  import score from 'business/score/Score.vue'
  import card from 'business/card/Card.vue'
  import timeswitch from 'business/timeSwitch/TimeSwitch.vue'
  export default{
    props: [],
    data: function () {
      return {
        data: [
          {
            title: '业务量',
            data: [
              {
                name: '门诊收费总额',
                value: 200000,
                total: 400000,
                trend: 'up'
              },
              {
                name: '门诊收费总额',
                value: 2000,
                total: 400000,
                trend: 'up'
              },
              {
                name: '门诊收费总额',
                value: '2000',
                total: 400000,
                trend: 'up'
              },
              {
                name: '门诊收费总额',
                value: '200',
                total: 400000,
                trend: 'up'
              },
            ],
          },
          {
            title: ' 收入',
            data: [
              {
                name: '门诊收费总额',
                value: '200',
                total: 400000,
                trend: 'up'
              },
              {
                name: '门诊收费总额',
                value: '200',
                total: 400000,
                trend: 'up'
              },
              {
                name: '门诊收费总额',
                value: '200',
                total: 400000,
                trend: 'up'
              },
              {
                name: '门诊收费总额',
                value: '200',
                total: 400000,
                trend: 'up'
              },
            ],
          }
        ]
      };
    },
    created() {

      console.log('CustomReports created.');

    },
    mounted() {

      console.log('CustomReports mounted.');

    },
    methods: {
        getClassList(index) {

          let classList = [
              'margin-top-16'
          ];
          classList.push(index % 2 === 0 ? 'floatL' : 'floatR');
          return classList;

        }
    },
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
