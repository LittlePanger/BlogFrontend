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
      <div class="comment" v-for="item in comment" :key="item.id">
        <div class="comment-avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="comment-writer">{{item.writer}}
        </div>
        <div class="comment-info">
          发布于{{item.time}}({{item.userAgent}})来自:{{item.address}}
        </div>
        <div class="comment-body">
          <p style="text-align: left">
            {{item.content}}
          </p>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    data() {
      return {
        comment: [
          {
            'id': 0,
            'avatar': 'http://b-ssl.duitang.com/uploads/item/201511/25/20151125162407_nfySc.thumb.224_0.jpeg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 1,
            'avatar': 'http://b-ssl.duitang.com/uploads/item/201511/25/20151125162407_nfySc.thumb.224_0.jpeg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 2,
            'avatar': 'http://b-ssl.duitang.com/uploads/item/201511/25/20151125162407_nfySc.thumb.224_0.jpeg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 3,
            'avatar': 'http://b-ssl.duitang.com/uploads/item/201511/25/20151125162407_nfySc.thumb.224_0.jpeg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
          {
            'id': 4,
            'avatar': 'http://b-ssl.duitang.com/uploads/item/201511/25/20151125162407_nfySc.thumb.224_0.jpeg',
            'writer': '小白',
            'time': '2020-03-25',
            'userAgent': '巴拉巴拉巴拉',
            'address': '北京',
            'content': '内容巴拉巴拉'
          },
        ]
      }
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

  .comment-avatar {
    position: absolute;
  }

  .comment-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;
  }

  .comment-writer, .comment-info {
    text-align: left;
  }

  .comment-writer {
    padding: 3px 0;
    position: relative;
    left: 55px;
    color: #FE9600;
    font-size: 15px;
    font-weight: 600;
  }

  .comment-info {
    position: relative;
    left: 55px;
    font-size: 12px;
    letter-spacing: 0px;
    text-transform: none;
    color: rgba(0, 0, 0, .35);
  }

  .comment hr{
    height: 1px;
    width: 100%;
    background: #eee;
    border: 0;
    margin: 40px 0;
  }

</style>
