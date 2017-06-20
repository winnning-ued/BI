<template>

  <div class="tab">
    <router-link tag="div"
                 class="tab-item "
                 to="/medicalService"
                 active-class="active"
    >
      <span class="tab-link">医疗业务</span>
    </router-link>

    <router-link tag="div"
                 class="tab-item"
                 to="/"
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
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    background: #1A85FF;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab-link {
    padding-bottom: 5px;
    color: white;
  }

  .active {
    border-bottom: 2px solid palevioletred;
  }


</style>
