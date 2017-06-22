<template>

<div class="circle"></div>

</template>

<script>
    export default{
        props: [],
        data: function () {
            return {};
        },
        created() {

            console.log('CirclePrograss created.');

        },
        mounted() {

          var cirquehtml = ''
          for (let i =0; i < 50; i++) {
            cirquehtml += '<div class="avatar" style="top: 5px;left: 50px;position: absolute;width: 2px;height: 6px;transform-origin: 50% 40px;background-color: #e1e1e1;transform:rotate('+ i*7.2 +'deg) scale(1.00,1.00) translate(0px,0px) skew(0deg,0deg);"></div>';
          }

          document.querySelectorAll('.circle')[0].innerHTML = cirquehtml;
          document.querySelectorAll('.circle')[1].innerHTML = cirquehtml;
          console.log(document.querySelectorAll('.circle')[3])
          var cirque = document.querySelectorAll("div.avatar");
          console.log(cirque)
          var x = 0;
          var time = setInterval(function(){
            cirque[x].style.backgroundColor = 'red'
            x++;
            if(x == 80) {
              window.clearInterval(time);
            }
          }, 20);

        },
        methods: {},
        components: {}
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
    left: 160px;
    width: 2px;
    height: 6px;
    position: absolute;
    transition: all 1s;
    background-color: #e1e1e1;
    -webkit-transform-origin: 50% 40px;
  }


</style>
