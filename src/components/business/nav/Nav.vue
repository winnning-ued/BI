<template>

  <div class="header">
    <div class="header-content">
      <div class="logo-content">
        <div class="logo floatL"></div>
        <div class="logo-titlt floatR">
          <h3>卫宁分析</h3>
          <span>Winning Analysis</span>
        </div>
      </div>
      <div class="nav">
        <router-link tag="div"
                     class="tab-item "
                     to="/dean"
                     active-class="active"
        >
          <span class="tab-link">院长决策</span>
        </router-link>

        <router-link tag="div"
                     class="tab-item"
                     to="/customReports"
                     active-class="active"
        >
          <span class="tab-link">科主任决策</span>
        </router-link>

        <router-link tag="div"
                     class="tab-item"
                     to="/dataAnalysis"
                     active-class="active"
        >
          <span class="tab-link">质量指标</span>
        </router-link>

        <!--<router-link tag="div"-->
                     <!--class="tab-item"-->
                     <!--to="/basicSettings"-->
                     <!--active-class="active"-->
        <!--&gt;-->
          <!--<span class="tab-link">基础设置</span>-->
        <!--</router-link>-->
      </div>
      <!--<div class="user-content">-->
        <!--<div class="switch floatL"></div>-->
        <!--<div class="user floatR"></div>-->
      <!--</div>-->
    </div>
  </div>

</template>

<script>
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
    components: {}
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #47545D;
    font-size: 18px;
  }
  .header-content{
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
  }
  .logo-content{
    width: 150px;
    height: 50px;
    /*background: pink;*/
    float: left;
    margin-right: 30px;
  }
  .logo{
    width: 50px;
    height: 50px;
    background: url('../../../assets/img/logo.png')  no-repeat;
    margin-top: 10px;
  }
  .logo-titlt{
    width: 100px;
    height: 50px;
    line-height: 15px;
    padding-top: 10px;
    color: #F3F9FF;
  }
  .logo-titlt h3{
    font-size: 18px;
  }
  .logo-titlt span{
    font-size: 12px;
    line-height: 28px;
  }
  .nav {
    float: left;
  }
  .user-content{
    width: 100px;
    height: 50px;
    float: right;
  }
  .tab-item {
    float: left;
    padding: 0 30px 0 30px;
    margin-right: 30px;
    text-align: center;
    color: #626D75;
  }

  .tab-link {
    padding-bottom: 5px;
    color: white;
  }

  .active {
    /*border-bottom: 2px solid palevioletpink;*/
    /*background: #5AAEFC;*/
    color: #F5F6F6;
  }
  .switch{
    width: 17px;
    height: 17px;
    background: url('../../../assets/img/switch.png') no-repeat;
    margin-top: 16px;
    margin-left: 10px;
  }
  .user{
    width: 37px;
    height: 37px;
    background: url('../../../assets/img/user.png') no-repeat;
    margin-top: 6px;
    margin-right: 10px;
  }


</style>
