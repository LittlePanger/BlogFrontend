<template>
  <div class="folder-main">
    <div v-for="item in overview" :key="item.id" class="article">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <div :class="{'folder-img-pc':isPc,'folder-img-mobile':!isPc}">
            <a :href="item.src">
              <img :src="item.img" alt="" :class="{'img-pc':isPc,'img-mobile':!isPc}">
            </a>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <div class="folder-right">
            <div class="folder-right-top">
              <div class="folder-title">
                <h1 :class="{'title-h1-pc':isPc,'title-h1-mobile':!isPc}"><a :href="item.src">{{item.title}}</a></h1>
              </div>
              <div :class="{'folder-time-pc':isPc,'folder-time-mobile':!isPc}">
                <i class="el-icon-time"></i>
                发布于{{item.time}}
              </div>
            </div>
            <div class="folder-content">
              <p>{{item.detail}}</p>
            </div>
          </div>
        </el-col>
      </el-row>


      <hr :class="{'hr-pc':isPc,'hr-mobile':!isPc}">
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next, jumper"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>

  export default {
    name: "folder",
    props: ['isPc'],
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
      this.returnTitleImg();
    },
  }

</script>

<style>
  .folder-main {
    width: auto;
    padding: 0 10px;
    margin-top: 10px;
    background-color: rgb(255, 255, 255);
  }

  .article {
    min-height: 150px
  }

  .folder-img-pc {
    margin-top: 10px;
  }
  .folder-img-mobile {
    margin-top: 25px;
  }
  .img-pc {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;
  }
  .img-mobile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #dadada;
    position: relative;
  }
  .folder-right {
    text-align: left;
    /*margin-left: 120px;*/
    /*width: 680px;*/
  }

  .folder-right-top {
    height: 40px;
  }

  .folder-title {
    padding-top: 15px;
    float: left;
  }

  .title-h1-pc {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: #504e4e;
  }

  .title-h1-mobile {
    margin: 0;
    font-size: 18px;
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

  .folder-time-pc {
    float: right;
    color: #989898;
    font-size: 12px;
    margin-top: 20px;
  }
  .folder-time-mobile {
    margin: 3px 0;
    width: 100%;
    float: right;
    color: #989898;
    font-size: 12px;
  }
  .folder-time i {
    font-size: 14px;
  }

  .folder-content {
    margin-top: 20px;
  }

  .folder-content p {
    /*margin-top: 5px;*/
    font-size: 15px;
    color: rgba(0, 0, 0, .66)
  }

  .hr-pc {
    width: 30%;
    height: 1px;
    margin: 20px auto;
    border: 0;
    background: #efefef;
  }
  .hr-mobile {
    width: 30%;
    height: 1px;
    margin: 3px auto;
    border: 0;
    background: #efefef;
  }

  .el-pagination {
    margin-top: 20px;
    text-align: right;
  }

  /*.mainImg {*/
  /*  background-image: url(../assets/bg.jpg)*/
  /*}*/
</style>
