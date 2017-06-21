<template>

  <div class="header">
    <div class="header-content">
      <div class="logo-content">
        <div class="logo floatL"></div>
        <div class="logo-titlt floatR">
          <span>卫宁分析</span>
          <span>Winning Analysis</span>
        </div>
      </div>
      <div class="nav">
        <router-link tag="div"
                     class="tab-item "
                     to="/medicalService"
                     active-class="active"
        >
          <span class="tab-link">医疗业务</span>
        </router-link>

        <router-link tag="div"
                     class="tab-item"
                     to="/customReports"
                     active-class="active"
        >
          <span class="tab-link">自定义报表</span>
        </router-link>

        <router-link tag="div"
                     class="tab-item"
                     to="/dataAnalysis"
                     active-class="active"
        >
          <span class="tab-link">数据分析</span>
        </router-link>

        <router-link tag="div"
                     class="tab-item"
                     to="/basicSettings"
                     active-class="active"
        >
          <span class="tab-link">基础设置</span>
        </router-link>
      </div>
      <div class="user">
        <div class="switch floatL"></div>
        <div class="user floatR"></div>
      </div>
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

      console.log('Tab created.');

    },
    mounted() {

      console.log('Tab mounted.');

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
    width: 1024px;
    margin: 0 auto;
    overflow: hidden;
  }
  .logo-content{
    width: 120px;
    height: 50px;
    /*background: pink;*/
    float: left;
    margin-right: 80px;
  }
  .logo{
    width: 50px;
    height: 50px;
    background: url('../../../assets/img/logo.png')  no-repeat;
    margin-top: 10px;
  }
  .logo-titlt{
    width: 70px;
    height: 50px;
    background: pink;
  }
  .logo-titlt:nth-child(1){
    font-size: 18px;
  }
  .logo-titlt:nth-child(2){
    font-family: MicrosoftYaHei;
    font-size: 9px;
  }
  .nav {
    float: left;
  }
  .user{
    width: 100px;
    height: 50px;
    background: pink;
    float: right;
  }
  .tab-item {
    float: left;
    padding: 0 30px 0 30px;
    margin-right: 30px;
    text-align: center;
  }

  .tab-link {
    padding-bottom: 5px;
    color: white;
  }

  .active {
    /*border-bottom: 2px solid palevioletpink;*/
    background: #5AAEFC;
  }
  .switch{
    width: 17px;
    height: 17px;
    background: url('../../../assets/img/switch.png') no-repeat;
  }
  .user{
    width: 37px;
    height: 37px;
    background: url('../../../assets/img/user.png') no-repeat;
  }


</style>
