<template>
  <div class="container">
    <el-alert
      title="值得研究的技术社区和博客"
      type="success"
      effect="dark"
      :closable="false"
    >
    </el-alert>
    <div class="items">
      <el-link
        type="success"
        href="https://godbasin.github.io/front-end-playground/front-end-basic/"
        target="_blank"
        class="item"
        >被删的前端游乐场</el-link
      >
      <el-link
        type="success"
        href="https://xugaoyi.com/web/"
        target="_blank"
        class="item"
        >Evan's blog</el-link
      >
      <el-link
        type="success"
        href="www.ruanyifeng.com/"
        target="_blank"
        class="item"
        >阮一峰的个人网站 - Ruan YiFeng's Personal Website</el-link
      >
      <el-link
        type="success"
        href="https://juejin.cn/frontend"
        target="_blank"
        class="item"
        >前端 - 掘金（官网）</el-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'CodeView',
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="less">
.container {
  position: relative;
  padding: 20px 40px;

  .item {
    margin: 20px 10px;
  }
}
a:hover {
  color: #fff;
  background-color: @mainColor;
}
.item2 {
  margin: 10px;
}
.items {
  display:flex;
  flex-direction: column;
}
</style>
