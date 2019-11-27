<template>
  <div id="app">
    <v-header></v-header>
    <div class="fiexd-margin">
      <keep-alive>
        <router-view  v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view  v-if="!$route.meta.keepAlive"/>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    vHeader: resolve => require(['./components/header.vue'], resolve),
    vFooter: resolve => require(['./components/footer.vue'], resolve)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import 'assets/css/reset.styl'
  @import 'assets/css/common.styl'
  @font-face {
    font-family: NotoSerifMedium;
    src: url("assets/fonts/NotoSerifCJKsc-Medium.otf");
  }
  body
    color #2c3a44
    background-color #fff
    font-family NotoSerifMedium
    -webkit-tap-highlight-color transparent
  .fiexd-margin
    margin-top: 1.35rem
    @media only screen and (max-width 1200px)
      margin-top: 70px
</style>
