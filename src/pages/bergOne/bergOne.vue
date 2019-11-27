<template>
  <div class="berg-one">
    <div class="banner">
      <div class="banner-img"></div>
      <div class="wrap">
        <div class="banenr-ct">
          <h3 v-html="$t('bergOne.text1')"></h3>
          <p class="banner-desc">{{$t('bergOne.text2')}}</p>
          <a href="https://www.pksport.ai/#/boGe" class="banner-btn" target="_blank">
            <span>{{$t('bergOne.text3')}}</span>
            <div class="sanjiao-arrow"></div>
            <div class="icon-arrow"></div>
          </a>
        </div>
      </div>
    </div>
    <div class="content-one">
      <div class="text1">{{$t('bergOne.text12')}}</div>
      <div class="text2">{{$t('bergOne.text13')}}</div>
      <div class="img-box">
        <img src="../../assets/images/bergOne/Bogle001_img2_cn.png" alt="" v-show="lang === 'CN'">
        <img src="../../assets/images/bergOne/Bogle001_img2_EN.png" alt="" v-show="lang === 'EN'">
      </div>
    </div>
    <div class="content-two">
      <div class="text1">{{$t('bergOne.text14')}}</div>
      <div class="text2">{{$t('bergOne.text15')}}</div>
      <div class="text-c">{{$t('bergOne.text17')}}</div>
      <a href="https://www.pksport.ai/#/boGe" class="content-two-btn" target="_blank">{{$t('bergOne.text16')}}</a>
    </div>
    <div class="content-three">
      <div class="left-img"><img src="../../assets/images/bergOne/Bogle001_img1.png" alt=""></div>
      <div class="right">
        <div class="text1">{{$t('bergOne.text18')}}</div>
        <div class="text2">{{$t('bergOne.text19')}}</div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text28')}}</div>
          <div>{{$t('bergOne.text20')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text29')}}</div>
          <div>{{$t('bergOne.text21')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text30')}}</div>
          <div>{{$t('bergOne.text22')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text31')}}</div>
          <div>{{$t('bergOne.text23')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text32')}}</div>
          <div>{{$t('bergOne.text24')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text33')}}</div>
          <div>{{$t('bergOne.text25')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text34')}}</div>
          <div>{{$t('bergOne.text26')}}</div>
        </div>
        <div class="desc-flex">
          <div class="num">{{$t('bergOne.text35')}}</div>
          <div>{{$t('bergOne.text27')}}</div>
        </div>
      </div>
    </div>
    <div class="content-four">
      <div class="title">{{$t('community.text31')}}</div>
      <ul class="img-uls">
        <li class="img-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/Bogle001_img3.png" alt="">
          </div>
          <p>{{$t('community.text32')}}</p>
        </li>
        <li class="img-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/Bogle001_img8.png" alt="">
          </div>
          <p>{{$t('community.text34')}}</p>
        </li>
        <li class="img-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/Bogle001_img4.png" alt="">
          </div>
          <p>{{$t('community.text36')}}</p>
        </li>
        <li class="img-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/Bogle001_img7.png" alt="">
          </div>
          <p>{{$t('community.text38')}}</p>
        </li>
        <li class="img-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/Bogle001_img6.png" alt="">
          </div>
          <p>{{$t('community.text40')}}</p>
        </li>
        <li class="img-list">
          <div class="img-box">
            <img src="../../assets/images/newImage2/Bogle001_img5.png" alt="">
          </div>
          <p>{{$t('community.text42')}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { i18n } from '../../i18n/config'
export default {
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
img
  width: 100%
  display: block
.desc-flex
  display flex
  line-height: 2.3;
  color: #2c3a44;
  font-size: 16px;
  width: 6.8rem;
  @media screen and (max-width: 1200px)
    width: 100%
    font-size: 14px
  .num
    margin-right: 5px
.berg-one
  .banner
    @media screen and (max-width: 1200px)
      height auto
    .banner-img
      @media screen and (max-width: 1800px)
        width: 1200px
      @media screen and (max-width: 1200px)
        width: 100%;
        position: relative;
        height: 7.2rem;
    .banenr-ct
      position: relative
      z-index: 10
      width auto
      height: 6.8rem
      display flex
      flex-direction column
      justify-content center
      @media screen and (max-width: 1300px)
        width: 100%
        height auto
        padding-top: 20px
        padding-left: 0
      .banner-desc
        width: 9.5rem
        font-size: 0.16rem;
        line-height: 2;
        @media screen and (max-width: 1200px)
          width: 100%
          text-align: center
          font-size: 14px
      h3
        line-height: 1.5;
        font-size: 0.6rem;
        color: #0d3780;
        margin-bottom: 0.2rem;
        @media screen and (max-width: 1200px)
          text-align: center
          font-size: 20px
      .banner-btn
        width: 2.68rem
        height: .58rem
        display: flex
        align-items center
        justify-content center
        border: 2px solid #2C3A44
        color #2c3a44
        font-size: 16px
        margin-top: .6rem
        cursor pointer
        position: relative
        &:hover
          background-color: #2C3A44
          color #fff
          .sanjiao-arrow
            background: url("../../assets/images/newImages/sanjiao.png") no-repeat center / cover
          .icon-arrow
            display: none
        @media screen and (max-width: 1200px)
          width: 200px
          height: 40px
          margin: 30px auto
        .sanjiao-arrow
          width: 6px
          height: 10px
          margin-left: 10px
          background: url("../../assets/images/newImage2/arrow.png") no-repeat center / cover
    /*.icon-arrow
      position: absolute
      right: -33px
      width: 62px
      height: 10px
      background: url("../../assets/images/newImages/arrow-btn.png") no-repeat center / cover*/
    .banner-img
      background url("../../assets/images/newImages/berg_banner.png") no-repeat
  .content-one
    display: flex
    align-items center
    justify-content center
    flex-direction column
    padding: 1.3rem 0 1rem
    border-bottom: 1px solid #e6e6e6
    @media screen and (max-width: 1200px)
      padding: 50px 15px
    .text1
      font-size: .24rem
      color #0d3780
      @media screen and (max-width: 1200px)
        font-size: 20px
    .text2
      text-align: center
      font-size: .16rem
      color #2c3a44
      line-height: 2
      width: 8.7rem
      margin: .4rem 0 .6rem
      @media screen and (max-width: 1200px)
        font-size: 14px
        width: 100%
    .img-box
      width: 8.24rem
      @media screen and (max-width: 1200px)
        width: 100%
  .content-two
    display: flex
    align-items center
    justify-content center
    flex-direction column
    padding: 1.5rem 0 1.48rem
    @media screen and (max-width: 1200px)
      padding: 50px 15px
    .text-c
      line-height: 2
      font-size: .16rem
      color #2c3a44
      text-align: center
      margin-bottom: .9rem
      width: 10.6rem
      @media screen and (max-width: 1200px)
        font-size: 14px
    .text1
      font-size: .24rem
      color #0d3780
      @media screen and (max-width: 1200px)
        font-size: 20px
    .text2
      font-size: .16rem
      line-height: 2
      color #2c3a44
      margin-top: .4rem
      text-align: center
      @media screen and (max-width: 1200px)
        font-size: 14px
        width: 100%
    .content-two-btn
      width: 2.5rem
      height: .44rem
      border: 1px solid #0d3780
      font-size: 14px
      color #0d3780
      display: flex
      align-items center
      justify-content center
      cursor pointer
      &:hover
        color #fff
        background-color: #0d3780
      @media screen and (max-width: 1200px)
        width: 200px
        height: 46px
  .content-three
    display flex
    align-items center
    background-color: #f5f4f2
    @media screen and (max-width: 1200px)
      flex-direction column
    .left-img
      height: 100%
      width: 50%
      @media screen and (max-width: 1200px)
        width: 100%
      img
        width: 100%
        height: 100%
    .right
      padding-left 90px
      // padding: 30px 0 30px 90px
      flex 1
      display flex
      justify-content center
      flex-direction column
      @media screen and (max-width: 1200px)
        padding: 50px 20px
      .text1
        color #0d3780
        font-size: .24rem
        @media screen and (max-width: 1200px)
          font-size: 20px
      .text2
        color #2c3a44
        font-size: .18rem
        line-height: 2
        margin: .58rem 0 .2rem
        @media screen and (max-width: 1200px)
          font-size: 14px
      .desc
        line-height: 2.3
        color #2c3a44
        font-size: 16px
        width: 6.8rem
        @media screen and (max-width: 1200px)
          width: 100%
          font-size: 14px
  .content-four
    display flex
    align-items center
    justify-content center
    flex-direction column
    padding: 1.61rem 0 1.76rem
    .title
      font-size: .34rem
      color #0d3780
      margin-bottom: .8rem
    .img-uls
      display: flex
      align-items center
      flex-wrap wrap
      width: 10.5rem
      @media screen and (max-width: 1200px)
        width: 482px
      @media screen and (max-width: 500px)
        width: 100%
        flex-direction column
      .img-list
        margin-right: 2rem
        &:nth-child(3n)
          margin-right: 0
        @media screen and (max-width: 1200px)
          margin-right: 50px
          &:nth-child(3n)
            margin-right: 50px
          &:nth-child(2n)
            margin-right: 0
        @media screen and (max-width: 500px)
          margin: 0
          &:nth-child(3n),&:nth-child(2n)
            margin-right: 0
        .img-box
          width: 2.16rem
          @media screen and (max-width: 1200px)
            width: 200px
          @media screen and (max-width: 500px)
            width: 100%
        p
          text-align: center
          margin: .2rem 0 .8rem
          font-size: .16rem
          color #2c3a44
          @media screen and (max-width: 500px)
            font-size: 14px
            margin: 10px 0 40px
</style>
