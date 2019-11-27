<template>
  <div class="aboutUs">
    <div class="aboutUs-banner"></div>
    <div class="wrap">
      <h3 class="title">{{$t('aboutUs.text1')}}<br />{{$t('aboutUs.text2')}}</h3>
    </div>
    <div class="wrap title-desc">{{$t('aboutUs.text21')}}</div>
    <div class="contentOne aboutUs-content">
      <div class="content-top one-top">
        <div class="content-top-img img-content"><img src="../../assets/images/newImage2/about_img.png" alt=""></div>
        <div class="pc-title pc-title2">
          <p class="text1">{{$t('aboutUs.text3')}}</p>
          <div class="line"></div>
          <p class="text2">{{$t('aboutUs.text4')}}</p>
        </div>
        <p class="mobile-title">{{$t('aboutUs.text3')}}<span class="hight-color">{{$t('aboutUs.text4')}}</span></p>
      </div>
      <p class="content-bt">{{$t('aboutUs.text5')}}</p>
    </div>
    <div class="about-team">
      <div class="about-title">{{$t('aboutUs.text12')}}</div>
      <ul class="team-uls" :class="{'en-uls': lang === 'EN'}">
        <li class="list">
          <div class="img-box">
            <img src="../../assets/images/aboutUs/about_img23.png" alt="">
          </div>
          <p class="big-text">{{$t('aboutUs.text13')}}</p>
          <div class="small-text">{{$t('aboutUs.text14')}}</div>
        </li>
        <li class="list-add">
          <div class="img-add">
            <img src="../../assets/images/aboutUs/about_add.png" alt="">
          </div>
        </li>
        <li class="list">
          <div class="img-box">
            <img src="../../assets/images/aboutUs/about_img24.png" alt="">
          </div>
          <p class="big-text">{{$t('aboutUs.text15')}}</p>
          <div class="small-text">{{$t('aboutUs.text16')}}</div>
        </li>
        <li class="list-add">
          <div class="img-add">
            <img src="../../assets/images/aboutUs/about_add.png" alt="">
          </div>
        </li>
        <li class="list">
          <div class="img-box">
            <img src="../../assets/images/aboutUs/about_img25.png" alt="">
          </div>
          <p class="big-text">{{$t('aboutUs.text17')}}</p>
          <div class="small-text">{{$t('aboutUs.text18')}}</div>
        </li>
        <li class="list-add">
          <div class="img-add">
            <img src="../../assets/images/aboutUs/about_add.png" alt="">
          </div>
        </li>
        <li class="list last-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/about_img6.png" alt="">
          </div>
          <p class="big-text">{{$t('aboutUs.text19')}}</p>
          <div class="small-text">{{$t('aboutUs.text20')}}</div>
        </li>
      </ul>
    </div>
    <!--<div class="contentTwo contentTwo">-->
      <!--<div class="aboutUs-content">-->
        <!--<div class="content-top">-->
          <!--&lt;!&ndash;<h3><p>{{$t('aboutUs.text6')}}</p>{{$t('aboutUs.text7')}}</h3>&ndash;&gt;-->
          <!--<h3 class="pc-title"><p>{{$t('aboutUs.text6')}}</p>{{$t('aboutUs.text7')}}</h3>-->
          <!--<p class="mobile-title">{{$t('aboutUs.text6')}}<span class="hight-color">{{$t('aboutUs.text7')}}</span></p>-->
          <!--<div class=" img-content"><img src="../../assets/images/aboutUs/about_img22.png" alt=""></div>-->
        <!--</div>-->
        <!--<p class="content-bt cont-two">{{$t('aboutUs.text8')}}</p>-->
      <!--</div>-->
    <!--</div>-->
    <div class="contentThree aboutUs-content">
      <div class="flex-dir">
        <p class="text1">{{$t('aboutUs.text9')}}</p>
        <div class="line"></div>
        <p class="text2">{{$t('aboutUs.text10')}}</p>
        <p class="content-bt">{{$t('aboutUs.text11')}}</p>
        <div class="img-content"><img src="../../assets/images/aboutUs/about_img22.jpg" alt=""></div>
        <!--<h3><p>{{$t('aboutUs.text9')}}</p>{{$t('aboutUs.text10')}}</h3>-->
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$color0d = #0d3780
.title-desc
  font-size: 0.18rem;
  line-height: 2;
  margin: .3rem auto 1.5rem
  padding-left: .5rem
img
  width: 100%
  display block
