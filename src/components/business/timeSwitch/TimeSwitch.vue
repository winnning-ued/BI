<template>

  <div class="timeswitch">
    <ul class="clear">
      <li
        :class = "{ 'active' : active_nav === 'last' }"
        @click = "changetime('last')"
      >上月</li>
      <li
        :class = "{ 'active' : active_nav === 'next' }"
        @click = "changetime('next')"
      >下月</li>
      <li
        :class = "{ 'active' : active_nav === 'on' }"
        @click = "changetime('on')"
      >本月</li>
      <li
        :class = "{ 'active' : active_nav === 'set' }"
        @click = "changetime('set')"
      >自定义</li>
    </ul>
    <span v-text = "data"></span>
  </div>

</template>

<script>
  export default{
    props: [],
    data: function () {
      return {
        active_nav: 'last',
        data: '2017-01~2017-03'
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
      changetime (data) {
        this.active_nav = data;
      }
    },
    components: {}
  }
</script>

<style scoped>
  .timeswitch {
    height: 30px;
  }

  .timeswitch ul {
    border-radius: 3px;
    border: 1px solid #e1e1e1;
    display: inline-block;
  }

  .timeswitch ul li {
    width: 60px;
    height: 28px;
    float: left;
    cursor: pointer;
    color: #808080;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    background-color: #fff;
    border-right: 1px solid #e1e1e1;
  }

  .timeswitch ul li.active {
    color: #fff;
    background-color: #1e90ff;
  }

  .timeswitch ul li:last-child {
    border: none;
  }

  .timeswitch span {
    top: -10px;
    left: 5px;
    color: #999;
    font-size: 14px;
    position: relative;
  }

</style>
