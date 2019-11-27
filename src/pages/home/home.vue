<template>
  <div class="home">
    <div class="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="banenr-ct">
          <h3 v-html="$t('home.text1')"></h3>
          <p class="banner-desc">{{$t('home.text2')}}</p>
        </div>
      </div>
    </div>
    <div class="contentOne wrap">
      <div class="contentOne-ct">
        <h3>{{$t('home.text3')}}</h3>
        <p>{{$t('home.text4')}}</p>
        <router-link tag="button" to="/lab/ai">{{$t('home.text5')}}</router-link>
      </div>
    </div>
    <div class="contentTwo">
      <div class="wrap">
        <div class="contentTwo-lf">
          <div>
            <h3>{{$t('home.text6')}}</h3>
            <p>{{$t('home.text7')}}</p>
          </div>
        </div>
        <div class="contentTwo-rt"></div>
      </div>
    </div>
    <!--博格一号-->
    <div class="content-tw">
      <div class="wrap">
        <div class="title">{{$t('home.text23')}}</div>
        <div class="title-desc">{{$t('home.text24')}}</div>
        <div class="img-box">
          <img src="../../assets/images/home/home_shuzi_cn.svg" alt="" v-show="lang === 'CN'">
          <img src="../../assets/images/home/home_shuzi_en.svg" alt="" v-show="lang === 'EN'">
        </div>
        <div class="text-info">{{$t('home.text30')}}</div>
      </div>
    </div>
    <div class="contentThree">
      <div class="contentThree-bg"></div>
      <div class="contentThree-ct wrap">
        <div class="contentThree-ct-lf">
          <h3 class="title">- {{$t('home.text8')}}</h3>
          <ul>
            <li>
              <h3><i>01</i>{{$t('home.text9')}}</h3>
              <p>{{$t('home.text10')}}</p>
            </li>
            <li>
              <h3><i>02</i>{{$t('home.text11')}}</h3>
              <p>{{$t('home.text12')}}</p>
            </li>
            <li>
              <h3><i>03</i>{{$t('home.text13')}}</h3>
              <p>{{$t('home.text14')}}</p>
            </li>
            <li>
              <h3><i>04</i>{{$t('home.text015')}}</h3>
              <p>{{$t('home.text016')}}</p>
            </li>
          </ul>
        </div>
        <div class="contentThree-ct-rt"></div>
      </div>
    </div>
    <div class="contentFour wrap">
      <h3>{{$t('home.text15')}}</h3>
      <p>{{$t('home.text16')}}</p>
      <ul>
        <li>{{$t('home.text17')}}</li>
        <li>{{$t('home.text18')}}</li>
        <li>{{$t('home.text19')}}</li>
        <li>{{$t('home.text20')}}</li>
      </ul>
    </div>
    <div class="contentFive">
      <h3>{{$t('home.text21')}}</h3>
      <p>{{$t('home.text22')}}</p>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$titleColor = #0d3780
