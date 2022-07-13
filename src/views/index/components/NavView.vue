<template>
  <div class="container">
    <div class="nav">
      <ul>
        <li
          class="listCss"
          v-for="(item, index) in listArr"
          :key="index"
          @click="activeVar = index"
          :class="{ activeCss: activeVar === index }"
        >
          <RouterLink :to="`/nav/${index}`">
            <span>{{ item }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavView',
  data() {
    return {
      // 默认为0(如不需要默认可设为null)，点击时将索引赋值给active，从而实现点击选中效果
      activeVar: 0,
      //  循环列表
      listArr: ['「荒诞故事」', '前端', 'element-ui']
    }
  }
}
</script>
<style scoped lang="less">
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
.activeCss {
  background-color: #fff !important;
  span {
    color: #000 !important;
  }
}
</style>
