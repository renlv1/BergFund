<template>
  <div class="lab">
    <div class="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="banenr-ct">
          <h3 v-html="$t('labIndex.text1')"></h3>
          <p>{{$t('labIndex.text2')}}</p>
        </div>
      </div>
    </div>
    <div class="contentOne">
      <h3 class="title">{{$t('labIndex.text3')}}</h3>
      <ul>
        <li>
          <div class="li-img"></div>
          <h4>{{$t('labIndex.text4')}}</h4>
          <p>{{$t('labIndex.text5')}}</p>
        </li>
        <li>
          <div class="li-img"></div>
          <h4>{{$t('labIndex.text6')}}</h4>
          <p>{{$t('labIndex.text7')}}</p>
        </li>
        <li>
          <div class="li-img"></div>
          <h4>{{$t('labIndex.text8')}}</h4>
          <p>{{$t('labIndex.text9')}}</p>
        </li>
      </ul>
    </div>
    <div class="contengTwo-b">
      <div class="contengTwo-title">{{$t('labIndex.text14')}}</div>
      <ul class="contengTwo-ul">
        <li>{{$t('labIndex.text15')}}</li>
        <li>{{$t('labIndex.text16')}}</li>
        <li>{{$t('labIndex.text17')}}</li>
        <li>{{$t('labIndex.text18')}}</li>
      </ul>
    </div>
    <!--<div class="contengTwo">-->
      <!--<div class="contengTwo-bg"></div>-->
      <!--<ul>-->
        <!--<li>-->
          <!--<h3>{{$t('labIndex.text10')}}<i>{{$t('labIndex.text10_1')}}</i></h3>-->
          <!--<p>{{$t('labIndex.text11')}}</p>-->
        <!--</li>-->
        <!--<li>-->
          <!--<h3>{{$t('labIndex.text12')}}<i>{{$t('labIndex.text12_1')}}</i></h3>-->
          <!--<p>{{$t('labIndex.text13')}}</p>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$titleColor = #0d3780
$fontImp = #4e6778
.lab
  .banenr-ct
    margin-top: -70px
    @media screen and (max-width: 1200px)
      margin-top: 0
  .banner
    @media screen and (max-width: 767px)
      height autopx
    .banner-img
      background url("../../assets/images/newImage2/lab_banner.png") no-repeat
  .contentOne
    padding-top 1.3rem
    @media screen and (max-width: 767px)
      padding 30px 20px
    .title
      font-size .34rem
      margin-bottom 1rem
      text-align center
      @media screen and (max-width: 767px)
        font-size 25px
    ul
      border-top 1px solid #ccc
      border-bottom 1px solid #ccc
      display flex
      @media screen and (max-width: 767px)
        display block
      li
        flex 1
        border-right 1px solid #ccc
        font-size 0
        text-align center
        padding .9rem 0
        @media screen and (max-width: 767px)
          height auto
          margin-bottom 20px
          border-right none
        &:nth-child(2)
          .li-img
            width .88rem
            height .78rem
            background url("../../assets/images/lab/lab_img2.svg") no-repeat
            @media screen and (max-width: 767px)
              width 88px
              height 78px
        &:last-child
          border-right none
          @media screen and (max-width: 767px)
            margin-bottom 50px
          .li-img
            width .72rem
            height .76rem
            background url("../../assets/images/lab/lab_img3.svg") no-repeat
            @media screen and (max-width: 767px)
              width 72px
              height 76px
        .li-img
          display inline-block
          width .84rem
          height .88rem
          background url("../../assets/images/lab/lab_img1.svg") no-repeat
          background-size cover!important
          margin-bottom .4rem
          @media screen and (max-width: 767px)
            width 84px
            height 88px
            margin-bottom 20px
        h4
          font-size .24rem
          margin-bottom .4rem
          @media screen and (max-width: 767px)
            font-size 20px
            margin-bottom 20px
        p
          width 4rem
          margin 0 auto
          font-size .16rem
          line-height 2
          color #000
          @media screen and (max-width: 767px)
            width 100%
            font-size 14px
  .contengTwo
    position relative
    padding-top 2.3rem
    padding-bottom 1.9rem
    @media screen and (max-width: 1600px)
      height: 9rem
      width: 100%
    @media screen and (max-width: 767px)
      height auto
      padding-top 1rem
    .contengTwo-bg
      position absolute
      top .9rem
      left 0
      width 9.22rem
      height 6.16rem
      background url("../../assets/images/lab/lab_img4.jpg") no-repeat center
      background-size cover
      @media screen and (max-width: 767px)
        top 140px
        width 100%
    ul
      width 8.5rem
      position relative
      left 7rem
      @media screen and (max-width: 1600px)
        position: absolute
        width auto
        right: 0
      @media screen and (max-width: 767px)
        position: relative
        width 100%
        top 20px
        left 0
        padding-left 50px
        padding-right 20px
      li
        margin-bottom .9rem
        &:last-child
          margin-bottom 0
        h3
          font-size .34rem
          position relative
          margin-bottom .3rem
          @media screen and (max-width: 767px)
            font-size 25px
            margin-bottom 20px
          &:before
            content ''
            width .32rem
            height .32rem
            background url("../../assets/images/lab/check.png") no-repeat
            background-size cover
            position absolute
            top .1rem
            left -.4rem
            @media screen and (max-width: 767px)
              width 30px
              height 30px
              left -30px
          i
            color $fontImp
        p
          font-size .16rem
          color #293a45
          line-height 2
          @media screen and (max-width: 767px)
            font-size 14px
  .contengTwo-b
    padding: 1.48rem 0 1.52rem
    display flex
    flex-direction column
    align-items center
    justify-content center
    .contengTwo-title
      font-size: .24rem
      color #0d3780
      margin-bottom: .8rem
    .contengTwo-ul
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
</style>

<script>
export default{
  data () {
    return {
    }
  }
}
</script>