$bgColor = #f5f4f2
.home
  .banner
    .banenr-ct
      width auto
      @media screen and (max-width: 767px)
        width: 100%
      .banner-desc
        width: 9.5rem
        color #1a1a1a
        @media screen and (max-width: 767px)
          width: 100%
    .banner-img
      background url("../../assets/images/home/banner.jpg") no-repeat
  .contentOne
    height 6rem
    display flex
    align-items center
    @media screen and (max-width: 767px)
      height 326px
    .contentOne-ct
      width 8.2rem
      margin 0 auto
      text-align center
      font-size 0
      @media screen and (max-width: 767px)
        width 100%
      h3
        font-size .24rem
        color $titleColor
        margin-bottom .4rem
        @media screen and (max-width: 767px)
          font-size 20px
      p
        font-size .16rem
        line-height 2
        margin-bottom 1rem
        @media screen and (max-width: 767px)
          font-size 14px
      button
        display inline-block
        width 2.5rem
        height .44rem
        color $titleColor
        background-color transparent
        border 1px solid $titleColor
        font-size .14rem
        cursor pointer
        user-select none
        @media screen and (max-width: 767px)
          width 180px
          height 40px
          font-size 14px
        &:active
          opacity .6
        &:hover
          background-color: $titleColor
          color #fff
  .contentTwo
    width 100%
    border-top 1px solid #e6e6e6
    .wrap
      height 6rem
      display flex
      justify-content space-between
      @media screen and (max-width: 1200px)
        display block
        height auto
        padding-bottom 30px
      .contentTwo-lf
        width 8.1rem
        display flex
        align-items center
        @media screen and (max-width: 1200px)
          width 100%
          padding-top 40px
        h3
          font-size .24rem
          color $titleColor
          margin-bottom .4rem
          @media screen and (max-width: 1200px)
            font-size 20px
            margin-bottom 30px
        p
          font-size .16rem
          line-height 2
          @media screen and (max-width: 1200px)
            font-size 14px
      .contentTwo-rt
        width 4.62rem
        height 4.62rem
        background url("../../assets/images/home/fund_img1.svg") no-repeat
        background-size cover
        @media screen and (max-width: 1200px)
          width 250px
          height 250px
          margin 0 auto
  .contentThree
    width 100%
    position relative
    @media screen and (max-width: 1200px)
      height auto
    .contentThree-bg
      width 12.86rem
      height 100%
      position absolute
      left 0
      background-color $bgColor
      @media screen and (max-width: 1200px)
        width 100%
    .contentThree-ct
      height 100%
      position relative
      z-index 1
      display flex
      justify-content space-between
      align-items center
      @media screen and (max-width: 1200px)
        display block
        height auto
        padding 30px 20px
      .contentThree-ct-lf
        padding: 60px 0
        .title
          font-size .34rem
          color #131116
          margin-bottom .4rem
          @media screen and (max-width: 1200px)
            font-size 25px
            text-align center
            margin-bottom 30px
        ul
          width 6.14rem
          @media screen and (max-width: 1200px)
            width 100%
          li
            margin-bottom .4rem
            @media screen and (max-width: 1200px)
              margin-bottom 40px
            &:last-child
              margin-bottom 0
              @media screen and (max-width: 1200px)
                margin-bottom 40px
            h3
              display flex
              align-items center
              font-size .18rem
              margin-bottom .15rem
              @media screen and (max-width: 1200px)
                display: flex
                text-align: left
                font-size 16px
                margin-bottom 20px
              i
                display flex
                align-items center
                justify-content center
                width .34rem
                height .34rem
                margin-right .2rem
                color #fff
                background-color #4e6778
                @media screen and (max-width: 1200px)
                  width 20px
                  height 20px
            p
              font-size .14rem
              line-height 2
              @media screen and (max-width: 1200px)
                font-size 14px
      .contentThree-ct-rt
        width 6.04rem
        height 4.6rem
        background url("../../assets/images/home/fund_img2.jpg") no-repeat
        background-size cover
        @media screen and (max-width: 1200px)
          width 300px
          height 200px
          margin 0 auto
        @media screen and (max-width: 340px)
          width: 100%
  .contentFour
    height 6rem
    padding-top 1.8rem
    text-align center
    @media screen and (max-width: 767px)
      height auto
      padding: 80px 0
    h3
      font-size .24rem
      color $titleColor
      margin-bottom .3rem
      @media screen and (max-width: 767px)
        font-size 20px
        margin-bottom 30px
    p
      width 8.6rem
      margin 0 auto
      font-size .16rem
      line-height 2
      margin-bottom 1rem
      @media screen and (max-width: 767px)
        width 100%
        font-size 14px
    ul
      width 10rem
      margin 0 auto
      display flex
      border 1px solid #cccccc
      @media screen and (max-width: 767px)
        width 100%
      li
        height .44rem
        flex 1
        font-size .14rem
        display flex
        align-items center
        justify-content center
        position relative
        @media screen and (max-width: 767px)
          height 40px
        &:after
          content ''
          width 1px
          height .14rem
          background-color #d1d1d1
          position absolute
          right 0
          top .15rem
          @media screen and (max-width: 767px)
            top 12px
            height 16px
        &:last-child:after
          display none
  .contentFive
    text-align center
    height 4rem
    padding-top 1.4rem
    background-color $bgColor
    @media screen and (max-width: 767px)
      height auto
      padding 80px 20px
    h3
      font-size .24rem
      color $titleColor
      margin-bottom .3rem
      @media screen and (max-width: 767px)
        font-size 20px
    p
      font-size .16rem
      line-height 2
      @media screen and (max-width: 767px)
        font-size 14px
  .content-tw
    border-top: 1px solid #e6e6e6;
    padding: 1.2rem 0 1.1rem
    .title
      font-size: .24rem
      color #0d3780
      margin-bottom: .4rem
    .img-box
      margin: .4rem 0 .5rem
      width: 14rem
      @media screen and (max-width: 1200px)
        width: 100%
      img
        width: 100%
        display block
    .title-desc
      font-size: 16px
      color #2c3a44
    .text-info
      margin-top: .4rem
      font-size: 16px
      color #2c3a44
      width: 13.4rem
      @media screen and (max-width: 1200px)
        width: 100%
</style>

<script>
import { i18n } from '../../i18n/config'
export default{
  computed: {
    lang () {
      return i18n.locale
    }
  }
}
</script>
