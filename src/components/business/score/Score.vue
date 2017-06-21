<template>
  <div class="score">
    <div class="scoreleft floatL">
      <div class="scoretitle">综合评分</div>
      <div class="multipgrade w-100 clear">
        <div class="userbox floatL">
          <div class="userimgbox"></div>
        </div>
        <div class="scorebox floatR">
          <div class="clear">
            <div class="star floatL">
              <div class="starimg"></div>
            </div>
            <div class="fractionbox floatR">
              <div class="fraction">
                80<span>分</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="barchart">
        <div id="barchart" :style="{width: '320px', height: '125px'}"></div>
      </div>
    </div>
    <div class="scoremiddle floatL">
      <div class="scoretitle">综合分析</div>
      <div class="multipanalyse w-100">
        <div class="radarchart">
          <div id="mycharts" :style="{width: '255px', height: '255px'}"></div>
        </div>
      </div>
    </div>
    <div class="scoreright floatR">
      <div class=""></div>
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
                formatter:'{value}',
                textStyle: {
                  color:'#333'
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
              data : [
                {
                  value : [4300, 10000, 28000, 35000, 50000, 19000],
                  name : '评分'
                }
              ]
            }]
          };
          myChart.setOption(option);

          /*柱状图*/
          let barChart = echarts.init(document.getElementById('barchart'));
          let baroption = {
            color: ['#00d1bd'],
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
                type : 'category',
                data : ['一月', '二月', '三月', '四月', '五月', '六月'],
                axisTick: {
                  show: false
                },
              },
            yAxis : {
                type : 'value',
                axisTick: {
                  show: false
                }
              },
            series : [
              {
                name:'评分',
                type:'bar',
                barWidth: '60%',
                data:[94, 93, 85, 88, 80, 90]
              }
            ]
          };
          barChart.setOption(baroption);
        },
        methods: {},
        components: {}
    }
</script>

<style scoped>

  .score {
    width: 100%;
    height: 270px;
    border-radius: 4px;
    /*margin: 50px auto 0;*/
    padding: 0 10px 5px;
    background-color: #fff;
    border-top: 3px solid #c7d5e2;
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
    padding-top: 10px;
  }

  .userbox {
    width: 27%;
    height: 85px;
  }

  .userimgbox {
    width: 100%;
    height: 85px;
    border-radius: 5px;
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
    background-color: #1e90ff;
  }

  .starimg {
    width: 30px;
    height: 30px;
    margin: 26px auto 0;
    background: url("../../../assets/img/star.png") no-repeat center center;
    background-size: 30px 30px;
  }

  .fractionbox {
    width: 65%;
    height: 85px;
    border-radius: 0 5px 5px 0;
    background-color: #56acff;
  }

  .fraction {
    color: #fff;
    font-size: 46px;
    margin: 20px auto;
    text-align: center;
  }

  .fraction span {
    font-size: 18px;
    margin-left: 5px;
    display: inline-block;
  }

  .barchart {
    margin-top: 10px;
  }

  /*中间部分*/
  .scoremiddle {
    width: 33%;
    height: 267px;
    padding-top: 10px;
    margin-left: 6px;
    border-left: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
  }

  /*右边部分*/
  .scoreright {
    width: 33%;
    height: 267px;
    padding-top: 10px;
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

</style>
