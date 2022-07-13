<template>
  <div class="index">
    <div class="bg"></div>
    <el-container>
      <el-header>
        <div class="nav">
          <nav-com v-if="false"></nav-com>
        </div>
      </el-header>
      <el-main>
        <div class="header">
          <div class="info">
            <div class="avatar">
              <el-avatar shape="square" :size="48" :src="squareUrl"></el-avatar>
              <span>The wanted</span>
            </div>
          </div>
          <div class="nav">
            <nav-view></nav-view>
          </div>
        </div>
        <div class="main">
          <div class="left">
            <!-- <div>{{ list.dataMsg }}</div> -->
            <router-view></router-view>
          </div>
          <div class="right">
            <right-view></right-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavCom from '../../components/NavCom'
import NavView from './components//NavView'
import RightView from './components//RightView'
import squareUrl from '../../assets/avatar.jpeg'
export default {
  name: 'IndexView',
  components: { NavView, RightView, NavCom },
  data() {
    return {
      //
      squareUrl: squareUrl,
      // 控制是否关注
      rightBtn: true
    }
  },
  computed: {
    // list() {
    //   return this.$store.state.list
    // }
  },
  created() {
    // console.log('aaa')
    this.getList()
  },
  methods: {
    getList() {
      this.$store.dispatch('getList')
    }
  }
}
</script>
<style scoped lang="less">
.bg {
  position: absolute;
  width: 100%;
  height: 300px;
  /* background-color: @bgColor; */
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(39,186,155,1) 100%);
  z-index: -9999;
}
.el-container {
  /* position: relative; */
  width: 950px;
  height: 100%;
  margin: 0 auto;
  .el-header {
    /* position: relative;
    right: 0;
    top: 0; */
    height: 50px !important;
    padding: 0;
    .nav {
      /* position: relative; */
      height: 50px;
      padding: 11px 0 0 0;
      box-sizing: border-box;
    }
  }
  .el-main {
    overflow: visible;
    height: 100%;
    .header {
      position: relative;
      height: 120px;
      padding: 22px 20px 0;
      background-color: @mainColor;
      box-sizing: border-box;
      .info {
        .avatar {
          display: flex;
          height: 53px;
          .el-avatar {
            margin: 0 12px 5px 0;
          }

          span {
            display: block;
            height: 53px;
            line-height: 53px;
            font-size: 25px;
          }
        }
      }
    }
    .main {
      display: flex;
      .left {
        min-width: 650px;
        min-height: 1000px;
        background-color: #fff;
      }
    }
  }
}
a:hover {
  color: #fff;
  background-color: @mainColor;
}
</style>
