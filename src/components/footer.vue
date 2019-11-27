<template>
  <div class="footer">
    <div class="wrap footer-w">
      <div class="logo">
        <div class="logo-img" @click="$router.push('/home')">
          <img src="../assets/images/footer/logo_bottom.svg" alt="">
        </div>
        <p class="copyright">Copyright © 2018 BogleFunds. All rights reserved.</p>
      </div>
      <div class="nav-link-box">
        <ul class="link-home">
          <li><router-link to="/home">{{$t('header.text1')}}</router-link></li>
          <li><router-link to="/bergOne">{{$t('header.text14')}}</router-link></li>
          <li><router-link to="/aboutUs">{{$t('header.text7')}}</router-link></li>
        </ul>
        <ul class="link-lab">
          <li><router-link to="/lab/ai">{{$t('header.text2')}}</router-link></li>
          <router-link tag="li" to="/lab/ai" class="small-text"><span class="line"></span>{{$t('header.text4')}}</router-link>
          <router-link tag="li" to="/lab/finance" class="small-text"><span class="line"></span>{{$t('header.text5')}}</router-link>
          <router-link tag="li" to="/lab" class="small-text"><span class="line"></span>{{$t('header.text8')}}</router-link>
        </ul>
        <ul class="link-commun">
          <li><router-link to="/community">{{$t('header.text3')}}</router-link></li>
          <!--query: {navNum: 1}-->
          <router-link tag="li" :to="{path: '/community'}" class="small-text"><span class="line"></span>{{$t('header.text10')}}</router-link>
          <router-link tag="li" :to="{path: '/community'}" class="small-text"><span class="line"></span>{{$t('header.text15')}}</router-link>
          <router-link tag="li" :to="{path: '/community'}" class="small-text"><span class="line"></span>{{$t('header.text16')}}</router-link>
        </ul>
        <ul class="friendship">
          <li class="frendLink">{{$t('header.text12')}}</li>
          <li><a href="https://www.pksport.ai" target="_blank">PK</a></li>
          <!--<li><a href="https://www.secretworth.com" target="_blank">{{$t('header.text13')}}</a></li>-->
        </ul>
      </div>
      <div class="copy-auth">
        <div class="language">
          <span v-for="(lang, index) in langArr" :key="index" class="lang"><span  :class="{'activeLang': currentIndex === index}" @click="chooseLang(index)">{{lang}}</span></span>
        </div>
        <div class="img-partner">
          <!--隐藏没有链接的三个图标-->
          <!--<div class="imgbox">-->
            <!--<img src="../assets/images/footer/fund_img3.svg" alt="">-->
          <!--</div>-->
          <!--<div class="imgbox">-->
            <!--<img src="../assets/images/footer/fund_img4.svg" alt="" class="face">-->
          <!--</div>-->
          <!--<div class="imgbox">-->
            <!--<img src="../assets/images/footer/fund_img5.svg" alt="">-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  background-color: #2c3a44
  height: 3rem
  font-size: 16px
  color #8a9399
  padding: .73rem 0
  @media only screen and (max-width 1200px)
    height auto
  .footer-w
    display: flex
    justify-content space-between
    @media only screen and (max-width 1200px)
      flex-direction column
      width: 100%
      .logo
        text-align: center
      .nav-link-box
        margin-top: 25px
        justify-content space-between
        padding: 0 30px
      .copy-auth
        margin-top: 30px
        align-self center !important
    .logo-img
      cursor pointer
      margin: .4rem 0
      img
        display block
        margin: 0 auto
        width 232px
    .copyright
      font-size: 16px
      color #8a9399
    .nav-link-box
      display flex
      @media only screen and (max-width 800px)
        flex-direction column
        ul
          margin-left: 0 !important
        li
          justify-content center
          margin-bottom: 15px !important
      ul
        margin-left: .9rem
        &.friendship
          li
            justify-content center
          .frendLink
            cursor auto
        &:first-child
          margin-left: 0
        li
          font-size: 16px
          color #8a9399
          margin-bottom: .25rem
          display flex
          align-items center
          cursor pointer
          &:last-child
            margin-bottom: 0
          &.small-text
            font-size: 12px
          .line
            display block
            width: 6px
            height: 2px
            background-color: #8a9399
            margin-right: 6px
          a
            color #8a9399
    .img-partner
      display block
    .copy-auth
      display flex
      @media only screen and (max-width 1200px)
        display block
      .language
        color #808080
        margin-bottom: 10px
        font-size: 14px
        text-align center
        .lang
          padding: 0 10px
          line-height: 1
          cursor pointer
          &:nth-child(1)
            border-right: 1px solid #808080
        .activeLang
          border-bottom: 1px solid #808080
        @media only screen and (max-width 1200px)
          display block
        @media only screen and (min-width 1200px)
          display none
      .imgbox
        width: 34px
        height: 34px
        display flex
        align-items center
        justify-content center
        background-color: #4E6778
        margin-left: 30px
        &:first-child
          margin-left: 0
        img
          width: 25px
        .face
          height: 28px
</style>

<script>
import { i18n } from '../i18n/config'
import Bus from '../assets/js/bus'
export default{
  data () {
    return {
      currentIndex: 0,
      langArr: ['CN', 'EN']
    }
  },
  created () {
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
  },
  methods: {
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
  }
}
</script>
