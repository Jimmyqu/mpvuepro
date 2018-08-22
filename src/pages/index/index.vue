<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <text style="color: lawngreen;font-size: 30rpx">
      我的收藏
    </text>
    <div>
      <text style=" color: gray;font-size: 25rpx" v-if="collection.length===0">暂无收藏 去详细页添加收藏</text>
      <p style="color: crimson;font-size: 25rpx" v-for="item in collection" :key="item">{{item}}</p>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card'
import store from '../counter/store'

export default {
  data () {
    return {
      motto: 'plz type in ',
      userInfo: {},
    }
  },

  components: {
    card
  },
  computed:{
    collection () {
      return store.state.collection
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
                console.log(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
  swiper{
    height: 350rpx !important;
  }
  image{
    height: 100%;
    width: 100%;
  }
  swiper-item {
    display:block;
    overflow:hidden;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    transition-timing-function:ease;
    will-change:transform;
  }
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
