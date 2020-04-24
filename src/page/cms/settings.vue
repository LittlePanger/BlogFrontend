<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
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

      </el-tab-pane>
      <el-tab-pane label="页面信息" name="third">

      </el-tab-pane>
      <el-tab-pane label="导航设置" name="fourth">

      </el-tab-pane>
    </el-tabs>
    <div class="header-button">
      <el-button @click="editable =true">编辑</el-button>
      <el-button @click="editable =false">保存</el-button>
    </div>
  </div>
</template>

<script>
  import {socialInfo} from "../../api/api";

  export default {
    name: "settings",
    data() {
      return {
        editable: false,
        socialData: [],
        activeName: 'first'
      };
    },
    mounted() {
      socialInfo().then(res => {
        this.socialData = res.data
      });
    }
  }
</script>

<style scoped>
  .header-button {
    text-align: left;
    margin-top: 10px;
  }

</style>
