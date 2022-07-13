<template>
  <div id="app">
    <el-backtop></el-backtop>
    <router-view />
    <!-- login -->
    <template v-if="isShow">
      <div class="login">
        <login-view></login-view>
      </div>
    </template>
  </div>
</template>
<script>
import LoginView from './views/login/LoginView'

export default {
  components: {
    LoginView
  },
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style scoped lang="less">
#app {
  height: 100%;
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 55px;
    /* z-index: 9999; */
  }
}
</style>
