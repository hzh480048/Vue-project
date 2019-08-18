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
 
 
 //按需导入组件
import { Header,Tabbar,TabItem,Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import 'mint-ui/lib/style.css'
 
 var vm = new Vue({
 	el:'#app',
 	render: c => c(app),
 	router
 })
