<template>
  <div class="community">
    <div class="community-banner" ref="communityBanner">
      <div class="wrap">
        <p><span>{{$t('community.text1')}}</span>{{$t('community.text2')}}</p>
      </div>
    </div>
    <div class="blankDiv" v-if="fixedFlag"></div>
    <div class="community-nav" :class="{fixedNav: fixedFlag}">
      <ul class="wrap">
        <li :class="{activeLi: navFlag === index + 1}" v-for="(item, index) in $t('community.navList')" :key="index" @click="changeNav(index)"><span class="nav-name">{{item.name}}</span></li>
      </ul>
    </div>
    <div class="contentThree" ref="contentThree">
      <h3 class="title">{{$t('community.text3')}}</h3>
      <p class="subtitle">{{$t('community.text44')}}</p>
      <h4 class="list-title">{{$t('community.text45')}}</h4>
      <ul>
        <li>
          <h3><i>01</i>{{$t('community.text4')}}</h3>
          <p>{{$t('community.text5')}}</p>
        </li>
        <li>
          <h3><i>02</i>{{$t('community.text6')}}</h3>
          <p>{{$t('community.text7')}}</p>
        </li>
        <li>
          <h3><i>03</i>{{$t('community.text8')}}</h3>
          <p>{{$t('community.text9')}}</p>
        </li>
        <li>
          <h3><i>04</i>{{$t('community.text10')}}</h3>
          <p>{{$t('community.text11')}}</p>
        </li>
      </ul>
    </div>
    <div class="contengTwo-m">
      <div class="two-bg"></div>
      <div class="contengTwo-comm" ref="contentOne">
        <div class="contengTwo-bg">
          <img src="../../assets/images/newImage2/service_img2.png" alt="">
        </div>
        <ul class="gaocheng-bg">
          <li>
            <h3>{{$t('community.text46')}}</h3>
            <p>{{$t('community.text47')}}</p>
          </li>
          <li>
            <h3>{{$t('community.text48')}}</h3>
            <p>{{$t('community.text49')}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-four" ref="contentTwo">
      <div class="text1">{{$t('community.text50')}}</div>
      <div class="text2">{{$t('community.text51')}}</div>
    </div>
    <div class="content-five" ref="partnerWrap">
      <div class="text1">{{$t('community.text52')}}</div>
      <div class="text2">{{$t('community.text53')}}</div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
$color0d = #0d3780
img
  width: 100%
  display block
.community
  .community-banner
    height 3.69rem
    background url("../../assets/images/newImage2/service_banner.png") no-repeat
    background-size cover
    background-position center
    @media only screen and (max-width 1200px)
      height: 200px
    .wrap
      height 100%
      display flex
      align-items center
      p
        width 7.2rem
        font-size 16px
        color #fff
        @media only screen and (max-width 1200px)
          font-size: 12px
        span
          font-size .44rem
          @media only screen and (max-width 1200px)
            font-size: 28px
  .blankDiv
    height .6rem
  .community-nav
    background-color #fff
    box-shadow 0 2px 10px 0 rgba(0,0,0,.1)
    &.fixedNav
      width 100%
      position fixed
      z-index: 1000
      top 0
      left 0
    .wrap
      padding 0 2.12rem
      display flex
      align-items center
      justify-content space-between
      @media only screen and (max-width 1200px)
        padding: 0
      li
        width 3rem
        height .6rem
        display flex
        align-items center
        justify-content center
        position relative
        font-size .2rem
        cursor pointer
        user-select none
        @media only screen and (max-width 1200px)
          font-size: 12px
          height: 45px
          flex: 1
        .nav-name
          display flex
          align-items center
          justify-content center
          height: 100%
        &.activeLi
          color $color0d
          .nav-name
            border-bottom: 3px solid $color0d
  .contentOne
    padding 1.5rem 0
    @media only screen and (max-width 1200px)
      padding: .8rem 0
    h3
      text-align center
      font-size .34rem
      color $color0d
      margin-bottom .7rem
    ul
      width 1200px
      margin 0 auto
      font-size 14px
      overflow hidden
      min-height 220px
      display flex
      @media only screen and (max-width 1200px)
        width: 100%
        padding: 0 15px
        flex-wrap wrap
      li
        width 25%
        height 220px
        text-align center
        border 1px solid #ccc
        border-right none
        @media only screen and (max-width 1200px)
          width: 50%
          height: 200px
          &:nth-child(even)
            border-right: 1px solid #ccc
          &:nth-child(1),&:nth-child(2)
            border-bottom: none
        @media only screen and (max-width 768px)
          margin-bottom: 30px
          width: 100%
          height auto
          border-bottom: 1px solid #ccc !important
          &:nth-child(1),&:nth-child(3)
            border-right: 1px solid #ccc
        &:last-child
          border-right 1px solid #ccc
        h4
          height 44px
          line-height 44px
          border-bottom 1px solid #ccc
        p
          padding 0 .25rem
          padding-top .25rem
          line-height 2
          border-top none
          @media only screen and (max-width 768px)
            padding: 10px 10px 30px
  .contentTwo
    padding-top 100px
    padding-bottom .9rem
    background-color #f5f4f4
    .title
      font-size .34rem
      color $color0d
      text-align center
      margin-bottom .3rem
      @media only screen and (max-width 1200px)
        font-size: 20px
        margin-bottom: 20px
        padding 0 20px
    .subtitle
      font-size 16px
      width 11rem
      margin 0 auto
      @media only screen and (max-width 1200px)
        width: 100%
        padding: 0 20px
    .wrap
      display flex
      align-items center
      justify-content space-between
      margin-top .95rem
      @media only screen and (max-width 1200px)
        flex-direction column
        justify-content center
        height auto
      ul
        width 6.5rem
        @media only screen and (max-width 1200px)
          width: 100%
          padding-bottom: 30px
        li
          &:first-child
            margin-bottom .5rem
          h3
            color $color0d
            font-size .2rem
            margin-bottom 20px
            @media only screen and (max-width 1200px)
              font-size: 16px
          p
            font-size 16px
            line-height 1.5
      .contentTwo-img
        width 720px
        @media only screen and (max-width 760px)
          width: 100%
  .contengTwo-m
    position: relative
  .contengTwo-comm
    display flex
    align-items center
    padding-bottom: 1.14rem
    margin-left: 2rem
    @media only screen and (max-width 850px)
      flex-direction column
      margin-left: 0
    .contengTwo-bg
      width: 6rem
      margin-right: -1.66rem
      position: relative
      z-index: 10
      @media only screen and (max-width 850px)
        width: 80%
        margin-right: 0
        margin-bottom: 50px
    .gaocheng-bg
      width: 12.86rem
      height: 5.6rem
      background: url("../../assets/images/newImage2/service_img1.png") no-repeat center / cover
      padding-left: 2.54rem
      display: flex
      flex-direction column
      justify-content center
      @media only screen and (max-width 850px)
        width: 100%
        height auto
        padding: 1rem .8rem
      li
        margin-bottom .9rem
        &:last-child
          margin-bottom 0
        h3
          font-size .34rem
          position relative
          margin-bottom .3rem
          @media screen and (max-width: 767px)
            font-size 20px
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
              left: -30px
          i
            color $fontImp
        p
          width: 7.22rem
          font-size .16rem
          color #293a45
          line-height 2
          @media screen and (max-width: 850px)
            font-size 14px
            width: 100%
  .contentThree
    width 1200px
    margin 0 auto
    padding-top 1.6rem
    padding-bottom: 2.2rem
    font-size 16px
    @media only screen and (max-width 1200px)
      width: 100%
      padding: 80px 20px
    .title
      text-align center
      font-size .34rem
      color $color0d
      margin-bottom .3rem
      @media only screen and (max-width 1200px)
        font-size: 18px
    .subtitle
      text-align center
      line-height 2
      margin-bottom .6rem
      @media only screen and (max-width 1200px)
        font-size: 14px
    .list-title
      height 1.4rem
      display flex
      align-items center
      justify-content center
      border-top 1px solid #ccc
      border-bottom 1px solid #ccc
      font-size .34rem
      color #2c3a44
      @media only screen and (max-width 1200px)
        font-size: 20px
        height: 100px
        line-height: 2
    ul
      overflow hidden
      li
        width 50%
        float left
        padding-left .2rem
        padding-top .5rem
        height 200px
        border-bottom 1px solid #ccc
        &:nth-child(odd)
          border-right 1px solid #ccc
        @media only screen and (max-width 1200px)
          padding-left: 20px
        @media only screen and (max-width 768px)
          float none
          width: 100%
          height auto
          padding: 40px 20px 5px
          &:nth-child(odd)
            border-right none
        h3
          display flex
          align-items center
          font-size 20px
          margin-bottom .15rem
          @media only screen and (max-width 1200px)
            font-size: 16px
          i
            display flex
            align-items center
            justify-content center
            width 34px
            height 34px
            margin-right .2rem
            color #fff
            background-color #4e6778
        p
          width 5.1rem
          font-size 14px
          line-height 2
          @media only screen and (max-width 1200px)
            width auto
            padding-right: 10px
            padding-bottom: 20px
    .btnBox
      border-bottom 1px solid #ccc
      text-align center
      padding-top .8rem
      padding-bottom: .5rem
      p
        font-size 14px
        margin-bottom 20px
      button
        display inline-block
        width 250px
        height 48px
        background-color transparent
        border 1px solid #4e6778
        font-size 16px
        cursor pointer
        user-select none
        @media only screen and (max-width 1200px)
          width: 180px
          height: 36px
        &:active
          opacity .6
  .partner
    width 13rem
    margin 0 auto
    @media only screen and (max-width 1440px)
      width 100%
    .title
      text-align center
      font-size .34rem
      margin-bottom .5rem
      color $color0d
    ul
      font-size 14px
      overflow hidden
      li
        float left
        width 33.3%
        text-align center
        padding 0 .5rem
        margin-bottom 1.1rem
        @media only screen and (max-width 768px)
          width 100%
        &:nth-child(1),&:nth-child(4)
          margin-left 0
        img
          display block
          width 144px
          margin: 0 auto .2rem
        h4
          margin-bottom .4rem
        p
          line-height 2

  .content-four
    border-top: 1px solid #e6e6e6
    display flex
    align-items center
    justify-content center
    flex-direction column
    padding: 1.9rem 0 1.74rem
    .text1
      font-size: .34rem
      color #0d3780
      margin-bottom: .5rem
      @media only screen and (max-width 1200px)
        font-size: 20px
        padding: 0 15px
        text-align: center
    .text2
      width: 8.5rem
      text-align: center
      font-size: 16px
      color #2c3a44
      line-height: 2
      @media only screen and (max-width 1200px)
        width: 100%
        font-size: 14px
        padding: 0 15px
  .content-five
    display flex
    align-items center
    justify-content center
    flex-direction column
    padding: 1.3rem 0 1.1rem
    background-color: #f5f4f2
    .text1
      font-size: .34rem
      color #0d3780
      @media only screen and (max-width 1200px)
        font-size: 20px
    .text2
      font-size: 16px
      color #2c3a44
      line-height: 2
      margin: .4rem 0 .82rem
      @media only screen and (max-width 1200px)
        font-size: 14px
        padding: 0 15px
    .btn-cont
      width: 2.5rem
      height .44rem
      display: flex
      align-items center
      justify-content center
      font-size: 14px
      color #808080
      border: 1px solid #3c505f
      @media only screen and (max-width 1200px)
        width: 200px
        height: 44px
        padding: 10px 30px
</style>

<script>
export default{
  data () {
    return {
      fixedFlag: false,
      navFlag: 1,
      clickFlag: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < 377) { // 导航吸附顶部
        this.navFlag = 1
        this.fixedFlag = false
      }
    })
  },
  methods: {
    handleScroll () {
      if (this.$route.path === '/community') {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (this.$refs.communityBanner) {
          let height1 = this.$refs.communityBanner.offsetHeight
          let height2 = height1 + this.$refs.contentOne.offsetHeight + this.$refs.contentThree.offsetHeight
          let height3 = height2 + this.$refs.contentTwo.offsetHeight
          if (scrollTop >= height1 && scrollTop < height2) {
            this.navFlag = 1
          } else if (scrollTop >= height2 && scrollTop < height3) {
            this.navFlag = 2
          } else if (scrollTop >= height3) {
            this.navFlag = 3
          }
        }
        if (window.innerWidth < 1200) {
          if (scrollTop >= 200) { // 导航吸附顶部
            this.$root.Bus.$emit('hideNav', false) // 隐藏导航栏
            this.fixedFlag = true
          } else {
            this.$root.Bus.$emit('hideNav', true) // 隐藏导航栏
            this.fixedFlag = false
          }
        } else {
          if (scrollTop >= 377) { // 导航吸附顶部
            this.$root.Bus.$emit('hideNav', false) // 隐藏导航栏
            this.fixedFlag = true
          } else {
            this.$root.Bus.$emit('hideNav', true) // 隐藏导航栏
            this.fixedFlag = false
          }
        }
      } else {
        this.$root.Bus.$emit('hideNav', true)
      }
    },
    changeNav (index) {
      this.$root.Bus.$emit('hideNav', false) // 隐藏导航栏
      // this.navFlag = index + 1
      let divTop
      let flagTime = 0
      function timeFun () {
        const timer = setInterval(function () {
          if (document.body.scrollTop === 0) {
            flagTime++
          }
          // 判断  document.body.scrollTop === 0  的次数，次数多就是pc 端，
          if (flagTime > 3) {
            if (document.documentElement.scrollTop < divTop) {
              document.documentElement.scrollTop += 50
              let t1 = document.documentElement.scrollTop += 50
              let t2 = document.documentElement.scrollTop
              if (t1 > t2) {
                clearInterval(timer)
              }
              if (Math.abs(divTop - document.documentElement.scrollTop) < 50) {
                clearInterval(timer)
              }
            } else if (document.documentElement.scrollTop > divTop) {
              document.documentElement.scrollTop -= 50
              if (Math.abs(divTop - document.documentElement.scrollTop) < 50) {
                clearInterval(timer)
              }
            }
          } else {
            if (document.body.scrollTop < divTop) {
              document.body.scrollTop += 50
              if (Math.abs(divTop - document.body.scrollTop) < 50) {
                clearInterval(timer)
              }
            } else if (document.body.scrollTop > divTop) {
              document.body.scrollTop -= 50
              if (Math.abs(divTop - document.body.scrollTop) < 50) {
                clearInterval(timer)
              }
            }
          }
        }, 10)
      }
      if (index === 0) {
        divTop = this.$refs.contentThree.offsetTop
        timeFun()
      } else if (index === 1) {
        divTop = this.$refs.contentTwo.offsetTop
        timeFun()
      } else if (index === 2) {
        divTop = this.$refs.partnerWrap.offsetTop
        timeFun()
      }
    }
  }
}
</script>
