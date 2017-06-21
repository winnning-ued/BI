<template>

  <div class="header">
    <div class="header-content">
      <div class="logo">
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
    background: #1A85FF;
    font-size: 18px;
  }
  .header-content{
    width: 1024px;
    margin: 0 auto;
    overflow: hidden;
  }
  .logo{
    width: 120px;
    height: 50px;
    background: pink;
    float: left;
    margin-right: 80px;
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


</style>
