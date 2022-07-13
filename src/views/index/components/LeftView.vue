<template>
  <div class="container">
    <div class="left">
      <router-view></router-view>
      <div class="message">
        <bulletin-com>
          <template v-slot:header>
            <h2>公告板</h2>
          </template>
          <template v-slot:title> 好好生活，慢慢相遇。 </template>
          <template v-slot:content> 就酱。 </template>
        </bulletin-com>
      </div>
      <div class="table">
        <table-list :tableData="dataArticle">
          <template v-slot:header> 「更新中」 </template>
          <template v-slot:input>
            <el-input
              v-model="input"
              placeholder="请输入内容"
              size="mini"
            ></el-input>
          </template>
          <template v-slot:headerBtn>
            <el-button icon="el-icon-search" circle size="mini"></el-button>
          </template>
        </table-list>
      </div>
      <div class="message">
        <div class="contaner">
          <span>留言板</span>
          <span>(<a href=""> 全部6664条 </a>)</span>
        </div>
        <div class="input">
          <el-input type="textarea" :rows="2" placeholder="" v-model="textarea">
          </el-input>
          <el-button size="small">留言</el-button>
        </div>
        <div
          class="comments"
          v-for="(item, index) in dataMsg"
          v-bind:key="index"
        >
          <div class="content">
            <div class="item">
              <div class="pic">
                <el-avatar
                  shape="square"
                  fit="cover"
                  :size="36"
                  :src="item.avatar"
                ></el-avatar>
              </div>
              <div class="content">
                <div class="author">
                  <a href="">{{ item.name }}</a>
                  : {{ item.content }}
                  <span class="datetime">{{ item.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :total="10"
            :page-size="5"
            layout="prev, pager, next, jumper"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import squareUrl from '../../../assets/avatar.jpeg'
import BulletinCom from '../../../components/BulletinCom'
import TableList from '../../../components/TableList'
import { mapState } from 'vuex'

export default {
  name: 'LeftView',
  components: { BulletinCom, TableList },
  computed: mapState({
    // 箭头函数可使代码更简练
    // 更新中
    dataArticle: (state) => state.list.dataArticle,
    // 留言板
    dataMsg: (state) => state.list.dataMsg
    // tableData: dataArticle
  }),
  data() {
    return {
      //
      input: '',
      // 默认为0(如不需要默认可设为null)，点击时将索引赋值给active，从而实现点击选中效果
      activeVar: 0,
      //  循环列表
      listArr: ['肆是一个动词', '「荒诞故事」', '印记'],
      squareUrl: squareUrl,
      //
      textarea: ''
    }
  },
  methods: {
    handleCurrentChange() {
      this.$store.dispatch('getList')
    }
  }
}
</script>
<style scoped lang="less">
.left {
  width: 650px;
  height: 100%;
  margin: auto;
  padding: 40px 35px 50px;
  background-color: #fff;
  /* overflow: visible; */
  .message {
    /* padding: 0 35px 50px; */
    .contaner {
      font-size: 16px;
      color: #1f510d;
      span:last-child {
        margin-left: 6px;
        font-size: 12px;
      }
    }
    .input {
      padding: 15px 0;
      .el-button {
        margin-top: 5px;
      }
    }
    .comments {
      .content {
        .item {
          display: flex;
          margin: 10px 0 15px;
          .pic {
            width: 36px;
            height: 36px;
            overflow: hidden;
            .el-avatar {
              width: 36px !important;
            }
          }
          .content {
            /* padding: 0 0 0 48px; */
            margin-left: 15px;
            /* padding-bottom: 15px; */
            width: 524px;
            height: 52px;
            border-bottom: 1px solid #ddd;
            .author {
              margin-top: 10px;
              color: #666;
            }
          }
        }
      }
    }
  }
}
a:hover {
  color: #fff;
  background-color: @mainColor;
}
.el-input {
  width: 24%;
}
</style>
