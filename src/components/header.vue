<template>
  <div>
    <!-- pc -->
    <div class="header" v-show="headerFlag">
      <div class="wrap flex-betwn">
        <div class="logo" @click="$router.push('/home')">
          <img src="../assets/images/header/logo_nav.png" alt="">
        </div>
        <div class="right">
          <div class="language-box">
            <div></div>
            <ul class="language">
              <li class="lang" v-for="(item, index) in langArr" :key="index" @click="chooseLang(index)"><span class="langname" :class="{'activeLang': currentIndex === index}">{{item.lang}}</span></li>
            </ul>
          </div>
          <ul class="nav-uls">
            <router-link to="/home" class="nav-list"><span class="navname">{{$t('header.text1')}}</span></router-link>
            <li class="nav-list lab-list">
              <a class="lab"><span class="navname" :class="{'activeNav': isactiveNav}">{{$t('header.text2')}}</span></a>
              <ul class="slecet">
                <router-link tag="li" to="/lab/ai" class="select-list"><span class="navname">{{$t('header.text4')}}</span></router-link>
                <router-link tag="li" to="/lab/finance" class="select-list"><span class="navname">{{$t('header.text5')}}</span></router-link>
                <router-link tag="li" to="/lab" class="select-list"><span class="navname">{{$t('header.text8')}}</span></router-link>
              </ul>
            </li>
            <router-link to="/community" class="nav-list"><span class="navname">{{$t('header.text6')}}</span></router-link>
            <router-link to="/bergOne" class="nav-list"><span class="navname">{{$t('header.text14')}}</span></router-link>
            <router-link to="/aboutUs" class="nav-list"><span class="navname">{{$t('header.text7')}}</span></router-link>
          </ul>
        </div>
      </div>
    </div>
    <!--移动、小屏-->
    <div class="mobile-header" :class="{'hidden-nav': isSlecet}" v-show="headerFlag">
      <div class="header-w">
        <div class="logo"  @click="$router.push('/home')"><img src="../assets/images/header/logo_nav.png" alt=""></div>
        <div class="menu" @click="selectMenu" :class="{'close-menu': isSlecet}" ref="menuBtn"></div>
      </div>
      <ul class="mobile-nav-uls" :class="{'nav-show': isSlecet}">
        <li class="link" @click="gotoPath(1)"><router-link to="/home">{{$t('header.text1')}}</router-link></li>
        <!--<li class="link" @click="gotoPath(2)"><router-link to="/lab">{{$t('header.text2')}}</router-link></li>-->
        <li class="link" @click="gotoPath(2)"><router-link to="/lab/ai">{{$t('header.text4')}}</router-link></li>
        <li class="link" @click="gotoPath(3)"><router-link to="/lab/finance">{{$t('header.text5')}}</router-link></li>
        <li class="link" @click="gotoPath(4)"><router-link to="/lab">{{$t('header.text8')}}</router-link></li>
        <li class="link" @click="gotoPath(5)"><router-link to="/community">{{$t('header.text6')}}</router-link></li>
        <li class="link" @click="gotoPath(6)"><router-link to="/bergOne">{{$t('header.text14')}}</router-link></li>
        <li class="link" @click="gotoPath(7)"><router-link to="/aboutUs">{{$t('header.text7')}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bus from '../assets/js/bus'
import { i18n } from '../i18n/config'
export default {
  data () {
    return {
      headerFlag: true,
      isactiveNav: false,
      isSlecet: false,
      currentIndex: 0,
      langArr: [
        {lang: 'CN'},
        {lang: 'EN'}
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$route.path === '/lab' || this.$route.path === '/lab/finance' || this.$route.path === '/lab/ai') {
        this.isactiveNav = true
      } else {
        this.isactiveNav = false
      }
      this.refreshHeader()
      this.$root.Bus.$on('hideNav', (bl) => {
        this.headerFlag = bl
      })
      if (localStorage.getItem('bergLang') === 'EN') {
        this.currentIndex = 1
      } else {
        this.currentIndex = 0
      }
      Bus.$on('headerChangeLang', (str) => {
        if (str === 'EN') {
          this.currentIndex = 1
        } else {
          this.currentIndex = 0
        }
      })
    })
  },
  methods: {
    // 刷新页面是否隐藏头部
    refreshHeader () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.$route.path === '/community') {
        if (window.innerWidth < 1200) {
          if (scrollTop > 200) {
            this.headerFlag = false
          } else {
            this.headerFlag = true
          }
        } else {
          if (scrollTop > 377) {
            this.headerFlag = false
          } else {
            this.headerFlag = true
          }
        }
      }
    },
    closeModeMenu (event) {
      if (this.$refs.menuBtn && !this.$refs.menuBtn.contains(event.target)) {
        this.isSlecet = false
      }
    },
    routePath () {
      if (this.$route.path === '/lab' || this.$route.path === '/lab/finance' || this.$route.path === '/lab/ai') {
        this.isactiveNav = true
      } else {
        this.isactiveNav = false
      }
    },
    selectMenu () {
      this.isSlecet = !this.isSlecet
    },
    gotoPath (n) {
      this.isSlecet = false
      if (n === 1) {
        this.$router.push('/home')
      } else if (n === 2) {
        this.$router.push('/lab/ai')
      } else if (n === 3) {
        this.$router.push('/lab/finance')
      } else if (n === 4) {
        this.$router.push('/lab')
      } else if (n === 5) {
        this.$router.push('/community')
      } else if (n === 6) {
        this.$router.push('/bergOne')
      } else if (n === 7) {
        this.$router.push('/aboutUs')
      }
    },
    chooseLang (val) {
      this.currentIndex = val
      if (val === 0) {
        localStorage.setItem('bergLang', 'CN')
        Bus.$emit('headerChangeLang', 'CN')
        i18n.locale = 'CN'
      } else {
        localStorage.setItem('bergLang', 'EN')
        Bus.$emit('headerChangeLang', 'EN')
        i18n.locale = 'EN'
      }
    }
  },
  watch: {
    '$route': 'routePath',
    isSlecet: function () {
      if (this.isSlecet === false) {
        document.removeEventListener('click', this.closeModeMenu) // 关闭事件监听
      } else {
        document.addEventListener('click', this.closeModeMenu) // 添加事件监听
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
img
  display block
  width: 100%
.header
  position: fixed
  left: 0
  top: 0
  width: 100%
  height: 1.34rem
  background-color: #fff
  z-index: 999
  font-size: 14px
  box-shadow: 0 0 5px rgba(128,128,128, .2);
  @media only screen and (max-width 1200px)
    display none
  @media only screen and (min-width 1200px)
    display block
  .flex-betwn
    height: 100%
    display flex
    align-items center
    justify-content space-between
    .logo
      cursor pointer
      display flex
      align-items center
      span
        display block
        margin-left .2rem
        position relative
        &:before
          content ''
          width 1px
          background-color #0d3780
          height 60%
          position absolute
          left -.1rem
          top 20%
      img
        display block
        width: 2.32rem
        height auto
    .right
      .language-box
        margin-bottom: .3rem
        display flex
        align-items center
        justify-content space-between
      .language
        font-size: 12px
        color #808080
        line-height: 1
        display flex
        align-items center
        .lang
          cursor pointer
          padding: 0 10px
          border-right: 1px solid #808080
          &:last-child
            padding-right: 0
            border-right: none
          .langname
            display block
            line-height: 1
          .activeLang
            border-bottom: 1px solid #808080
      .nav-uls
        height: 40px
        display flex
        align-items center
        .nav-list
          color #293a45
          font-size: 14px
          padding: 0 .56rem
          border-right: 1px solid #d1d1d1
          &:last-child
            border-right: none
            padding-right: 0
        .router-link-exact-active
          .navname
            color #0d3780
            border-bottom: 1px solid #0d3780
        .activeNav
          color #0d3780
          border-bottom: 1px solid #0d3780
        .lab-list
          position: relative
          padding: 0 .21rem
          &:hover
            .slecet
              display block
              //box-shadow: 1px 2px 1px rgba(0,0,0,.1);
             // box-shadow: 0 5px 5px #ccc;
          .lab
            color #293a45
            cursor pointer
            padding: 0 .35rem
          .slecet
            width 100%
            position: absolute
            display none
            background-color: #fff
            top: 100%
            left: 50%;
            transform: translateX(-50%);
            padding-top: 10px
            padding-bottom: 10px
            .select-list
              min-width: 140px
              font-size: 14px
              color #293a45
              height: 40px
              display flex
              align-items center
              justify-content center
              text-align: center
              cursor pointer
              &:hover
                color #0d3780
.mobile-header
  position: fixed
  height: 70px
  left: 0
  top: 0
  width: 100%
  z-index: 999
  font-size: 14px
  box-shadow: 0 0 5px rgba(128,128,128, .2);
  background-color: #fff
  transition all .5s linear
  @media only screen and (max-width 1200px)
    display block
  @media only screen and (min-width 1200px)
    display none
  .header-w
    height: 100%
    padding: 0 15px
    display flex
    align-items center
    justify-content space-between
    .logo
      cursor pointer
      width 150px
    .menu
      cursor pointer
      width 32px
      height: 32px
      background-image: url("../assets/images/header/nav.png")
      background-repeat:no-repeat
      -webkit-background-size: cover
      background-size: cover
      background-position: center center
      &.close-menu
        background-image: url("../assets/images/header/close.png")
  .mobile-nav-uls
    position: absolute
    box-shadow: 0  3px 3px rgba(0,0,0,.5);
    width: 100%
    top: 70px
    background-color: #fff
    height: 0
    transition all .3s linear
    overflow hidden
    &.nav-show
      height: 315px
    .link
      cursor pointer
      color #293a45
      padding-left: 15px
      line-height: 45px
      a
        color #293a45
        &.router-link-exact-active
          color #0d3780
</style>
