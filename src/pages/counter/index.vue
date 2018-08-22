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


      <div  class="item-container" :style="{height:(c_height)+'rpx'}">
        <div class="y-scroll">
          <p>新游推荐</p>
          <div class="y-scroll-container">
              <div class="y-scroll-item" :key="item" v-for="item in [1,2,3,4,5,6,7,8]">
              </div>
          </div>
        </div>
        <a href="/pages/counterChrild/main" class="home">去往子页面</a>
        <button class='btn' :disabled="col1" @click='handlerClick1' >{{col1?"已":''}}收藏1</button>
        <button class='btn' :disabled="col2" @click='handlerClick2' >{{col2?"已":''}}收藏2</button>

        <div class="list-container" v-for="item in [1,2,3,4,5,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0] " :key="item">
          <div class="list-l">
          </div>
          <div class="list-r">
            <p>人气:{{item}}</p>
            <text class="title">游戏名称</text>
        </div>
        </div>
      </div>





  </div>
</template>

<script>
//  :style="{height:(c_height)+'rpx'}"
// Use Vuex
import store from './store'

export default {
    data:function () {
      return {
        col1:false,
        col2:false,
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
    handlerClick1(){
      store.commit('collection1')
      this.col1=true
    },
    handlerClick2(){
      store.commit('collection2')
      this.col2=true
    },
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
  .btn {
    width: 90%;
    margin-top: 30rpx;
    background-color: #FFCC00;
    color: #FFF;
  }
  .title{
    margin-top: 20rpx;
    color: rosybrown;
    font-size: 40rpx;
  }
.counter-warp {
  height: 100%;
}
.home {

  display: inline-block;
  margin: 20rpx;
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
  width: 95%;
  margin: 0 2.5%;
  border: 1px solid salmon;
  border-radius: 10rpx;

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
    width: 95%;
    margin: 0 2.5%;
    border: 1px solid salmon;
    border-radius: 10rpx;
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
  padding-left: 30rpx;
  padding-top: 10rpx;
}
.list-r p{
  font-size: 24rpx;
}
</style>
