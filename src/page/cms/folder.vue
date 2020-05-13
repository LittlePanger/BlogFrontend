<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        min-width="100"
        align="center">
        <template slot-scope="scope">
          <!--          <router-link :to="scope.row.url">{{scope.row.title}}</router-link>-->
          <a :href="scope.row.url" target="_blank" class="title-link">{{scope.row.title}}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="time"
        label="日期"
        width="100"
        sortable
        align="center">
      </el-table-column>
      <el-table-column
        prop="src"
        label="封面"
        width="180"
        align="center">
        <template slot-scope="scope">
          <el-image
            style="width: 160px"
            :src="scope.row.src"
            fit="scale-down"
            :previewSrcList="previewSrcList"></el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="detail"
        label="概述"
        min-width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="heat"
        label="热度"
        width="100"
        sortable
        align="center">
      </el-table-column>
      <el-table-column
        prop="commentNum"
        label="评论数"
        width="100"
        sortable
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100"
        align="center">
        <template slot-scope="scope">
          <router-link :to="'/cms'+scope.row.url">
            <el-button type="text" size="small">编辑</el-button>
          </router-link>
          <el-button type="text" size="small">隐藏</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-block">
      <el-pagination
        layout="prev, pager, next"
        :total="folderCount"
        :page-size="5"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {articleDetailFolder, baseUrl} from "../../api/api";
  import scrollGoTop from "../../components/blog/scrollGoTop";

  export default {
    name: "folderCMS",
    data() {
      return {
        tableData: [],
        folderCount: 0,
        previewSrcList: []
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      getFolder(val) {
        articleDetailFolder({'page': val}).then(res => {
          this.folderCount = res.count;
          this.tableData = res.results;
          this.setSrcList(res.results)
        })
      },
      handleCurrentChange(val) {
        this.getFolder(val)
      },
      setSrcList(res){// 设置图片列表
        for (let i in res) {
          if (res.hasOwnProperty(i)) {
            this.previewSrcList.push(res[i].src)
          }
        }
      }
    },
    mounted() {
      this.getFolder()
    }
  }
</script>

<style scoped>
  a:visited {
    color: #606266;
    text-decoration: none;
  }

  .page-block {
    float: right;
    margin-top: 10px;
  }

</style>
