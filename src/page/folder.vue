<template>
  <div class="folder-main">
    <div style="height: 150px">
      <div style="">
        <div class="folder-img">
          <a :href="overview[0].src">
            <img :src="overview[0].img" alt="">
          </a>
        </div>
      </div>
      <div class="folder-right">
        <div class="folder-title">
          <h1><a :href="overview[0].src">{{overview[0].title}}</a></h1>
        </div>
        <div class="folder-time">
          <i class="el-icon-time"></i>
          发布于{{overview[0].time}}
        </div>
        <div class="folder-content">
          <p>{{overview[0].detail}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "folder",
    data() {
      return {
        overview: [
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '标题',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
          {
            'title': '这是一个文章的标题,很长很长的那种',
            'time': '2020-03-07',
            'src': 'https://www.baidu.com',
            'img': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg',
            'detail': '忽然间一股拳风从耳畔擦过，竟是刮面如刀。裘千仞这一掌未及打实，急忙缩回手臂，架开了从旁袭来的一拳，怒道：“老顽童，你又来啦。”却是周伯通见瑛姑势危，施展《九阴真经》中的上乘功夫，解开了他这铁掌绝招。'
          },
        ]
      }
    },
    methods: {
      returnTitleImg() {
        this.$emit('getTitle', {
          'title': '归档',
          'url': 'http://pic.lvmama.com/uploads/pc/place2/2017-05-25/f722ecdd-48f6-4aa8-a935-77e64b756743.jpg'
        })
      },
    },
    created() {
      this.returnTitleImg()
    }
  }

</script>

<style>
  .folder-main {
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(255, 255, 255, .8);
  }

  .folder-img {
    position: absolute;
    margin-top: 10px;
  }

  .folder-img img {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;
  }

  .folder-right {
    text-align: left;
    margin-left: 120px;
    width: 680px;
  }

  .folder-title {
    padding-top: 10px;
  }

  .folder-title h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    color: #504e4e;
  }

  .folder-title a {
    text-decoration: none;
  }
  .folder-title a:visited {
    color: #504e4e;
  }
  .folder-title a:hover {
    color: #e67474;
  }

  .folder-time {
    color: #989898;
    font-size: 12px;
  }

  .folder-time i {
    font-size: 14px;
  }

  .folder-content p {
    margin-top: 5px;
  }

  /*.mainImg {*/
  /*  background-image: url(../assets/bg.jpg)*/
  /*}*/
</style>
