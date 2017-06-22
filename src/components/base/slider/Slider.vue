<template>

  <div class="slider" ref="slider">
    <div class="slider-group " ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">

    </div>
  </div>


</template>

<script>
  import {addClass} from 'assets/js/dom.js';
  export default{
    props: {
      loop: {
        type: true,
        default: true
      },
      autoPlay: {
        type: true,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    data: function () {
      return {
        sliderWidth: 50
      };
    },
    created() {
      console.log('slide created.');
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth();
        this._initSlider();
      }, 20)

    },
    methods: {
      _setSliderWidth() {
        let slideItemrWidth = this.sliderWidth;
        let sliderWidth = 0;
        let sliderGroupDom = this.$refs.sliderGroup.children;
        console.log(this.$refs.sliderGroup.children.length);
        for (let i = 0; i < sliderGroupDom.length; i++) {
          console.log(sliderGroupDom[i], 'askdha');
          let child = sliderGroupDom[i];
          addClass(child, 'slider-item');
          child.style.width = slideItemrWidth + 'px';
          sliderWidth += slideItemrWidth;
        }
        if (this.loop) {
          sliderWidth += 2 * slideItemrWidth;
        }
        this.$refs.sliderGroup.style.width = sliderWidth + 'px';
      },
      _initSlider() {

      }
    },
    components: {}
  }
</script>

<style scoped>

  .slider {
    min-height: 1px;
  }

  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .slider-item {
    float: left;
    box-sizing: border-box;
    overflow: hidden;
    text-align: center;
  }

  .slider-item a {
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
  }

  .slider-item img {
    width: 100%;
    display: block;
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
  }

  .dot {

  }

</style>
