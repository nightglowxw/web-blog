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

          <div class="share">
            <p>
              <strong>分享小站</strong>
              <span title="新浪微博"><a href="">新浪微博</a></span>
            </p>
          </div>

          <div class="box">
            <div class="loader">
              <span style="--i: 1"></span>
              <span style="--i: 2"></span>
              <span style="--i: 3"></span>
              <span style="--i: 4"></span>
              <span style="--i: 5"></span>
              <span style="--i: 6"></span>
              <span style="--i: 7"></span>
              <span style="--i: 8"></span>
              <span style="--i: 9"></span>
              <span style="--i: 10"></span>
              <span style="--i: 11"></span>
              <span style="--i: 12"></span>
            </div>
            <h3><span>
            <div>关于我:</div><br><br>
            <div>前端开发工程师。<br /><br /></div></span></h3>
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
  background-color: #e6a23c;
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
        margin-bottom: 50px;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222;
}
h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.85em;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
}
h3 span {
  color: #fff;
  font-weight: 500;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
    0 0 50px #fff;
}
.loader {
  position: relative;
  width: 200px;
  height: 100px;
  /* background-color: rgba(255,255,255,.1); */
  animation: animate 24s steps(12) infinite;
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* border: 2px solid #fff; */
  transform: rotate(calc(30deg * var(--i)));
}
.loader span::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.15);
}
.loader span:nth-child(3n + 3):before {
  background: #fff;
  box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
    0 0 50px #fff;
  animation: animateSquare 2s linear infinite;
  transform-origin: 75px;
}
@keyframes animateSquare {
  0%,
  25% {
    transform: rotate(0deg);
  }
  75%,
  90%,
  100% {
    transform: rotate(180deg);
  }
}
.box {
  z-index: -9999;
}
</style>
