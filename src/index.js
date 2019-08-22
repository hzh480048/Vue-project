 //导入Vue包
 import Vue from 'vue'
 //导入app
 import app from './App.vue'
 
 import './lib/css/mui.min.css'
 import './lib/css/icons-extra.css'
 
 //导入自制router。js
 import router from'./router.js'
 
 //导入路由包
 import VueRouter from 'vue-router'
 Vue.use(VueRouter)
 
 import VueResoure from 'vue-resource'
 Vue.use(VueResoure)
 
 
Vue.http.options.root ='http://www.liulongbin.top:3005'
Vue.http.options.emulateJOSM = true;

import momemt from 'moment'
Vue.filter('dataFormt',function(dataStr,pattern = 'YYYY-MM-DD HH:MM:SS'){
	return momemt(dataStr).format(pattern)
})
 
 //按需导入组件,lazyload 小图标出不来
//import { Header,Tabbar,TabItem,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui'
//Vue.component(Header.name, Header)
//Vue.component(Tabbar.name, Tabbar);
//Vue.component(TabItem.name, TabItem);
//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);
//Vue.component(Button.name, Button);
//Vue.use(Lazyload)
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

 
 var vm = new Vue({
 	el:'#app',
 	render: c => c(app),
 	router
 })
