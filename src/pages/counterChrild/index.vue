<template>
  <div class="counter-warp">
      counter insider
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
</style>
