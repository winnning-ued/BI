<template>
  <div class="score">
    <div class="title">
      <div class="width-33 text-align"><span class="title-green">综合评分</span></div>
      <div class="width-33 text-align"><span class="title-blue">综合分析</span></div>
      <div class="width-33 text-align"><span class="title-orange">异常指标预警</span></div>
    </div>
    <div class="scoreleft floatL">
      <div class="multipgrade w-100 clear">
        <div class="userbox floatL">
          <div class="userimgbox"></div>
        </div>
        <div class="scorebox floatR clear">
          <div class="star floatL">
            <div class="starimg"></div>
          </div>
          <div class="fractionbox floatR">
            <div class="fraction">
              <Countup :end="85" :duration="3"
                       :options="{useEasing : true, useGrouping : true, separator : ',', decimal : '.', prefix : '', suffix : ''}"></Countup>
              <span>分</span>
            </div>
          </div>
        </div>
      </div>
      <div class="barchart">
        <div id="barchart" :style="{width: '320px', height: '125px'}"></div>
      </div>
    </div>
    <div class="scoremiddle floatL">
      <div class="multipanalyse w-100">
        <div class="radarchart">
          <div id="mycharts" :style="{width: '255px', height: '255px'}"></div>
        </div>
      </div>
    </div>
    <div class="scoreright floatR">
      <slider :slideItemrWidth="400"
              :slideItemrHeight="270"
              :autoPlay="true"
              :interval="4000"
              :loop="true"
      >
        <div class="test1">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">指标名称</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">实际值</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">同比下降</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">目标值</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">门诊人数</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">急诊人数</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">住院人数</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
          </el-row>
        </div>
        <div class="test1">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">指标名称</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">实际值</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">同比下降</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">目标值</div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">门诊人数</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">急诊人数</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">住院人数</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
            <el-col :span="6">
              <div class="grid-content  trendTitle">486</div>
              <img src="../../../assets/img/up.png" alt=""  class="trend">
            </el-col>
          </el-row>
        </div>
      </slider>
    </div>
  </div>

</template>

<script>
  import echarts from 'echarts'
  import slider from 'base/slider/Slider.vue'
  import Countup from 'base/countup/Countup.vue'
  export default{
    props: [],
    data: function () {
      return {
        sliderData: [
          {
              data:[{
                name: '门诊收费总额',
                value: 200000,
                total: 400000,
                trend: 'up'
              },{
                name: '门诊收费总额',
                value: 200000,
                total: 400000,
                trend: 'up'
              },{
                name: '门诊收费总额',
                value: 200000,
                total: 400000,
                trend: 'up'
              },{
                name: '门诊收费总额',
                value: 200000,
                total: 400000,
                trend: 'up'
              }]
          },{
            data:[{
              name: '门诊收费总额',
              value: 200000,
              total: 400000,
              trend: 'up'
            },{
              name: '门诊收费总额',
              value: 200000,
              total: 400000,
              trend: 'up'
            },{
              name: '门诊收费总额',
              value: 200000,
              total: 400000,
              trend: 'up'
            },{
              name: '门诊收费总额',
              value: 200000,
              total: 400000,
              trend: 'up'
            }]
          }
        ]
      }
    },
    created() {


    },
    mounted() {
      /*雷达图*/
      let myChart = echarts.init(document.getElementById('mycharts'));
      let option = {
        radar: {
          splitArea: {
            areaStyle: {
              color: ['rgba(36, 127, 207, 1)',
                'rgba(103, 176, 241, 1)', 'rgba(148, 205, 255, 1)',
                'rgba(207, 232, 255, 1)', 'rgba(230, 238, 255, 1)'],
            }
          },
          name: {
            formatter: '{value}',
            textStyle: {
              color: '#333'
            }
          },
          nameGap: 8,
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.8)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.8)'
            }
          },
          indicator: [
            {name: '收费', max: 6500},
            {name: '药占比', max: 16000},
            {name: '药占比', max: 30000},
            {name: '药占比', max: 38000},
            {name: '药占比', max: 52000},
            {name: '人次', max: 25000}
          ]
        },
        series: [{
          name: '评分',
          type: 'radar',
          lineStyle: {
            normal: {
              color: 'rgba(64, 93, 255, 1)'
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(64, 93, 255, 1)'
            }
          },
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '评分'
            }
          ]
        }]
      };
      myChart.setOption(option);

      /*柱状图*/
      let barChart = echarts.init(document.getElementById('barchart'));
      let baroption = {
        color: ['#00d1bd'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '4%',
          left: '1%',
          right: '2%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月'],
          axisTick: {
            show: false
          },
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '评分',
            type: 'bar',
            barWidth: '60%',
            data: [94, 93, 85, 88, 80, 90]
          }
        ]
      };
      barChart.setOption(baroption);
    },
    methods: {},
    components: {
      slider,
      Countup
    }
  }
