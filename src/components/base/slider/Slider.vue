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
  import betterScroll from 'better-scroll';
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
      },
      slideItemrWidth: {
        type: Number,
        default: 100,
        required: true
      },
      slideItemrHeight: {
        type: Number,
        default: 100,
        required: true
      }
    },
    data: function () {
      return {

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
        let slideItemrWidth = this.slideItemrWidth;
        let slideItemrHeight = this.slideItemrHeight;
        let sliderWidth = 0;
        let sliderGroupDom = this.$refs.sliderGroup.children;
        console.log(this.$refs.sliderGroup.children.length);
        for (let i = 0; i < sliderGroupDom.length; i++) {
          console.log(sliderGroupDom[i], 'askdha');
          let child = sliderGroupDom[i];
          addClass(child, 'slider-item');
          child.style.width = slideItemrWidth + 'px';
          child.style.height = slideItemrHeight + 'px';
          sliderWidth += slideItemrWidth;
        }
        if (this.loop) {
          sliderWidth += 2 * slideItemrWidth;
        }
        this.$refs.sliderGroup.style.width = sliderWidth + 'px';
      },
      _initSlider() {
        this.slider = new betterScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400,
          click: true
        })
      }
    },
    components: {}
  }
</script>

<style scoped>

  .slider {
    min-height: 1px;
    overflow: hidden;
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
