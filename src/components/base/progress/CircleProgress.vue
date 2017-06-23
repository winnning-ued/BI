<template>

<div class="circle">
    <div class="circlescore">
      <Countup :end="80" :duration="3" :options="{useEasing : true, useGrouping : true, separator : ',', decimal : '.', prefix : '', suffix : ''}"></Countup>
      <span>分</span>
    </div>
    <div v-for="n in 50" class="avatar" ref="myCircle" :style="{transform:'rotate('+ (n-1)*7.2 +'deg)'}"></div>
</div>

</template>

<script>
  import Countup from 'base/countup/Countup.vue'
    export default{
        props: {
          goal: {
            type: Number,
            default: 80
          },
          time: {
            type: Number,
            default: 3
          }
        },
        data: function () {
          return {};
        },
        created() {
            console.log('CirclePrograss created.');
        },
        mounted() {
          this.initCircle(this.goal, this.time)
        },
        methods: {
          initCircle (goal, duration) {
            let i = 0,
              circle = this.$refs.myCircle,
              time = setInterval(function(){
                circle[i].style.backgroundColor = '#57b1ff'
                i++;
                if(i == (goal/2)) {
                  window.clearInterval(time);
                }
              }, (duration*1000)/goal);
          }
        },
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
    top: -5px;
    left: 65px;
    width: 3px;
    height: 9px;
    position: absolute;
    transition: all 1s;
    background-color: #e1e1e1;
    -webkit-transform-origin: 50% 50px;
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
