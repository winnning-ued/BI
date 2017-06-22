<template>

<div class="circle">
    <div class="circlescore">
      <Countup></Countup>
      <span>分</span>
    </div>
    <div v-for="n in 50" class="avatar" ref="myCircle" :style="{transform:'rotate('+ (n-1)*7.2 +'deg)'}"></div>
</div>

</template>

<script>
  import Countup from 'base/countup/Countup.vue'
    export default{
        props: [],
        data: function () {
          return {};
        },
        created() {
            console.log('CirclePrograss created.');
        },
        mounted() {
          let i = 0,
              circle = this.$refs.myCircle,
              time2 = setInterval(function(){
                circle[i].style.backgroundColor = 'red'
                i++;
                if(i == 45) {
                  window.clearInterval(time2);
                }
              }, 20);
        },
        methods: {},
        components: {
          Countup
        }
    }
</script>

<style scoped>
  .circle {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .avatar {
    top: 5px;
    left: 65px;
    width: 2px;
    height: 6px;
    position: absolute;
    transition: all 1s;
    background-color: #e1e1e1;
    -webkit-transform-origin: 50% 40px;
  }

  .circlescore {
    top: 32px;
    left: 47px;
    position: absolute;
  }

  .circlescore span:first-child {
    font-size: 24px;
  }

  .circlescore span:last-child {
    font-size: 12px;
    margin-left: -2px;
    display: inline-block;
  }


</style>
