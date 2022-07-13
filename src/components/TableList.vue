<template>
  <div class="container">
    <header>
      <span>
        <slot name="header"></slot>
      </span>
      <span class="input">
        <slot name="input"></slot>
      </span>
      <span>
        <slot name="headerBtn"></slot>
      </span>
    </header>
    <main>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-style="{ height: '41px' }"
        :header-cell-style="{ background: '#F6F6F6', color: '#AAAAAA' }"
      >
        <el-table-column label="" width="45">
          <!-- <i class="el-icon-star-off"></i> -->
          <span class="star" title="是否收藏 ？">✩</span>
        </el-table-column>
        <el-table-column label="文章" width="auto">
          <template slot-scope="scope">
            <span
              style="
                color: #409eff;
                font-size: 12px;
                margin: 0;
                cursor: pointer;
              "
              class="articlesTitle"
              >{{ scope.row.title }}</span
            >
          </template>
        </el-table-column>
        <el-table-column label="时间" width="160" prop="date">
          <template slot-scope="scope">
            <span style="color: #409eff; font-size: 12px; margin: 0">{{
              scope.row.date
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="分享" width="48">
          <i
            class="el-icon-share share"
            style="color: #409eff; cursor: pointer"
          ></i>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :total="10"
          :page-size="5"
          layout="prev, pager, next, jumper"
        >
        </el-pagination>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'TableList',
  props: {
    tableData: {
      // 接收父组件传入值
      type: Array || Object,
      default: () => []
    }
  },
  data() {
    return {}
  },
  created() {
    // this.$store.dispatch('getList')
  },
  methods: {
    handleCurrentChange() {
      this.$store.dispatch('getList')
    }
  }
}
</script>
<style scoped lang="less">
.container {
  margin: 35px 0;
  span:first-child {
    color: @mainColor;
    font-size: 16px;
  }
  span:last-child {
    margin-left: 10px;
    .el-button {
      font-size: 5px;
    }
  }
}
.star {
  display: inline-block;
  color: #f5d080 !important;
  cursor: pointer;
  transition: transform 2s;
  /* animation: rotate-90-cw; */
  &:hover {
    transform: rotate(180deg);
    color: #927432 !important;
    /* background-color: @mainColor; */
  }
}
.articlesTitle,
.share {
  /* text-decoration: none; */
  color: @mainColor;
  &:hover {
    color: #fff !important;
    background-color: @mainColor;
  }
}
.el-table {
  font-size: 12px;
}
.el-table-column {
  color: pink;
}
header {
  margin: 10px 0;
  .input {
    /* width: 50px !important; */
  }
}
</style>
