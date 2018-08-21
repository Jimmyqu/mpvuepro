<template>
  <div class="counter-warp">
    <!--<p>Vuex counter：{{ count }}</p>-->
    <!--<p>-->
      <!--<button @click="increment">+</button>-->
      <!--<button @click="decrement">-</button>-->
    <!--</p>-->
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div  v-for="item in imgUrls" :key="index" >
          <swiper-item >
            <image :src="item" class="slide-image"  />
          </swiper-item>
        </div>
      </swiper>
    </div>


      <div :style="{height:(c_height)+'rpx'}" class="item-container">
        <div class="y-scroll">
          <p>新游推荐</p>
          <div class="y-scroll-container">
              <div class="y-scroll-item" :key="item" v-for="item in [1,2,3,4,5,6,7,8]">

              </div>
          </div>
        </div>

        <div class="list-container" v-for="item in [1,2,3,4,5,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0] " :key="item">
          <div class="list-l">

          </div>
          <div class="list-r">
            <p>{{item}}</p>
            <p>游戏名称</p>
          </div>
        </div>
        <a href="/pages/counterChrild/main" class="home">子页面</a>
      </div>





  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
    data:function () {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 900,
        circular: true,
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        c_height:0
      }
    },
  mounted(){
    wx.getSystemInfo({
      success: (res)=> {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('windowHeight=' + res.windowHeight);
        console.log('screenHeight=' + res.screenHeight);
        console.log('width=' + res.windowWidth);
        console.log('width=' + res.pixelRatio);

        this.c_height=res.windowHeight+100
        console.log('c_height='+this.c_height)
      }
    })

  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
}
.home {
  display: inline-block;
  margin: 0 auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.page__bd{
  height:300rpx;
  width: 95%;
  margin: 20rpx auto;
}
.item-container{
  overflow: scroll;
}
image{
  width: 100%;
}
.y-scroll{

}
.y-scroll-container{
  overflow-x: scroll;
  white-space:nowrap;
}
  .y-scroll-item{
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rebeccapurple;
    margin: 5rpx 5rpx;
  }
  .list-container{
    display: flex;
    flex-direction: row;
    height: 120rpx;
  }
  .list-l{
    flex: 1;
    background-color: pink;
    margin-top: 2rpx;
  }
.list-r{
    flex: 4;
}
.list-r p{
  font-size: 24rpx;
}
</style>
