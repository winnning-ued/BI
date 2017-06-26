<template>

  <div class="tag-box">
    <div class="tag-content">

      <template v-for="(tag, index) in data">
        <tag
          :closable="tag.closable"
          icon-class="el-icon-close"

          @clickedIcon="closedTag(index)"
          @clicked="clickedTag(index)"
        >{{ tag.name }}</tag>
      </template>

    </div>
  </div>

</template>

<script>
  import tag from 'base/tag/Tag.vue'
  export default{
    props: [],
    data: function () {
      return {
        data: [
          {
            name: '首页',
            closable: false
          },
          {
            name: '药品概况',
            closable: true
          },
          {
            name: '报表设计',
            closable: true
          },
          {
            name: '报表设计',
            closable: true
          },
        ]
      };
    },
    created() {


    },
    mounted() {


    },
    methods: {
      closedTag(index) {

          this.data.splice(index,1);

      },
      clickedTag(index) {

          console.log('clicked', index);

      }
    },
    components: {
      tag
    }
  }
</script>

<style scoped>

  .tag-box {
    width: 100%;
    height: 45px;
    background: #FFFFFF;
  }

  .tag-content {
    width: 80%;
    height: 45px;
    margin: 0 auto;
    line-height: 45px;
    padding-left: 15px;
    padding-right: 15px;
  }

</style>
