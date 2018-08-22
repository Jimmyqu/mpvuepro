<template>
  <div class="counter-warp">
    <div class="list-container" v-for="item in [1,2,3,4,5,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0] " :key="item">
      <div class="list-l">
      </div>
      <div class="list-r">
        <p>人气:{{item}}</p>
        <text class="title">游戏名称</text>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex


export default {
    data:function () {
      return {

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

  },
  methods: {

  }
}
</script>

<style scoped>
  .counter-warp{
    padding: 30rpx 0;
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
