<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="tabChange">
      <el-tab-pane label="社交信息" name="first">
        <el-table
          :data="socialData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="名称"
            width="180">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.name"></el-input>
              <span v-show="!editable">{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="href"
            label="链接"
            width="180">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.href"></el-input>
              <a v-show="!editable" :href="scope.row.href">{{scope.row.name}}</a>
            </template>
          </el-table-column>
          <el-table-column
            prop="icon"
            label="图标">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.icon"></el-input>
              <i v-show="!editable" :class="scope.row.icon" :style="{color:scope.row.color}"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="color"
            label="颜色">
            <template slot-scope="scope">
              <el-color-picker :disabled="!editable" v-model="scope.row.color" show-alpha></el-color-picker>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="个人信息" name="second">
        <div class="second-div">
          <span>昵称:</span>
          <el-input placeholder="请输入内容" v-show="editable" v-model="personalData.name" style="width: 200px"></el-input>
          <span v-show="!editable">{{personalData.name}}</span>
        </div>
        <div class="second-div">
          <span>头像:</span>
          <input type="file" v-show="editable" @change="addImg" ref="inputer">
          <!--          <el-input placeholder="请输入内容" v-show="editable" v-model="personalData.avatar"></el-input>-->
          <el-image
            v-show="!editable"
            style="width: 40px"
            :src="personalData.avatar"
            fit="scale-down"
            :previewSrcList="[personalData.avatar]"></el-image>
        </div>

      </el-tab-pane>

      <el-tab-pane label="页面信息" name="third">
        <el-table
          :data="pageData"
          style="width: 600px">
          <el-table-column
            prop="title"
            label="名称"
            width="180">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.title"></el-input>
              <span v-show="!editable">{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="url"
            label="链接名"
            width="180">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.url"></el-input>
              <span v-show="!editable">{{scope.row.url}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="src"
            label="封面"
            width="180"
            align="center">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.src"></el-input>
              <el-image
                v-show="!editable"
                style="width: 160px"
                :src="scope.row.src"
                fit="scale-down"
                :previewSrcList="pageSrcList"></el-image>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="导航设置" name="fourth">
        <el-table
          :data="navData"
          style="width: 600px">
          <el-table-column
            prop="name"
            label="名称"
            width="180">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.name"></el-input>
              <span v-show="!editable">{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="url"
            label="链接"
            width="180">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.url"></el-input>
              <span v-show="!editable">{{scope.row.url}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="icon"
            label="图标"
            width="100">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.icon"></el-input>
              <i v-show="!editable" :class="scope.row.icon"></i>
            </template>
          </el-table-column>
          <el-table-column
            prop="position"
            label="位置">
            <template slot-scope="scope">
              <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.position"></el-input>
              <span v-show="!editable">{{scope.row.position}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div class="header-button">
      <el-button @click="editable =true" v-show="!editable">编辑</el-button>
      <el-button @click="editable =false" v-show="editable">取消</el-button>
      <el-button @click="saveBtn">保存</el-button>
    </div>
  </div>
</template>

<script>
  import {
    baseUrl,
    socialInfo,
    personalInfo,
    pageAll,
    navBar,
    socialInfoSub,
    personalInfoSub,
    pageAllSub,
    navBarSub
  } from "../../api/api";

  export default {
    name: "settings",
    data() {
      return {
        editable: false,
        socialData: [],
        personalData: {},
        formData: new FormData(),
        pageData: [],
        pageSrcList: [],
        navData: [],
        activeName: 'first'
      };
    },
    methods: {
      tabChange() {
        this.editable = false
      },
      addImg(event) {//头像添加到头像框内
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        let fil = inputDOM.files[0];
        if (fil.size > 1024 * 1024) {
          // alert('请选择1M以内的图片！');
          this.$message.error('请选择1M以内的图片！');
          return false
        }
        this.formData.append('file', fil);
      },
      saveBtn() {
        this.editable = false;
        if (this.activeName === 'first') {
          socialInfoSub(this.socialData).then(res => {
          });
        } else if (this.activeName === 'second') {
          let perData = this.personalData;
          for (let i in perData) {
            if (perData.hasOwnProperty(i)) {
              this.formData.delete(i);
              this.formData.append(i, perData[i])
            }
          }
          personalInfoSub(this.formData).then(res => {
            this.personalData = res.data
          });
        } else if (this.activeName === 'third') {
          pageAllSub(this.pageData).then(res => {
            this.pageData = res.data
          });
        }
        else if (this.activeName === 'fourth') {
          navBarSub(this.navData).then(res => {
          });
        }
      }
    },
    mounted() {
      socialInfo().then(res => {
        this.socialData = res.data
      });
      personalInfo().then(res => {
        this.personalData = res.data
      });
      pageAll().then(res => {
        this.pageData = res.data;
        for (let i = 0; i < this.pageData.length; i++) {
          this.pageSrcList.push(this.pageData[i].src)
        }
      });
      navBar().then(res => {
        let data = res.data;
        for (let d in data) {
          for (let i in data[d]) {
            this.navData.push(data[d][i])
          }
        }
      });
    }
  }
</script>

<style scoped>
  .header-button {
    text-align: left;
    margin-top: 10px;
  }

  .second-div {
    text-align: left;
    margin-top: 10px;
  }
</style>
