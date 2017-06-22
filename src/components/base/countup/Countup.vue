<template>
  <span ref='countup'></span>
</template>

<script>
  import CountUp from 'countup.js'
  export default {
    name: 'countup-demo',
    data () {
      return {
        numAnim:null
      }
    },
    mounted(){
      this.initCountUp()
    },
    methods:{
      initCountUp(){
        this.numAnim = new CountUp(this.$refs.countup,0, 80, 0, 3)
        this.numAnim.start();
      }
    }
  }
</script>
