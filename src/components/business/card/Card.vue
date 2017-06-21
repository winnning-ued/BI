<template>

  <div class="card">
    <div class="title">业务量</div>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-row>
      <el-col :span="6">
        <div class="grid-content">门诊收费总额</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">200万</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content padding-top-10">
          <el-progress :percentage="70"></el-progress>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">分析</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content">门诊收费总额</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">200万</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content padding-top-10">
          <el-progress :percentage="70"></el-progress>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">分析</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content">门诊收费总额</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">200万</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content padding-top-10">
          <el-progress :percentage="70"></el-progress>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">分析</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content">门诊收费总额</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">200万</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content padding-top-10">
          <el-progress :percentage="70"></el-progress>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">分析</div>
      </el-col>
    </el-row>
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
  .card {
    width: 49%;
    min-height: 100px;
    background: white;
    border-radius: 5px;
    border-top: 3px solid #c7d5e2;
  }

  .title {
    height: 50px;
    line-height: 50px;
    text-indent: 10px;
    font-size: 20px;
  }

  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

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
</style>

