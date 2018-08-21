import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

//app.json中配置navigate bar ,tab bar
 //每个页面下有main.json单独配置 navigate bar text color
