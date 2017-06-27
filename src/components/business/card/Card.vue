<template>

  <div class="card">
    <div class="title" v-text="title"></div>
    <div class="w-100 clearfix">
      <CircleProgress class="floatL" :goal="80" :time="3"></CircleProgress>
      <div class="linechart floatR">
        <div :id="'linechart' + index" :style="{ height: '120px'}"></div>
      </div>
    </div>

    <template v-for="item in list">
      <el-row>
        <el-col :span="5">
          <div class="grid-content">{{ item.name }}</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content trendTitle">{{ item.value | numericalToString }}</div>
          <img src="../../../assets/img/up.png" alt="" v-if="item.trend==='up'" class="trend">
          <img src="../../../assets/img/down.png" alt="" v-else="item.trend==='down'" class="trend">
        </el-col>
        <el-col :span="6">
          <div class="grid-content padding-top-10">
            <el-progress :percentage="getPercentage(item.value,item.total)"></el-progress>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">指标分析</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">科室分析</div>
        </el-col>
      </el-row>
    </template>

  </div>

</template>

<script>
  import echarts from 'echarts'
  import CircleProgress from 'base/progress/CircleProgress.vue'
  export default{
    props: {
      index: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      list: {
        type: Array,
        required: true
      }
    },
    data: function () {
      return {};
    },
    mounted() {
      /*折线图*/
      let lineChart = echarts.init(document.getElementById("linechart"+this.index));
      let lineoption = {
        color: ['#11a0e6'],
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
          axisLine: {
            lineStyle: {
              color: '#999999'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#EDEDED'
            }
          },
          data: ['20150223', '20150223', '20150223', '20150223', '20150223', '20150223', '20150223'],
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitNumber: 4,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#999999'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'solid',
              color: '#EDEDED',
              fontStyle: 'lighter'
            }
          }
        },
        series: [
          {
            name: '评分',
            type: 'line',
            data: [1000, 2000, 1500, 1789, 3200, 2108, 1200]
          }
        ]
      };
      lineChart.setOption(lineoption);
    },
    methods: {
        getPercentage(value, total) {
            return value / total * 100;
        }
    },
    components: {
      CircleProgress
    }
  }
</script>

<style scoped>
  .card {
    width: 49%;
    min-height: 200px;
    background: white;
    border-radius: 5px;
    color: #666666;
    font-size: 14px;
  }

  .title {
    margin: 10px 0 20px 5px;
    text-indent: 10px;
    font-size: 16px;
    color: #666666;
    border-left: 2px solid #A0E2D3;
  }

  .el-row {
    margin-bottom: 10px;
  }
  .el-row:last-child{
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
    text-align: center;
  }

  .bg-purple-dark {
    padding-top: 10px;
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .trend{
    float: right;
    margin-right: 40px;
    margin-top: 14px;
    width: 10px;
  }
  .trendTitle{
    float: left;
    margin-left: 30px;
  }
  /*折线图*/
  .linechart{
    width: 70%;
  }
  @media screen and (max-width:1024px) {
    .linechart{
      width: 70%;
    }
  }
</style>

