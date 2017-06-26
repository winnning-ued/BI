<template>

  <div class="card">
    <div class="title" v-text="title"></div>
    <CircleProgress :goal="80" :time="3"></CircleProgress>

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
  import CircleProgress from 'base/progress/CircleProgress.vue'
  export default{
    props: {
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
</style>

