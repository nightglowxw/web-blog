<template>
  <div class="container">
    <div class="right">
      <div class="mod">
        <div class="bd">
          <div class="user-pic">
            <el-avatar
              shape="square"
              :size="200"
              fit="cover"
              :src="squareUrl"
            ></el-avatar>
          </div>
          <div class="site-follow">
            <template v-if="rightBtn">
              <el-button
                type="primary"
                size="mini"
                plain
                @click="rightBtn = false"
                >关注</el-button
              >
            </template>
            <template v-else>
              <span>我关注这个小站。</span>
              <span
                ><span
                  class="a"
                  title="确实不再关注 放肆的肆 吗?"
                  @click="rightBtn = true"
                  >>取消</span
                >
              </span>
            </template>
          </div>
          <div class="desc">治愈系业余唱作青年。<br /><br /></div>
          <div class="share">
            <p>
              <strong>分享小站</strong>
              <span title="新浪微博"><a href="">新浪微博</a></span>
            </p>
          </div>
          <!-- <div class="share-qrcode"></div> -->
          <!-- <div class="site-info">
              <div class="card">
                <div class="hd">
                  <div class="title"><a href="">前端开发 · 工程师</a></div>
                </div>
                <div class="bd">
                  <span>cheng yuan</span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import squareUrl from '../../../assets/avatar.jpeg'
export default {
  name: 'RightView',
  data() {
    return {
      // 默认为0(如不需要默认可设为null)，点击时将索引赋值给active，从而实现点击选中效果
      // activeVar: 0,
      //  循环列表
      // listArr: ['肆是一个动词', '「荒诞故事」', '印记','前端'],
      //
      squareUrl: squareUrl,
      // 控制是否关注
      rightBtn: true
    }
  }
}
</script>
<style scoped lang="less">
.right {
  /* position: relative; */
  width: 300px;
  min-height: 1000px;
  padding-top: 40px;
  background-color: #fff;
  .mod {
    position: relative;
    width: 200px;
    height: 716px;
    margin: 0 50px 50px;
    .bd {
      width: 200px;
      height: 100%;
      position: absolute;
      top: -12%;
      .user-pic {
        width: 200px;
        margin-bottom: 15px;
      }
      .site-follow {
        /* margin-top: 192px; */
        padding: 6px 0 0 39px;
        margin-bottom: 15px;
        text-align: center;
        span {
          .a {
            color: #ccc;
            cursor: pointer;
          }
        }
      }
      .share {
        strong {
          font-size: 14px;
          font-weight: 400;
        }

        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
