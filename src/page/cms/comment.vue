<template>

  <el-container>
    <el-header>
      <div class="header-button">
        <el-button @click="editable =true">批量隐藏</el-button>
        <el-button @click="editable =true">编辑</el-button>
        <el-button @click="editable =false">保存</el-button>
      </div>
    </el-header>
    <el-main>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column
          type="selection"
          width="35">
        </el-table-column>
        <el-table-column
          prop="writer"
          label="昵称"
          min-width="100"
          align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.writer"></el-input>
            <span v-show="!editable">{{scope.row.writer}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="avatar"
          label="头像"
          width="80"
          align="center">
          <template slot-scope="scope">
            <el-image
              style="width: 40px"
              :src="getSrc(scope.row.avatar)"
              fit="scale-down"
              :previewSrcList="[getSrc(scope.row.avatar)]"></el-image>
          </template>
        </el-table-column>
        <el-table-column
          prop="site"
          label="网站"
          min-width="100"
          align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.site"></el-input>
            <span v-show="!editable">{{scope.row.site}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="时间"
          width="180"
          sortable
          align="center">
          <template slot-scope="scope">
            <el-date-picker
              v-model="scope.row.time"
              v-show="editable"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间">
            </el-date-picker>
            <span v-show="!editable">{{scope.row.time}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="content"
          label="留言"
          min-width="180"
          align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.content"></el-input>
            <span v-show="!editable">{{scope.row.content}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="system"
          label="系统"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.system"></el-input>
            <span v-show="!editable">{{scope.row.system}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="systemSrc"
          label="系统图标"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.systemSrc" placeholder="请选择" v-show="editable">
              <el-option
                v-for="item in systemSrcOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-show="!editable">{{scope.row.systemSrc}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="browser"
          label="浏览器"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.browser"></el-input>
            <span v-show="!editable">{{scope.row.browser}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="browserSrc"
          label="浏览器图标"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.browserSrc" placeholder="请选择" v-show="editable">
              <el-option
                v-for="item in browserSrcOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span v-show="!editable">{{scope.row.browserSrc}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="位置"
          width="100"
          align="center">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" v-show="editable" v-model="scope.row.address"></el-input>
            <span v-show="!editable">{{scope.row.address}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-block">
        <el-pagination
          layout="prev, pager, next"
          :total="commentCount"
          :page-size="5"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </el-main>
  </el-container>

</template>

<script>
  import {baseUrl, commentGet} from "../../api/api";

  export default {
    name: "commentCMS",
    data() {
      return {
        tableData: [],
        commentCount: 0,
        editable: false,
        systemSrcOpt: [
          {
            value: 'Windows 10',
            label: 'Win10'
          },
          {
            value: 'Mac OS X',
            label: 'Mac OS'
          },
          {
            value: 'iOS',
            label: 'iOS'
          },
          {
            value: 'Android',
            label: 'Android'
          },
          {
            value: 'Linux',
            label: 'Linux'
          },
          {
            value: 'Ubuntu',
            label: 'Ubuntu'
          },
          {
            value: 'Windows 7',
            label: 'Win7'
          },
          {
            value: 'Windows 8',
            label: 'Win8'
          },
        ],
        browserSrcOpt: [
          {
            value: 'Chrome',
            label: 'Chrome'
          },
          {
            value: 'Firefox',
            label: 'Firefox'
          },
          {
            value: 'Safari',
            label: 'Safari'
          },
          {
            value: 'QQ Browser',
            label: 'QQ Browser'
          },
          {
            value: 'Sogou Explorer',
            label: 'Sogou Explorer'
          },
          {
            value: 'Edge',
            label: 'Edge'
          },
        ],
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      getSrc(path) {
        return baseUrl + '/api/img/' + path
      },
      getComment(val) {
        commentGet({'page': val}).then(res => {
          this.commentCount = res.count;
          this.tableData = res.results;
        })
      },
      handleCurrentChange(val) {
        this.getComment(val)
      },
    },
    watch: {},
    mounted() {
      this.getComment()
    }
  }
</script>

<style scoped>
  .header-button {
    text-align: left;
    margin-top: 10px;
  }

  .page-block {
    float: right;
    margin-top: 10px;
  }
</style>
