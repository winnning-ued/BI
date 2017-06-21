<template>
  <div class="score">
    <div class="scoreleft floatL">
      <div class="scoretitle">综合评分</div>
      <div class="multipgrade w-100 clear">
        <div class="userbox floatL">
          <div class="userimgbox"></div>
          <div class="greet">Hi!<span>白求恩</span>，欢迎登录</div>
        </div>
        <div class="scorebox floatR">
          <div class="clear">
            <div class="star floatL"></div>
            <div class="fractionbox floatR">
              <div class="fraction">
                80<span>分</span>
              </div>
            </div>
          </div>
          <div class="hint">以上为本季度全院综合评分</div>
        </div>
      </div>
      <div class="scoretitle">综合概述</div>
      <div class="multipsummary w-100">
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>

    </div>
    <div class="scoreright floatR">
      <div class="scoretitle">综合分析</div>
      <div class="multipanalyse w-100">
        <div class="radarchart">
          <div id="mycharts" :style="{width: '370px', height: '370px'}"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts'
    export default{
        props: [],
        data: function () {
            return {};
        },
        created() {

            console.log('Score created.');

        },
        mounted() {

          let myChart = echarts.init(document.getElementById('mycharts'));
          let option = {
            radar: {
              // shape: 'circle',
              indicator: [
                { name: '收费', max: 6500},
                { name: '药占比', max: 16000},
                { name: '药占比', max: 30000},
                { name: '药占比', max: 38000},
                { name: '药占比', max: 52000},
                { name: '人次', max: 25000}
              ]
            },
            series: [{
              name: '评分',
              type: 'radar',
              data : [
                {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
                  name : '评分'
                }
              ]
            }]
          };
          myChart.setOption(option);

        },
        methods: {},
        components: {}
    }
</script>

<style scoped>

  .score {
    width: 100%;
    height: 460px;
    border-radius: 4px;
    /*margin: 50px auto 0;*/
    padding: 20px 10px 5px;
    background-color: #fff;
    border-top: 3px solid #c7d5e2;
  }

  .scoretitle {
    width: 100%;
    color: #333;
    font-size: 15px;
    text-align: left;
    padding-left: 5px;
    margin-bottom: 30px;
  }
/*左边部分*/
  .scoreleft {
    width: 58%;
    height: 420px;
    padding: 0 10px;
  }

  .userbox {
    width: 25%;
    height: 220px;
  }

  .userimgbox {
    width: 155px;
    height: 160px;
    border-radius: 5px;
    background-color: #6584ad;
  }

  .greet {
    color: #333;
  }

  .hint {
    color: #999;
  }

  .greet,
  .hint {
    font-size: 14px;
    text-align: left;
    padding-left: 5px;
    margin-top: 15px;
  }

  .scorebox {
    width: 74%;
    height: 220px;
  }

  .star {
    width: 35%;
    height: 160px;
    border-radius: 5px 0 0 5px;
    background-color: #1e90ff;
  }

  .fractionbox {
    width: 65%;
    height: 160px;
    border-radius: 0 5px 5px 0;
    background-color: #56acff;
  }

  .fraction {
    color: #fff;
    font-size: 70px;
    margin: 45px auto;
  }

  .fraction span {
    font-size: 20px;
    margin-left: 10px;
    display: inline-block;
  }

  .multipsummary {
    color: #999;
    font-size: 14px;
    text-align: left;
  }
/*右边部分*/
  .scoreright {
    width: 42%;
    height: 420px;
    padding: 0 10px;
  }

  .scoreright .scoretitle {
    padding-left: 25px;
  }

  .multipanalyse {
    border-left: 2px solid #e7e7e7;
  }

/*雷达图表*/
  .radarchart {
    width: 370px;
    height: 370px;
    margin: 0 auto;
  }

</style>
