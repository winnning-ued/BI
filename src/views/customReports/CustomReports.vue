<template>

  <div class="custom-content">
    <score></score>
    <card></card>
  </div>

</template>

<script>
  import score from 'business/score/Score.vue'
  import card from 'business/card/Card.vue'
  export default{
    props: [],
    data: function () {
      return {};
    },
    created() {

      console.log('CustomReports created.');

    },
    mounted() {

      console.log('CustomReports mounted.');

    },
    methods: {},
    components: {
      score,
      card
    }
  }
</script>

<style scoped>

  .custom-content {
    width: 1024px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;

  }

</style>