.aboutUs
  .aboutUs-banner
    height 3.6rem
    background url("../../assets/images/newImage2/about_banner.png") no-repeat
    background-size cover
    background-position center
    @media screen and (max-width: 767px)
      height 150px
  .wrap
    .title
      color: #0d3780;
      width 7rem
      margin-top -.3rem
      padding 0 .5rem
      font-size .34rem
      padding-top .08rem
      background-color #fff
      @media only screen and (max-width 1200px)
        text-align: center
        margin-top 40px
        font-size 24px
        padding 0
        width auto
  .aboutUs-content
    width 1152px
    margin 0 auto
    @media only screen and (max-width 1200px)
      width: 100%
      padding: 0 15px 50px 15px !important
    .content-top
      display flex
      align-items center
      @media only screen and (max-width 1200px)
        flex-direction column
        height auto
        .img-content
          margin-right: 0 !important
      h3
        font-size .34rem
        color $color0d
        p
          color #2c3a44
      .pc-title
        @media only screen and (min-width 1200px)
          display block
        @media only screen and (max-width 1200px)
           display none
      .pc-title2
        position: absolute
        left: 5.1rem
        width: 5.78rem
        height: 4rem
        top: -0.45rem
        border: 1px solid #49b0f1
        padding-left: 1.42rem
        display flex
        justify-content center
        flex-direction column
        @media only screen and (max-width 1200px)
          display: none
      .line
        border: 1px solid #2c3a44
        width: 20px
        margin: .3rem 0 .5rem
      .text1
        font-size: .34rem
        color #2c3a44
      .text2
        font-size: .34rem
        color #0d3780
      .mobile-title
        margin-top: 30px
        font-size: 18px
        color #2c3a44
        @media only screen and (min-width 1200px)
          display none
        @media only screen and (max-width 1200px)
          display block
          .hight-color
            color #0d3780
    .content-bt
      margin-right 0
      margin-top .4rem
      line-height 2
      font-size .18rem
      @media only screen and (max-width 1200px)
        font-size: 14px
  .contentOne
    width 1152px
    margin-top 1rem
    padding-bottom 1.14rem
    .pc-title
      margin-right: 0
    @media only screen and (max-width 1200px)
      width: 100%
      padding: 0 15px 50px 15px
    .one-top
      height: 3.4rem
      position: relative
      @media only screen and (max-width 1200px)
        position: static
        flex-direction column
        height auto
        .img-content
          position: static !important
          margin-right: 0 !important
      .content-top-img
        position: absolute
        z-index: 10
        width: 6rem
        @media only screen and (max-width 800px)
          width: 100%
  .contentTwo
    background-color #f5f4f4
    position relative
    .pc-title
      margin-right: 50px
    .content-top
      position absolute
      top -.6rem
      @media only screen and (max-width 1200px)
        position: static
      .content-top-img
        margin-right 0
      .mobile-title
        margin-bottom: 30px
        //background url("../../assets/images/aboutUs/about_img2.jpg") no-repeat
    .content-bt
      padding-top: 350px
      padding-bottom: .5rem
      width 10.6rem
      margin-top: 0
      line-height: 2;
      font-size: 0.18rem;
      @media only screen and (max-width 1200px)
        padding-top: 30px
        width: 100%
  .contentThree
    padding 1.3rem 0
    @media only screen and (max-width 1200px)
      margin-top: 30px
    .pc-title
      margin-left: 50px
    .content-top
      .content-top-img
        background url("../../assets/images/aboutUs/about_img3.jpg") no-repeat
    .flex-dir
      display: flex
      align-items center
      justify-content center
      flex-direction column
      .text1
        color #2c3a44
        font-size: .34rem
      .line
        width: 20px
        border-top: 1px solid #2c3a44
        margin: .3rem 0 .5rem
      .text2
        color #0d3780
        font-size: .34rem
      .content-bt
        text-align: center
        font-size: 16px
        color #2c3a44
        line-height: 2
        width: 11.24rem
        margin-bottom: .5rem
        @media only screen and (max-width 1200px)
          width: 100%
      .img-content
        width: 11rem
        @media only screen and (max-width 1200px)
          width: 100%
  .about-team
    background-color: #f5f5f5
    padding: 1.2rem 0 2.7rem
    display flex
    align-items center
    justify-content center
    flex-direction column
    @media only screen and (max-width 1200px)
      padding: 50px 15px
    .about-title
      font-size: .34rem
      color #0d3780
      margin-bottom: .74rem
      @media only screen and (max-width 1200px)
        font-size: 28px
    .team-uls
      display flex
      align-items center
      justify-content center
      @media only screen and (max-width 1200px)
        flex-direction column
      &.en-uls
        .list
          width: 240px
          @media only screen and (max-width 1300px)
            width: 200px
          @media only screen and (max-width 1200px)
            width: 100%
        .small-text
          font-size: 12px !important
      .list
        width: 2rem
        /*display flex*/
        /*align-items center*/
        /*justify-content center*/
        /*flex-direction column*/
        position: relative
        @media only screen and (max-width 1200px)
          position: static
          width: 100%
          margin-bottom: 30px
        .img-box
          width: 160px
          margin: 0 auto
          @media only screen and (max-width 1200px)
            width: 120px
        .big-text
          position: absolute
          bottom: -0.88rem
          font-size: .24rem
          text-align: center
          width: 100%
          margin: .24rem auto .28rem
          @media only screen and (max-width 1200px)
            position: static
        .small-text
          position: absolute
          top: 230px
          font-size: 16px
          line-height: 2
          text-align: center
          @media only screen and (max-width 1200px)
            position: static
      .last-list
        width: 3rem
        @media only screen and (max-width 1200px)
          width: 100%
      .list-add
        position: relative
        top: 0
        margin: 0 .5rem
        @media only screen and (max-width 1200px)
          display none
        .img-add
          width: 50px
</style>

<script>
import { i18n } from '../../i18n/config'
export default{
  data () {
    return {}
  },
  computed: {
    lang () {
      return i18n.locale
    }
  }
}
</script>
