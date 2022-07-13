<template>
  <div class="container">
    <div class="bulletin">
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <div class="content">
            <p>
              <slot name="title"> </slot>
            </p>
            <br />
            <br />
            <p>
              <slot name="content"> </slot>
            </p>
            <!-- <a href="">新浪微博</a> -->
            <br />
            <br />
            <div class="complaint">ʕ̯•͡˔•̯᷅ʔ °</div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BulletinCom'
}
</script>
<style scoped lang="less">
.bulletin {
  .container {
    /* margin: 0 35px 50px; */
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
        cursor:default;
      }
      &:hover {
        .complaint {
          opacity: 1;
        }
      }
    }
  }
}
</style>
