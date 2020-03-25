<template>
  <div class="comment-main">
    <div class="poem-wrap">
      <div class="poem-border poem-border-left"></div>
      <div class="poem-border poem-border-right"></div>
      <h1>念两句诗</h1>
      <p class="poem-content">苟利国家生死以,岂因祸福避趋之</p>
      <p class="poem-info">[清代] 林则徐《赴戍登程口占示家人》</p>
    </div>
    <div class="comment-list">
      <div class="comment-list-title">
        <h3>Comments | 1,632 条评论</h3>
      </div>
      <div class="comment">
        <div class="comment-top" style="height: 50px">
          <div class="comment-avatar"><img src="../assets/avatar.jpg" style="    width: 34px;
    height: 34px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;"></div>
          <div class="comment-writer" style="    position: relative;
    left: 43px;">123</div>
          <div class="comment-info">发布于一天前巴拉巴拉巴拉</div>
        </div>
        <div class="comment-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    data() {
      return {}
    },
    methods: {
      returnTitleImg() {
        this.$emit('getTitle', {
          'title': '留言板',
          'url': 'https://picjumbo.com/wp-content/uploads/mans-hand-is-trying-to-reach-the-sun_free_stock_photos_picjumbo_P1000733.jpg'
        })
      }
    },
    mounted() {
      this.returnTitleImg()
    }
  }
</script>

<style scoped>
  .comment-main {
    margin-top: 30px;
  }

  .poem-wrap {
    position: relative;
    width: 60%;
    left: 20%;
    min-height: 140px;
    border: 2px solid #797979;
    border-top-width: 0px;
  }

  .poem-border {
    position: absolute;
    height: 2px;
    width: 27%;
    background-color: #797979;
  }

  .poem-border-left {
    left: 0;
  }

  .poem-border-right {
    right: 0;
  }

  .poem-wrap h1 {
    position: relative;
    top: -10px;
    margin-top: -20px;
    display: inline-block;
    letter-spacing: 4px;
    color: #797979;
  }

  .poem-wrap p {
    width: 70%;
    line-height: 30px;
    color: #797979;
  }

  .poem-content {
    margin: auto;
    font-size: 25px;
  }

  .poem-info {
    font-size: 15px;
    margin: 15px auto;
  }

  .comment-list {
    padding: 0 15%;
  }

  .comment-list-title {
    text-align: left;
  }

  .comment-list-title h3 {
    margin: 80px 0 40px 0;
    color: #7d7d7d;
    font-weight: 400;
  }
  .comment-avatar{
    position: absolute;
  }
  .comment-writer,.comment-info{
    text-align: left;
  }

</style>
