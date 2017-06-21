<template>

  <div class="tag">
    <span @click="click">
      <slot></slot>
    </span>

    <template v-if="closable">
      <i :class="iconClass" @click="clickIcon"></i>
    </template>
  </div>

</template>

<script>
  export default{
      name: 'tag',
    props: {
      closable: {
          type: Boolean,
          required: false,
          default: true
      },
      iconClass: {
          type: String,
        required: false,
        default: 'el-icon-close'
      }
    },
    data: function () {
      return {};
    },
    methods: {
      clickIcon() {

          this.$emit('clickedIcon');

      },
      click() {

          this.$emit('clicked');

      }
    },
  }
</script>

<style scoped>

  .tag {
    height: 26px;
    line-height: 26px;
    padding: 0 15px;
    font-size: 14px;
    color: #999999;
    display: inline-block;
    border: 1px solid #F3F3F3;
    border-radius: 3px;
    margin: 0 2px;
    cursor:pointer;
  }
  i {
   font-size: 12px;
    margin-left: 10px;
    color: #999999;
  }

</style>
