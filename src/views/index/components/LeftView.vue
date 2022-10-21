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
    </div>
  </div>
</template>
<script>
import squareUrl from '../../../assets/avatar.jpeg'
import BulletinCom from '../../../components/BulletinCom'
import { mapState } from 'vuex'

export default {
  name: 'LeftView',
  components: { BulletinCom },
  computed: mapState({
    // 箭头函数可使代码更简练
    // 更新中
    dataArticle: (state) => state.localData.dataArticle,
    // 留言板
    dataMsg: (state) => state.localData.dataMsg
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
      // this.$store.dispatch('getList')
    }
  }
}
</script>
<style scoped lang="less">
.left {
  width: auto;
  height: 100%;
  min-height: 333px;
  margin: auto;
  padding: 40px 35px 50px;
  background-color: #67C23A;
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
