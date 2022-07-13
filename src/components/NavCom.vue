<template>
  <div class="container">
    <ul>
      <li>登陆/注册</li>
    </ul>
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="rgb(7, 82, 160)"
      active-text-color="#000"
      background-color="#27ba9b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
    </el-menu> -->
  </div>
</template>
<script>
export default {
  name: 'NavCom'
}
</script>
<style scoped lang="less">
.container {
  /* height: 100%; */
  ul {
    display: flex;
    justify-content: end;
    /* height: 100%; */
    margin: 0;
    li {
      /* height: 39px;
      line-height: 39px; */
      margin: 0 10px;
      cursor: pointer;
      /* padding-top: 10px; */
      font-size: 12px;
      font-weight: 700;
      color: #165fab;
      &:hover {
        background-color: #165fab;
        color: @bgColor;
      }
    }
  }
}
/*  */
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu {
  padding-left: 684px;
}
.el-menu-item {
  font-size: 13px;
}
</style>
