 //导入Vue包
 import Vue from 'vue'
 //导入app
 import app from './App.vue'
 
 import './lib/css/mui.min.css'
 
 //按需导入组件
import { Header,Tabbar,TabItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import 'mint-ui/lib/style.css'
 
 var vm = new Vue({
 	el:'#app',
 	render: c => c(app),
 })
