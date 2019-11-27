<template>
  <div class="finance">
    <div class="finance-banner"></div>
    <div class="finance-content wrap">
      <h3 class="title">{{$t('labFinance.text1')}}</h3>
      <div class="finance-content-top">
        <p>{{$t('labFinance.text2')}}</p>
        <div class="top-img-box" v-show="lang === 'CN'">
          <img class="top-svg" src="../../assets/images/newImage2/cloud_img1.svg" alt="">
        </div>
        <div class="img-box-en" v-show="lang === 'EN'">
          <img src="../../assets/images/newImage2/cloud_img1en.svg" alt="">
        </div>
      </div>
      <ul>
        <li>
          <h3>1.{{$t('labFinance.text4')}}</h3>
          <p>{{$t('labFinance.text5')}}</p>
        </li>
        <li>
          <h3>2.{{$t('labFinance.text6')}}</h3>
          <p>{{$t('labFinance.text7')}}</p>
        </li>
        <li>
          <h3>3.{{$t('labFinance.text8')}}</h3>
          <p>{{$t('labFinance.text9')}}</p>
        </li>
        <li>
          <h3>4.{{$t('labFinance.text10')}}</h3>
          <p>{{$t('labFinance.text11')}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$fontImp = #4e6778
img
  width: 100%
  display block
.finance
  margin-bottom: 1.36rem
  .finance-banner
    height 3.6rem
    background url("../../assets/images/newImages/cloud_banner.png") no-repeat center
    background-size cover
    @media screen and (max-width: 767px)
      height 150px
  .finance-content
    &.wrap
      @media screen and (max-width: 767px)
        padding-left 0
    h3.title
      width 6.9rem
      padding-top .08rem
      font-size .34rem
      margin-bottom .3rem
      margin-top -.3rem
      padding-left .5rem
      background-color #fff
      color #0d3780
      @media screen and (max-width: 767px)
        width 100%
        font-size 25px
        margin-bottom 30px
        margin-top 40px
    .finance-content-top
      padding-left .5rem
      @media screen and (max-width: 767px)
        width 100%
        padding-right .5rem
      p
        font-size .18rem
        line-height 2
        margin-bottom 1rem
        @media screen and (max-width: 767px)
          font-size 16px
      h4
        font-size .34rem
        margin-bottom .4rem
        color $fontImp
        @media screen and (max-width: 767px)
          font-size 25px
          margin-bottom 30px
      .img-box-en
        width: 690px
        @media screen and (max-width: 750px)
          width: 100%
      .top-img-box
        width: 6.9rem
        display flex
        align-items center
        justify-content center
        height 4.6rem
        @media screen and (max-width: 767px)
          height auto
          width: 100%
          padding: 20px
        .top-svg
          width: 6.9rem
          @media screen and (max-width: 480px)
            width 100%
            height auto
    ul
      width 10.6rem
      margin-top .6rem
      padding-left .5rem
      @media screen and (max-width: 767px)
        width 100%
        margin-top 50px
      li
        margin-bottom .45rem
        @media screen and (max-width: 767px)
          margin-bottom 40px
        h3
          font-size .24rem
          margin-bottom .15rem
          color $fontImp
          @media screen and (max-width: 767px)
            font-size 20px
        p
          line-height 2
          font-size .18rem
          @media screen and (max-width: 767px)
            font-size 16px
</style>

<script>
import { i18n } from '../../i18n/config'
export default{
  data () {
    return {
      cnImg: require('../../assets/images/lab/lab_financial_img.svg'),
      enImg: require('../../assets/images/lab/lab_financial_img_en.png')
    }
  },
  computed: {
    lang () {
      return i18n.locale
    }
  }
}
</script>
