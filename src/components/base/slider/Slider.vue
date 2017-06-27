<template>

  <div class="slider" ref="slider">
    <div class="slider-group " ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item,index) in dots"
            :class="{active:currentPageIndex===index}"
            @click="clickDot(index)"></span>
    </div>
  </div>


</template>

<script>
  import {addClass} from 'assets/js/dom.js';
  import betterScroll from 'better-scroll';
  export default{
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      slideItemWidth: {
        type: Number,
        required: true
      },
      slideItemHeight: {
        type: Number,
        required: true
      }
    },
    data: function () {
      return {
        dots: [],
        currentPageIndex: 0,
        slider: null
      };
    },
    watch: {
      slideItemWidth(value) {
        this._setSliderWidth();
      }
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth();
        this._initdots();
        this._initSlider();
        if (this.autoPlay) {
          this._play()
        }
      }, 20)

    },
    methods: {
      _setSliderWidth() {
        let slideItemWidth = this.slideItemWidth;
        let slideItemHeight = this.slideItemHeight;
        let sliderWidth = 0;           //sliderGroup的宽度
        this.$refs.slider.style.width = `${slideItemWidth}px`;
        this.$refs.slider.style.height = `${slideItemHeight}px`;
        this.sliderGroupDom = this.$refs.sliderGroup.children;
        for (let i = 0; i < this.sliderGroupDom.length; i++) {
          let child = this.sliderGroupDom[i];
          addClass(child, 'slider-item');
          child.style.width = slideItemWidth + 'px';
          child.style.height = slideItemHeight + 'px';
          sliderWidth += slideItemWidth;
        }
        if (this.loop) {
          sliderWidth += 2 * slideItemWidth;
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
        this.slider.on('scrollEnd', this.resetPlay);
        this.slider.on('touchend', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer);
            this._play()
          }
        });
      },
      _initdots(){
        this.dots = new Array(this.sliderGroupDom.length)
      },
      _play(){
        let pageIndex = this.currentPageIndex + 1;
        if (this.loop) {
          pageIndex += 1;
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      },
      resetPlay() {
        let pageIndex = this.slider.getCurrentPage().pageX;
        if (this.loop) {
          pageIndex -= 1;
        }
        this.currentPageIndex = pageIndex;
        if (this.autoPlay) {
          clearTimeout(this.timer);
          this._play()
        }
      },
      clickDot(index){
        this.slider.goToPage(index, 0, 0);
        this.currentPageIndex = index
      }
    },
    components: {}
  }
</script>

<style scoped>

  .slider {
    min-height: 1px;
    overflow: hidden;
    position: relative;
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
    width: 15px;
    height: 2px;
    background: #EFEFEF;
    display: inline-block;
    margin: 0 10px;
  }

  .dot:hover{
    cursor:pointer;
  }

  .active {
    background: #E0C1AA;
  }

</style>
