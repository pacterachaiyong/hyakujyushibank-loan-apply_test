import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import * as storeInit from './store';

import dayjs from 'dayjs'
// import VueDraggable from 'vue-draggable'
import { get, isEmpty } from 'lodash'
// 自定义图标需要放在element后面引入,否则会被覆盖
// import '@/assets/icon_crcc/iconfont.css'
// import '@/assets/icon_tb/iconfont.css'
// import '@/assets/icon_aly/iconfont.css'
// import '@/assets/icon_tj/iconfont.css'
// import '@/assets/iconfont-szyd/style.css'
//注册自定义指令
// import '@/libs/directives'

import VueClickOutside from 'vue-click-outside'

// vuex
const store = storeInit.initVueXStore(Vue);
// Vue.use(VueClickOutside) //注册v-clickoutside指令
Vue.directive('click-outside', VueClickOutside)
// Vue.use(VueDraggable)
Vue.use(ElementUI, { size: 'normal', zIndex: 2000 })
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$get = get
Vue.prototype.$isEmpty = isEmpty

Vue.filter('DateFormat', date => {
  if (!date) {
    return ''
  }
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
})
Vue.filter('DayFormat', date => {
  if (!date) {
    return ''
  }
  return dayjs(date).format('YYYY-MM-DD')
})

Vue.filter('moneyFormat', money => {
  if (!money) {
    return ''
  }
  return String(money).replace(/(?=(\B)(\d{3})+$)/g, ',')
})

Vue.filter('nullFormat', str => {
  alert(str);
  if (str == "") {
    return '-'
  }
  return str
})

new Vue({
  //@ts-ignore
  router,
  //@ts-ignore
  store,
  render: h => h(App)
}).$mount('#app')
