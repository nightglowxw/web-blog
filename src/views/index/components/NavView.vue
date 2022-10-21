<template>
  <div class="container">
    <div class="nav">
      <ul>
        {{
          $route.name
        }}
        <li class="listCss" :class="{ activeCss: $route.path === '/nav/0' }">
          <router-link to="/nav/0"><span>「荒诞故事」</span></router-link>
        </li>
        <li class="listCss" :class="{ activeCss: $route.path === '/nav/1' }">
          <router-link to="/nav/1"><span>前端</span></router-link>
        </li>
        <li class="listCss" :class="{ activeCss: $route.path === '/nav/2' }">
          <router-link to="/nav/2"><span>写过的项目</span></router-link>
        </li>
        <li class="listCss" :class="{ activeCss: $route.path === '/nav/3' }">
          <router-link to="/nav/3"><span>element-ui布局练习</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavView'
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
