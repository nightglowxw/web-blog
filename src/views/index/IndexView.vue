<template>
  <div class="index">
    <div class="bg"></div>
    <el-container>
      <el-header>
        <div class="nav"></div>
      </el-header>
      <el-main>
        <!-- <div class="bg"></div> -->
        <!-- <main>mian</main> -->
        <div class="header">
          <div class="info">
            <div class="avatar">
              <el-avatar shape="square" :size="48" :src="squareUrl"></el-avatar>
              <span>The wanted</span>
            </div>
            <div class="nav">
              <ul>
                <li
                  class="listCss"
                  v-for="(item, index) in listArr"
                  :key="index"
                  @click="activeVar = index"
                  :class="{ activeCss: activeVar === index }"
                >
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="left">
            <div class="bulletin">
              <div class="container">
                <h2>公告板</h2>
                <div class="content">
                  <p>
                    第二张个人全创作专辑「我愚蠢的理想主义」已于10月25日发布。
                  </p>
                  <br />
                  <br />
                  <p>公众微信号：aaa_asi 炸鸡少女</p>
                  <a href="">新浪微博</a>
                  <br />
                  <br />
                  <div class="complaint"><a href="">投诉</a></div>
                </div>
              </div>
            </div>
            <div class="message">
              <div class="contaner">
                <span>留言板</span>
                <span>(<a href=""> 全部6664条 </a>)</span>
              </div>
              <div class="input">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder=""
                  v-model="textarea"
                >
                </el-input>
                <el-button size="small">留言</el-button>
              </div>
              <div class="comments">
                <div class="content">
                  <div class="item">
                    <div class="pic">
                      <a href="">
                        <el-avatar
                          shape="square"
                          :size="36"
                          :src="squareUrl"
                        ></el-avatar>
                      </a>
                    </div>
                    <div class="content">
                      <div class="author">
                        <a href="">麼一凹</a>
                        : 又大一岁啦，好久不见
                        <span class="datetime">05-07 12:01</span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pic">
                      <a href="">
                        <el-avatar
                          shape="square"
                          :size="36"
                          :src="squareUrl"
                        ></el-avatar>
                      </a>
                    </div>
                    <div class="content">
                      <div class="author">
                        <a href="">rzbyy</a>
                        : 2022来了
                        <span class="datetime">04-12 12:19</span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pic">
                      <a href="">
                        <el-avatar
                          shape="square"
                          :size="36"
                          :src="squareUrl"
                        ></el-avatar>
                      </a>
                    </div>
                    <div class="content">
                      <div class="author">
                        <a href="">斑奶</a>
                        : 终于发新砖了 哈哈哈
                        <span class="datetime">2021-11-18 16:54</span>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pic">
                      <a href="">
                        <el-avatar
                          shape="square"
                          :size="36"
                          :src="squareUrl"
                        ></el-avatar>
                      </a>
                    </div>
                    <div class="content">
                      <div class="author">
                        <a href="">xiamaoer001</a>
                        : 阿肆，真是宝藏女孩！很好听
                        <span class="datetime">2020-12-16 20:11</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="mod">
              <div class="bd">
                <div class="user-pic">
                  <el-avatar
                    shape="square"
                    :size="200"
                    :fit="cover"
                    :src="squareUrl"
                  ></el-avatar>
                </div>
                <div class="site-follow">
                  <span>我关注这个小站。</span>
                  <span
                    ><a href="" title="确实不再关注 放肆的肆 吗?"
                      >>取消</a
                    ></span
                  >
                </div>
                <div class="desc">治愈系业余唱作女青年。<br /><br /></div>
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
        <div class="footer"></div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import squareUrl from '../../assets/avatar.jpeg'
export default {
  name: 'IndexView',
  data() {
    return {
      // 默认为0(如不需要默认可设为null)，点击时将索引赋值给active，从而实现点击选中效果
      activeVar: 0,
      //  循环列表
      listArr: ['肆是一个动词', '「荒诞故事」', '印记'],
      squareUrl: squareUrl
    }
  }
}
</script>
<style scoped lang="less">
.bg {
  position: absolute;
  width: 100%;
  height: 300px;
  background-color: @bgColor;
  z-index: -9999;
}
.el-container {
  width: 950px;
  height: 100%;
  margin: 0 auto;
  .el-header {
    height: 50px !important;
    padding: 0;
    .nav {
      height: 50px;
      padding: 11px 0 14px 0;
      box-sizing: border-box;
    }
  }
  .el-main {
    /* .bg {
      position: absolute;
      width: 100%;
      height: 300px;
      background-color: @bgColor;
      z-index: -9999;
    } */
    height: 100%;
    .header {
      position: relative;
      height: 120px;
      padding: 22px 20px 0;
      background-color: @mainColor;
      box-sizing: border-box;
      .info {
        /* position: relative; */
        /* padding-bottom: 0; */
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
        .nav {
          position: absolute;
          bottom: 0;
          ul {
            display: flex;
            margin: 0;
            padding-left: 0;
            /* line-height: 1; */
            .listCss {
              display: flex;
              align-items: center;
              height: 28px;
              line-height: 100%;
              margin: 0 3px 0 0;
              list-style: none;
              background-color: @navColor;
              border-radius: 1px;
              cursor: pointer;
              span {
                /* height: 28px;
                line-height: 100%; */
                text-align: center;
                padding: 0 15px;
                font-size: 12px;
                color: #fff;
              }
              &:hover {
                background-color: #2185ea;
                color: #fff;
              }
              /* &:visited {
                background-color: #fff!important;
                color: #000;
              } */
            }
            /* li:first-child {
              padding: 1px 14px 0;
            } */
          }
        }
      }
    }
    .main {
      display: flex;
      height: 100%;
      .left {
        width: 650px;
        height: 100%;
        padding: 40px 0 0;
        background-color: #fff;
        .bulletin {
          .container {
            margin: 0 35px 50px;
            h2 {
              font-size: 16px;
              color: #1f510d;
            }
            .content {
              position: relative;
              padding: 25px;
              background-color: #f4f4ec;
              /* a {
                color: @mainColor;
                &:hover {
                  color: #fff;
                  background: @mainColor;
                }
              } */
              .complaint {
                position: absolute;
                bottom: 20px;
                right: 20px;
                color: #aaa;
                opacity: 0;
              }
              &:hover {
                .complaint {
                  opacity: 1;
                }
              }
            }
          }
        }
        .message {
          padding: 0 35px 50px;
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
                  a {
                    /* padding: 0 0 48px; */
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
      .right {
        /* position: relative; */
        width: 300px;
        padding-top: 40px;
        background-color: #fff;
        .mod {
          position: relative;
          width: 200px;
          height: 100%;
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
                a {
                  color: #ccc;
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
    }
  }
}
.activeCss {
  background-color: #fff !important;
  span {
    color: #000 !important;
  }
}
</style>
