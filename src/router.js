import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import Shopcart from './components/tabbar/Shopcart.vue'
import newlist from './components/newlist/newlist.vue'
import newinfo from './components/newlist/newinfo.vue'

var router = new VueRouter({
	routes:[
	{path:'/',component:Home},
	{path:'/home',component:Home},
	{path:'/member',component:Member},
	{path:'/search',component:Search },
	{path:'/shopcart',component:Shopcart},
	{path:'/home/newlist',component:newlist},
	{path:'/home/newinfo/:id',component:newinfo}
	
	],
	linkActiveClass:'mui-active'
})

export default router