</script>

<style scoped>
  .title {
    height: 40px;
    padding-top: 20px;
    border-bottom: 2px solid #EFEFEF;
  }

  .title-green {
    color: #47C8AB;
    border-bottom: 2px solid #47C8AB;
    font-size: 14px;
  }

  .title-blue {
    color: #90B8DD;
    border-bottom: 2px solid #90B8DD;
    font-size: 14px;
  }

  .title-orange {
    color: #E0C1AA;
    border-bottom: 2px solid #E0C1AA;
    font-size: 14px;
  }

  .score {
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
  }

  .scoretitle {
    width: 100%;
    color: #333;
    font-size: 15px;
    text-align: left;
    padding-left: 5px;
    margin-bottom: 15px;
  }

  /*左边部分*/
  .scoreleft {
    width: 33%;
    height: 267px;
    margin: 20px 0;
    padding: 0 20px;
  }

  .userbox {
    width: 27%;
    height: 85px;
  }

  .userimgbox {
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background-color: #6584ad;
    background: url("../../../assets/img/user1.png") no-repeat center center;
    background-size: 100% 85px;
  }

  .scorebox {
    width: 72%;
    height: 60px;
  }

  .star {
    width: 35%;
    height: 85px;
    border-radius: 5px 0 0 5px;
    /*background-color: #1e90ff;*/
  }

  .starimg {
    width: 30px;
    height: 30px;
    margin: 26px auto 0;
    background: url("../../../assets/img/up.png") no-repeat center center;
    background-size: 30px 30px;
  }

  .fractionbox {
    width: 65%;
    height: 85px;
    border-radius: 0 5px 5px 0;
    /*background-color: #56acff;*/
  }

  .fraction {
    color: #F6282E;
    margin: 20px auto;
    text-align: center;
  }

  .fraction span:first-child {
    font-size: 46px;
  }

  .fraction span:last-child {
    font-size: 18px;
    display: inline-block;
  }

  .barchart {
    margin-top: 10px;
  }

  /*中间部分*/
  .scoremiddle {
    width: 33%;
    height: 267px;
    margin: 20px 0;
    border-left: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
  }

  /*右边部分*/
  .scoreright {
    width: 33%;
    height: 267px;
    margin: 20px 0;
  }

  .scoremiddle .scoretitle {
    padding-left: 15px;
    margin-bottom: 0;
  }

  /*雷达图表*/
  .radarchart {
    width: 255px;
    height: 255px;
    margin: -14px auto 0;
  }

  .test1 {
    /*background: pink;*/
  }

  /*栅格布局*/
  .el-row {
    margin-bottom: 20px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px dashed #EDEDED;
    font-size: 14px;
    color: #666666;
  }
  .el-row:first-child{
    margin-bottom: 30px;
  }
  .el-row:last-child{
    margin-bottom: 0px;
  }
  .el-col {
    border-radius: 4px;
  }
  .-dark {
    background: #99a9bf;
  }
  . {
    background: #d3dce6;
  }
  .-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .trendTitle{
    float: left;
    margin-left: 25px;
  }
</style>
