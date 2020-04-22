<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
        width="100"
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
            :previewSrcList="[scope.row.src]"></el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="detail"
        label="概述"
        width="180"
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
          <router-link :to="'/cms'+scope.row.url"><el-button type="text" size="small">编辑</el-button></router-link>
          <el-button type="text" size="small">隐藏</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {articleDetailFolder} from "../../api/api";

  export default {
    name: "folderCMS",
    data() {
      return {
        tableData: [],
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    mounted() {
      articleDetailFolder().then(res => {
        this.tableData = res.results
      })
    }
  }
</script>

<style scoped>
  a:visited {
    color: #606266;
    text-decoration: none;
  }


</style>
