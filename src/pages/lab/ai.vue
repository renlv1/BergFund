<template>
  <div class="labAI">
    <div class="labAI-banner"></div>
    <div class="labAI-content wrap">
      <div class="labAI-content-top">
        <h3>{{$t('labAi.text1')}}</h3>
      </div>
      <div class="labAI-content-box">
        <p class="top-subtitle">{{$t('labAi.text2')}}</p>
        <!--<h3 class="list-title"><i>{{$t('labAi.text3')}}</i>{{$t('labAi.text3_1')}}</h3>-->
        <ul>
          <li>
            <h3>1.{{$t('labAi.text4')}}</h3>
            <p>{{$t('labAi.text5')}}</p>
            <div class="img-box-ai">
              <img src="../../assets/images/newImages/ai_img_cn.svg" alt="" v-show="lang === 'CN'">
              <img src="../../assets/images/newImages/ai_img_en.svg" alt="" v-show="lang === 'EN'">
            </div>
            <!--<div class="li-img-box" v-show="lang === 'CN'">-->
              <!--<span>{{$t('labAi.text12')}}</span>-->
              <!--<div class="imgbox-cn">-->
                <!--<img src="../../assets/images/lab/lab_ai_img.svg" alt="">-->
              <!--</div>-->
              <!--&lt;!&ndash;<div class="li-img" :style="{backgroundImage: lang === 'CN' ? 'url('+cnImg+')': 'url('+enImg+')'}"></div>&ndash;&gt;-->
            <!--</div>-->
            <!--<div class="imgbox-en" v-show="lang === 'EN'">-->
              <!--<img src="../../assets/images/lab/lab_ai_img_en.png" alt="">-->
            <!--</div>-->
          </li>
          <li>
            <h3>2.{{$t('labAi.text6')}}</h3>
            <p>{{$t('labAi.text7')}}</p>
          </li>
          <li>
            <h3>3.{{$t('labAi.text8')}}</h3>
            <p>{{$t('labAi.text9')}}</p>
          </li>
          <li>
            <h3>4.{{$t('labAi.text10')}}</h3>
            <p>{{$t('labAi.text11')}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$fontImp = #4e6778
img
  width: 100%
  display: block
.labAI
  .labAI-banner
    height 3.6rem
    background url("../../assets/images/newImage2/ai_banner.png") no-repeat
    background-size cover
    @media screen and (max-width: 767px)
      height 150px
  .labAI-content
    &.wrap
      @media screen and (max-width: 767px)
        padding-left 0
    .labAI-content-top
      margin-top -.3rem
      @media screen and (max-width: 767px)
        margin-top 40px
      h3
        width 7.46rem
        padding-top .08rem
        font-size .34rem
        padding-left .5rem
        padding-right .5rem
        margin-bottom .3rem
        background-color #fff
        color: #0d3780;
        @media screen and (max-width: 767px)
          width 100%
          font-size 25px
    .labAI-content-box
      width 10.8rem
      padding-left .5rem
      margin-bottom: 1.1rem
      box-sizing content-box
      @media screen and (max-width: 767px)
        width 100%
        margin-left 0
        box-sizing border-box
        margin-top 30px
      .top-subtitle
        font-size .18rem
        line-height 2
        margin-bottom 1rem
        @media screen and (max-width: 767px)
          font-size 16px
      .img-box-ai
        width: 9.77rem
        margin: .6rem 0 .7rem
        @media screen and (max-width: 1200px)
          width: 100%
      .list-title
        font-size .34rem
        @media screen and (max-width: 767px)
          font-size 25px
        i
          color $fontImp
      ul
        width 10.6rem
        margin-top .4rem
        @media screen and (max-width: 767px)
          width 100%
          margin-top 30px
        li
          margin-bottom .45rem
          @media screen and (max-width: 767px)
            margin-bottom 50px
          h3
            font-size .24rem
            margin-bottom .15rem
            color $fontImp
            @media screen and (max-width: 767px)
              font-size 20px
              margin-bottom 20px
          p
            line-height 2
            font-size .18rem
            @media screen and (max-width: 767px)
              font-size 16px
          .imgbox-en
            width: 10.62rem
            margin-top: 30px
            @media screen and (max-width: 767px)
              width: 100%
          .li-img-box
            height 3rem
            border 1px dashed #ccc
            padding-left .4rem
            padding-top .25rem
            margin-top .3rem
            @media screen and (max-width: 767px)
              margin-top 30px
              height auto
              padding: 20px 10px
            span
              display block
              font-size .24rem
              @media screen and (max-width: 767px)
                font-size 18px
            .imgbox-cn
              width: 9.95rem
              @media screen and (max-width: 767px)
                width: 100%
            .li-img
              width 9.94rem
              height 2rem
              background url("../../assets/images/lab/lab_ai_img.svg") no-repeat
              background-size cover!important
              @media screen and (max-width: 767px)
                width 100%
                height 70px
                margin-top 20px
</style>

<script>
import { i18n } from '../../i18n/config'
export default{
  data () {
    return {
      cnImg: require('../../assets/images/lab/lab_ai_img.svg'),
      enImg: require('../../assets/images/lab/lab_ai_img_en.png')
    }
  },
  computed: {
    lang () {
      return i18n.locale
    }
  }
}
</script>
